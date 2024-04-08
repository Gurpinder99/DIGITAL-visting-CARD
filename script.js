

var saveBtn = document.querySelector(".btn");
saveBtn.addEventListener("click", function () {
  // Get the contact information from the website
  var contact = {
    name: "Dr.Jobanpreet singh",
    phone: "9781939291",
  
  };
  // create a vcard file
  var vcard = "BEGIN:VCARD\nVERSION:2.1\nFN:" + contact.name + "\nTEL;MOBILE:" + contact.phone + "\nEND:VCARD";
  var blob = new Blob([vcard], { type: "text/vcard" });
  var url = URL.createObjectURL(blob);
  
  const newLink = document.createElement('a');
  newLink.download = contact.name + ".vcf";
  newLink.textContent = contact.name;
  newLink.href = url;
  
  newLink.click();
});


if ('serviceWorker' in navigator && 'beforeinstallprompt' in window) {
  const addToHomeButton = document.getElementById('addToHomeButton');

  // Hide the button initially
  addToHomeButton.style.display = 'none';

  // Listen for the "beforeinstallprompt" event
  window.addEventListener('beforeinstallprompt', (event) => {
      // Prevent the default prompt
      event.preventDefault();

      // Show the button
      addToHomeButton.style.display = 'block';

      // Store the event for later use
      let deferredPrompt = event;

      // Handle the button click event
      addToHomeButton.addEventListener('click', () => {
          // Show the install prompt
          deferredPrompt.prompt();

          // Wait for the user to respond to the prompt
          deferredPrompt.userChoice.then((choiceResult) => {
              // Reset the deferredPrompt
              deferredPrompt = null;
          });
      });
  });
} else {
  // If service workers or beforeinstallprompt are not supported
  console.error('Service workers or beforeinstallprompt are not supported.');
};