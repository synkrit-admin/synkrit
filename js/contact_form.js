// Assuming you're using Node.js and Express.js
const express = require('express');
const nodemailer = require('nodemailer');

const app = express();

// ... other middleware and routes ...

app.post('/contact', (req, res) => {
  const { name, email, phone, company_name, message } = req.body;

  // Validate the data
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please fill in all required fields.' });
  }

  // Create a transporter object using your email provider
  const transporter = nodemailer.createTransport({
    host: 'smtp.your-email-provider.com', // Replace with your email provider's SMTP host
    port: 587, // Replace with your email provider's port
    secure: false, // Replace with your email provider's security settings
    auth: {
      user: 'your-email@example.com', // Replace with your email address
      pass: 'your-email-password', // Replace with your email password
    },
  });

  // Construct the email message
  const mailOptions = {
    from: 'your-email@example.com',
    to: 'admin@synkrit.com',
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCompany Name: ${company_name}\nMessage: ${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error: 'An error occurred while sending the email.' });
    }
    console.log('Message sent: %s', info.messageId);
    return res.json({ message: 'Your message has been sent successfully.' });
  });
});

// ... other routes and middleware ...

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});