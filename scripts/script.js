


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
	
//	$('.main-content-container').hide();
//	
//	$('.main-content-container').fadeIn(4000);



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