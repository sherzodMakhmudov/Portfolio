

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}


// Drone Modal
function closeModalDrone() {
    document.getElementById("myModalDrone").style.display = "none";
    document.getElementById("nav").style.top = "0px";
    window.onscroll = function () { window.scrollTo(); };
    slideIndex = 0
  }


function openModalDrone() {
    document.getElementById("myModalDrone").style.display = "block";
    document.getElementById("nav").style.top = "-50px";
    window.onscroll = function () { window.scrollTo(0, 0); };
  }

function showSlidesDrone(n){
    var i;
    var slides = document.getElementsByClassName("mySlides")

    if(n>slides.length){slideIndex = 1}
    if(n<1){slideIndex = slides.length}

    for(i=0; i<slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";

}
                
                
 //GearUpModal   
function openModal() {
    document.getElementById("myModal").style.display = "block";
    document.getElementById("nav").style.top = "-50px";
    window.onscroll = function () { window.scrollTo(0, 0); };
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
    document.getElementById("nav").style.top = "0px";
    window.onscroll = function () { window.scrollTo(); };
    
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";

}

// Echangegram
function openModalExchange(){
    document.getElementById("myModalExchange").style.display = "block";
    document.getElementById("nav").style.top = "-50px";
    window.onscroll = function () { window.scrollTo(0, 0); };
}

function closeModalExchange() {
    document.getElementById("myModalExchange").style.display = "none";
    document.getElementById("nav").style.top = "0px";
    window.onscroll = function () { window.scrollTo(); };
}

function showSlidesExchange(n){
    var i;
    var slides = document.getElementsByClassName("mySlides")

    if(n>slides.length){slideIndex = 1}
    if(n<1){slideIndex = slides.length}

    for(i=0; i<slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}


              
                
        