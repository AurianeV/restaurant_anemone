const nodemailer = require('nodemailer');

// Configuration du transport de messagerie avec Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_ADDRESS, 
    pass: process.env.EMAIL_PASSWORD,
  }
});

// Fonction pour envoyer un e-mail de notification
const sendNotificationEmail = (clientEmail, subject, text) => {
  const mailOptions = {
    from: 'anemonecoffee1@gmail.com',
    to: clientEmail,
    subject: subject,
    text: text
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.error('Erreur lors de l\'envoi de l\'e-mail de notification :', error);
    } else {
      console.log('E-mail de notification envoyé avec succès :', info.response);
    }
  });
};

export default sendNotificationEmail;
