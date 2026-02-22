# Fix Hostinger DNS for GitHub Pages

Your DNS shows **summercampsbt.online**. Do these two changes in Hostinger.

---

## 1. Delete the A record for @

You have:
- **ALIAS** @ → amolanil1234.github.io ✅ (correct for GitHub)
- **A** @ → 84.32.84.32 ❌ (Hostinger IP – conflicts with GitHub)

**Action:** Click **Delete** on the **A** record (@ → 84.32.84.32).  
Keep only the **ALIAS** @ → amolanil1234.github.io.

---

## 2. Fix the CNAME for www

You have:
- **CNAME** www → summercampsbt.online ❌ (points to your domain, not GitHub)

**Action:** Click **Edit** on that CNAME and change:
- **Content / Target** from `summercampsbt.online` to **`amolanil1234.github.io`**
- Save

---

## 3. In GitHub

- **Settings → Pages → Custom domain**
- Enter: **summercampsbt.online** (or **www.summercampsbt.online** if you prefer www)
- Click **Save**

Wait 5–15 minutes, then click **Save** again if GitHub still shows a DNS error. When the check passes, enable **Enforce HTTPS**.

---

## Result

- **ALIAS** @ → amolanil1234.github.io (only record for @)
- **CNAME** www → amolanil1234.github.io

No A record for @. Then GitHub’s DNS check should succeed.
