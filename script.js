let slideIndex = 1;
counter = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
  

}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display ="block";  
  dots[slideIndex-1].className += " active";
}



function open_popup(){
  document.getElementById('herovideo').style.display = "flex";
}

function close_popup(){
  var videoContainer = document.getElementById('herovideo');
    videoContainer.style.display = "none";
    
 
}


function closemsg(){
  document.getElementById("msg-head").style.display = "none";
}




function showNav(){
    counter = counter + 1;
    if(counter % 2 == 1){
        document.getElementById('navbar').style.display = "flex";
    } else if (counter %2 == 0){
        document.getElementById('navbar').style.display = "none";
    }
   
}
