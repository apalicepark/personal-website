# personal-website

My personal site, live at https://apalicepark.github.io/personal-website/

I'm Alice Park, a data science student at UC San Diego working on product and software. This site holds my experience and projects.

## How it's built

It's plain HTML, CSS, and a little JavaScript, with no framework or build step. GitHub Pages serves it straight from the `main` branch.

The design takes after Swiss-style print resumes: one centered column, black Inter on white, and small all-caps section labels with the content beside them.

## Files

- `index.html` has all the content.
- `style.css` has the layout and styling. Colors, fonts, and page width are set at the top.
- `script.js` fades sections in as you scroll and runs the project filters.

## Running it locally

```bash
git clone https://github.com/apalicepark/personal-website.git
cd personal-website
python3 -m http.server
```

Then open http://localhost:8000.
