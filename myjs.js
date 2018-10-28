var slideIndex = 1;
showSlides(slideIndex);

//next and previos control
function plusSlides(n) {
	showSlides(slideIndex += n);
}

//thubnail image controls
function currentSlide(n) {
	showSlides(slideIndex=n);
}

function showSlides(n) {
	var x;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");

	if(n< 1) { slideIndex = slides.length}
		for(x = 0; x<slides.length; x++) {
			slides[x].style.display = "none";
		}

		for(x =0; x<dots.lenght; x++) {
			dots[x].className = dots[x].className.replace("active","");
		}

		slides[slideIndex-1].style.display = "block";
		dots[slides-1].className +="active";
}