import { defineCollection, defineContentConfig } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/**',
      schema: z.object({
        img: z.string().optional(),
        tags: z.array(z.string()).optional(),
      }),
    }),
    cvCapabilities: defineCollection({
      type: 'page',
      source: 'cv/capabilities/**',
      schema: z.object({
        img: z.string().optional(),
        tags: z.array(z.string()).optional(),
      }),
    }),
    cvProjects: defineCollection({
      type: 'page',
      source: 'cv/projects/**',
      schema: z.object({
        img: z.string().optional(),
        tags: z.array(z.string()).optional(),
      }),
    }),
  },
})
