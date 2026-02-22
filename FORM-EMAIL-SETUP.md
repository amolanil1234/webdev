# Send "Reserve a spot" enquiries to amol.eng@gmail.com

The form uses **Web3Forms** (free) to email you when someone submits.

## One-time setup

1. Go to **https://web3forms.com**
2. Enter **amol.eng@gmail.com** in the box and click to get your Access Key.
3. Check that inbox (and **Promotions/Spam**) for an email from Web3Forms. The **Access Key** is a long UUID like:  
   `a1b2c3d4-e5f6-7890-abcd-ef1234567890`
4. Open **`src/App.jsx`** and find:
   ```js
   const WEB3FORMS_ACCESS_KEY = 'REPLACE_WITH_YOUR_ACCESS_KEY'
   ```
5. Replace the whole value with your key **including the quotes**, e.g.:
   ```js
   const WEB3FORMS_ACCESS_KEY = 'a1b2c3d4-e5f6-7890-abcd-ef1234567890'
   ```
   (Paste the exact UUID from the email — no spaces, no extra text.)
6. Save, commit, and push. The form will then work and submissions will go to **amol.eng@gmail.com**.

**Until you add the key:** the site shows "Call" and "WhatsApp" buttons instead of the form, so visitors can still reach you and you won’t see "Invalid form_id/access_key" errors.

Each email will include: Parent's name, Phone, Email, Child's name & age.
