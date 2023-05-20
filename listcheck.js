const cron = require('node-cron');
const nodemailer = require('nodemailer');

// Setup the email transporter
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'danpas317@gmail.com',
    pass: '1qazXSW@3edc'
  }
});

// This function checks the events and send emails
function checkEvents() {
  // Load the events from localStorage (or a database)
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    if (key.startsWith('event-')) {
      let event = JSON.parse(localStorage.getItem(key));
      
      // Get today's date
      let today = new Date();
      let dateString = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
      // If the event is today
      if (event.date === dateString) {
        // Send the email
        let mailOptions = {
          from: 'danpas317@gmail.com',
          to: event.email,
          subject: 'Event Reminder: ' + event.name,
          text: 'This is a reminder for your event: ' + event.name + '. '
        };
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });
      }
    }
  }
}

// Schedule the task to run at 9 AM every day
cron.schedule('42 15 * * *', function() {
  console.log('Running the check events task.');
  checkEvents();
});
