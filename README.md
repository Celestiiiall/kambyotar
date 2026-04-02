# BIT203 Study Companion

This repository contains a static study website that rewrites BIT203 Units 1 to 5 in simpler language for a non-IT learner, while keeping the core explanations and practice aligned with the actual BIT203 exam content.

The content structure was built from these lecture decks:

- `/Users/celestial/Desktop/BIT203_2_Material_Unit 1.pptx`
- `/Users/celestial/Desktop/BIT203_2_Material_Unit 2.pptx`
- `/Users/celestial/Desktop/BIT203_2_Material_Unit 3.pptx`
- `/Users/celestial/Desktop/BIT203_2_Material_Unit 4.pptx`
- `/Users/celestial/Desktop/BIT203_2_Material_Unit 5.pptx`

## What the site includes

- Plain-English explanations for each unit
- An optional radiology lens for users who want a familiar analogy
- Exam-oriented wording for revision
- Optional practice questions with browser-saved progress
- A glossary with course meanings and optional radiology translations
- A study checklist for final review

## Run it

Open `/Users/celestial/Desktop/GITHUB/kambyotar/index.html` in a browser.

If you prefer a local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish to GitHub Pages

This repo includes a GitHub Actions workflow for static deployment.

1. Push this folder to a GitHub repository named `kambyotar`.
2. In the repository settings, ensure `Pages` uses `GitHub Actions`.

Your Pages URL will be:

`https://Celestiiiall.github.io/kambyotar/`

## Files

- `/Users/celestial/Desktop/GITHUB/kambyotar/index.html`
- `/Users/celestial/Desktop/GITHUB/kambyotar/styles.css`
- `/Users/celestial/Desktop/GITHUB/kambyotar/content.js`
- `/Users/celestial/Desktop/GITHUB/kambyotar/app.js`
