//Single page navigation
$("#sec-top").click(function() {
  $('html, body').animate({
      scrollTop:$("#top").offset().top-66
  }, 1000);
return false;
});

$("#sec-1").click(function() {
    $('html, body').animate({
        scrollTop:$("#one").offset().top-50
    }, 1000);
 return false;
});

$("#sec-2").click(function() {
    $('html, body') .animate({
        scrollTop:$("#two").offset().top-85
    }, 1000);
 return false;
});

$("#sec-3").click(function() {
    $(' html,body') .animate({
        scrollTop:$("#three").offset().top-85
    }, 1000);
 return false;
});

$("#sec-4").click(function() {
 $(this).addClass("active");
    $('html,body ') .animate({
        scrollTop:$("#four").offset().top-85
    }, 1000);
 return false;
});
$("#sec-5").click(function() {
    $(this).addClass("active");
       $('html,body ') .animate({
           scrollTop:$("#five").offset().top-85
       }, 1000);
    return false;
   });
$("#sec-6").click(function() {
    $(this).addClass("active");
       $('html,body ') .animate({
           scrollTop:$("#six").offset().top-20
       }, 1000);
    return false;
   });

//Single page navigation end



//slider Why choose Us

$('.itemss').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
    breakpoint: 1024,
    settings: {
    slidesToShow: 2,
    slidesToScroll: 1
    }
    },
    {
    breakpoint: 680,
    settings: {
    slidesToShow: 1,
    slidesToScroll: 1
    }
    }
    
    ]
  });

  //function for mouse sliding
    const slider = $(".itemss");
    slider.on('wheel', (function(e) {
    e.preventDefault();

    if (e.originalEvent.deltaY < 0) {
        $(this).slick('slickPrev');
    } else {
        $(this).slick('slickNext');
    }
    }));

//slider Why choose Us end


//slider for team

$('.team').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
    breakpoint: 1024,
    settings: {
    slidesToShow: 2,
    slidesToScroll: 1
    }
    },
    {
    breakpoint: 680,
    settings: {
    slidesToShow: 1,
    slidesToScroll: 1
    }
    }
    
    ]
  });

  //function for mouse sliding
    const sliders = $(".team");
    sliders.on('wheel', (function(e) {
    e.preventDefault();

    if (e.originalEvent.deltaY < 0) {
        $(this).slick('slickPrev');
    } else {
        $(this).slick('slickNext');
    }
    }));

//slider for team end


  ///////menu button///////////////////////
  
  
  $("#toggle").click(function () {
    $(this).toggleClass("active");
    $("#overlay").toggleClass("open");
    
    // $('#overlay').on('scroll touchmove mousewheel', function(e){
    //   e.preventDefault();
    //   e.stopPropagation();
    //   return false;
    // })
    
  });
  
  ///////menu button end///////////////////////

