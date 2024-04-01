// Carousel Home Page
$("#carousel-home .owl-carousel").on("initialized.owl.carousel", function() {
  setTimeout(function() {
    $("#carousel-home .owl-carousel .owl-item.active .owl-slide-animated").addClass("is-transitioned");
  }, 200);
});

const $owlCarousel = $("#carousel-home .owl-carousel").owlCarousel({
  items: 1,
  loop: true,
  nav: true,
  dots:true,
  autoplay:true,
  autoplayTimeout:5000,
  autoplayHoverPause:false,
	responsive:{
        0:{
             dots:false
        },
        767:{
            dots:false
        },
        768:{
             dots:true
        }
    }
});

$owlCarousel.on("changed.owl.carousel", function(e) {
  $(".owl-slide-animated").removeClass("is-transitioned");
  const $currentOwlItem = $(".owl-item").eq(e.item.index);
  $currentOwlItem.find(".owl-slide-animated").addClass("is-transitioned");
});

$owlCarousel.on("resize.owl.carousel", function() {
  setTimeout(function() {
  }, 50);
});

function downloadPdfCatlog(){
  var pdfUrl = 'img/pdf/catlog-pdf.pdf'; // Replace with your PDF URL
  var link = document.createElement('a');
  link.href = pdfUrl;
  link.target = '_blank'; // Open the PDF in a new tab
  link.setAttribute('download', ''); // Add the download attribute to force download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
// form validation
// form validation
function contactValid() {
  var form = {
      name: document.getElementById("name").value,
      lname: document.getElementById("lname").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
  };

  // Name validation
  var name = form.name.trim(); // Trim the name input
  if (name === "") {
      document.getElementById("name-error").innerHTML = "Please enter your name";
      return false;
  } else {
      document.getElementById("name-error").innerHTML = "";
  }

  // Last name validation
  var lname = form.lname.trim(); // Trim the last name input
  if (lname === "") {
      document.getElementById("lname-error").innerHTML = "Please enter your last name";
      return false;
  } else {
      document.getElementById("lname-error").innerHTML = "";
  }

  // Message validation
  var message = form.message.trim(); // Trim the message input
  if (message === "") {
      document.getElementById("message-error").innerHTML = "Please enter a message";
      return false;
  } else {
      document.getElementById("message-error").innerHTML = "";
  }

  // Email validation
  var email = form.email.trim(); // Trim the email input
  var atposition = email.indexOf("@");
  var dotposition = email.lastIndexOf(".");
  if (email === "") {
      document.getElementById("email-error").innerHTML = "Please enter your email address";
      return false;
  } else if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= email.length) {
      document.getElementById("email-error").innerHTML = "Please enter a valid email address";
      return false;
  } else {
      document.getElementById("email-error").innerHTML = "";
  }

  const serviceID = "service_xlvz1gs"; // Replace "your_service_id" with your actual service ID
  const templateID = "template_o78aobb"; // Replace "your_template_id" with your actual template ID

  emailjs.send(serviceID, templateID, form).then(res=>{
    document.getElementById("name").value = "";
    document.getElementById("lname").value= "",
    document.getElementById("email").value = "";
  
    document.getElementById("message").value = "";
    console.log(res, form);
  }).then(function () {
    alert("Email sent successfully.");
   
});

document.getElementById("myForms").reset();

return false; // Prevent default form submission
}


 

