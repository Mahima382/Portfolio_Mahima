# Zakia Sultana Mahima — Portfolio

A static, multi-page portfolio. No build step and no dependencies: open `index.html` in a browser.

## Structure

```
mahima-portfolio/
├── index.html            Home (hero, featured projects)
├── about.html            Education, interests, activities
├── projects.html         All projects with filters
├── skills.html           Interactive skills
├── certificates.html     Certificates
├── github.html           GitHub profile and repositories
├── contact.html          Contact details
├── css/
│   ├── tokens.css        Colours, fonts, spacing (edit the look here)
│   ├── base.css          Reset, typography, buttons, chips
│   ├── layout.css        Header, footer, hero
│   └── components.css    Cards, skills, certificates, contact
├── js/
│   ├── data.js           ALL content and links (edit this most)
│   ├── theme.js          Light/dark theme
│   ├── utils.js          DOM helpers
│   ├── layout.js         Shared header and footer
│   ├── hero.js           Typing text and waveform
│   ├── projects.js       Project cards and filter
│   ├── pages.js          About, skills, certificates, GitHub, contact
│   └── main.js           Entry point
└── assets/
    ├── img/photo.jpg
    ├── certificates/     Put certificate images here
    └── favicon.svg
```

## Common edits (all in `js/data.js`)

- **GitHub profile:** set `github: "https://github.com/your-username"`.
- **Project repository:** set `repo: "https://github.com/..."` on the project.
- **Certificate:** fill `issuer`, `year`, `url`, and optionally `image: "assets/certificates/file.jpg"`.
  Add another `{ ... }` entry to `certificates` for each new one.
- **New project:** copy an object in `projects`, change the fields.

## Publish on GitHub Pages

1. Create a repository and upload this folder's contents (so `index.html` is at the top level).
2. Settings → Pages → Deploy from branch → `main` / root.
3. Your site appears at `https://<username>.github.io/<repo>/`.
