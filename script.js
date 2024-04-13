

var saveBtn = document.querySelector(".btn");
saveBtn.addEventListener("click", function () {
  // Get the contact information from the website
  var contact = {
    name: "Dr.Jobanpreet singh (Bohja)",
    phone: "6284189955",
  
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
    
      "bull/SUL.jpg",
      "bull/abhi.jpg",
      "bull/asvt.jpg",
      "bull/RUS.jpg",
      "bull/MUL.jpg",
      "bull/SANTT.jpg",
      "bull/NOORR.jpg",
      
     
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


let payment= document.getElementById("payment")

payment.addEventListener("click",()=>{

    var popuppay = document.getElementById('popup-pay');
    
    
    // Set the source of the popup image
   

    // Display the popup
    popuppay.style.display = 'block';


});
    

// Function to hide the popup
function hidePopuppay() {
    var popuppay = document.getElementById('popup-pay');
    
    // Hide the popup
    popuppay.style.display = 'none';
}
