# Use summercampsbt.com for your site

Your registered domain **summercampsbt.com** can point to this GitHub Pages site. After DNS is set, the site will load at **https://summercampsbt.com**.

---

## 1. Add the domain in GitHub

1. Open **https://github.com/amolanil1234/webdev** → **Settings** → **Pages**
2. Under **Custom domain**, enter: **summercampsbt.com**
3. Click **Save**
4. When it appears, turn on **Enforce HTTPS**

---

## 2. Point the domain to GitHub (DNS)

Where you manage **summercampsbt.com** (registrar or DNS), add these records.

### Option A: Use the root domain (summercampsbt.com)

Add **4 A records**:

| Type | Name/Host | Value |
|------|-----------|--------|
| A | `@` | 185.199.108.153 |
| A | `@` | 185.199.109.153 |
| A | `@` | 185.199.110.153 |
| A | `@` | 185.199.111.153 |

### Option B: Use www (www.summercampsbt.com)

Add **1 CNAME record**:

| Type | Name/Host | Value |
|------|-----------|--------|
| CNAME | `www` | amolanil1234.github.io |

---

## 3. Wait for DNS

DNS can take from a few minutes up to 24–48 hours. When GitHub shows the domain as verified and **Enforce HTTPS** is on, open **https://summercampsbt.com** (or https://www.summercampsbt.com if you used www).

---

The build is already set to `base: '/'` for this domain, so no code changes are needed.
