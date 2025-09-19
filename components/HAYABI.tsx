"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Mail, Phone, Globe, Building2, Shield, Banknote, Languages } from "lucide-react";

type Lang = "en" | "uk";
type LocaleString = { en?: string; uk?: string };
type LocaleText = { en?: string; uk?: string };
type CMS = {
  site?: { tagline?: LocaleString; address?: string; phone?: string; email?: string },
  hero?: { title?: LocaleString; lead?: LocaleText; bullets?: { text?: LocaleString }[] },
  services?: { sectionTitle?: LocaleString; items?: { title?: LocaleString; bullets?: { text?: LocaleString }[] }[] },
  expertise?: { title?: LocaleString; p1?: LocaleText; p2?: LocaleText; bullets?: { text?: LocaleString }[] },
  cases?: { title?: LocaleString; statement?: LocaleText },
};

const copy = {
  en: {
    nav: { services: "Services", expertise: "Expertise", cases: "Track Record", contact: "Contact" },
    cta: { getInTouch: "Get in touch", book: "Book a consultation", explore: "Explore services", send: "Send message", sent: "Sent ✓" },
    hero: {
      title: <>Ukrainian Public Procurement <span className="text-emerald-600">Consultancy</span></>,
      lead: "HAYABI provides end-to-end consulting in Ukrainian public procurement (Prozorro) and compliance for the Ukrainian market — from market scouting and tender documentation to sanctions/AML controls and audit-ready governance.",
      bullets: [
        "End-to-end public procurement in Ukraine (RFI/RFP, bids, vendor negotiations)",
        "Sanctions & AML risk screening aligned with Ukrainian legislation",
        "Tender documentation, Prozorro registration, and turnkey bid support",
        "Process optimization, governance, and audit-ready documentation",
      ],
    },
    services: {
      title: "Core Services (Ukraine)",
      s1: { title: "Client Acquisition & Promotion", bullets: [
        "Identify, approach, and introduce qualified leads in the Ukrainian market",
        "Promote at trade shows and industry events in/for Ukraine",
        "Organize B2B meetings and workshops"
      ]},
      s2: { title: "Procurement Consulting", bullets: [
        "Opportunity scouting and market analysis (UA)",
        "Tender documentation & bid management (Prozorro)",
        "Turnkey support incl. submission & negotiations"
      ]},
      s3: { title: "Sanctions & Compliance", bullets: [
        "Sanctions/AML screening & risk controls for Ukraine",
        "Processes & policies aligned with Ukrainian requirements",
        "Staff training and post-award support"
      ]},
    },
    expertise: {
      title: "Domain Expertise",
      p1: "Extensive experience across Ukrainian public procurement for government agencies and regulated sectors, including construction, IT systems (e.g., Case Management System), aviation training and maintenance, and enterprise operations.",
      p2: "Proven results improving procurement governance, integrating compliance, and mitigating corruption risks in complex stakeholder environments on the Ukrainian market.",
      bullets: [
        "RFP/RFI orchestration",
        "Prozorro platform monitoring and accreditation",
        "Contract drafting, review, and vendor performance tracking",
        "Budget discipline and audit-ready documentation",
        "Stakeholder management and dispute representation",
      ],
    },
    cases: {
      title: "Track Record",
      statement: "HAYABI has a successful record of collaboration with clients in Ukraine (primary), as well as Switzerland and the European Union, delivering compliant, competitive procurements and measurable operational improvements.",
    },
    contact: {
      title: "Contact",
      address: "Switzerland",
      name: "Name",
      email: "Email",
      message: "Message",
      consent: "By submitting, you agree to be contacted regarding your inquiry.",
    },
  },
  uk: {
    nav: { services: "Послуги", expertise: "Експертиза", cases: "Результати", contact: "Контакти" },
    cta: { getInTouch: "Зв’язатися", book: "Записатися на консультацію", explore: "Переглянути послуги", send: "Надіслати", sent: "Надіслано ✓" },
    hero: {
      title: <>Консалтинг у сфері <span className="text-emerald-600">публічних закупівель України</span></>,
      lead: "HAYABI надає повний цикл консалтингу у сфері українських публічних закупівель (Prozorro) та комплаєнсу для українського ринку — від пошуку можливостей і тендерної документації до санкційного/AML-контролю та підготовки до аудитів.",
      bullets: [
        "Повний цикл публічних закупівель в Україні (RFI/RFP, тендери, переговори з постачальниками)",
        "Санкційний та AML-скринінг відповідно до вимог законодавства України",
        "Тендерна документація, реєстрація в Prozorro, супровід подачі",
        "Оптимізація процесів, управління та документація для аудитів",
      ],
    },
    services: {
      title: "Ключові послуги (Україна)",
      s1: { title: "Залучення клієнтів і промоція", bullets: [
        "Пошук і залучення цільових лідів на українському ринку",
        "Промоція на виставках та івентах в/для України",
        "Організація B2B зустрічей та воркшопів",
      ]},
      s2: { title: "Консалтинг із закупівель", bullets: [
        "Пошук можливостей і аналіз ринку (UA)",
        "Тендерна документація та менеджмент подач (Prozorro)",
        "Під ключ: подача та переговори",
      ]},
      s3: { title: "Санкції та комплаєнс", bullets: [
        "Скринінг санкцій/AML і керування ризиками для України",
        "Політики та процеси згідно з вимогами законодавства України",
        "Навчання персоналу та супровід після укладання контракту",
      ]},
    },
    expertise: {
      title: "Галузева експертиза",
      p1: "Досвід у сфері українських публічних закупівель для органів влади та регульованих секторів: будівництво, ІТ-системи (зокрема Case Management System), авіаційне навчання та обслуговування, корпоративні операції.",
      p2: "Результати з підвищення якості управління закупівлями, інтеграції комплаєнсу та зменшення корупційних ризиків у складних середовищах українського ринку.",
      bullets: [
        "Оркестрація RFP/RFI",
        "Моніторинг і акредитація на платформі Prozorro",
        "Підготовка/перевірка договорів і контроль виконання",
        "Бюджетна дисципліна та документація для аудитів",
        "Взаємодія зі стейкхолдерами та представництво у спорах",
      ],
    },
    cases: {
      title: "Результати",
      statement: "Маємо успішний досвід співпраці з клієнтами в Україні (першочергово), а також у Швейцарії та країнах ЄС — із досягненням відповідності вимогам, конкурентності закупівель та вимірюваних покращень.",
    },
    contact: {
      title: "Контакти",
      address: "Switzerland",
      name: "Ім’я",
      email: "Email",
      message: "Повідомлення",
      consent: "Надсилаючи форму, ви погоджуєтесь на контакт щодо вашого запиту.",
    },
  },
} as const;

