const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const app = express();



app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))

//sending emails with endGrid
app.post('/sendEmail', (req, res) => {
  var helper = require('sendgrid').mail;
  var fromEmail = new helper.Email(req.body.fromEmail);
  var toEmail = new helper.Email(process.env.TO_EMAIL);
  var subject = 'Email from your webfrom';
  var content = new helper.Content('text/plain', req.body.content);
  var mail = new helper.Mail(subject, fromEmail, firstName, lastName, phone, content);

  var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
  var request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON()
  });

  sg.API(request, function (error, response) {
    if (error) {
      console.log('Error response received');
    }
    console.log(response.statusCode);
    console.log(response.body);
    console.log(response.headers);
  });
  res.redirect('/');
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
