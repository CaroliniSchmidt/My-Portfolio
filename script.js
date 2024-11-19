const form = document.getElementById('contact'); // Selects the entire contact section
const nameInput = document.getElementById('name'); // Selects the name input field
const emailInput = document.getElementById('email'); // Selects the email input field
const messageInput = document.getElementById('text'); // Selects the message input field
const submitButton = form.querySelector('input[type="submit"]'); // Selects the submit button

// Replace with your EmailJS service ID and template ID

const serviceID = "service_izwpg01";
const templateID = "template_9qjksfv";

submitButton.addEventListener('click', (event) => {
  event.preventDefault();

  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;   


  emailjs.send(serviceID, templateID, {
    name: name,
    email: email,
    message: message,
  })
    .then(() => {
      alert('Email sent successfully!'); // Success message
    })
    .catch(() => {
      alert('Error sending email. Please try again.'); // Error message
    });
});