export default function HAYABI({ cms, defaultLang = 'en' }: { cms?: CMS; defaultLang?: Lang }) {
  const [lang, setLang] = useState<Lang>(defaultLang);
  const t = copy[lang];
  const s = (obj?: LocaleString) => (obj && (obj as any)[lang]) || '';
  const tx = (obj?: LocaleText) => (obj && (obj as any)[lang]) || '';

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try{
      const res = await fetch("/api/contact", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(form) });
      if(!res.ok) throw new Error("Request failed");
      setSent(true);
    }catch(err:any){ setError(err.message || "Failed"); }
  };

  // Build services cards: CMS first, fallback to hardcoded
  const serviceItems = (cms?.services?.items?.length ? cms?.services?.items : [
    { title: {en: t.services.s1.title, uk: t.services.s1.title as any}, bullets: t.services.s1.bullets.map(b=>({text:{en:b, uk:b}})) },
    { title: {en: t.services.s2.title, uk: t.services.s2.title as any}, bullets: t.services.s2.bullets.map(b=>({text:{en:b, uk:b}})) },
    { title: {en: t.services.s3.title, uk: t.services.s3.title as any}, bullets: t.services.s3.bullets.map(b=>({text:{en:b, uk:b}})) },
  ]);

  const heroBullets = (cms?.hero?.bullets?.map(b => s(b.text)).filter(Boolean) as string[] | undefined) ?? t.hero.bullets;
  const expertiseBullets = (cms?.expertise?.bullets?.map(b => s(b.text)) as string[] | undefined) ?? t.expertise.bullets;

  const tagline = (cms?.site?.tagline && (cms.site.tagline as any)[lang]) || "SIMPLY SUCCESS";
  const phone = cms?.site?.phone || "+41 79 823 34 85";
  const email = cms?.site?.email || "halyna.o.yakovleva@gmail.com";
  const address = cms?.site?.address || t.contact.address;

  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b">
        <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">
          <a href="#home" className="font-black text-xl tracking-tight flex items-center gap-2">
            <span className="flex items-center gap-2">
              <img src="/logo.png" alt="HAYABI logo" className="h-6 w-auto"/>
              <span>HAYABI</span><span className="text-emerald-600">.</span>
            </span>
          </a>
          <div className="hidden md:flex flex-col mr-auto ml-6">
            <span className="text-[10px] tracking-[0.25em] text-gray-500">{tagline}</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#services" className="hover:text-emerald-600">{t.nav.services}</a>
            <a href="#expertise" className="hover:text-emerald-600">{t.nav.expertise}</a>
            <a href="#cases" className="hover:text-emerald-600">{t.nav.cases}</a>
            <a href="#contact" className="hover:text-emerald-600">{t.nav.contact}</a>
          </nav>
          <div className="flex items-center gap-2">
            <button onClick={()=> setLang(lang === "en" ? "uk" : "en")} className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-4 py-2 text-white text-sm shadow hover:shadow-md">
              <Languages className="h-4 w-4"/>
              {lang === "en" ? "UK" : "EN"}
            </button>
            <a href="#contact" className="hidden md:inline-flex items-center gap-2 rounded-2xl bg-gray-900 px-4 py-2 text-white text-sm shadow hover:shadow-md">
              <Mail className="h-4 w-4" /> {t.cta.getInTouch}
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1 initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="text-4xl md:text-5xl font-extrabold leading-tight">
              { s(cms?.hero?.title) || t.hero.title }
            </motion.h1>
            <p className="mt-5 text-lg text-gray-600">{ tx(cms?.hero?.lead) || t.hero.lead }</p>
            <ul className="mt-6 space-y-2 text-gray-700">
              {heroBullets.map((txt)=> (
                <li key={txt} className="flex items-start gap-3"><CheckCircle className="h-5 w-5 mt-0.5 text-emerald-600"/> {txt}</li>
              ))}
            </ul>
            <div className="mt-8 flex gap-3">
              <a href="#contact" className="rounded-2xl bg-emerald-600 px-5 py-3 text-white font-semibold shadow hover:shadow-md">{t.cta.book}</a>
              <a href="#services" className="rounded-2xl border px-5 py-3 font-semibold hover:bg-gray-50">{t.cta.explore}</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-3xl bg-gradient-to-br from-emerald-100 via-white to-gray-50 shadow-inner"/>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-t bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-bold">{ s(cms?.services?.sectionTitle) || t.services.title }</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {serviceItems.map((item, idx) => {
              // Title: from CMS or fallback
              const title =
                s(item.title as any) ||
                [t.services.s1.title, t.services.s2.title, t.services.s3.title][idx] ||
                "";

              // Bullets: try CMS first
              const cmsBullets = (item.bullets || [])
                .map((b) => (b.text as any)?.[lang])
                .filter(Boolean) as string[];

              // Fallback bullets (hardcoded)
              const fallbackBullets =
                [t.services.s1.bullets, t.services.s2.bullets, t.services.s3.bullets][idx] || [];

              const bullets = cmsBullets.length > 0 ? cmsBullets : fallbackBullets;

              const Icon = [Globe, Building2, Shield][idx] || Globe;
              return <Card key={idx} icon={<Icon className="h-5 w-5" />} title={title} bullets={bullets} />;
            })}
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section id="expertise">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-bold">{ s(cms?.expertise?.title) || t.expertise.title }</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-10">
            <div className="space-y-4 text-gray-700">
              <p>{ tx(cms?.expertise?.p1) || t.expertise.p1 }</p>
              <p>{ tx(cms?.expertise?.p2) || t.expertise.p2 }</p>
            </div>
            <ul className="space-y-3 text-gray-700">
              {expertiseBullets.map((txt)=> (
                <li key={txt} className="flex items-start gap-3"><CheckCircle className="h-5 w-5 mt-0.5 text-emerald-600"/> {txt}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* TRACK RECORD */}
      <section id="cases" className="bg-emerald-50 border-y">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-bold">{ (cms?.cases?.title && (cms.cases.title as any)[lang]) || t.cases.title }</h2>
          <p className="mt-4 text-gray-700 max-w-3xl">{ (cms?.cases?.statement && (cms.cases.statement as any)[lang]) || t.cases.statement }</p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-gray-50 border-t">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-bold">{t.contact.title}</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-10 items-start">
            <div className="space-y-3 text-gray-700">
              <p className="flex items-center gap-2"><Phone className="h-4 w-4"/> {phone}</p>
              <p className="flex items-center gap-2"><Mail className="h-4 w-4"/> {email}</p>
              <p>{address}</p>
            </div>
            <form onSubmit={onSubmit} className="bg-white rounded-3xl p-6 shadow space-y-4">
              <div>
                <label className="block text-sm font-medium">{t.contact.name}</label>
                <input required value={form.name} onChange={(e)=> setForm({...form, name: e.target.value})} className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
              <div>
                <label className="block text-sm font-medium">{t.contact.email}</label>
                <input type="email" required value={form.email} onChange={(e)=> setForm({...form, email: e.target.value})} className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
              <div>
                <label className="block text-sm font-medium">{t.contact.message}</label>
                <textarea required rows={4} value={form.message} onChange={(e)=> setForm({...form, message: e.target.value})} className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
              {error ? <p className="text-red-600 text-sm">{error}</p> : null}
              <button className="w-full rounded-2xl bg-emerald-600 px-4 py-2 text-white font-semibold shadow hover:shadow-md">
                {sent ? t.cta.sent : t.cta.send}
              </button>
              <p className="text-xs text-gray-500">{t.contact.consent}</p>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="HAYABI" className="h-5 w-auto"/>
            <span className="text-[10px] tracking-[0.25em]">{tagline}</span>
          </div>
          <p>© {new Date().getFullYear()} HAYABI. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <Banknote className="h-4 w-4"/>
            <span>Swiss-based consultancy • Operating in Ukraine, Switzerland, EU</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Card({ icon, title, bullets }: { icon: React.ReactNode; title: string; bullets: string[] }) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow hover:shadow-md transition-shadow">
      <div className="flex items-center gap-2 text-emerald-700 font-semibold"><span>{icon}</span> {title}</div>
      <ul className="mt-4 space-y-2 text-gray-700">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-3"><CheckCircle className="h-5 w-5 mt-0.5 text-emerald-600"/> {b}</li>
        ))}
      </ul>
    </div>
  );
}
