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
    const currentDate = new Date().toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    return {
        body: {
            name: "Team",
            greeting: false,
            intro: [
                // Clean Header with Branding
                `<div style="
          padding: 1rem;
          text-align: center;
          background: #ffffff;
          border-bottom: 1px solid #f3f4f6;
        ">
          <img src="https://cynerza.ai/logo.png" alt="Cynerza" style="height: 32px;">
          <div style="margin-top: 15px; font-size: 13px; color: #6b7280;">
            New contact form submission • ${currentDate}
          </div>
        </div>`,

                // User Profile Section
                `<div style="
          padding: 30px 20px 20px;
          background: #ffffff;
        ">
          <div style="
            display: flex;
            align-items: center;
            margin-bottom: 25px;
          ">
            <div style="
              width: 48px;
              height: 48px;
              background: #f9fafb;
              border-radius: 12px;
              display: flex;
              align-items: center;
              justify-content: center;
              margin-right: 16px;
              border: 1px solid #f3f4f6;
              color: #4f46e5;
              font-size: 20px;
              font-weight: 600;
            ">
              ${user.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <h2 style="
                margin: 0 0 4px;
                font-size: 18px;
                font-weight: 600;
                color: #111827;
              ">${user.name}</h2>
              <div style="font-size: 14px; color: #6b7280;">
                ${user.email}
              </div>
              ${user.company ? `<div style="
                font-size: 14px;
                color: #6b7280;
                margin-top: 4px;
                display: flex;
                align-items: center;
              ">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 6px;">
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <path d="M16 8v4l3 3"></path>
                </svg>
                ${user.company}
              </div>` : ''}
            </div>
          </div>

          <!-- Message Card -->
          <div style="
            background: #f9fafb;
            border-radius: 12px;
            padding: 20px;
            position: relative;
            border: 1px solid #f3f4f6;
          ">
            <p style="
              margin: 0;
              font-size: 15px;
              line-height: 1.6;
              color: #374151;
            ">
              ${user.message.replace(/\n/g, '<br>')}
            </p>
          </div>
        </div>`
            ],

            // Action Section
            action: [
                {
                    instructions: `<div style="
            padding: 20px;
            background: #f9fafb;
            border-top: 1px solid #f3f4f6;
            text-align: center;
          ">
            <p style="
              margin: 0 0 16px;
              font-size: 14px;
              color: #6b7280;
            ">Quick actions:</p>`,
                    button: {
                        color: "#4f46e5",
                        text: "Reply to Message",
                        link: `mailto:${user.email}?subject=Re: Your Cynerza Inquiry&body=Hi ${user.name.split(' ')[0]},\n\nThank you for reaching out!\n\n`,
                        style: `
              background: #4f46e5;
              border-radius: 8px;
              font-weight: 500;
              padding: 12px 24px;
              font-size: 15px;
            `
                    }
                }
            ],

            // Footer
            outro: [
                `<div style="
          padding: 20px;
          text-align: center;
          font-size: 13px;
          color: #9ca3af;
          background: #ffffff;
          border-top: 1px solid #f3f4f6;
        ">
          <p style="margin: 0 0 12px;">
            This message was sent from the Cynerza contact form.
          </p>
        </div>`
            ],
            signature: false
        }
    };
};


export {
    sendMail,
    sendAdminMailGenContent
}