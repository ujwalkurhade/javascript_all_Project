var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {

  showDivs(slideIndex += n);
  
}

myIndex =0;
function showDivs(n) {
  
  var x = document.querySelectorAll(".imgBlock");
  
  if (n > x.length) {
  slideIndex = 1
  }    
  if (n < 1) {
  slideIndex = x.length
  }
  
  for (var i = 0; i < x.length; i++) {
  
    x[i].style.display = "none";  
  
  }
 
  x[slideIndex-1].style.display = "block";  
  
 
  
   
}