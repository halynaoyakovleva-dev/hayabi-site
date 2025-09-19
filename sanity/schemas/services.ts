// sanity/schemas/services.ts
export default {
  name: 'services',
  title: 'Services',
  type: 'document',
  fields: [
    {
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'object',
      fields: [
        { name: 'en', title: 'EN', type: 'string' },
        { name: 'uk', title: 'UK', type: 'string' },
      ],
    },
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        {
          type: 'object',
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
        },
      ],
    },
  ],
}
