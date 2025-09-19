// sanity/sanity.config.ts
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas/documents'

export default defineConfig({
  name: 'default',
  title: 'HAYABI CMS',
  basePath: '/studio',
  projectId: process.env.SANITY_PROJECT_ID!,   // set in Vercel → Env
  dataset: process.env.SANITY_DATASET || 'production',
  plugins: [deskTool(), visionTool()],
  schema: { types: schemaTypes },
})
