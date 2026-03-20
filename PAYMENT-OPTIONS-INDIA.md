# Indian payment options: 10+ sites, who charges what, and how to integrate

This document lists **payment options used by Indian commercial websites**, which ones **charge a fee vs free**, and **how to use them with your current static site** (no backend).

---

## Part 1: What 10+ Indian sites use

| # | Website / App | Type | Payment options / gateway |
|---|----------------|------|----------------------------|
| 1 | **Flipkart** | E‑commerce | Own UPI (@fkaxis with Axis Bank), cards (Visa, Mastercard, RuPay, Amex), net banking, wallets, COD |
| 2 | **Amazon India** | E‑commerce | Amazon Pay (UPI, Pay Later, Balance), cards, net banking, COD |
| 3 | **Meesho** | E‑commerce | Prepaid (cards/UPI/wallets) + Cash on Delivery |
| 4 | **Myntra** | E‑commerce | Cards, UPI, net banking, wallets (typical aggregator gateway) |
| 5 | **BigBasket** | E‑commerce | Cards, UPI, net banking, wallets, COD |
| 6 | **Swiggy** | Food delivery | In‑app UPI (YES Bank, Juspay), cards, wallets |
| 7 | **Zomato** | Food delivery | In‑app UPI, cards, Pay at Table, wallets |
| 8 | **BookMyShow** | Events/ticketing | RuPay partnership, cards, UPI, net banking |
| 9 | **Paytm** | Wallet + merchant | Paytm Payment Gateway (used by many small sites), UPI, cards |
| 10 | **Instamojo / Razorpay / Cashfree** | Gateway providers | Used by thousands of Indian startups, D2C, and small businesses for payment links and API |

**Takeaway:** Big platforms use their own or bank partnerships (UPI, RuPay, etc.); most other Indian commercial sites use **Razorpay, Cashfree, PayU, CCAvenue, Paytm for Business, or Instamojo**. Your site can use the same kind of “payment link” approach as these providers offer.

---

## Part 2: All options listed – fee vs free

### A. Paid (transaction fee per payment)

| Provider | Typical fee | Payment link? | Best for |
|----------|-------------|----------------|----------|
| **Razorpay** | 2% + GST | Yes (Payment Links) | Ease of use, 100+ methods, good docs |
| **Cashfree** | 1.6%–1.95% + GST (promo 1.6%) | Yes (free to create) | Lower fee, fast settlement |
| **PayU** | ~2% + GST | Yes | Large volume, EMI options |
| **CCAvenue** | ~1.9%–2.5% + GST | Yes | Long-standing, multi-currency |
| **Paytm for Business** | Varies (zero setup fee) | Yes | Brand trust, UPI + cards |
| **Instamojo** | 2% + ₹3 (Growth) or 5% + ₹3 (free plan) | Yes | Solo/small sellers, simple setup |

### B. Low / flat fee (not percentage-based)

| Provider | Fee | Payment link? | Best for |
|----------|-----|----------------|----------|
| **SMEPay** | ₹3 per UPI transaction (0% on amount) | Yes | UPI-only, predictable cost |

### C. Free (no or minimal fee)

| Provider | Fee | Payment link? | Best for |
|----------|-----|----------------|----------|
| **UPI PG** (upipg.cit.org.in) | Free | Yes (link/QR) | Freelancers, testing, no signup cost |
| **FreeUPI** | Zero fee (UPI) | Yes (QR + link) | WordPress/WooCommerce; UPI only |
| **Cashfree Payment Links** | **Free to create** links; **transaction fee** when customer pays (1.6%–1.95%) | Yes | Same as your current “paste link” flow; no creation cost |

**Summary:**

- **Truly “free” (no fee on transaction):** UPI PG, FreeUPI – usually UPI-only and may have limits.
- **Free to create, fee when customer pays:** Razorpay, Cashfree, Paytm, Instamojo, CCAvenue – you only pay a percentage (and/or fixed fee) per successful payment.
- **Flat fee per transaction:** SMEPay (e.g. ₹3 per UPI).

So: **“free” usually means either (1) no fee at all (UPI PG–style) or (2) no cost to create the link, but you still pay the gateway when money is received.**

---

## Part 3: How to integrate with your current structure

Your site is **static** (React + Vite, no server). So you need options that work with **only a link or a small script** – no backend API.

### Method: “Payment link” (works for almost all below)

1. Sign up with the provider (Razorpay, Cashfree, Paytm, Instamojo, CCAvenue, SMEPay, etc.).
2. In their dashboard, create a **Payment Link** (or “Payment Page” / “Collect payment”) and set amount, description, etc.
3. Copy the **URL** they give you (e.g. `https://rzp.io/l/xxx` or `https://pay.cashfree.com/xxx`).
4. In your project, open **`src/App.jsx`** and set:
   ```js
   const PAYMENT_LINK_URL = 'https://...'  // paste the link here
   ```
5. Your existing **“Pay camp fees securely”** button already uses `PAYMENT_LINK_URL`. Commit and push.

No backend, no API keys on the front end – only the link. Same structure for **any** provider that gives you a shareable payment URL.

### Provider-by-provider (same structure)

| Provider | Step 1 | Step 2 | Step 3 |
|----------|--------|--------|--------|
| **Razorpay** | Sign up → KYC | Dashboard → Payment Links → Create → Copy URL | Paste in `PAYMENT_LINK_URL` |
| **Cashfree** | Sign up → KYC | Dashboard → Payment Links → Create → Copy URL | Paste in `PAYMENT_LINK_URL` |
| **Paytm for Business** | Sign up | Create payment link → Copy URL | Paste in `PAYMENT_LINK_URL` |
| **Instamojo** | Sign up | Create “Pay link” → Copy URL | Paste in `PAYMENT_LINK_URL` |
| **CCAvenue** | Merchant signup | Create payment link / page → Copy URL | Paste in `PAYMENT_LINK_URL` |
| **SMEPay** | Sign up | Create UPI link → Copy URL | Paste in `PAYMENT_LINK_URL` |
| **UPI PG / FreeUPI** | Sign up (if needed) | Generate link → Copy URL | Paste in `PAYMENT_LINK_URL` |

If you want **two** payment options (e.g. Razorpay + Cashfree), add a second constant and a second button that opens that URL:

```js
const PAYMENT_LINK_URL_RAZORPAY = 'https://rzp.io/l/...'
const PAYMENT_LINK_URL_CASHFREE = 'https://pay.cashfree.com/...'
```

Then in JSX, render two buttons, each with `href={PAYMENT_LINK_URL_RAZORPAY}` and `href={PAYMENT_LINK_URL_CASHFREE}`.

---

## Part 4: Quick recommendation for your camp site

- **Minimum effort, trusted by Indian users:** **Razorpay** Payment Links (already documented in **PAYMENT-SETUP.md**). You pay ~2% + GST when someone pays.
- **Lower fee, same “paste link” flow:** **Cashfree** Payment Links (free to create; ~1.6–1.95% when they pay). Integration is identical: paste link in `PAYMENT_LINK_URL`.
- **Truly no fee on transaction (UPI only):** Try **UPI PG** or **FreeUPI**; paste the generated link in `PAYMENT_LINK_URL`. Good for testing or if you only need UPI.
- **Flat ₹3 per UPI:** **SMEPay** – create link, paste in `PAYMENT_LINK_URL`.

Your **current structure** (single `PAYMENT_LINK_URL` + one button) works with all of these; only the URL and the provider’s dashboard change.
