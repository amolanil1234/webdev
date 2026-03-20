# Add payment option (Razorpay – India)

You can accept camp fees online with **Razorpay Payment Links**. No coding on your server: you create a link in Razorpay, paste it on the site, and parents pay via UPI, cards, or net banking.

**Fee:** Razorpay typically charges around **2% per transaction**. You can absorb this in your camp fee or add a small “payment processing” amount when you set the Payment Link; check Razorpay’s latest pricing in the dashboard.

---

## 1. Sign up and complete KYC

1. Go to **https://razorpay.com** and sign up (use the email you want for payouts).
2. Complete **KYC** in the Razorpay dashboard (required to receive money and create payment links).

---

## 2. Create a Payment Link

1. In Razorpay Dashboard go to **Payment Links** (or **Payments** → **Payment Links**).
2. Click **Create Payment Link**.
3. Set:
   - **Amount** – e.g. camp fee in ₹ (or create separate links for “Deposit” and “Full fee”).
   - **Description** – e.g. “Summer Art Camp – [Batch name]”.
   - **Customer** – Optional; you can leave it to be filled when they pay.
4. Create the link and **copy the URL** (e.g. `https://rzp.io/l/xxxxx`).

You can create multiple links (e.g. one per batch or one for deposit, one for full payment).

---

## 3. Add the link to your website

1. Open **`src/App.jsx`** in your project.
2. Find:
   ```js
   const PAYMENT_LINK_URL = '' // e.g. 'https://rzp.io/l/your-link-id'
   ```
3. Paste your link inside the quotes:
   ```js
   const PAYMENT_LINK_URL = 'https://rzp.io/l/your-actual-link-id'
   ```
4. Save, then commit and push. The **“Pay camp fees securely”** button will appear in the contact section and open your Razorpay payment page in a new tab.

---

## 4. Optional: more than one payment option

To offer multiple links (e.g. “Pay deposit” and “Pay full fee”):

- You can create two buttons and two constants, e.g. `PAYMENT_LINK_DEPOSIT` and `PAYMENT_LINK_FULL`, and render two buttons in the same section.
- Or change the single button to a dropdown/menu that links to different Payment Link URLs.

---

## Summary

| Step | Where | Action |
|------|--------|--------|
| 1 | razorpay.com | Sign up and complete KYC |
| 2 | Razorpay Dashboard → Payment Links | Create link, set amount & description, copy URL |
| 3 | `src/App.jsx` | Set `PAYMENT_LINK_URL = 'your-url'` |
| 4 | Git | Commit and push |

Parents will see **“Pay camp fees securely”** next to your phone and WhatsApp; clicking it opens the Razorpay page where they can pay by UPI, card, or net banking.

---

## Alternative: Stripe (international)

If you want to accept international cards or non-Indian customers, you can use **Stripe Payment Links** in the same way:

1. Create a Payment Link at **https://dashboard.stripe.com/payment-links**.
2. Paste that URL into `PAYMENT_LINK_URL` in `App.jsx` (you can rename the constant to something like `PAYMENT_LINK_URL` and use it for either Razorpay or Stripe).

The same button will then open your Stripe payment page.

---

## Using SBI bank (SBIePay) to accept payments

**Yes, SBI has an option:** **SBIePay** is SBI’s payment gateway. It supports UPI, cards (Visa, Mastercard, RuPay), net banking (many banks), NEFT, and sometimes cash at SBI branches.

**How it’s different from Razorpay:**

| | Razorpay Payment Links | SBIePay |
|---|------------------------|--------|
| **Setup** | Sign up → create link → paste URL on site | Merchant registration with SBI (MIF form, documents, approval) |
| **Your site** | Static site is enough (no backend) | Usually needs a **backend/server** to call SBI APIs, create transactions, and handle callbacks |
| **Integration** | Copy-paste one URL | API integration using SBI’s Merchant Integration Guide (technical) |

**So:**

- **If you want “just a link” on your current site** (no server, no backend): use **Razorpay** (or Stripe) Payment Links. Your site stays as it is; you only add the payment URL.
- **If you specifically want SBI**: you need to:
  1. **Register as a merchant** with SBIePay:  
     - **https://www.sbiepay.sbi** or **https://epay.sbi.bank.in**  
     - Fill the Merchant Information Form (MIF), submit business/KYC docs, and get approval.
  2. **Integrate via API** (backend required):  
     - Use SBI’s **Merchant Integration Guide** (available via SBIePay) to implement payment request/response and callbacks on a server (e.g. Node, PHP, Java).  
     - Your website would then call your server to “create a payment”; the server talks to SBIePay and returns a payment URL or form that the parent completes.

**Fees:** SBIePay’s merchant fees are decided by SBI when you onboard. You can ask for the exact rate when you register.

**Summary:** SBIePay is possible, but it needs merchant registration and a backend. For a static site like yours, **Razorpay (or Stripe) Payment Links** are the practical way to accept payments without building a server. If you later add a small backend (e.g. for SBI), you can switch or add SBI as an extra option.
