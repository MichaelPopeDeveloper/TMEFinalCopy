


 function disapearTME() {
      $("#ntf").css("display", "none");
};


 function disapearBlueprint() {
      $("#blueprint").css("display", "none");
};

 function disapearAdvocates() {
      $("#advocates").css("display", "none");
};

 function disapearMedia() {
      $("#media").css("display", "none");
};

 function disapearEnlist() {
      $("#enlist").css("display", "none");
};

 function disapearTimerTme() {
            disapearTmeTimer = setTimeout(disapearTME, 10);
         
         };

        function disapearTimerBlueprint() {
            disapearBlueprintTimer = setTimeout(disapearBlueprint, 10);
            // clearTimeout(disapearTmeTimer);


    };

        function disapearTimerAdvocates() {
            disapearAdvocatesTimer = setTimeout(disapearAdvocates, 10);
            // clearTimeout(disapearTmeTimer);


    };

        function disapearTimerMedia() {
            disapearMediaTimer = setTimeout(disapearMedia, 10);
            // clearTimeout(disapearTmeTimer);


    };

        function disapearTimerEnlist() {
            disapearEnlistTimer = setTimeout(disapearEnlist, 10);
            // clearTimeout(disapearTmeTimer);


    };



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
$("#circle7").css("background-color", "transparent");
 slide2Timer = setTimeout(slide2, 8500);



}

function slide2() {
	document.getElementById('main-content-video-1').src = 'videos/ntf.mp4';
$("#circle2").css("background-color", "orange");
$("#circle1").css("background-color", "transparent");
$("#circle3").css("background-color", "transparent");
$("#circle4").css("background-color", "transparent");
$("#circle5").css("background-color", "transparent");
$("#circle6").css("background-color", "transparent");
$("#circle7").css("background-color", "transparent");
slide3Timer = setTimeout(slide3, 9000);



}

function slide3() {
document.getElementById('main-content-video-1').src = 'videos/socialeconomicadvocate.mp4';
$("#circle3").css("background-color", "orange");
$("#circle1").css("background-color", "transparent");
$("#circle2").css("background-color", "transparent");
$("#circle4").css("background-color", "transparent");
$("#circle5").css("background-color", "transparent");
$("#circle6").css("background-color", "transparent");
$("#circle7").css("background-color", "transparent");
slide4Timer = setTimeout(slide4, 9000);


}

function slide4() {
document.getElementById('main-content-video-1').src = 'videos/noexcuses.mp4';
$("#circle4").css("background-color", "orange");
$("#circle1").css("background-color", "transparent");
$("#circle2").css("background-color", "transparent");
$("#circle3").css("background-color", "transparent");
$("#circle5").css("background-color", "transparent");
$("#circle6").css("background-color", "transparent");
$("#circle7").css("background-color", "transparent");
slide5Timer = setTimeout(slide5, 9000);


}

function slide5() {
document.getElementById('main-content-video-1').src = 'videos/smallbusiness.mp4';
$("#circle5").css("background-color", "orange");
$("#circle1").css("background-color", "transparent");
$("#circle2").css("background-color", "transparent");
$("#circle3").css("background-color", "transparent");
$("#circle4").css("background-color", "transparent");
$("#circle6").css("background-color", "transparent");
$("#circle7").css("background-color", "transparent");	

slide6Timer = setTimeout(slide6, 9000);


}

function slide6() {
document.getElementById('main-content-video-1').src = 'videos/ibo.mp4';
$("#circle6").css("background-color", "orange");
$("#circle1").css("background-color", "transparent");
$("#circle2").css("background-color", "transparent");
$("#circle3").css("background-color", "transparent");
$("#circle4").css("background-color", "transparent");
$("#circle5").css("background-color", "transparent");
$("#circle7").css("background-color", "transparent");

slide7Timer = setTimeout(slide7, 9000);


}
	function slide7() {
document.getElementById('main-content-video-1').src = 'videos/promo.mp4';
$("#circle7").css("background-color", "orange");
$("#circle1").css("background-color", "transparent");
$("#circle2").css("background-color", "transparent");
$("#circle3").css("background-color", "transparent");
$("#circle4").css("background-color", "transparent");
$("#circle5").css("background-color", "transparent");
$("#circle6").css("background-color", "transparent");

slide1Timer = setTimeout(slide1, 8000);


}
	



