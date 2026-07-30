# Customize Your Website

You can make this template your own without changing the React components. Almost all visible text, links, projects, and section settings are in the JSON files inside `src/data`.

## 1. Run the Website

Install [Node.js](https://nodejs.org/) (use the current LTS version) and [VS Code](https://code.visualstudio.com/), then open this project in VS Code.

Open **Terminal > New Terminal** and run:

```bash
corepack enable
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). Keep the terminal running while you edit. The browser normally refreshes after every saved change.

## 2. Start with Your Basic Information

Open `src/data/site.json` and replace all sample values:

- `name`: your full name.
- `url`: the final address of your website. Keep `https://example.com` until you know it.
- `title`: the browser tab title and search result title.
- `description`: the summary used by search engines and social previews.

Then update these files:

| File                               | What it controls                                        |
| ---------------------------------- | ------------------------------------------------------- |
| `src/data/hero.json`               | Your name, short introduction, and the two main buttons |
| `src/data/about.json`              | The About heading and paragraph                         |
| `src/data/experience.json`         | Your jobs, education, or other experience               |
| `src/data/looking-for.json`        | What you are looking for and the CV button              |
| `src/data/projects.json`           | Your project cards, technologies, images, and links     |
| `src/data/contact.json`            | Your email and social/contact links                     |
| `src/data/nav.json`                | The name, links, and social icons in the top navigation |
| `src/data/footer.json`             | The name and text at the bottom of the page             |
| `src/data/sectionsVisibility.json` | Which sections are shown                                |

A quick way to find anything you missed is to use **Edit > Find in Files** in VS Code and search for `John Doe`, `example.com`, `Company A`, and `Project Alpha`.

## 3. Edit Lists Safely

Experience entries, projects, tags, and links are lists. Items in a list are separated by commas. To add another item, copy one complete item, paste it after the previous one, and add a comma between them.

For example:

```json
"items": [
  "First item",
  "Second item"
]
```

JSON has a few strict rules:

- Keep property names and text inside double quotes.
- Use `true` or `false` without quotes for switches.
- Add commas between items, but not after the last item.
- Do not add comments to JSON files.
- Keep the surrounding `{}`, `[]`, and quotes in place.

If the page stops loading after an edit, the most likely cause is a missing comma, quote, or bracket. VS Code underlines the location of most JSON errors.

## 4. Choose Which Sections Appear

In `src/data/sectionsVisibility.json`, change a value to `false` to hide that section or `true` to show it:

```json
"experience": false
```

The navigation does not update automatically. If you hide a section, also remove its matching item from the `links` list in `src/data/nav.json`.

The available section links are:

- `#hero`
- `#about`
- `#experience`
- `#looking-for`
- `#projects`
- `#contact`

## 5. Add Your Experience

Each item in `src/data/experience.json` has:

- `title`: your role, qualification, or activity.
- `company`: the company, school, or organization.
- `period`: a readable date range, such as `Jan 2024 - Present`.
- `subtitle`: a one-line summary.
- `description`: the work you did and the result it produced.

You can delete sample entries or copy an entire entry to add more.

## 6. Add Projects

Each project in `src/data/projects.json` has:

- `id`: a unique value using lowercase letters and hyphens, such as `weather-app`.
- `name`: the project name.
- `brief`: a short line shown before the card is opened.
- `description`: the longer explanation shown inside the open card.
- `tags`: a list of skills or technologies.
- `links`: buttons for the live website, source code, or case study.

For the project picture, use one of these options:

1. Keep `icon` and set it to `grid`, `layers`, or `sun`.
2. Replace `icon` with an image, for example `"image": "/images/weather-app.png"`.

For a local image, create an `images` folder inside `public`, put the image there, and start its value with `/images/`. Use a square image for the best result.

Set any unfinished project link to `"href": "#"`; placeholder links are not displayed.

## 7. Add Your CV and Contact Links

To add a CV:

1. Put the file at `public/cv.pdf`.
2. Open `src/data/looking-for.json`.
3. Set `cvButton.show` to `true`.
4. Set `cvButton.href` to `/cv.pdf`.

Use complete web addresses beginning with `https://` for social profiles. For email, use this format:

```json
"href": "mailto:you@example.com"
```

In project links, contact links, and the CV button, an `href` of `#` acts as a hidden placeholder.

The built-in social icons recognize the labels `Email`, `Twitter`, `GitHub`, and `LinkedIn`. The top navigation has built-in icons for `GitHub` and `LinkedIn`.

## 8. Check Your Changes

Stop the development server with **Ctrl+C**, then run:

```bash
pnpm format
pnpm lint
pnpm build
```

Before publishing, check the website on both a computer and a phone-sized browser window. Test every link and remove any remaining sample content.

## 9. Set the Published Website Address

When you deploy the website, set the environment variable `NEXT_PUBLIC_SITE_URL` to the full public address, without a trailing slash:

```text
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

This value is used for search metadata, social previews, `robots.txt`, and `sitemap.xml`. If the environment variable is not set, the website uses the `url` from `src/data/site.json`.

## Need to Change the Design?

The files in `src/components` control the page structure, and `src/app/globals.css` controls most colors and styles. These files contain React, TypeScript, and CSS, so make a copy of the project before changing them if you are new to development.
