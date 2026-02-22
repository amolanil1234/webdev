# Host this site on GitHub Pages

Follow these steps to put your Summer Art Camp site online using GitHub Pages.

---

## 1. Create a repository on GitHub

1. Go to [github.com](https://github.com) and sign in.
2. Click **+** → **New repository**.
3. **Repository name:** e.g. `webdev` or `summer-art-camp` (remember this — you’ll use it in step 4).
4. Choose **Public**, leave “Add a README” unchecked if the folder already has files.
5. Click **Create repository**.

---

## 2. Fix the base path (important)

Your site URL will be: `https://<your-username>.github.io/<repo-name>/`

Open **`vite.config.js`** and set `base` to match your **repo name**:

```js
base: '/webdev/',   // change 'webdev' to your actual repo name (e.g. 'summer-art-camp')
```

If you named the repo `summer-art-camp`, use:

```js
base: '/summer-art-camp/',
```

Save the file.

---

## 3. Push your code to GitHub

In a terminal, from your project folder:

```powershell
cd c:\SB\webApp\webdev

git init
git add .
git commit -m "Initial commit - Summer Art Camp website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username and `YOUR-REPO-NAME` with the repo name you chose (e.g. `webdev` or `summer-art-camp`).

---

## 4. Turn on GitHub Pages

1. On GitHub, open your repository.
2. Go to **Settings** → **Pages** (left sidebar).
3. Under **Build and deployment**:
   - **Source:** select **GitHub Actions**.
4. Do not choose “Deploy from a branch” — we use the workflow instead.

---

## 5. Run the deploy

- The **Deploy to GitHub Pages** workflow runs automatically on every push to `main`.
- To run it once: go to the **Actions** tab → select **Deploy to GitHub Pages** → **Run workflow** → **Run workflow**.

Wait for the workflow to finish (green checkmark).

---

## 6. Open your site

1. Go to **Settings** → **Pages** again.
2. At the top you’ll see: **Your site is live at `https://<username>.github.io/<repo-name>/`**
3. Click that link to view your site.

---

## Summary

| Step | What to do |
|------|------------|
| 1 | Create a new **public** repo on GitHub (e.g. `webdev` or `summer-art-camp`) |
| 2 | In `vite.config.js`, set `base: '/your-repo-name/'` |
| 3 | Push the project: `git init`, `git add .`, `git commit`, `git remote add origin ...`, `git push` |
| 4 | In repo **Settings** → **Pages** → Source: **GitHub Actions** |
| 5 | Wait for the Actions workflow to complete (or run it from the Actions tab) |
| 6 | Open the URL shown under **Settings** → **Pages** |

After that, every time you push to `main`, the site will redeploy automatically.
