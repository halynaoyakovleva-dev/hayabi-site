// sanity/schemas/siteSettings.ts
export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'object',
      fields: [
        { name: 'en', title: 'EN', type: 'string' },
        { name: 'uk', title: 'UK', type: 'string' },
      ],
    },
    { name: 'address', title: 'Address', type: 'string' },
    { name: 'phone', title: 'Phone', type: 'string' },
    { name: 'email', title: 'Email', type: 'string' },
  ],
}
