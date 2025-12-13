# PMM Solutions - Tech Repair Website

A fast, SEO-optimized static website for a local tech repair shop built with Astro and TailwindCSS. Designed for maximum local search visibility and AI discoverability.

## Features

- ⚡ **Fast Performance**: Static site generation with minimal JavaScript
- 🔍 **SEO Optimized**: Structured data, sitemap, meta tags, and AI crawler support
- 📱 **Responsive Design**: Mobile-first design with TailwindCSS
- 🎯 **Local SEO**: LocalBusiness schema, NAP consistency, location pages
- 🤖 **AI Discoverable**: Optimized for ChatGPT, Perplexity, and other AI platforms
- 📝 **Easy Content Management**: Markdown-based content collections
- 📊 **Analytics Ready**: Google Analytics 4 integration
- 📧 **Contact Forms**: Formspree/IONOS FormMail integration

## Tech Stack

- **Framework**: Astro 5.x
- **Styling**: TailwindCSS 4.x with Typography plugin
- **Content**: Markdown with Astro Content Collections
- **SEO**: Astro Sitemap, JSON-LD structured data
- **Hosting**: Static files (IONOS compatible)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Update configuration in `src/config.ts`:
   - Business name, address, phone (NAP)
   - Site URL
   - Google Analytics ID
   - Form endpoint

4. Start the development server:

```bash
npm run dev
```

Visit `http://localhost:4321` to see your site.

## Project Structure

```
/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── ContactForm.astro
│   │   ├── FAQ.astro
│   │   ├── LocationCard.astro
│   │   ├── ServiceCard.astro
│   │   ├── StructuredData.astro
│   │   └── Testimonial.astro
│   ├── content/
│   │   ├── config.ts
│   │   ├── locations/
│   │   └── services/
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── index.astro
│   │   ├── locations/
│   │   └── services/
│   ├── styles/
│   │   └── global.css
│   └── config.ts
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## Configuration

### Business Information

Edit `src/config.ts` to update:
- Business name, address, phone (NAP)
- Service areas
- Services offered
- Opening hours
- Google Analytics ID
- Form endpoint

### Site URL

Update the `site` field in `astro.config.mjs` with your actual domain:

```javascript
export default defineConfig({
  site: 'https://www.yourdomain.com',
  // ...
});
```

### Google Analytics

1. Get your GA4 Measurement ID (format: `G-XXXXXXXXXX`)
2. Update `gaId` in `src/config.ts`
3. Analytics will automatically load on all pages

### Contact Form

#### Option 1: Formspree

1. Sign up at [Formspree.io](https://formspree.io)
2. Create a form and get your form ID
3. Update `formEndpoint` in `src/config.ts`:
   ```typescript
   export const formEndpoint = 'https://formspree.io/f/YOUR_FORM_ID';
   ```

#### Option 2: IONOS FormMail

1. Configure IONOS FormMail in your hosting panel
2. Update the form action in `src/components/ContactForm.astro`
3. Adjust form field names to match IONOS requirements

## Building for Production

### Build Command

```bash
npm run build
```

This generates a static site in the `dist/` directory.

### Preview Build

```bash
npm run preview
```

Preview the production build locally before deploying.

## Deployment to IONOS

### Method 1: FTP Upload

1. Build the site:
   ```bash
   npm run build
   ```

2. Upload the contents of the `dist/` folder to your IONOS web hosting root directory (usually `htdocs/` or `httpdocs/`)

3. Ensure `index.html` is in the root directory

### Method 2: Git Deployment (if available)

1. Push your code to a Git repository
2. Configure IONOS to pull from your repository
3. Set up a build script that runs `npm run build`
4. Point IONOS to serve from the `dist/` directory

### Post-Deployment Checklist

- [ ] Update `site` URL in `astro.config.mjs` to production domain
- [ ] Update `siteConfig.url` in `src/config.ts`
- [ ] Update `robots.txt` sitemap URL
- [ ] Verify Google Analytics is working
- [ ] Test contact form submission
- [ ] Check all internal links
- [ ] Verify structured data with [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Submit sitemap to Google Search Console

## Deployment to GitHub Pages (Client Preview)

Need a quick, shareable preview link? The project now ships with a `deploy` script that publishes the static build to a `gh-pages` branch while keeping your main branch clean.

1. Update `site` in `astro.config.mjs` **and** `siteConfig.url` in `src/config.ts` to `https://<github-username>.github.io/<repository-name>` so canonical and asset URLs point to GitHub Pages.  
   _Example for this repo_: `https://moshahid23.github.io/PMM-Solutions`
2. Run the one-liner deploy script:

   ```bash
   npm run deploy
   ```

   This runs `astro build` and pushes the contents of `dist/` to the `gh-pages` branch via the `gh-pages` npm package.
3. In your GitHub repository (`Settings → Pages`), set the source to the `gh-pages` branch and the `/` root folder.
4. Wait for GitHub Pages to finish provisioning, then share `https://<github-username>.github.io/<repository-name>/` with your client.

All internal links, images, and stylesheet references automatically respect the GitHub Pages base path, so the preview should look identical to production.

## SEO Features

### Structured Data (JSON-LD)

- **LocalBusiness** schema on homepage and location pages
- **Service** schema on service pages
- **FAQPage** schema on pages with FAQ sections
- All schemas are automatically generated

### Sitemap

Automatically generated at `/sitemap-index.xml` by Astro Sitemap plugin.

### Robots.txt

Configured to allow:
- All search engines
- AI crawlers (GPTBot, PerplexityBot, ChatGPT-User, etc.)

### Meta Tags

All pages include:
- Title and description
- OpenGraph tags (Facebook)
- Twitter Card tags
- Canonical URLs

## Content Management

See [CONTENT_GUIDE.md](./CONTENT_GUIDE.md) for detailed instructions on:
- Adding new services
- Adding new locations
- Managing blog posts
- Using content collections

## Performance Optimization

- Static site generation (no server needed)
- Minimal JavaScript (Astro islands)
- Optimized CSS (Tailwind purging)
- Fast load times (target: <1.5s)

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- Progressive enhancement

## Troubleshooting

### Build Errors

- Ensure all dependencies are installed: `npm install`
- Check Node.js version (18+ required)
- Verify TypeScript configuration

### Form Not Working

- Check form endpoint in `src/config.ts`
- Verify form action URL is correct
- Check browser console for errors

### Analytics Not Tracking

- Verify GA4 ID is correct in `src/config.ts`
- Check that ID format is `G-XXXXXXXXXX`
- Ensure ID is not the placeholder value

## License

This project is proprietary. All rights reserved.

## Support

For issues or questions, contact the development team.

---

Built with [Astro](https://astro.build) and [TailwindCSS](https://tailwindcss.com)
