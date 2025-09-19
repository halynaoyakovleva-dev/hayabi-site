import "./globals.css";
import CookieConsent from "@/components/CookieConsent";

export const metadata = {
  title: "HAYABI — Ukrainian Public Procurement Consultancy",
  description: "HAYABI: end-to-end consulting for Ukrainian public procurement (Prozorro) and compliance.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  return (
    <html lang="en">
      <head>
        {domain ? <script defer data-domain={domain} src="https://plausible.io/js/script.js"></script> : null}
        <link rel="icon" href="/logo.png" />
      </head>
      <body>
        {children}
        <CookieConsent/>
      </body>
    </html>
  );
}
