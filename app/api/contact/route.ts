import nodemailer from "nodemailer";
import { NextRequest } from "next/server";

const SITE_URL = "https://www.mayowamakinde.dev";
const AUTHOR_NAME = "Mayowa Makinde";
const AUTHOR_TITLE = "Full-Stack Product Engineer";
const LOGO_URL = `${SITE_URL}/images/logo.png`;

function emailShell(content: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0" />
  <title>${AUTHOR_NAME}</title>
</head>
<body style="margin:0;padding:0;background-color:#0a0a0a;font-family:'Segoe UI',Arial,Helvetica,sans-serif;-webkit-font-smoothing:antialiased;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#0a0a0a;">
    <tr>
      <td align="center" style="padding:40px 16px 60px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0"
          style="max-width:600px;width:100%;border-radius:8px;overflow:hidden;border:1px solid #1f1f1f;">

          <!-- ── Banner ── -->
          <tr>
            <td style="background-color:#0d0d0d;border-top:4px solid #de1b1b;padding:36px 40px 28px;text-align:center;">
              <img src="${LOGO_URL}" alt="${AUTHOR_NAME} Logo" width="52" height="52"
                style="display:block;margin:0 auto 14px;border-radius:50%;object-fit:cover;" />
              <p style="margin:0 0 4px;font-size:17px;font-weight:700;letter-spacing:1px;color:#ffffff;text-transform:uppercase;">${AUTHOR_NAME}</p>
              <p style="margin:0;font-size:11px;letter-spacing:2.5px;text-transform:uppercase;color:#de1b1b;font-weight:600;">${AUTHOR_TITLE}</p>
            </td>
          </tr>

          ${content}

          <!-- ── Footer ── -->
          <tr>
            <td style="background-color:#0d0d0d;padding:24px 40px;border-top:1px solid #1a1a1a;text-align:center;">
              <p style="margin:0 0 10px;font-size:13px;color:#444;">
                <a href="${SITE_URL}" style="color:#de1b1b;text-decoration:none;margin:0 8px;">Portfolio</a>
                <span style="color:#2a2a2a;">|</span>
                <a href="${SITE_URL}/projects" style="color:#de1b1b;text-decoration:none;margin:0 8px;">Projects</a>
                <span style="color:#2a2a2a;">|</span>
                <a href="${SITE_URL}/contact" style="color:#de1b1b;text-decoration:none;margin:0 8px;">Contact</a>
              </p>
              <p style="margin:0;font-size:11px;color:#2e2e2e;">&copy; ${new Date().getFullYear()} ${AUTHOR_NAME}. All rights reserved.</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function buildConfirmationEmail(
  name: string,
  email: string,
  projectType: string,
  message: string,
): string {
  return emailShell(`
    <!-- ── Heading ── -->
    <tr>
      <td style="background-color:#111111;padding:40px 40px 24px;">
        <p style="margin:0 0 6px;font-size:11px;letter-spacing:2.5px;text-transform:uppercase;color:#de1b1b;font-weight:600;">Inquiry Confirmed</p>
        <h1 style="margin:0 0 12px;font-size:26px;font-weight:700;color:#ffffff;line-height:1.3;">Your message has been received.</h1>
        <p style="margin:0;font-size:15px;color:#777777;line-height:1.7;">
          Hello <strong style="color:#cccccc;">${name}</strong>, thank you for reaching out.
          I have received your inquiry and will review it personally and respond within 24 to 48 hours.
        </p>
      </td>
    </tr>

    <!-- ── Divider ── -->
    <tr><td style="padding:0 40px;background-color:#111111;"><div style="height:1px;background-color:#1a1a1a;"></div></td></tr>

    <!-- ── Submission Summary ── -->
    <tr>
      <td style="background-color:#111111;padding:28px 40px;">
        <p style="margin:0 0 18px;font-size:11px;letter-spacing:2.5px;text-transform:uppercase;color:#de1b1b;font-weight:600;">Your Submission</p>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td style="padding:11px 0;border-bottom:1px solid #1a1a1a;width:110px;font-size:12px;color:#555555;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;vertical-align:top;">Name</td>
            <td style="padding:11px 0;border-bottom:1px solid #1a1a1a;font-size:14px;color:#cccccc;vertical-align:top;">${name}</td>
          </tr>
          <tr>
            <td style="padding:11px 0;border-bottom:1px solid #1a1a1a;font-size:12px;color:#555555;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;vertical-align:top;">Email</td>
            <td style="padding:11px 0;border-bottom:1px solid #1a1a1a;font-size:14px;color:#cccccc;vertical-align:top;">${email}</td>
          </tr>
          <tr>
            <td style="padding:11px 0;border-bottom:1px solid #1a1a1a;font-size:12px;color:#555555;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;vertical-align:top;">Service</td>
            <td style="padding:11px 0;border-bottom:1px solid #1a1a1a;font-size:14px;color:#cccccc;vertical-align:top;">${projectType || "Not specified"}</td>
          </tr>
          <tr>
            <td style="padding:11px 0;font-size:12px;color:#555555;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;vertical-align:top;">Message</td>
            <td style="padding:11px 0;font-size:14px;color:#aaaaaa;line-height:1.75;vertical-align:top;">${message.replace(/\n/g, "<br>")}</td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- ── Divider ── -->
    <tr><td style="padding:0 40px;background-color:#111111;"><div style="height:1px;background-color:#1a1a1a;"></div></td></tr>

    <!-- ── What Happens Next ── -->
    <tr>
      <td style="background-color:#111111;padding:28px 40px;">
        <p style="margin:0 0 18px;font-size:11px;letter-spacing:2.5px;text-transform:uppercase;color:#de1b1b;font-weight:600;">What Happens Next</p>
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
          <tr>
            <td width="28" valign="top" style="padding-top:2px;">
              <div style="width:18px;height:18px;border-radius:50%;background-color:#de1b1b;text-align:center;line-height:18px;font-size:10px;font-weight:700;color:#ffffff;">1</div>
            </td>
            <td style="padding-bottom:14px;font-size:14px;color:#777777;line-height:1.6;">I will review your message and the details of your project.</td>
          </tr>
          <tr>
            <td width="28" valign="top" style="padding-top:2px;">
              <div style="width:18px;height:18px;border-radius:50%;background-color:#de1b1b;text-align:center;line-height:18px;font-size:10px;font-weight:700;color:#ffffff;">2</div>
            </td>
            <td style="padding-bottom:14px;font-size:14px;color:#777777;line-height:1.6;">You will receive a personalised response within 24 to 48 hours.</td>
          </tr>
          <tr>
            <td width="28" valign="top" style="padding-top:2px;">
              <div style="width:18px;height:18px;border-radius:50%;background-color:#de1b1b;text-align:center;line-height:18px;font-size:10px;font-weight:700;color:#ffffff;">3</div>
            </td>
            <td style="font-size:14px;color:#777777;line-height:1.6;">We will schedule a discovery call if your project is a good fit.</td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- ── CTA ── -->
    <tr>
      <td style="background-color:#111111;padding:4px 40px 44px;text-align:left;">
        <a href="${SITE_URL}/projects"
          style="display:inline-block;padding:13px 32px;background-color:#de1b1b;color:#ffffff;text-decoration:none;font-size:13px;font-weight:700;border-radius:4px;letter-spacing:1px;text-transform:uppercase;">
          Browse My Work
        </a>
      </td>
    </tr>
  `);
}

function buildOwnerNotificationEmail(
  name: string,
  email: string,
  projectType: string,
  message: string,
): string {
  const replySubject = encodeURIComponent(`Re: Portfolio Inquiry — ${projectType || "General"}`);

  return emailShell(`
    <!-- ── Alert Bar ── -->
    <tr>
      <td style="background-color:#160505;padding:14px 40px;border-bottom:1px solid #2a0a0a;">
        <p style="margin:0;font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#de1b1b;font-weight:700;">
          New inquiry via portfolio contact form
        </p>
      </td>
    </tr>

    <!-- ── Heading ── -->
    <tr>
      <td style="background-color:#111111;padding:36px 40px 24px;">
        <p style="margin:0 0 6px;font-size:11px;letter-spacing:2.5px;text-transform:uppercase;color:#555555;font-weight:600;">Enquiry Type</p>
        <h1 style="margin:0 0 10px;font-size:26px;font-weight:700;color:#ffffff;line-height:1.3;">${projectType || "General Request"}</h1>
        <p style="margin:0;font-size:14px;color:#666666;line-height:1.6;">
          Submitted by <strong style="color:#cccccc;">${name}</strong>
          &nbsp;&mdash;&nbsp;
          <a href="mailto:${email}" style="color:#de1b1b;text-decoration:none;">${email}</a>
        </p>
      </td>
    </tr>

    <!-- ── Divider ── -->
    <tr><td style="padding:0 40px;background-color:#111111;"><div style="height:1px;background-color:#1a1a1a;"></div></td></tr>

    <!-- ── Sender Details ── -->
    <tr>
      <td style="background-color:#111111;padding:28px 40px;">
        <p style="margin:0 0 18px;font-size:11px;letter-spacing:2.5px;text-transform:uppercase;color:#de1b1b;font-weight:600;">Sender Details</p>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td style="padding:11px 0;border-bottom:1px solid #1a1a1a;width:110px;font-size:12px;color:#555555;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;vertical-align:top;">Full Name</td>
            <td style="padding:11px 0;border-bottom:1px solid #1a1a1a;font-size:14px;color:#cccccc;vertical-align:top;">${name}</td>
          </tr>
          <tr>
            <td style="padding:11px 0;border-bottom:1px solid #1a1a1a;font-size:12px;color:#555555;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;vertical-align:top;">Email</td>
            <td style="padding:11px 0;border-bottom:1px solid #1a1a1a;font-size:14px;vertical-align:top;">
              <a href="mailto:${email}" style="color:#de1b1b;text-decoration:none;">${email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding:11px 0;font-size:12px;color:#555555;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;vertical-align:top;">Service</td>
            <td style="padding:11px 0;font-size:14px;color:#cccccc;vertical-align:top;">${projectType || "Not specified"}</td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- ── Divider ── -->
    <tr><td style="padding:0 40px;background-color:#111111;"><div style="height:1px;background-color:#1a1a1a;"></div></td></tr>

    <!-- ── Message ── -->
    <tr>
      <td style="background-color:#111111;padding:28px 40px;">
        <p style="margin:0 0 18px;font-size:11px;letter-spacing:2.5px;text-transform:uppercase;color:#de1b1b;font-weight:600;">Message</p>
        <div style="background-color:#0d0d0d;border-left:3px solid #de1b1b;border-radius:0 4px 4px 0;padding:20px 24px;">
          <p style="margin:0;font-size:14px;color:#cccccc;line-height:1.85;">${message.replace(/\n/g, "<br>")}</p>
        </div>
      </td>
    </tr>

    <!-- ── Reply CTA ── -->
    <tr>
      <td style="background-color:#111111;padding:4px 40px 44px;text-align:left;">
        <a href="mailto:${email}?subject=${replySubject}"
          style="display:inline-block;padding:13px 32px;background-color:#de1b1b;color:#ffffff;text-decoration:none;font-size:13px;font-weight:700;border-radius:4px;letter-spacing:1px;text-transform:uppercase;">
          Reply to ${name}
        </a>
      </td>
    </tr>
  `);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, projectType, message } = body;

    if (!name || !email || !message) {
      return Response.json(
        { error: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      family: 4,
    } as nodemailer.TransportOptions);

    await Promise.all([
      transporter.sendMail({
        from: process.env.SMTP_FROM,
        to: process.env.SMTP_USER,
        replyTo: email,
        subject: `New Inquiry: ${projectType || "General"} from ${name}`,
        html: buildOwnerNotificationEmail(name, email, projectType, message),
      }),
      transporter.sendMail({
        from: process.env.SMTP_FROM,
        to: email,
        replyTo: process.env.SMTP_USER,
        subject: `Message Received — ${AUTHOR_NAME}`,
        html: buildConfirmationEmail(name, email, projectType, message),
      }),
    ]);

    return Response.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    return Response.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 },
    );
  }
}
