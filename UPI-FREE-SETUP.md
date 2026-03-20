# Free UPI-only payment (no transaction fee)

Use **UPI PG** or **FreeUPI** to accept camp fees via UPI only, with **no gateway fee**. Parents pay with Google Pay, PhonePe, Paytm, or any UPI app; money goes to your bank.

---

## Option A: UPI PG (upipg.cit.org.in)

**Free, no signup required to generate a link.** Government/education-backed tool.

### Get your payment link

1. Go to **https://upipg.cit.org.in**
2. Fill in:
   - **Payee name** – Your name or “Summer Art Camp”
   - **UPI ID** – Your UPI ID (e.g. `yourname@paytm`, `9876543210@ybl`)
   - **Amount** (optional) – Leave blank for “pay any amount” or enter the camp fee
   - **Payment note** (optional) – e.g. “Summer Art Camp – [Child name]”
3. Click **Generate Secure Payment Link & QR Code**.
4. Copy the **payment page URL** they show (the link that opens the page where the payer can pay or scan QR). If they only give a QR image, see “Shareable link” or “Link” on the same page.

**Optional:** Create a free account on UPI PG to get a dashboard, payment history, and reusable links.

### Add to your website

1. Open **`src/App.jsx`**.
2. Find:
   ```js
   const UPI_PAYMENT_LINK_URL = ''
   ```
3. Paste the payment page URL:
   ```js
   const UPI_PAYMENT_LINK_URL = 'https://upipg.cit.org.in/...'  // your generated link
   ```
4. Save and push. The **“Pay via UPI (no fee)”** button will appear in the contact section.

---

## Option B: FreeUPI (freeupi.com)

**Zero-fee UPI collection.** You get a dashboard and reusable payment links.

### Get your payment link

1. Go to **https://freeupi.com** and sign up / log in.
2. In the dashboard, create a **payment link** (or “collect payment”):
   - Set amount (or “custom amount”).
   - Add a description (e.g. “Summer Art Camp fees”).
3. Copy the **shareable payment link** (the URL they give you to send to customers).

### Add to your website

1. Open **`src/App.jsx`**.
2. Set:
   ```js
   const UPI_PAYMENT_LINK_URL = 'https://...'  // paste the FreeUPI link here
   ```
3. Save and push. The **“Pay via UPI (no fee)”** button will show that link.

---

## Summary

| Step | UPI PG | FreeUPI |
|------|--------|---------|
| 1 | Go to upipg.cit.org.in | Sign up at freeupi.com |
| 2 | Enter UPI ID, name, optional amount → Generate | Create payment link in dashboard |
| 3 | Copy payment page URL | Copy shareable link |
| 4 | Paste in `UPI_PAYMENT_LINK_URL` in `src/App.jsx` | Same |

**Note:** Both are **UPI-only**. For cards or net banking, keep using **Razorpay** (or another gateway) and set `PAYMENT_LINK_URL`. You can have both buttons: “Pay camp fees (cards / UPI)” and “Pay via UPI (no fee)”.
