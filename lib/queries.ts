import { groq } from 'next-sanity';

export const qSite = groq`*[_type=="siteSettings"][0]{ tagline, address, phone, email }`;
export const qHero = groq`*[_type=="hero"][0]{ title, lead, bullets[]{text} }`;
export const qServices = groq`*[_type=="services"][0]{ sectionTitle, items[]{ title, bullets[]{text} } }`;
export const qExpertise = groq`*[_type=="expertise"][0]{ title, p1, p2, bullets[]{text} }`;
export const qCases = groq`*[_type=="cases"][0]{ title, statement }`;
