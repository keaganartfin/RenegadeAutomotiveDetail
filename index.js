const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/send-email', async (req, res) => {
  const { clientEmail, clientName, bookingDetails } = req.body;

  // Replace these with your own email credentials 
  const transporter = nodemailer.createTransport({
    host: 'smtp-relay.sendinblue.com',
    port: 587,
    secure: false,
    auth: {
      user: 'keagan@artfin.com',
      pass: '509PWmXMKfE2StVT',
    },
  });

  function formatDate(dateString) {
    const date = new Date(dateString);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    
    return `${month}/${day}/${year}`;
  }  

  const hardcodedEmail = 'RenegadeDetailingInfo@gmail.com';
  const formattedDate = formatDate(bookingDetails.date);

  const mailOptions = {
    from: 'keagan@artfin.com',
    to: `${clientEmail}, ${hardcodedEmail}`,
    subject: `Booking confirmation for ${clientName}`,
    html: `
    <div style="text-align: center; font-size: 16px;">
      <h1>Thank you for choosing Renegade Automotive Detail!</h1>
      <p>Your booking details are as follows:</p>
      <p>
        <strong>Vehicle(s):</strong><br />
        ${bookingDetails.vehicles.map((vehicle, index) => `
          <strong>Vehicle ${index + 1}:</strong> ${vehicle.year} ${vehicle.make} ${vehicle.model}<br />
          <strong>Detailing Package:</strong> ${vehicle.detailingPackage}<br />
        `).join('')}
      </p>
      <p>
        <strong>Date:</strong> <span style="color: purple; font-weight: bold;">${formattedDate}</span><br />
        <strong>Time:</strong> <span style="color: purple; font-weight: bold;">${bookingDetails.time}</span>
      </p>
      <p>We look forward to seeing you!</p>
    </div>
  `,
  };
  

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Your Appointment has been scheduled, see you soon!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email');
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Email service listening at http://localhost:${port}`);
});
