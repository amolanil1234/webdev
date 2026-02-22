# Fix 404: "There isn't a GitHub Pages site here"

Your workflow is correct. The 404 usually means **GitHub Pages is not set to use GitHub Actions** as the source. Do this:

---

## Step 1: Set the Pages source to GitHub Actions

1. Open your repo: **https://github.com/amolanil1234/webdev**
2. Click **Settings** (tab at the top of the repo).
3. In the left sidebar, click **Pages** (under "Code and automation").
4. Under **"Build and deployment"** you see **Source**.
5. Click the **Source** dropdown. You may see:
   - **None**
   - **Deploy from a branch**
   - Or a list like "Next.js", "NuxtJS", "Jekyll", "Static HTML", etc.
6. Select **"GitHub Actions"**.
   - It might appear as the first option or under a section that says "Use a suggested workflow, browse all workflows, or create your own."  
   - You are **not** choosing a specific workflow (not Next.js, not Static HTML). You are choosing the **source type**: **GitHub Actions**.

After this, the page may say something like: *"Workflow details will appear here once your site has been deployed."*

---

## Step 2: Run the deployment workflow

1. Go to the **Actions** tab: **https://github.com/amolanil1234/webdev/actions**
2. Click **"Deploy to GitHub Pages"** in the left sidebar.
3. If you see **"Run workflow"** on the right, click it, then **"Run workflow"** again.
4. Wait for the run to finish (green checkmark, about 1–2 minutes).

If the run **fails** (red X), click the failed run and open the **"deploy"** job to see the error message.

---

## Step 3: Open your site

After a successful run, wait about 1 minute, then open:

**https://amolanil1234.github.io/webdev/**

Use that exact URL (including `/webdev/` at the end).  
If you open only `https://amolanil1234.github.io` you will get 404, because this repo is a **project** site, not your user site.

---

## If it still shows 404

- Wait 2–3 minutes after the workflow succeeds; sometimes Pages takes a moment to update.
- Confirm in **Settings → Pages** that it says your site is published and shows the URL.
- Confirm the last workflow run on the **Actions** tab completed successfully (green check).
