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

export const collections = {
  services,
};