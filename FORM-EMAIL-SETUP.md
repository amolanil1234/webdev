# Send "Reserve a spot" enquiries to amol.eng@gmail.com

The form uses **Web3Forms** (free) to email you when someone submits.

## One-time setup

1. Go to **https://web3forms.com**
2. Enter **amol.eng@gmail.com** in the box and click to get your Access Key.
3. Check that inbox (and Promotions/Spam) for an email from Web3Forms with your **Access Key**.
4. Open **`src/App.jsx`** and find:
   ```js
   const WEB3FORMS_ACCESS_KEY = 'REPLACE_WITH_YOUR_ACCESS_KEY'
   ```
5. Replace `'REPLACE_WITH_YOUR_ACCESS_KEY'` with your key (keep the quotes), e.g.:
   ```js
   const WEB3FORMS_ACCESS_KEY = 'abc123-your-actual-key'
   ```
6. Save, commit, and push. New submissions will go to **amol.eng@gmail.com**.

Each email will include: Parent's name, Phone, Email, Child's name & age.
