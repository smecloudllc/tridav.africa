import { NextResponse } from "next/server";

import { contactSchema } from "@/lib/contact-schema";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body" },
      { status: 400 },
    );
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten().fieldErrors },
      { status: 422 },
    );
  }

  // TODO: forward to email service / CRM (e.g. Resend, HubSpot).
  // Env vars for that belong in .env — see .env.example.
  console.log("[contact] consultation request received:", parsed.data);

  return NextResponse.json({ ok: true });
}
