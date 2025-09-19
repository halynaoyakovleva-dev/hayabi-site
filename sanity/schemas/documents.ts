import { localeString, localeText } from './locale';

export const siteSettings = {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  fields: [
    { name: 'tagline', type: 'localeString', title: 'Tagline (SIMPLY SUCCESS)' },
    { name: 'address', type: 'string', title: 'Address', initialValue: 'Switzerland' },
    { name: 'phone', type: 'string', title: 'Phone', initialValue: '+41 79 823 34 85' },
    { name: 'email', type: 'string', title: 'Email', initialValue: 'halyna.o.yakovleva@gmail.com' },
  ],
};

export const hero = {
  name: 'hero',
  type: 'document',
  title: 'Hero',
  fields: [
    { name: 'title', type: 'localeString', title: 'Title' },
    { name: 'lead', type: 'localeText', title: 'Lead text' },
    { name: 'bullets', title: 'Bullets', type: 'array', of: [{ type: 'object', fields: [{ name: 'text', type: 'localeString', title: 'Text' }] }] },
  ],
};

export const services = {
  name: 'services',
  type: 'document',
  title: 'Services (Ukraine)',
  fields: [
    { name: 'sectionTitle', type: 'localeString', title: 'Section Title' },
    { name: 'items', title: 'Service Cards', type: 'array', of: [{ type: 'object', fields: [
      { name: 'title', type: 'localeString', title: 'Title' },
      { name: 'bullets', type: 'array', of: [{ type: 'object', fields: [{ name: 'text', type: 'localeString', title: 'Text' }] }] },
    ] }] },
  ],
};

export const expertise = {
  name: 'expertise',
  type: 'document',
  title: 'Expertise',
  fields: [
    { name: 'title', type: 'localeString', title: 'Section Title' },
    { name: 'p1', type: 'localeText', title: 'Paragraph 1' },
    { name: 'p2', type: 'localeText', title: 'Paragraph 2' },
    { name: 'bullets', title: 'Bullets', type: 'array', of: [{ type: 'object', fields: [{ name: 'text', type: 'localeString', title: 'Text' }] }] },
  ],
};

export const cases = {
  name: 'cases',
  type: 'document',
  title: 'Track Record',
  fields: [
    { name: 'title', type: 'localeString', title: 'Section Title' },
    { name: 'statement', type: 'localeText', title: 'Statement' },
  ],
};

export const schemaTypes = [ localeString, localeText, siteSettings, hero, services, expertise, cases ];
