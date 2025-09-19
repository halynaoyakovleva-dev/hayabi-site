export const localeString = {
  name: 'localeString',
  type: 'object',
  title: 'Localized string',
  fields: [
    { name: 'en', type: 'string', title: 'English' },
    { name: 'uk', type: 'string', title: 'Українська' },
  ],
};

export const localeText = {
  name: 'localeText',
  type: 'object',
  title: 'Localized text',
  fields: [
    { name: 'en', type: 'text', rows: 3, title: 'English' },
    { name: 'uk', type: 'text', rows: 3, title: 'Українська' },
  ],
};
