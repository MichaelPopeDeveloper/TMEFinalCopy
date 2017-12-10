

$(document).ready(function(){
var slideTime = 7000;

// This starts the slider function when the page loads
slide1();

// $(".sub-menu").hide();

	
//These functions handle the slider videos source changes, and modal circle color changes
function slide1() {
	document.getElementById('main-content-video-1').src = 'videos/tme.mp4';
$("#circle1").css("background-color", "orange");
$("#circle2").css("background-color", "transparent");
$("#circle3").css("background-color", "transparent");
$("#circle4").css("background-color", "transparent");
$("#circle5").css("background-color", "transparent");
$("#circle6").css("background-color", "transparent");

 slide2Timer = setTimeout(slide2, slideTime);



}

function slide2() {
	document.getElementById('main-content-video-1').src = 'videos/ntf.mp4';
$("#circle2").css("background-color", "orange");
$("#circle1").css("background-color", "transparent");
$("#circle3").css("background-color", "transparent");
$("#circle4").css("background-color", "transparent");
$("#circle5").css("background-color", "transparent");
$("#circle6").css("background-color", "transparent");

slide3Timer = setTimeout(slide3, slideTime);



}

function slide3() {
document.getElementById('main-content-video-1').src = 'videos/socialeconomicadvocate.mp4';
$("#circle3").css("background-color", "orange");
$("#circle1").css("background-color", "transparent");
$("#circle2").css("background-color", "transparent");
$("#circle4").css("background-color", "transparent");
$("#circle5").css("background-color", "transparent");
$("#circle6").css("background-color", "transparent");

slide4Timer = setTimeout(slide4, slideTime);


}

function slide4() {
document.getElementById('main-content-video-1').src = 'videos/noexcuses.mp4';
$("#circle4").css("background-color", "orange");
$("#circle1").css("background-color", "transparent");
$("#circle2").css("background-color", "transparent");
$("#circle3").css("background-color", "transparent");
$("#circle5").css("background-color", "transparent");
$("#circle6").css("background-color", "transparent");

slide5Timer = setTimeout(slide5, slideTime);


}

function slide5() {
document.getElementById('main-content-video-1').src = 'videos/smallbusiness.mp4';
$("#circle5").css("background-color", "orange");
$("#circle1").css("background-color", "transparent");
$("#circle2").css("background-color", "transparent");
$("#circle3").css("background-color", "transparent");
$("#circle4").css("background-color", "transparent");
$("#circle6").css("background-color", "transparent");

slide1Timer = setTimeout(slide6, slideTime);


}

function slide6() {
document.getElementById('main-content-video-1').src = 'videos/promo.mp4';
$("#circle6").css("background-color", "orange");
$("#circle1").css("background-color", "transparent");
$("#circle2").css("background-color", "transparent");
$("#circle3").css("background-color", "transparent");
$("#circle4").css("background-color", "transparent");
$("#circle5").css("background-color", "transparent");

slide1Timer = setTimeout(slide1, slideTime);


}
	



// These functions handle manual click slider changes
	$("#circle1").click(function(){
clearTimeout(slide1Timer);
clearTimeout(slide2Timer);
clearTimeout(slide3Timer);
clearTimeout(slide4Timer);
clearTimeout(slide5Timer);

slide1();
    });

    $("#circle2").click(function(){
clearTimeout(slide1Timer);
clearTimeout(slide2Timer);
clearTimeout(slide3Timer);
clearTimeout(slide4Timer);
clearTimeout(slide5Timer);

slide2();
// slide2Timer = setTimeout(slide2, slideTime);

    });

    $("#circle3").click(function(){        
clearTimeout(slide1Timer);
clearTimeout(slide2Timer);
clearTimeout(slide3Timer);
clearTimeout(slide4Timer);
clearTimeout(slide5Timer);

slide3();
});

    $("#circle4").click(function(){        
clearTimeout(slide1Timer);
clearTimeout(slide2Timer);
clearTimeout(slide3Timer);
clearTimeout(slide4Timer);
clearTimeout(slide5Timer);

slide4();
    });

    $("#circle5").click(function(){        
clearTimeout(slide1Timer);
clearTimeout(slide2Timer);
clearTimeout(slide3Timer);
clearTimeout(slide4Timer);
clearTimeout(slide5Timer);

slide5();
    });

});