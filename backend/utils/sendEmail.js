// const nodeMailer = require("nodemailer");

// const sendEmail = async (options) => {

//     const transporter = nodeMailer.createTransport({
//         host: process.env.SMPT_HOST,
//         port: process.env.SMPT_PORT,
//         service: process.env.SMPT_SERVICE,
//         auth: {
//             user: process.env.SMPT_MAIL,
//             pass: process.env.SMPT_PASSWORD,
//         }
//     })

//     const mailOptions = {
//         from: process.env.SMPT_MAIL,
//         to: options.email,
//         subject: options.subject,
//         text: options.message
//     };

//     await transporter.sendMail(mailOptions);
// }


// module.exports = sendEmail;




const nodeMailer = require("nodemailer");

const sendEmail = async (options) => {
  try {
    // Create a transporter object using Mailgun's SMTP settings
    const transporter = nodeMailer.createTransport({
      host: process.env.SMTP_HOST, // smtp.mailgun.org
      port: process.env.SMTP_PORT, // 587
      secure: process.env.SMTP_SECURE === "true", // false for TLS
      auth: {
        user: process.env.SMTP_MAIL, // support@sandbox344f0155cce24b0094a32f23957d00a2.mailgun.org
        pass: process.env.SMTP_PASSWORD, // Your Mailgun Private API Key
      },
    });

    // Define email options
    const mailOptions = {
      from: process.env.SMTP_MAIL, // support@sandbox344f0155cce24b0094a32f23957d00a2.mailgun.org
      to: options.email, // Recipient email address
      subject: options.subject, // Email subject
      text: options.message, // Email body
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Email could not be sent");
  }
};

module.exports = sendEmail;