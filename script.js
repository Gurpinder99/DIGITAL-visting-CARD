

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


    // Array of image URLs (replace these with your actual image URLs)
    var imageUrls = [
    
      "assets (2)/asset 2.jpeg",
      "assets (2)/asset 3.jpeg",
      "assets (2)/asset 4.jpeg",
      "assets (2)/asset 5.jpeg",
      "assets (2)/asset 6.jpeg", 
      "assets (2)/asset 7.jpeg",
      "assets (2)/asset 8.jpeg",
      "assets (2)/asset 9.jpeg",
      "assets (2)/asset 10.jpeg",
      "assets (2)/asset 11.jpeg",
     
      "assets (2)/asset 12.jpeg",
      "assets (2)/asset 13.jpeg",
      "assets (2)/asset 14.jpeg",
      "assets (2)/asset 15.jpeg",
      "assets (2)/asset 16.jpeg", 
      "assets (2)/asset 17.jpeg",
      "assets (2)/asset 18.jpeg",
      "assets (2)/asset 19.jpeg",
      "assets (2)/asset 20.jpeg",
      "assets (2)/asset 21.jpeg",
      "assets (2)/asset 22.jpeg",
      "assets (2)/asset 23.jpeg",
      "assets (2)/asset 24.jpeg",
      "assets (2)/asset 25.jpeg",
      "assets (2)/asset 26.jpeg", 
      "assets (2)/asset 27.jpeg",
      "assets (2)/asset 28.jpeg",
      "assets (2)/asset 29.jpeg",
      "assets (2)/asset 30.jpeg",
      "assets (2)/asset 31.jpeg",
      "assets (2)/asset 32.jpeg",
      "assets (2)/asset 33.jpeg",
      "assets (2)/asset 34.jpeg",
      "assets (2)/asset 35.jpeg",
      "assets (2)/asset 36.jpeg", 
      "assets (2)/asset 37.jpeg",
      "assets (2)/asset 38.jpeg",
      "assets (2)/asset 39.jpeg",
      "assets (2)/asset 40.jpeg",
      "assets (2)/asset 41.jpeg",
     
      // Add more image URLs here...
  ];

  // Function to create and add image elements to the image container
  function createImages() {
      var imageContainer = document.getElementById('imageContainer');
      imageUrls.forEach(function(url) {
          var img = document.createElement('img');
          img.src = url;
          img.alt = "Image";
          img.onclick = function() {
              showPopup(url);
          };
          imageContainer.appendChild(img);
      });
  }

  // Function to display the popup with the clicked image
  function showPopup(imageSrc) {
      var popup = document.getElementById('popup');
      var popupImage = document.getElementById('popupImage');
      
      // Set the source of the popup image
      popupImage.src = imageSrc;

      // Display the popup
      popup.style.display = 'block';
  }

  // Function to hide the popup
  function hidePopup() {
      var popup = document.getElementById('popup');
      
      // Hide the popup
      popup.style.display = 'none';
  }

  // Call the createImages function to create and add images to the container
  createImages();