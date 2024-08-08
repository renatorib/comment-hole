<h1 align="center">Comment Hole</h1>

<p align="center">
  <a href="https://npmjs.com/package/comment-hole">
    <img src="https://img.shields.io/npm/v/comment-hole.svg" alt="npm package">
  </a>
</p>

<p align="center">Replace file content within commented tag holes</p>

<br>
<br>
<br>

## Getting started

### `1` Create a hole in your file with comment tags

`README.md`:

```md
## Options

We support following options:

<!-- <options> -->

<!-- </options> -->
```

### `2` Run `replaceTag`

```js
// scripts/update-readme.js
import { replaceTag } from "comment-hole";

replaceTag("README.md", {
  options: "<<Put anything generated here!>>",
});
```

```sh
node scripts/update-readme.js
```

### `3` Done! File will be overwritten

```diff
## Options

We support following options:

<!-- <options> -->

+<<Put anything generated here!>>
+
<!-- </options> -->
```

> [!NOTE]
> Whenever you run `replaceTag` **ANY** content between `<!-- <tag> -->` and `<!-- </tag> -->` will be replaced.

## Supported Extensions

For now we only support `.md` and `.html`.  
PRs are welcome!
