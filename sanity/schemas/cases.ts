// sanity/schemas/cases.ts
export default {
  name: 'cases',
  title: 'Track Record',
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
      name: 'statement',
      title: 'Statement',
      type: 'object',
      fields: [
        { name: 'en', title: 'EN', type: 'text' },
        { name: 'uk', title: 'UK', type: 'text' },
      ],
    },
  ],
}
