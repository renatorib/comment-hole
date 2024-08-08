<h1 align="center">replace-tag</h1>

<p align="center">
  <a href="https://npmjs.com/package/replace-tag">
    <img src="https://img.shields.io/npm/v/replace-tag.svg" alt="npm package">
  </a>
</p>

<p align="center">Replace file content within commented tags</p>

## Getting started

### `1` Create a hole in your file

`README.md`:

```md
## How to use:

<!-- <help> -->

<!-- </help> -->
```

### `2` Run `replaceTag`

````js
// scripts/update-readme.ts
import { replaceTag } from "replace-tag";
import { command } from "../src/command.ts";

replaceTag("README.md", {
  help: "```\n" + command.helpInformation() + "\n```",
});
````

```sh
tsx scripts/update-readme.js
```

### `3` Done! File will be overwritten

Whenever you run `replaceTag` **ANY** content between `<!-- <tag> -->` and `<!-- </tag> -->` will be replaced.
