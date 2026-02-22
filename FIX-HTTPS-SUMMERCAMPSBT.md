# Fix "Enforce HTTPS unavailable" for www.summercampsbt.online

GitHub can’t issue an HTTPS certificate yet. Try these in order.

---

## 1. Wait (most common fix)

GitHub uses Let’s Encrypt to issue certificates. After DNS is correct, it can take **up to 24 hours** for the certificate to be created. If the domain just went live, wait a few hours and check again.

---

## 2. Confirm DNS in Hostinger

For **www.summercampsbt.online** the DNS must be:

- **CNAME**  
  - **Name:** `www`  
  - **Target / Content:** exactly **`amolanil1234.github.io`**  
  - No `https://`, no trailing slash, no your domain name here.

- **No other CNAME** for `www` (only one, pointing to GitHub).

- For the **root** (@): only the **ALIAS** @ → **amolanil1234.github.io**. No A record for @ pointing to Hostinger (e.g. 84.32.84.32).

If anything is different, fix it in Hostinger DNS, save, then wait 15–30 minutes.

---

## 3. Re-add the custom domain on GitHub

Sometimes re-adding the domain forces GitHub to request a new certificate:

1. **Settings → Pages → Custom domain**
2. Clear the box (remove **www.summercampsbt.online**).
3. Click **Save**.
4. Wait **1–2 minutes**.
5. Type **www.summercampsbt.online** again and click **Save**.
6. Wait up to an hour and check **Enforce HTTPS** again.

---

## 4. Optional: CAA record (if Hostinger allows it)

Some hosts need a CAA record so Let’s Encrypt is allowed to issue a certificate. In Hostinger DNS, if you have a “CAA” type:

- **Name:** `@` (or leave default)
- **Value / Content:** `0 issue "letsencrypt.org"`

Save and wait. This is optional; try steps 1–3 first.

---

## 5. Check in a few hours

If everything above is correct, “Enforce HTTPS” often becomes available within **2–24 hours**. Keep the custom domain set to **www.summercampsbt.online** and check **Settings → Pages** again later.

---

## If it still doesn’t work

- Confirm the site loads at **http://www.summercampsbt.online** (even without HTTPS).
- Make sure you’re not using Cloudflare or another proxy in front of the domain (Hostinger DNS only).
- See GitHub’s guide: [Troubleshooting custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/troubleshooting-custom-domains-and-github-pages).
