import fsp from "fs/promises";
import path from "path";

const extensions = {
  ".md": {
    regex: (tag: string) =>
      new RegExp(`(?<=<!-- <${tag}> -->\n)(.*)(?=\n<!-- <\/${tag}> -->)`, "s"),
  },
  ".html": {
    regex: (tag: string) =>
      new RegExp(`(?<=<!-- <${tag}> -->\n)(.*)(?=\n<!-- <\/${tag}> -->)`, "s"),
  },
};

function assertsSupportedExtension(
  ext: string
): asserts ext is keyof typeof extensions {
  const supportedExts = new Set(Object.keys(extensions));
  if (!supportedExts.has(ext)) {
    throw Error(
      `[replace-tag] file extension "${ext}" is not supported (${[...supportedExts].join(", ")})`
    );
  }
}

export async function replaceTag(
  file: string | URL,
  replacerMap: { [tag: string]: string | (() => string) },
  asExtension?: keyof typeof extensions
) {
  const fileExt =
    asExtension ?? path.extname(file instanceof URL ? file.pathname : file);
  assertsSupportedExtension(fileExt);

  let fileContent = await fsp.readFile(file, "utf8");

  for (const [tag, content] of Object.entries(replacerMap)) {
    const { regex } = extensions[fileExt];
    fileContent = fileContent.replace(
      regex(tag),
      typeof content === "function" ? content() : content
    );
  }

  await fsp.writeFile(file, fileContent, "utf8");
}
