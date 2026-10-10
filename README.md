# Niixo Market — GitHub Pages starter

## Files
- `index.html` — public storefront and order request form
- `admin.html` — owner dashboard prototype
- `style.css` — shared responsive design
- `app.js` — shared demo storage helpers

## Test locally
Open `index.html` in your browser. Submit a test order, then open `admin.html` **in the same browser profile**. The order should appear in the dashboard.

## Deploy to GitHub Pages
1. Create a GitHub repository (for example `niixo-market`).
2. Upload all four files to the repository root.
3. Open **Settings → Pages**.
4. Under build and deployment, choose **Deploy from a branch**.
5. Select `main` and `/ (root)`, then Save.
6. Wait for GitHub Pages to publish. Your site will be available at the repository's GitHub Pages URL.

## Important limitations
This is a static demo, not a production e-commerce system. Browser `localStorage` is shared only within the same browser profile on the same device. Orders submitted by visitors on their phones will **not** appear in the owner's dashboard. There is no secure admin login, shared database, or live payment integration.

Before accepting real orders or money, connect a backend/database and secure owner authentication. Implement server-side authorization and payment verification via a supported provider's signed webhooks. Never put payment API secrets in frontend code. Never store customer passwords, PINs, card data, or OTPs.

The public form only creates a demo order request; it does not process or collect payment.
