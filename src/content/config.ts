import { defineCollection, z } from 'astro:content';

const services = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['Soldadura', 'Portones', 'Puertas', 'Reparaciones']),
    image: z.string().optional(),
    icon: z.string().optional(),
    created_at: z.string().optional(),
  }),
});

const products = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    description: z.string(),
    category: z.string(),
    price: z.number().optional(),
    image: z.string(),
    created_at: z.string().optional(),
  }),
});

const gallery_images = defineCollection({
  type: 'data',
  schema: z.object({
    image: z.string(),
    caption: z.string().optional(),
    category: z.string(),
    created_at: z.string().optional(),
  }),
});

const testimonials = defineCollection({
  type: 'data',
  schema: z.object({
    author: z.string(),
    text: z.string(),
    rating: z.number().min(1).max(5),
    visible: z.boolean(),
    created_at: z.string().optional(),
  }),
});

export const collections = {
  services,
  products,
  gallery_images,
  testimonials,
};