import type { APIRoute } from "astro";
import { Resend } from "resend";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    // Check for Resend API key
    const apiKey = import.meta.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured");
      return new Response(
        JSON.stringify({ ok: false, error: "Server configuration error" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    // Parse form data
    const formData = await request.formData();
    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const message = formData.get("message")?.toString().trim();
    const honey = formData.get("_honey")?.toString();
    const startedAt = formData.get("_startedAt")?.toString();

    // Spam protection: honeypot
    if (honey) {
      console.warn("Spam detected: honeypot filled");
      return new Response(
        JSON.stringify({ ok: false, error: "Invalid submission" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Spam protection: timing (optional - form submitted too quickly)
    if (startedAt) {
      const elapsed = Date.now() - parseInt(startedAt, 10);
      if (elapsed < 2000) {
        console.warn("Spam detected: form submitted too quickly");
        return new Response(
          JSON.stringify({ ok: false, error: "Invalid submission" }),
          { status: 400, headers: { "Content-Type": "application/json" } }
        );
      }
    }

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ ok: false, error: "All fields are required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ ok: false, error: "Invalid email address" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Validate message length
    if (message.length < 10) {
      return new Response(
        JSON.stringify({ ok: false, error: "Message is too short" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    if (message.length > 5000) {
      return new Response(
        JSON.stringify({ ok: false, error: "Message is too long" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Initialize Resend
    const resend = new Resend(apiKey);

    // Send email
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <no-reply@ivanmendez.dev>",
      to: "ivanmw.dev@gmail.com",
      replyTo: email,
      subject: `New Contact Form Message from ${name}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #000000; margin-bottom: 20px;">New Contact Form Submission</h2>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <p style="margin: 0 0 10px 0;"><strong>From:</strong> ${name}</p>
            <p style="margin: 0 0 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 0;"><strong>Date:</strong> ${new Date().toLocaleString("en-US", { timeZone: "UTC" })}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e5e5; border-radius: 8px;">
            <h3 style="margin-top: 0; color: #000000;">Message:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6; color: #333333;">${message}</p>
          </div>
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e5e5; color: #666666; font-size: 12px;">
            <p>This message was sent from your portfolio contact form at ivanmendez.dev</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API error:", error);
      return new Response(
        JSON.stringify({ ok: false, error: "Failed to send email" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    console.log("Email sent successfully:", data?.id);

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return new Response(
      JSON.stringify({ ok: false, error: "Internal server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
