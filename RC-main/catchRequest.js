document.addEventListener("DOMContentLoaded", function () {
    const sendMessageButton = document.getElementById("sendMessageButton");
    const statusMessage = document.getElementById("statusMessage");
  
    sendMessageButton.addEventListener("click", function (event) {
      event.preventDefault();
  
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phoneNumber = document.getElementById("phoneNumber").value;
      const message = document.getElementById("message").value;
  
      const formData = {
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        message: message,
      };
  
      fetch("/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then(response => response.json())
        .then(data => {
          // Display a success message to the user
          
          statusMessage.textContent = "Message sent successfully!";
          statusMessage.style.color = "green";
        })
        .catch(error => {
          // Display an error message to the user
          // statusMessage.textContent = "Error sending message. Please try again.";
          // statusMessage.style.color = "red";
        });
    });
  });
  