import HAYABI from "@/components/HAYABI";
import { sanityClient } from "@/lib/sanity.client";
import { qSite, qHero, qServices, qExpertise, qCases } from "@/lib/queries";

export const revalidate = 60;

export default async function Page(){
  const [site, hero, services, expertise, casesData] = await Promise.all([
    sanityClient.fetch(qSite),
    sanityClient.fetch(qHero),
    sanityClient.fetch(qServices),
    sanityClient.fetch(qExpertise),
    sanityClient.fetch(qCases),
  ]);
  const content = { site, hero, services, expertise, cases: casesData };
  return <HAYABI cms={content} defaultLang="en" />;
}
