import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

// Simple email validation
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Sanitize input to prevent XSS
function sanitize(input: string): string {
  return input
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .trim();
}

// Create SMTP transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
};

// Send email using Nodemailer
async function sendEmailWithNodemailer(data: {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}): Promise<{ success: boolean; error?: string }> {
  const emailUser = process.env.EMAIL_USER;
  const webSentFrom = process.env.EMAIL_WEBSITE;
  const contactEmail = process.env.CONTACT_EMAIL;

  if (!emailUser || !contactEmail || !webSentFrom) {
    console.error("Email configuration missing");
    return { success: false, error: "Email service not configured" };
  }

  try {
    const transporter = createTransporter();

    const mailOptions = {
      from: `"Portfolio Contact" <${webSentFrom}>`,
      to: contactEmail,
      replyTo: `"${data.name}" <${data.email}>`,
      subject: `New Portfolio Message – ${data.subject}`,
      html: `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>New Contact Message</title>
  </head>

  <body style="
    margin: 0;
    padding: 0;
    background-color: #f4f6f8;
    font-family: Arial, Helvetica, sans-serif;
  ">
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center" style="padding: 40px 16px;">
          
          <!-- Card -->
          <table width="100%" cellpadding="0" cellspacing="0" style="
            max-width: 600px;
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 8px 24px rgba(0,0,0,0.08);
          ">
            
            <!-- Header -->
            <tr>
              <td style="
                background: linear-gradient(135deg, #2563eb, #1e40af);
                color: #ffffff;
                padding: 24px;
                text-align: center;
              ">
                <h1 style="margin: 0; font-size: 22px;">
                  📩 New Contact Message
                </h1>
                <p style="margin: 6px 0 0; font-size: 14px; opacity: 0.9;">
                  Portfolio Website
                </p>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding: 24px;">
                
                <p style="font-size: 15px; color: #333;">
                  You have received a new message from your portfolio contact page.
                </p>

                <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 16px;">
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; width: 120px;">
                      Name:
                    </td>
                    <td style="padding: 8px 0;">
                      ${data.name}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding: 8px 0; font-weight: bold;">
                      Email:
                    </td>
                    <td style="padding: 8px 0;">
                      <a href="mailto:${data.email}" style="color: #2563eb;">
                        ${data.email}
                      </a>
                    </td>
                  </tr>

                  ${data.phone ? `
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold;">
                      Phone:
                    </td>
                    <td style="padding: 8px 0;">
                      <a href="tel:${data.phone}" style="color: #2563eb;">
                        ${data.phone}
                      </a>
                    </td>
                  </tr>
                  ` : ''}

                  <tr>
                    <td style="padding: 8px 0; font-weight: bold;">
                      Subject:
                    </td>
                    <td style="padding: 8px 0; color: #2563eb;">
                      ${data.subject}
                    </td>
                  </tr>
                </table>

                <!-- Message Box -->
                <div style="
                  margin-top: 20px;
                  padding: 16px;
                  background-color: #f9fafb;
                  border-left: 4px solid #2563eb;
                  border-radius: 4px;
                ">
                  <p style="margin: 0 0 8px; font-weight: bold;">
                    Message:
                  </p>
                  <p style="margin: 0; color: #444; line-height: 1.6;">
                    ${data.message.replace(/\n/g, "<br />")}
                  </p>
                </div>

              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="
                background-color: #f1f5f9;
                padding: 16px;
                text-align: center;
                font-size: 12px;
                color: #666;
              ">
                © ${new Date().getFullYear()} Sohanur Rahman Portfolio
              </td>
            </tr>

          </table>

        </td>
      </tr>
    </table>
  </body>
</html>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.messageId);
    return { success: true };
  } catch (error) {
    console.error("Nodemailer error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to send email",
    };
  }
}

// Send auto-reply email to client
async function sendAutoReplyEmail(data: {
  name: string;
  email: string;
  subject: string;
}): Promise<{ success: boolean; error?: string }> {
  const emailUser = process.env.EMAIL_USER;
  const emailFrom = process.env.EMAIL_FROM;

  if (!emailUser || !emailFrom) {
    console.error("Email configuration missing for auto-reply");
    return { success: false, error: "Email service not configured" };
  }

  try {
    const transporter = createTransporter();

    const mailOptions = {
      from: `"Sohanur Rahman Jahin" <${emailFrom}>`,
      to: `"${data.name}" <${data.email}>`,
      subject: `Re: ${data.subject} - Message Received`,
      html: `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Message Received</title>
  </head>

  <body style="
    margin: 0;
    padding: 0;
    background-color: #f4f6f8;
    font-family: Arial, Helvetica, sans-serif;
  ">
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center" style="padding: 40px 16px;">
          
          <!-- Card -->
          <table width="100%" cellpadding="0" cellspacing="0" style="
            max-width: 600px;
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 8px 24px rgba(0,0,0,0.08);
          ">
            
            <!-- Header -->
            <tr>
              <td style="
                background: linear-gradient(135deg, #10b981, #059669);
                color: #ffffff;
                padding: 24px;
                text-align: center;
              ">
                <h1 style="margin: 0; font-size: 22px;">
                  ✅ Message Received
                </h1>
                <p style="margin: 6px 0 0; font-size: 14px; opacity: 0.9;">
                  Thank you for reaching out!
                </p>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding: 24px;">
                
                <p style="font-size: 15px; color: #333; margin-bottom: 16px;">
                  Hi <strong>${data.name}</strong>,
                </p>

                <p style="font-size: 15px; color: #333; line-height: 1.6; margin-bottom: 16px;">
                  Thank you for contacting me! I've received your message regarding "<strong style="color: #2563eb;">${data.subject}</strong>" and I'll get back to you  within 2 hours.
                </p>

                <p style="font-size: 15px; color: #333; line-height: 1.6; margin-bottom: 16px;">
                  If your inquiry is urgent, feel free to connect with me on LinkedIn.
                </p>

                <!-- Info Box -->
                <div style="
                  margin-top: 20px;
                  padding: 16px;
                  background-color: #f0f9ff;
                  border-left: 4px solid #2563eb;
                  border-radius: 4px;
                ">
                  <p style="margin: 0; color: #1e40af; font-size: 14px; line-height: 1.6;">
                    <strong>💼 LinkedIn:</strong> <a href="https://www.linkedin.com/in/sohanur-tech" style="color: #2563eb;">linkedin.com/in/sohanur-tech</a>
                  </p>
                </div>

                <p style="font-size: 15px; color: #333; line-height: 1.6; margin-top: 20px;">
                  Best regards,<br />
                  <strong>Sohanur Rahman Jahin</strong><br />
                  <span style="color: #666; font-size: 14px;">Full Stack Developer</span>
                </p>

              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="
                background-color: #f1f5f9;
                padding: 16px;
                text-align: center;
                font-size: 12px;
                color: #666;
              ">
                This is an automated confirmation email.<br />
                </td>br
                © ${new Date().getFullYear()} Sohanur Rahman Portfolio
            </tr>

          </table>

        </td>
      </tr>
    </table>
  </body>
</html>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Auto-reply sent successfully:", info.messageId);
    return { success: true };
  } catch (error) {
    console.error("Nodemailer auto-reply error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to send auto-reply",
    };
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    if (!isValidEmail(body.email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Validate message length
    if (body.message.length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters" },
        { status: 400 }
      );
    }

    if (body.message.length > 5000) {
      return NextResponse.json(
        { error: "Message is too long (max 5000 characters)" },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitize(body.name),
      email: sanitize(body.email),
      phone: body.phone ? sanitize(body.phone) : undefined,
      subject: sanitize(body.subject),
      message: sanitize(body.message),
    };

    // Log the contact form submission
    console.log("Contact form submission:", {
      ...sanitizedData,
      timestamp: new Date().toISOString(),
    });

    // Send email using Nodemailer
    const emailResult = await sendEmailWithNodemailer(sanitizedData);

    if (!emailResult.success) {
      return NextResponse.json(
        { error: emailResult.error || "Failed to send message" },
        { status: 500 }
      );
    }

    // Send auto-reply email to client
    const autoReplyResult = await sendAutoReplyEmail({
      name: sanitizedData.name,
      email: sanitizedData.email,
      subject: sanitizedData.subject,
    });

    // Log if auto-reply fails but don't fail the whole request
    if (!autoReplyResult.success) {
      console.error("Auto-reply failed:", autoReplyResult.error);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your message! I'll get back to you soon.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}

// Handle other methods
export async function GET() {
  return NextResponse.json(
    { error: "Method not allowed" },
    { status: 405 }
  );
}
