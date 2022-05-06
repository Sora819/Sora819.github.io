//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  //document.body.scrollTop = 0; // For Safari
  document.body.scroll({top: 0, left: 0, behavior: 'smooth'});
  //document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  document.documentElement.scroll({top: 0, left: 0, behavior: 'smooth'});
}