///////driver-education///////////////////////
  $(document).ready(function(){
    // Hide displayed paragraphs
    $(".hide-btn").click(function(){
        $(".driver-education").hide();
        $(".sheeko-body").show();
        
    });
    
    $(".show-btn").click(function(){
        $(".driver-education").show();
        $(".sheeko-body").hide();
        $(".sheekho-traffic").hide();
        $(".press").hide();
        $(".contact-us ").hide();
        $(".faqs ").hide();
        $(".downloads").hide();
        $(".our-partner").hide();
    });


    ///////theoretical-lessons///////////////////////
    $(".hide-btn").click(function(){
        $(".theoretical-lessons").hide();
        $(".sheeko-body").show();
    });
    
    // Show hidden paragraphs
    $(".show-btn1").click(function(){
        $(".theoretical-lessons").show();
        $(".sheeko-body").hide();
        $(".sheekho-traffic").hide();
        $(".press").hide();
        $(".contact-us ").hide();
        $(".student-voice ").hide();
        $(".faqs ").hide();
        $(".downloads").hide();
        $(".our-partner").hide();
    });

    ///////about-us///////////////////////
    $(".hide-btn").click(function(){
        $(".about-us").hide();
        $(".sheeko-body").show();
    });
    
    // Show hidden paragraphs
    $(".show-btn2").click(function(){
        $(".about-us").show();
        $(".sheeko-body").hide();
        $(".careers").hide();
        $(".theoretical-lessons").hide();
        $(".driver-education").hide();
        $(".sheekho-traffic").hide();
        $(".press").hide();
        $(".contact-us ").hide();
        $(".student-voice ").hide();
        $(".faqs ").hide();
        $(".downloads").hide();
        $(".our-partner").hide();
    });

    /////////careers/////////
    $(".hide-btn").click(function(){
        $(".careers").hide();
        $(".sheeko-body").show();
    });
    
    // Show hidden paragraphs
    $(".show-btn3").click(function(){
        $(".careers").show();
        $(".sheeko-body").hide();
        $(".about-us").hide();
        $(".theoretical-lessons").hide();
        $(".driver-education").hide();
        $(".sheekho-traffic").hide();
        $(".press").hide();
        $(".contact-us ").hide();
        $(".student-voice ").hide();
        $(".faqs ").hide();
        $(".downloads").hide();
        $(".our-partner").hide();
    });

    /////////sheekho-traffic/////////
    $(".hide-btn").click(function(){
      $(".sheekho-traffic ").hide();
      $(".sheeko-body").show();
  });
  
  // Show hidden paragraphs
  $(".show-btn4").click(function(){
      $(".sheekho-traffic ").show();
      $(".sheeko-body").hide();
      $(".careers").hide();
      $(".about-us").hide();
      $(".theoretical-lessons").hide();
      $(".driver-education").hide();
      $(".press").hide();
      $(".contact-us ").hide();
      $(".student-voice ").hide();
      $(".faqs ").hide();
      $(".downloads").hide();
      $(".our-partner").hide();
  });

  /////////press/////////
  $(".hide-btn").click(function(){
    $(".press ").hide();
    $(".sheeko-body").show();
});

// Show hidden paragraphs
$(".show-btn5").click(function(){
  $(".press ").show();
    $(".sheekho-traffic ").hide();
    $(".sheeko-body").hide();
    $(".careers").hide();
    $(".about-us").hide();
    $(".theoretical-lessons").hide();
    $(".driver-education").hide();
    $(".contact-us ").hide();
    $(".student-voice ").hide();
    $(".faqs ").hide();
    $(".downloads").hide();
    $(".our-partner").hide();
});

  /////////contact us/////////
  $(".hide-btn").click(function(){
    $(".contact-us ").hide();
    $(".sheeko-body").show();
});

// Show hidden paragraphs
$(".show-btn6").click(function(){
  $(".contact-us ").show();
    $(".press ").hide();
    $(".sheekho-traffic ").hide();
    $(".sheeko-body").hide();
    $(".careers").hide();
    $(".about-us").hide();
    $(".theoretical-lessons").hide();
    $(".driver-education").hide();
    $(".student-voice ").hide();
    $(".faqs ").hide();
    $(".downloads").hide();
    $(".our-partner").hide();
});

  /////////student-voice/////////
  $(".hide-btn").click(function(){
    $(".student-voice ").hide();
    $(".sheeko-body").show();
});

// Show hidden paragraphs
$(".show-btn7").click(function(){
  $(".student-voice ").show();
  $(".contact-us ").hide();
    $(".press ").hide();
    $(".sheekho-traffic ").hide();
    $(".sheeko-body").hide();
    $(".careers").hide();
    $(".about-us").hide();
    $(".theoretical-lessons").hide();
    $(".driver-education").hide();
    $(".faqs ").hide();
    $(".downloads").hide();
    $(".our-partner").hide();
});

  /////////FAQS/////////
  $(".hide-btn").click(function(){
    $(".faqs ").hide();
    $(".sheeko-body").show();
});

// Show hidden paragraphs
$(".show-btn8").click(function(){
  $(".faqs ").show();
  $(".student-voice ").hide();
  $(".contact-us ").hide();
    $(".press ").hide();
    $(".sheekho-traffic ").hide();
    $(".sheeko-body").hide();
    $(".careers").hide();
    $(".about-us").hide();
    $(".theoretical-lessons").hide();
    $(".driver-education").hide();
    $(".downloads").hide();
    $(".our-partner").hide();
});

  /////////Download/////////
  $(".hide-btn").click(function(){
    $(".downloads ").hide();
    $(".sheeko-body").show();
});

// Show hidden paragraphs
$(".show-btn9").click(function(){
  $(".downloads ").show();
  $(".student-voice ").hide();
  $(".contact-us ").hide();
    $(".press ").hide();
    $(".sheekho-traffic ").hide();
    $(".sheeko-body").hide();
    $(".careers").hide();
    $(".about-us").hide();
    $(".theoretical-lessons").hide();
    $(".driver-education").hide();
    $(".faqs").hide();
    $(".our-partner").hide();
});


 /////////Our partner/////////
 $(".hide-btn").click(function(){
  $(".our-partner ").hide();
  $(".sheeko-body").show();
});

// Show hidden paragraphs
$(".show-btn10").click(function(){
$(".our-partner ").show();
$(".student-voice ").hide();
$(".contact-us ").hide();
  $(".press ").hide();
  $(".sheekho-traffic ").hide();
  $(".sheeko-body").hide();
  $(".careers").hide();
  $(".about-us").hide();
  $(".theoretical-lessons").hide();
  $(".driver-education").hide();
  $(".downloads").hide();
  $(".faqs").hide();
});



});


  

