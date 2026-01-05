# precise-software.com

Marketing website for precise-software products.

## Products

- **WarungOS** - Modern Point of Sale System
- **StudioBook** - Studio Desk Booking (Coming Soon)

## Tech Stack

- Next.js 16
- React 19
- Tailwind CSS 4
- TypeScript

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Deployment

Deploy to Vercel:

```bash
vercel
```

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Home page
│   ├── layout.tsx        # Root layout
│   ├── globals.css       # Global styles
│   ├── warungos/         # WarungOS product page
│   ├── studiobook/       # StudioBook product page
│   ├── about/            # About page
│   └── contact/          # Contact page
└── components/
    ├── Header.tsx        # Site header
    └── Footer.tsx        # Site footer
```

## Domain Structure

- `precise-software.com` - This marketing site
- `app.warungos.precise-software.com` - WarungOS app (or warungos-frontend.vercel.app)
- `app.studiobook.precise-software.com` - StudioBook app (future)
