const nodemailer = require("nodemailer");

// Create Nodemailer transporter
let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: 'seifabichou20@gmail.com', // Your email address
    pass: 'your_password', // Your password
  },
});

// Define sendEmail function
const sendEmail = async (req, res) => { 
  const { name, email, subject, message } = req.body;
  console.log(name, email, subject, message);

  // Define email content
  var mailOptions = {
    from: email,
    to: "recipient_email@example.com", // Recipient's email address
    subject: subject,
    html: `
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Message: ${message}</p>
    `,
  };

  // Send email
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
    res.status(200).send({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send({ error: 'Failed to send email' });
  }
};

// Export sendEmail function
module.exports = { sendEmail };
