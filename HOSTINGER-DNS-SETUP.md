# Hostinger: Point summercampsbt.com to GitHub Pages

Do this in **hPanel** at https://hpanel.hostinger.com for the domain **summercampsbt.com**.

---

## Step 1: Open DNS in Hostinger

1. Log in at **https://hpanel.hostinger.com**
2. Go to **Domains** → click **summercampsbt.com**
3. Open **DNS / DNS Zone** (or **Manage DNS** / **DNS Zone Editor**)

You should see a list of existing records (A, CNAME, MX, etc.).

---

## Option A: Use www.summercampsbt.com (simplest)

### In GitHub first
- **Settings → Pages → Custom domain** → enter **www.summercampsbt.com** → **Save**

### In Hostinger DNS

1. **Add a CNAME record**
   - **Type:** CNAME  
   - **Name / Host:** `www` (only the word www, no dot, no domain name)  
   - **Target / Points to:** `amolanil1234.github.io`  
   - **TTL:** leave default (e.g. 14400)  
   - Save

2. If there is **already a CNAME** for `www` pointing to something else (e.g. Hostinger), **delete it** or change its Target to `amolanil1234.github.io`.

3. Wait **10–30 minutes**, then in GitHub click **Save** again on the custom domain. When the check passes, enable **Enforce HTTPS**.

Your site will be at **https://www.summercampsbt.com**.

---

## Option B: Use summercampsbt.com (no www)

### In GitHub
- **Settings → Pages → Custom domain** → enter **summercampsbt.com** → **Save**

### In Hostinger DNS

1. **Disable Hostinger CDN** for this domain if it’s on (CDN can block the A records for the root). Check domain or hosting settings and turn CDN off.

2. **Add 4 A records** (one per IP). For each record:
   - **Type:** A  
   - **Name / Host:** `@` (this means the root domain summercampsbt.com)  
   - **Points to / Value:** use **one** of these per record:
     - 185.199.108.153  
     - 185.199.109.153  
     - 185.199.110.153  
     - 185.199.111.153  
   - **TTL:** default (e.g. 14400)  
   - Save

   So you will have **four separate A records**, all with Name `@`, each with a different IP.

3. **Remove** any existing **A records** for `@` that point to Hostinger IPs (e.g. 64.90.x.x or similar), or GitHub’s check may fail.

4. Wait **10–30 minutes** (up to 24–48 hours). In GitHub, click **Save** again on the custom domain. When it says DNS is correct, enable **Enforce HTTPS**.

Your site will be at **https://summercampsbt.com**.

---

## Quick reference

| Goal                    | Type  | Name | Value / Target           |
|-------------------------|-------|------|---------------------------|
| www.summercampsbt.com   | CNAME | `www`| amolanil1234.github.io   |
| summercampsbt.com (root)| A     | `@`  | 185.199.108.153          |
| summercampsbt.com (root)| A     | `@`  | 185.199.109.153          |
| summercampsbt.com (root)| A     | `@`  | 185.199.110.153          |
| summercampsbt.com (root)| A     | `@`  | 185.199.111.153          |

---

## If GitHub still says "DNS check unsuccessful"

- Wait longer (up to 24–48 hours).
- Double-check: **Name** is exactly `@` (root) or `www` (subdomain); **Value** has no `https://`, no trailing slash.
- Make sure you’re editing DNS for **summercampsbt.com** in Hostinger, not another domain.
- If the domain uses **external nameservers** (e.g. Cloudflare), add these records there instead of in Hostinger.
