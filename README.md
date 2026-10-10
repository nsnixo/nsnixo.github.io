# Niixo Market — GitHub Pages starter (v2)

## Included
- `index.html`: responsive storefront with separate PUBG Mobile UC, Free Fire Diamonds, and Instagram service catalogs.
- `admin.html`: local owner dashboard for orders, manual payment verification, service pricing/supplier costs, expenses, reports, CSV export, and JSON backup/restore.
- `style.css`: shared responsive dark theme.
- `app.js`: storefront and dashboard logic.

## Run locally
Open `index.html` in a modern browser. For best results use VS Code Live Server or another local static server.

## Publish on GitHub Pages
1. Create a GitHub repository.
2. Upload all four files to the repository root.
3. Open **Settings → Pages**.
4. Select **Deploy from a branch**, branch `main`, folder `/(root)`, and save.
5. Open the published site URL. The admin page is at `/admin.html`.

## Important limitations — demo, not production-ready
This version uses browser `localStorage`. Storefront orders and admin data are available only in the same browser profile on the same device. They do **not** sync to the owner's device when a customer submits an order. GitHub Pages is static hosting and does not provide a private database or secure owner authentication.

Before accepting real orders or payments, connect a backend/database and owner login. Keep any gateway secret keys server-side. Manually verify JazzCash/EasyPaisa transfers against your own account before marking an order as verified. The payment account fields are intentionally blank until you set your own details in Admin → Store settings. Do not collect account passwords or one-time codes.

Prices initially match the supplied reference pictures. Confirm your supplier costs, availability, and final sale prices before launch.
