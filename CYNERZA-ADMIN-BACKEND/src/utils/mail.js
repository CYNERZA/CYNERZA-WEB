import nodemailer from "nodemailer"
import Mailgen from "mailgen"
import { ApiError } from "./ApiError.js"


const sendMail = async (options) => {
    const mailGenerator = new Mailgen({
        theme: "default",
        product: {
            name: "CYNERZA",
            link: "https://cynerza.com",
            logo: "../../public/android-chrome-512x512.png"
        }
    })

    const emailTextual = mailGenerator.generatePlaintext(options.mailGenContent)
    const emailHtml = mailGenerator.generate(options.mailGenContent)

    const transporter = nodemailer.createTransport({
        service: "gmail",
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD
        }
    })

    const mail = {
        from: `"CYNERZA Contact" <${process.env.EMAIL}>`,
        to: process.env.EMAIL,
        replyTo: options.email,
        subject: options.subject,
        html: emailHtml,
        text: emailTextual
    }

    try {
        await transporter.sendMail(mail).then(() => {
            console.log("Email sent...");
        })
    } catch (error) {
        console.log("Email service failed...!", error);
        throw new ApiError(400, "Email service failed...!", error)

    }
}


const sendAdminMailGenContent = (user) => {
    // Format current date
    const currentDate = new Date().toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    const fullName = `${user.firstName} ${user.lastName}`;
    const initials = `${user.firstName.charAt(0)}${user.lastName.charAt(0)}`.toUpperCase();

    // ============================================
    // STYLE CONSTANTS (Easy to modify)
    // ============================================
    const colors = {
        primary: '#667eea',
        primaryDark: '#764ba2',
        text: '#111827',
        textLight: '#6b7280',
        background: '#f9fafb',
        border: '#e5e7eb',
        white: '#ffffff'
    };

    const styles = {
        container: 'padding: 20px; background: #ffffff; border-radius: 12px;',
        card: 'background: #f9fafb; border-radius: 10px; padding: 16px; border: 1px solid #e5e7eb; margin-bottom: 12px;',
        label: 'font-size: 11px; font-weight: 600; color: #9ca3af; text-transform: uppercase; margin-bottom: 4px;',
        value: 'font-size: 15px; font-weight: 600; color: #111827;'
    };

    // ============================================
    // HEADER SECTION
    // ============================================
    const headerSection = `
        <div style="padding: 20px; text-align: center; background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%); border-radius: 12px 12px 0 0;">
            <img src="https://cynerza.ai/logo.png" alt="Cynerza Logo" style="height: 40px; filter: brightness(0) invert(1);">
            <div style="margin-top: 10px; font-size: 13px; color: rgba(255,255,255,0.95); font-weight: 500;">
                🔔 New Service Request • ${currentDate}
            </div>
        </div>
    `;

    // ============================================
    // CONTACT PROFILE SECTION
    // ============================================
    const profileSection = `
        <div style="padding: 24px; background: ${colors.white};">
            <!-- Contact Header -->
            <div style="margin-bottom: 24px; padding-bottom: 16px; border-bottom: 2px solid ${colors.border};">
                <table cellpadding="0" cellspacing="0" style="width: 100%;">
                    <tr>
                        <td style="width: 60px; vertical-align: top;">
                            <div style="width: 50px; height: 50px; background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white; font-size: 20px; font-weight: 700; text-align: center; line-height: 50px;">
                                ${initials}
                            </div>
                        </td>
                        <td style="vertical-align: top;">
                            <h2 style="margin: 0 0 4px; font-size: 18px; font-weight: 700; color: ${colors.text};">
                                ${fullName}
                            </h2>
                            <div style="font-size: 13px; color: ${colors.textLight};">
                                ✉️ ${user.email}
                            </div>
                        </td>
                    </tr>
                </table>
            </div>

            <!-- Contact Details -->
            <table cellpadding="0" cellspacing="0" style="width: 100%; margin-bottom: 20px;">
                <tr>
                    <td style="width: 50%; padding-right: 8px; vertical-align: top;">
                        <div style="${styles.card}">
                            <div style="${styles.label}">🏢 Organization</div>
                            <div style="${styles.value}">${user.organization}</div>
                        </div>
                    </td>
                    <td style="width: 50%; padding-left: 8px; vertical-align: top;">
                        <div style="${styles.card}">
                            <div style="${styles.label}">🌍 Region</div>
                            <div style="${styles.value}">${user.region}</div>
                        </div>
                    </td>
                </tr>
            </table>

            <div style="${styles.card}">
                <div style="${styles.label}">🏭 Industry</div>
                <div style="${styles.value}">${user.industry}</div>
            </div>
        </div>
    `;

    // ============================================
    // MESSAGE SECTION
    // ============================================
    const messageSection = `
        <div style="padding: 0 24px 24px 24px; background: ${colors.white};">
            <div style="background: ${colors.background}; border-radius: 10px; padding: 18px; border-left: 4px solid ${colors.primary};">
                <div style="font-size: 12px; font-weight: 700; color: ${colors.textLight}; text-transform: uppercase; margin-bottom: 10px;">
                    💬 Request Details
                </div>
                <div style="font-size: 14px; line-height: 1.6; color: #374151;">
                    ${user.message.replace(/\n/g, '<br>')}
                </div>
            </div>
        </div>
    `;

    // ============================================
    // FOOTER SECTION
    // ============================================
    const footerSection = `
        <div style="padding: 16px; text-align: center; font-size: 12px; color: ${colors.textLight}; background: ${colors.background}; border-radius: 0 0 12px 12px;">
            <p style="margin: 0 0 6px;">
                📋 Submitted via Cynerza Contact Form
            </p>
            <p style="margin: 0; font-size: 11px; color: #9ca3af;">
                Automated notification • Please respond directly to the customer
            </p>
        </div>
    `;

    // ============================================
    // RETURN EMAIL STRUCTURE
    // ============================================
    return {
        body: {
            name: "Team",
            greeting: false,
            intro: [
                headerSection,
                profileSection,
                messageSection
            ],
            action: {
                instructions: `<div style="padding: 20px; background: ${colors.white}; text-align: center;">
                    <p style="margin: 0 0 14px; font-size: 13px; color: ${colors.textLight};">Quick Action</p>`,
                button: {
                    color: colors.primary,
                    text: "📧 Reply to Customer",
                    link: `mailto:${user.email}?subject=Re: Your Service Request&body=Hi ${user.firstName},%0D%0A%0D%0AThank you for contacting Cynerza!%0D%0A%0D%0AWe've received your inquiry and will respond shortly.%0D%0A%0D%0ABest regards,%0D%0ACynerza Team`
                }
            },
            outro: [footerSection],
            signature: false
        }
    };
};

export default sendAdminMailGenContent;



export {
    sendMail,
    sendAdminMailGenContent
}