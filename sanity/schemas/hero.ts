// sanity/schemas/hero.ts
export default {
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'object',
      fields: [
        { name: 'en', title: 'EN', type: 'string' },
        { name: 'uk', title: 'UK', type: 'string' },
      ],
    },
    {
      name: 'lead',
      title: 'Lead',
      type: 'object',
      fields: [
        { name: 'en', title: 'EN', type: 'text' },
        { name: 'uk', title: 'UK', type: 'text' },
      ],
    },
    {
      name: 'bullets',
      title: 'Bullets',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'text',
              title: 'Text',
              type: 'object',
              fields: [
                { name: 'en', title: 'EN', type: 'string' },
                { name: 'uk', title: 'UK', type: 'string' },
              ],
            },
          ],
        },
      ],
    },
  ],
}
