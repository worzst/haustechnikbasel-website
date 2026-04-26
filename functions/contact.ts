interface Env {
  RESEND_API_KEY: string;
  CONTACT_TO: string;
  CONTACT_FROM: string;
  CONTACT_BCC: string;
}

const escape = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  let data: Record<string, string>;

  try {
    data = await request.json();
  } catch {
    return Response.json({ ok: false }, { status: 400 });
  }

  // Honeypot — bots fill this, humans don't
  if (data._hp) {
    return Response.json({ ok: true });
  }

  const { name, tel, email, plz, timing, message } = data;

  if (!name?.trim() || !email?.trim() || !tel?.trim()) {
    return Response.json({ ok: false }, { status: 400 });
  }

  const html = `
    <p><strong>Name:</strong> ${escape(name)}</p>
    <p><strong>Telefon:</strong> ${escape(tel)}</p>
    <p><strong>E-Mail:</strong> <a href="mailto:${escape(email)}">${escape(email)}</a></p>
    ${plz ? `<p><strong>PLZ / Ort:</strong> ${escape(plz)}</p>` : ""}
    ${timing ? `<p><strong>Zeitrahmen:</strong> ${escape(timing)}</p>` : ""}
    ${message ? `<p><strong>Beschreibung:</strong><br>${escape(message).replace(/\n/g, "<br>")}</p>` : ""}
  `;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: env.CONTACT_FROM,
      to: env.CONTACT_TO,
      ...(env.CONTACT_BCC ? { bcc: env.CONTACT_BCC } : {}),
      reply_to: email,
      subject: `Badsanierungs-Anfrage von ${escape(name)}`,
      html,
    }),
  });

  if (!res.ok) {
    console.error("Resend error:", await res.text());
    return Response.json({ ok: false }, { status: 500 });
  }

  return Response.json({ ok: true });
};
