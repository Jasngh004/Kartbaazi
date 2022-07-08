$(".slider-one")
.not(".slick-initialized")
.slick({

	prevArrow:".site-slider.prev",
	nextArrow: ".site-slider.next",
	slidesToShow: 5,
	slidesToScroll: 1,
	autoplaySpeed: 3000
});

let Btn = document.getElementById('#submitbtn');
Btn.addEventListener('click',showmsg);

function showmsg(){
    alert("Your Response Submitted!");
}