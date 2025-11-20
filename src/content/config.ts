import { defineCollection, z } from 'astro:content';

// Services collection schema
const servicesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    priceRange: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

// Locations collection schema
const locationsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    latitude: z.number().optional(),
    longitude: z.number().optional(),
    featured: z.boolean().default(false),
  }),
});

// Blog collection schema (optional)
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default('PMM Solutions'),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = {
  services: servicesCollection,
  locations: locationsCollection,
  blog: blogCollection,
};

