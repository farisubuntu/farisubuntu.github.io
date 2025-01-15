[[toc]]

## Converting to `html`

To convert md to html: (http://demo.showdownjs.com/)
Easy Markdown to github pages (https://nicolas-van.github.io/easy-markdown-to-github-pages/)

## Site contents and information for custom templates
If you want to do things with a custom template HTML you need the information of the site. This will allow you to do things in the front-end UI, like adding search to the static site with lunrjs or other things like adding buttons for the next/previous article.

## Generators:

- Random Email Addresses: (https://randommer.io/random-email-address)

- to kill php server/s: `$ killall -9 php`

## pandoc

For all pages and new pages put a title as

```markdown
---
title: Test
...
```

> I run `pandoc` in every sub directory alone:
```bash
$ #HTML with table of contents, CSS, and custom footer:
$ pandoc -s --toc -c pandoc.css -A footer.html MANUAL.txt -o example3.html`
```

**other usages:**

From the web:
`$ pandoc -f html -t markdown https://www.fsf.org`



**Extension: `yaml_metadata_block`**:

[from pandoc.org] (https://pandoc.org/demo/example33/8.10-metadata-blocks.html#extension-yaml_metadata_block)

A YAML metadata block is a valid YAML object, delimited by a line of three hyphens (---) at the top and a line of three hyphens (---) or three dots (...) at the bottom. The initial line --- must not be followed by a blank line. A YAML metadata block may occur anywhere in the document, but if it is not at the beginning, it must be preceded by a blank line.

Note that, because of the way pandoc concatenates input files when several are provided, you may also keep the metadata in a separate YAML file and pass it to pandoc as an argument, along with your Markdown files:

`$ pandoc chap1.md chap2.md chap3.md metadata.yaml -s -o book.html`

Just be sure that the YAML file begins with --- and ends with --- or .... Alternatively, you can use the --metadata-file option. Using that approach however, you cannot reference content (like footnotes) from the main markdown input document.

Metadata will be taken from the fields of the YAML object and added to any existing document metadata. Metadata can contain lists and objects (nested arbitrarily), but all string scalars will be interpreted as Markdown. Fields with names ending in an underscore will be ignored by pandoc. (They may be given a role by external processors.) Field names must not be interpretable as YAML numbers or boolean values (so, for example, yes, True, and 15 cannot be used as field names). For example:

```yaml
---
title: The document title
author:
- name: Author One
  affiliation: University of Somewhere
- name: Author Two
  affiliation: University of Nowhere
...
```

To use the structured authors in the example above, you would need a custom template:

```
$for(author)$
$if(author.name)$
$author.name$$if(author.affiliation)$ ($author.affiliation$)$endif$
$else$
$author$
$endif$
$endfor$
```

[Quick ref: quickref.dev](https://quickref.me/pandoc.html)
[Pandoc Examples:](https://pandoc.org/demos.html)