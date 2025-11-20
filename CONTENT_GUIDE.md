# Content Management Guide

This guide explains how to add and manage content for services and locations using Markdown files.

## Content Collections

Content is organized into collections located in `src/content/`:

- `services/` - Service descriptions
- `locations/` - Location/service area descriptions
- `blog/` - Blog posts (optional)

## Adding a New Service

1. Create a new Markdown file in `src/content/services/` with a slug-based filename (e.g., `tablet-repair.md`)

2. Add frontmatter with required fields:

```markdown
---
title: Tablet Repair
description: Expert tablet repair services for all brands
icon: 📱
priceRange: £70-£250
featured: false
---

# Tablet Repair Services

Your content here...
```

3. Update `src/config.ts` to add the service to the services array:

```typescript
export const services = [
  // ... existing services
  {
    name: 'Tablet Repair',
    slug: 'tablet-repair',
    description: 'Expert tablet repair services for all brands',
    icon: '📱',
  },
];
```

4. Create a corresponding page in `src/pages/services/tablet-repair.astro` (or use the content collection to generate pages dynamically)

## Adding a New Location

1. Create a new Markdown file in `src/content/locations/` with the location slug (e.g., `camberley.md`)

2. Add frontmatter:

```markdown
---
title: Camberley
description: On-site tech repair services in Camberley
latitude: 51.3367
longitude: -0.7436
featured: false
---

# Tech Repair Services in Camberley

Your content here...
```

3. Update `src/config.ts` to add the location:

```typescript
export const serviceAreas = [
  // ... existing areas
  { name: 'Camberley', slug: 'camberley' },
];
```

4. Create a corresponding page in `src/pages/locations/camberley.astro`

## Frontmatter Fields

### Services
- `title` (required): Service name
- `description` (required): Short description
- `icon` (optional): Emoji icon
- `priceRange` (optional): Price range (e.g., "£60-£300")
- `featured` (optional): Boolean, default false

### Locations
- `title` (required): Location name
- `description` (required): Short description
- `latitude` (optional): GPS latitude
- `longitude` (optional): GPS longitude
- `featured` (optional): Boolean, default false

### Blog Posts
- `title` (required): Post title
- `description` (required): Post description
- `pubDate` (required): Publication date
- `author` (optional): Author name, defaults to "PMM Solutions"
- `image` (optional): Featured image URL
- `tags` (optional): Array of tags

## Using Content in Pages

You can import and use content collections in your Astro pages:

```astro
---
import { getCollection } from 'astro:content';

const services = await getCollection('services');
---

{services.map((service) => (
  <div>
    <h2>{service.data.title}</h2>
    <p>{service.data.description}</p>
    <div set:html={service.body} />
  </div>
))}
```

## Best Practices

1. **Keep filenames consistent**: Use kebab-case for file names (e.g., `laptop-repair.md`)
2. **Update config.ts**: Always update the config file when adding new services or locations
3. **Create corresponding pages**: Each service/location should have a dedicated page
4. **Use descriptive descriptions**: Write clear, SEO-friendly descriptions
5. **Include structured data**: Ensure pages include appropriate JSON-LD schemas

## Content Guidelines

- Write clear, factual content
- Include relevant keywords naturally
- Use proper heading hierarchy (H1, H2, H3)
- Add FAQ sections for better SEO
- Include internal links to related services/locations
- Keep content updated and accurate