// These functions handle manual click slider changes
	$("#circle1").click(function(){
clearTimeout(slide1Timer);
clearTimeout(slide2Timer);
clearTimeout(slide3Timer);
clearTimeout(slide4Timer);
clearTimeout(slide5Timer);
clearTimeout(slide6Timer);
clearTimeout(slide7Timer);		
slide1();
    });

    $("#circle2").click(function(){
clearTimeout(slide1Timer);
clearTimeout(slide2Timer);
clearTimeout(slide3Timer);
clearTimeout(slide4Timer);
clearTimeout(slide5Timer);
clearTimeout(slide6Timer);
clearTimeout(slide7Timer);	

slide2();
// slide2Timer = setTimeout(slide2, slideTime);

    });

    $("#circle3").click(function(){        
clearTimeout(slide1Timer);
clearTimeout(slide2Timer);
clearTimeout(slide3Timer);
clearTimeout(slide4Timer);
clearTimeout(slide5Timer);
clearTimeout(slide6Timer);
clearTimeout(slide7Timer);	

slide3();
});

    $("#circle4").click(function(){        
clearTimeout(slide1Timer);
clearTimeout(slide2Timer);
clearTimeout(slide3Timer);
clearTimeout(slide4Timer);
clearTimeout(slide5Timer);
clearTimeout(slide6Timer);
clearTimeout(slide7Timer);	

slide4();
    });

    $("#circle5").click(function(){        
clearTimeout(slide1Timer);
clearTimeout(slide2Timer);
clearTimeout(slide3Timer);
clearTimeout(slide4Timer);
clearTimeout(slide5Timer);
clearTimeout(slide6Timer);
clearTimeout(slide7Timer);	

slide5();
    });
	
	$("#circle6").click(function(){        
clearTimeout(slide1Timer);
clearTimeout(slide2Timer);
clearTimeout(slide3Timer);
clearTimeout(slide4Timer);
clearTimeout(slide5Timer);
clearTimeout(slide6Timer);
clearTimeout(slide7Timer);	

slide6();
    });
	
	$("#circle7").click(function(){        
clearTimeout(slide1Timer);
clearTimeout(slide2Timer);
clearTimeout(slide3Timer);
clearTimeout(slide4Timer);
clearTimeout(slide5Timer);
clearTimeout(slide6Timer);
clearTimeout(slide7Timer);
	

slide7();
    });


    
$(".ntf-hover").hover(function() {

$("#ntf").css("display", "flex");

});

 $(".ntf-hover").mouseleave(function() {

disapearTimerTme();

    
   });

 $(".ntf-sub-hover").hover(function() {

clearTimeout(disapearTmeTimer);

})

 $(".ntf-sub-hover").mouseleave(function() {

disapearTmeTimer = setTimeout(disapearTME, 100);

    
  });






 $(".blueprint-hover").hover(function() {

$("#blueprint").css("display", "flex");

})

 $(".blueprint-hover").mouseleave(function() {

disapearTimerBlueprint();

    
  });

 $(".blueprint-sub-hover").hover(function() {

clearTimeout(disapearBlueprintTimer);

})

 $(".blueprint-sub-hover").mouseleave(function() {

disapearBlueprintTimer = setTimeout(disapearBlueprint, 10);

    
  });



 $(".advocates-hover").hover(function() {

$("#advocates").css("display", "flex");

})

 $(".advocates-hover").mouseleave(function() {

disapearTimerAdvocates();

    
  });

  $(".advocates-sub-hover").hover(function() {

clearTimeout(disapearAdvocatesTimer);

})

 $(".advocates-sub-hover").mouseleave(function() {

disapearAdvocatesTimer = setTimeout(disapearAdvocates, 10);

    
  });




 $(".media-hover").hover(function() {

$("#media").css("display", "flex");
$(".text-button").css("z-index", "-3");

});

 $(".media-hover").mouseleave(function() {

disapearTimerMedia();
$(".text-button").css("z-index", "3");

    
  });

 $(".media-sub-hover").hover(function() {

clearTimeout(disapearMediaTimer);
$(".text-button").css("z-index", "-3");

});

 $(".media-sub-hover").mouseleave(function() {

disapearMediaTimer = setTimeout(disapearMedia, 10);
$(".text-button").css("z-index", "3");

    
  });






 $(".enlist-hover").hover(function() {

$("#enlist").css("display", "flex");
$(".text-button").css("z-index", "-3");

})

 $(".enlist-hover").mouseleave(function() {

disapearTimerEnlist();
$(".text-button").css("z-index", "3");

    
  });

 $(".enlist-sub-hover").hover(function() {

clearTimeout(disapearEnlistTimer);
$(".text-button").css("z-index", "-3");

})

 $(".enlist-sub-hover").mouseleave(function() {

disapearEnlistTimer = setTimeout(disapearEnlist, 10);
$(".text-button").css("z-index", "3");

    
  });


});