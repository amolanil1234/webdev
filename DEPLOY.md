# How to host this website on the internet

Your site is a static React app. After building, you get a `dist` folder that any static host can serve. Here are **free** options, from easiest to more manual.

---

## Option 1: Vercel (recommended — very easy)

1. **Create an account** at [vercel.com](https://vercel.com) (use GitHub or email).

2. **Install Vercel CLI** (one time):
   ```bash
   npm install -g vercel
   ```

3. **From your project folder**, run:
   ```bash
   cd c:\SB\webApp\webdev
   vercel
   ```
   - Log in if asked.
   - Accept the defaults (project name, build settings).  
   - Vercel will detect Vite and use `npm run build` and output `dist`.

4. **Done.** You’ll get a URL like `https://summer-art-camp-xxx.vercel.app`.  
   - To update the site: run `vercel` again, or connect a Git repo in the Vercel dashboard for automatic deploys on every push.

**Or without CLI:** Push your code to **GitHub**, then go to [vercel.com/new](https://vercel.com/new), import the repo, and click Deploy. No config needed for Vite.

---

## Option 2: Netlify

1. **Create an account** at [netlify.com](https://netlify.com).

2. **Build the site locally:**
   ```bash
   cd c:\SB\webApp\webdev
   npm run build
   ```

3. **Drag and drop:** Go to [app.netlify.com](https://app.netlify.com) → **Sites** → **Add new site** → **Deploy manually**. Drag the **`dist`** folder onto the page. Netlify will give you a URL like `https://random-name.netlify.app`.

4. **Optional:** Connect a GitHub repo in Netlify so every push auto-deploys. Build command: `npm run build`, publish directory: `dist`.

---

## Option 3: GitHub Pages

1. **Push your project** to a GitHub repository.

2. **In your repo:** **Settings** → **Pages** → under “Build and deployment” choose **GitHub Actions**.

3. **Create the workflow file:** In the repo create `.github/workflows/deploy.yml` with:
   ```yaml
   name: Deploy to GitHub Pages
   on:
     push:
       branches: [main]
   permissions:
     contents: read
     pages: write
     id-token: write
   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: actions/setup-node@v4
           with:
             node-version: '20'
             cache: 'npm'
         - run: npm ci
         - run: npm run build
         - uses: actions/upload-pages-artifact@v3
           with:
             path: dist
     deploy:
       needs: build
       runs-on: ubuntu-latest
       environment:
         name: github-pages
         url: ${{ steps.deploy.outputs.page_url }}
       steps:
         - id: deploy
           uses: actions/deploy-pages@v4
   ```

4. **Set base for GitHub Pages:** If your site will be at `https://username.github.io/repo-name/`, add this to `vite.config.js`:
   ```js
   export default defineConfig({
     plugins: [react()],
     base: '/repo-name/',   // replace repo-name with your repo name
   })
   ```

5. After the first push, the site will be at `https://<username>.github.io/<repo-name>/`.

---

## Option 4: Cloudflare Pages

1. Go to [pages.cloudflare.com](https://pages.cloudflare.com) and sign in.

2. **Create a project** → **Connect to Git** (or **Direct Upload**).
   - If using Git: connect repo, build command: `npm run build`, build output: `dist`.
   - If using Direct Upload: run `npm run build` locally and upload the `dist` folder.

3. You’ll get a URL like `https://your-project.pages.dev`.

---

## Checklist before you go live

- [ ] Update phone number and WhatsApp link in `src/App.jsx`.
- [ ] Update or remove social media links.
- [ ] Test the site with `npm run build` then `npm run preview` locally.
- [ ] If you add a contact form backend later (e.g. Formspree, Netlify Forms), connect it.

---

## Quick comparison

| Service       | Free tier | Easiest for          | Custom domain |
|---------------|-----------|----------------------|----------------|
| **Vercel**    | Yes       | React/Vite, Git      | Yes           |
| **Netlify**   | Yes       | Drag-and-drop or Git | Yes           |
| **GitHub Pages** | Yes    | GitHub users         | Yes           |
| **Cloudflare Pages** | Yes  | Speed, global CDN    | Yes           |

For this project, **Vercel** or **Netlify** are the fastest ways to get a live URL; use **GitHub Pages** if you already use GitHub and want everything in one place.
