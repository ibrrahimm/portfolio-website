import { createClient } from "@supabase/supabase-js";

export async function POST(request) {
  try {
    const body = await request.json();
    const { formType, lang, fullName, email, company, reason, message } = body ?? {};

    if (!formType || !fullName || !email) {
      return Response.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const payload = {
      form_type: formType,
      lang: lang ?? "en",
      full_name: fullName,
      email,
      company: company ?? "",
      reason: reason ?? "",
      message: message ?? "",
      submitted_at: new Date().toISOString(),
    };

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey =
      process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      return Response.json(
        { ok: false, error: "Supabase environment variables are not configured" },
        { status: 500 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });

    const { error } = await supabase.from("contact_submissions").insert(payload);

    if (error) {
      return Response.json(
        { ok: false, error: error.message || "Supabase insert failed" },
        { status: 500 }
      );
    }

    return Response.json({ ok: true });
  } catch {
    return Response.json(
      { ok: false, error: "Unable to process the contact submission" },
      { status: 500 }
    );
  }
}