//Packages tabs

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();




  //header image animation
  jQuery(document).ready(
  function() {

    var $w = $(window);
    var $d = $('#oh');
    var $y = $('#yeah');
    var $c = $('#commom');
    var $b = $('#baby');

    var lastScrollTop = $w.scrollTop();

    var _x = 0;
    var _y = 0;

    $(window).scroll(function(event) {
      var st = $w.scrollTop();

      _x = st;
      _y = st;

      lastScrollTop = 200;
      
      $d.css('right', _x);
      $d.css('bottom', 355);
      
      $y.css('left', _x);
      $y.css('top',250);
      
      //-----------
      var $myElement = $('#second-container'),
        canUserSeeIt = inViewport($myElement);
        
        
        if(canUserSeeIt){
          $c.css({'right': _y});
          $b.css({'left': _x});
        }
    });
    
    //check if el is visible in viewport
    function inViewport($ele) {
      var lBound = $(window).scrollTop(),
        uBound = lBound + $(window).height(),
        top = $ele.offset().top,
        bottom = top + $ele.outerHeight(true);

      return (top > lBound && top < uBound) ||
        (bottom > lBound && bottom < uBound) ||
        (lBound >= top && lBound <= bottom) ||
        (uBound >= top && uBound <= bottom);
    }
  });



  //*************Header Car image animation ****************************/
  var windowHeight =  Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
    lastTop;

window.addEventListener('scroll', function(event) {
  var train = document.getElementById('trainMotion'),
      top = train.getBoundingClientRect().top,
      offset = top - windowHeight;
      
      if (offset > 0) {
      	train.classList.remove('choochoo');
      	return;
      }
      
      if (top < windowHeight / 2 && top > lastTop) {
      	train.classList.remove('choochoo');
      }
      
      if (train.className.indexOf('choocho') === -1 && top < lastTop) {
      	train.classList.add('choochoo');
      }
      
      lastTop = top;
     
});



//press page light box////
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}



/*Career page model*/
function openModal1() {
  document.getElementById("myModal1").style.display = "block";
}
function closeModal1() {
  document.getElementById("myModal1").style.display = "none";
}

function openModal2() {
  document.getElementById("myModal2").style.display = "block";
}
function closeModal2() {
  document.getElementById("myModal2").style.display = "none";
}

function openModal3() {
  document.getElementById("myModal3").style.display = "block";
}
function closeModal3() {
  document.getElementById("myModal3").style.display = "none";
}


function openModal4() {
  document.getElementById("myModal4").style.display = "block";
}
function closeModal4() {
  document.getElementById("myModal4").style.display = "none";
}

   

    
  
    
    
  
  