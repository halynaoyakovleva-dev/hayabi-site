// sanity/sanity.config.ts
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas/documents'

// ✅ ЖОРСТКО ВКАЗУЄМО projectId/dataset, щоб Studio точно запустилось
const projectId = '1vg7ken0'  // ← вставте свій Project ID з Sanity
const dataset = 'production'

export default defineConfig({
  name: 'default',
  title: 'HAYABI CMS',
  basePath: '/studio',
  projectId,
  dataset,
  plugins: [deskTool(), visionTool()],
  schema: { types: schemaTypes },
})
