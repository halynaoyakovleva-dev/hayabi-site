import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ ok: false, error: "Missing fields" }), { status: 400 });
    }
    const resendKey = process.env.RESEND_API_KEY || "";
    const to = process.env.CONTACT_TO || "halyna.o.yakovleva@gmail.com";
    const from = process.env.CONTACT_FROM || "website@hayabi.ch";

    if (resendKey) {
      const resend = new Resend(resendKey);
      await resend.emails.send({
        from,
        to,
        subject: `HAYABI Website Inquiry — ${name}`,
        reply_to: email,
        text: `From: ${name} <${email}>\n\n${message}`,
      });
    }
    return new Response(JSON.stringify({ ok: true }), { status: 200, headers: { "content-type": "application/json" } });
  } catch (e: any) {
    return new Response(JSON.stringify({ ok: false, error: e?.message || "Error" }), { status: 500 });
  }
}
