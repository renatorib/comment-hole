<h1 align="center">Comment Hole</h1>

<p align="center">
  <a href="https://npmjs.com/package/comment-hole">
    <img src="https://img.shields.io/npm/v/comment-hole.svg" alt="npm package">
  </a>
</p>

<p align="center">Replace file content within commented tag holes</p>

## Getting started

### `1`: Create a hole in your file with comment tags

`README.md`:

```md
# You cli!

## How to use:

<!-- <help> -->

<!-- </help> -->
```

### `2`: Run `replaceTag`

```js
// scripts/update-readme.ts
import { replaceTag } from "comment-hole";

replaceTag("README.md", {
  help: "Put anything generated here!",
});
```

```sh
tsx scripts/update-readme.js
```

### `3`: Done! File will be overwritten

```md
# You cli!

## How to use:

<!-- <help> -->

Put anything generated here!

<!-- </help> -->
```

Whenever you run `replaceTag` **ANY** content between `<!-- <tag> -->` and `<!-- </tag> -->` will be replaced.

## Supported Extensions

For now we only support `.md` and `.html` files through `<!-- <tag> --> ... <!-- </tag> -->` comments.  
PRs are welcome!
