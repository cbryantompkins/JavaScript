var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'Outlook365',
  auth: {
    user: 'ctompkins@mmitnetwork.com',
    pass: 'M@cintosh1'
  }
});

var mailOptions = {
  to: 'ctompkins@mmitnetwork.com',
  from: 'ctompkins@mmitnetwork.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});