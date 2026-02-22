# Fix "DNS check unsuccessful" for summercampsbt.com

GitHub couldn’t read your DNS. Fix it by adding the right records where **summercampsbt.com** is managed (registrar or DNS provider).

---

## Option 1: Use www first (easiest)

Use **www.summercampsbt.com** so you only need **one CNAME** record.

### In GitHub
1. **Settings → Pages → Custom domain**
2. Enter: **www.summercampsbt.com** (with `www`)
3. Save

### In your domain’s DNS
Add **one CNAME record**:

| Type  | Name / Host | Value / Target / Points to |
|-------|-------------|----------------------------|
| CNAME | `www`       | `amolanil1234.github.io`    |

- **Name:** `www` (or `www.summercampsbt.com` if the panel adds the domain automatically)
- **Value:** `amolanil1234.github.io` — no `https://`, no trailing slash, no path
- Remove any other CNAME for `www` if it exists

Save, wait 5–30 minutes, then click **Save** again on GitHub’s Custom domain if it asked you to re-check. Enable **Enforce HTTPS** when it appears.

Your site will be at **https://www.summercampsbt.com**.

---

## Option 2: Use the root domain (summercampsbt.com)

For **summercampsbt.com** (no www) you must use **A records** (or ALIAS/ANAME if your provider has it). You **cannot** use a CNAME for the root on most DNS.

### In GitHub
- Custom domain: **summercampsbt.com** (no www)

### In your domain’s DNS
Add **four A records** (one per IP):

| Type | Name / Host | Value / Points to |
|------|-------------|-------------------|
| A    | `@`         | 185.199.108.153   |
| A    | `@`         | 185.199.109.153   |
| A    | `@`         | 185.199.110.153   |
| A    | `@`         | 185.199.111.153   |

- **Name:** Often `@` or “root” or leave blank — it must mean “summercampsbt.com” (the apex), not a subdomain.
- **Value:** exactly these four IPs (one record per IP).
- Delete any old A records for `@` that point somewhere else.

Some panels show “Host” instead of “Name”: use `@` or leave blank as the provider requires.

### If your provider has ALIAS or ANAME
- One record: Name `@`, Target `amolanil1234.github.io` (same idea as CNAME but for root).

---

## Checklist

- [ ] You’re editing DNS where **summercampsbt.com** is registered (e.g. Namecheap, GoDaddy, Google Domains, Cloudflare).
- [ ] For **www**: one CNAME, name `www`, value `amolanil1234.github.io`.
- [ ] For **root**: four A records, name `@`, values the four IPs above (no typos).
- [ ] No CNAME on the root (summercampsbt.com) — only A (or ALIAS/ANAME).
- [ ] Waited 10–30 minutes (or up to 24–48 hours) for DNS to propagate.
- [ ] In GitHub, clicked **Save** again on Custom domain after DNS was updated.

---

## Where to edit DNS

- **Namecheap:** Domain List → Manage → Advanced DNS
- **GoDaddy:** My Products → DNS → Manage Zones
- **Google Domains:** Domain → DNS
- **Cloudflare:** DNS → Records

If you tell me where summercampsbt.com is registered (e.g. Namecheap, GoDaddy), I can give you exact labels and clicks for that panel.
