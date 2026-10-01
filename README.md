# Abdul-Jalil Fuseini | Portfolio

Personal portfolio built with React, Tailwind CSS and Framer Motion.

## Run locally

```bash
npm install
npm start
```

Open http://localhost:3000.

## Edit your content

Everything (name, bio, projects, certificates, experience, skills) lives in **`src/data/profile.js`**.
Anything left empty (`""` or `null`) is not shown.

| To add...                | Do this                                                                                   |
| ------------------------ | ----------------------------------------------------------------------------------------- |
| Your photo               | Save it as `public/profile.jpg`. Until then, your initials are shown.                     |
| Your CV                  | Save it as `public/cv.pdf`, then set `cv: "/cv.pdf"` in `profile.js`.                     |
| A live demo link         | Set `live: "https://..."` on the project in `profile.js`.                                 |
| A project screenshot     | Put the image in `public/projects/`, then set `image: "/projects/name.jpg"`.              |
| Quiz results             | Fill in `result`, `year` and `certificate` for each entry in `quizzes`.                   |
| A recommendation         | Add it to `testimonials` (with the person's permission). The section appears automatically. |

## Deploy to GitHub Pages

1. Push this project to your GitHub repository.
2. Run `npm run deploy`. This builds the site and publishes it to the `gh-pages` branch.
3. In the repo, go to **Settings > Pages** and choose the `gh-pages` branch as the source.
4. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

## Contact form

The form opens the visitor's email app with the message filled in (no server needed).
To receive messages directly instead, connect it to a service such as Formspree or EmailJS.
