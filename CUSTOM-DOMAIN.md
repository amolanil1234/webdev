# Use a custom domain (e.g. summercamp.com)

You can serve your site at a name like **summercamp.com** or **www.summercamp.com** instead of **amolanil1234.github.io/webdev**.

---

## 1. Get a domain (if you don’t have one)

Register a domain from any registrar, for example:

- [Namecheap](https://www.namecheap.com)
- [GoDaddy](https://www.godaddy.com)
- [Google Domains](https://domains.google)
- [Cloudflare](https://www.cloudflare.com/products/registrar/)

Examples: **summercamp.com**, **summer-art-camp.com**, **myartcamp.com**

---

## 2. Add the custom domain in GitHub

1. Open your repo: **https://github.com/amolanil1234/webdev**
2. Go to **Settings** → **Pages**
3. Under **Custom domain**, type your domain:
   - **Apex (root):** `summercamp.com`
   - **Or with www:** `www.summercamp.com`
4. Click **Save**
5. (Recommended) Enable **Enforce HTTPS** when it becomes available

GitHub may show a DNS check warning until you finish step 3.

---

## 3. Point your domain to GitHub (DNS)

Log in to the place where your domain is managed (registrar or DNS provider) and add these records.

### Option A: Use **www** (e.g. www.summercamp.com)

Add one **CNAME** record:

| Type  | Name/Host | Value / Points to        |
|-------|------------|---------------------------|
| CNAME | `www`      | `amolanil1234.github.io` |

(Some providers use “Host” or “Name”; use `www` or `www.summercamp.com` as they require.)

### Option B: Use **root domain** (e.g. summercamp.com)

Add **A** records so the root domain points to GitHub:

| Type | Name/Host | Value          |
|------|------------|----------------|
| A    | `@`        | 185.199.108.153 |
| A    | `@`        | 185.199.109.153 |
| A    | `@`        | 185.199.110.153 |
| A    | `@`        | 185.199.111.153 |

(Some providers use `@` for “root”; others leave Name blank.)

### Option C: Both www and root

- Add the four **A** records above for the root.
- Add a **CNAME** for `www` → `amolanil1234.github.io`.

Then in GitHub (Settings → Pages → Custom domain) you can choose which one is primary (e.g. **summercamp.com** and redirect www to it, or the opposite).

---

## 4. Wait for DNS and HTTPS

- DNS can take from a few minutes up to 24–48 hours.
- After the domain is verified, enable **Enforce HTTPS** in **Settings** → **Pages** so the site loads over **https://**.

---

## Summary

| Step | Where        | Action |
|------|--------------|--------|
| 1    | Registrar    | Register a domain (e.g. summercamp.com) |
| 2    | GitHub       | Settings → Pages → Custom domain → enter domain → Save |
| 3    | Registrar/DNS| Add CNAME (for www) or A records (for root) as above |
| 4    | GitHub       | After DNS is green, turn on **Enforce HTTPS** |

Your site will then be available at your custom domain (e.g. **https://summercamp.com** or **https://www.summercamp.com**).

---

## 5. Important: use base `/` when using a custom domain

This project is currently built with **base: '/webdev/'** so it works at **amolanil1234.github.io/webdev/**.

For the site to load correctly at your **custom domain** (e.g. summercamp.com), the app must be built with **base: '/'**. After you add the custom domain and DNS:

1. In **`vite.config.js`**, change:
   ```js
   base: '/webdev/',
   ```
   to:
   ```js
   base: '/',
   ```
2. Commit and push. The workflow will redeploy.
3. Visit your custom domain; assets will load correctly.

Once the custom domain is set in GitHub, **amolanil1234.github.io/webdev** will redirect to your custom domain, and the new build (with `base: '/'`) will work there.
