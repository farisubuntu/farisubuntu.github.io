Official Site: https://pandoc.org

## Using pandoc:

-   If no `input-files` are specified, input is read from stdin. Output goes to stdout by default:

```
pandoc -o output.html input.txt #use -o option for output to file.
```

> Example:

-   **input.txt file**:

```
# H1 title
## h2 title

- item 1
 - item 1.1
-item 1

`var a=Math.floor(33.33);`
```

-   if:

```
$ pandoc -o output.html input.txt
$ cat output.html
```

output.html file will contains:

```
<h1 id="h1-title">H1 title</h1>
<h2 id="h2-title">h2 title</h2>
<ul>
 <li>item 1</li>
 <li>item 1.1 -item 1</li>
</ul>
<div class="sourceCode" id="cb1">
 <pre class="sourceCode js"><code class="sourceCode javascript"><a class="sourceLine" id="cb1-1" title="1"><span class="kw">var</span> a<span class="op">=</span><span class="va">Math</span>.<span class="at">floor</span>(<span class="fl">33.33</span>)<span class="op">;</span></a></code></pre>
</div>
```

-   By default, pandoc produces a document fragment(small pieces of code) not a complete doucment:

```
# to produce a standalone document e.g. valid HTML file with <head> and <body>
$ pandoc -s -o output.html input.txt
```

-   If multiple input files are given, pandoc will concatenate them all (with blank lines between them) before parsing. (Use –file-scope to parse files individually.).

## Explicity specify the formats:

-   use `-f/--from` and ‘-t/–to’

```
# convert hello.txt from Markdown to LaTeX, you could type:
$ pandoc -f markdown -t latex hello.txt
# To convert hello.html from HTML to Markdown:
$ pandoc -f html -t markdown hello.html
```

## Character encoding:

-   Pandoc uses the UTF-8 character encoding for both input and output.
-   If your local character encoding is not UTF-8, you should pipe input and output through iconv:

```
iconv -t utf-8 input.txt | pandoc | iconv -f utf-8
```

-   To produce a `PDF` : `pandoc test.txt -o test.pdf`

By default, pandoc will use `LaTeX` to create the `PDF`, which requires that a `LaTeX` engine be installed (see `--pdf-engine` below). Alternatively, `pandoc` can use `ConTeXt, roff ms, or HTML` as an intermediate format.

To do this, specify an output file with a `.pdf` extension, as before, but add the `--pdf-engine` option or `-t` context, `-t html`, or `-t ms` to the command line.

The tool used to generate the PDF from the intermediate format may be specified using `--pdf-engine`.

----------

## Input data from the `Web`:

-   Instead of an input file, an absolute URI may be given. In this case pandoc will fetch the content using HTTP:

`pandoc -f html -t markdown https://www.fsf.org`

-   It is possible to supply a custom User-Agent string or other header when requesting a doc- ument from a URL: pandoc -f html -t markdown –request-header User-Agent:“Mozilla/5.0” https://www.fsf.org

### Producing slide shows with pandoc:

To produce an HTML + JavaScript slide presentation that can be viewed via a web browser. There are five ways to do this, using S5, DZSlides, Slidy, Slideous, or reveal.js. You can also produce a PDF slide show using LaTeX beamer, or slides shows in Microsoft PowerPoint format.

**Here’s the Markdown source for a simple slide show, habits.txt:**

```
% Habits
% John Doe
% March 22, 2005
# In the morning
## Getting up
- Turn off alarm
- Get out of bed
## Breakfast
- Eat eggs
- Drink coffee
# In the evening
## Dinner
- Eat spaghetti
- Drink wine
------------------
![picture of spaghetti](images/spaghetti.jpg)
## Going to sleep
- Get in bed
- Count sheep

```

**To produce an HTML/JavaScript slide show, simply type**

`pandoc -t FORMAT -s habits.txt -o habits.html`