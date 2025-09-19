// sanity/schemas/expertise.ts
export default {
  name: 'expertise',
  title: 'Expertise',
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
      name: 'p1',
      title: 'Paragraph 1',
      type: 'object',
      fields: [
        { name: 'en', title: 'EN', type: 'text' },
        { name: 'uk', title: 'UK', type: 'text' },
      ],
    },
    {
      name: 'p2',
      title: 'Paragraph 2',
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
