import { defineConfig } from 'sanity';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas/documents';

export default defineConfig({
  name: 'default',
  title: 'HAYABI CMS',
  projectId: process.env.SANITY_PROJECT_ID!,
  dataset: process.env.SANITY_DATASET!,
  basePath: '/studio',
  plugins: [visionTool()],
  schema: { types: schemaTypes as any },
});
