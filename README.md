# Table of Contents for Inkdrop

A plugin for creating table of contents using [remark-toc](https://github.com/remarkjs/remark-toc).
It also works exported HTML files.

![example](https://raw.githubusercontent.com/inkdropapp/inkdrop-toc/master/docs/example.png)

# Install

Check out [the docs](https://docs.inkdrop.app/manual/extend-inkdrop-with-plugins) on how to install plugins.

### Command-line

```
ipm install toc
```

# Usage

Simply add `Table of Contents` to your Markdown.

From [remark-toc](https://github.com/remarkjs/remark-toc):

> - Looks for the first heading containing 'Table of Contents', 'toc', or 'table-of-contents' (case insensitive, supports alt/title attributes for links and images too)
> - Removes all following contents until an equal or higher heading is found
> - Inserts a list representation of the hierarchy of following headings
> - Adds links to following headings, using the same slugs as GitHub
