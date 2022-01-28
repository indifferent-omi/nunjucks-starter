"use strict";
$(document).ready(function () {
  $("select").niceSelect();

  AOS.init({
    once: true,
  });
});
window.addEventListener("load", AOS.refresh);

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      Counter Up Activation
  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
$(".counter").counterUp({
  delay: 10,
  time: 1000,
});

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      Slick Slider Activation
  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
// portfolio-details-03 slider Start
if (jQuery(".testimonial-slider--01").length > 0) {
  $(".testimonial-slider--01").not(".slick-initialized").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipe: false,
    drag: false,
    fade: true,
    asNavFor: ".testimonial-slider--01__nav",
  });
}
if (jQuery(".testimonial-slider--one-col").length > 0) {
  $(".testimonial-slider--one-col").not(".slick-initialized").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $(".testimonial-slider--one-col__arrow .slick-arrow--left"),
    nextArrow: $(".testimonial-slider--one-col__arrow .slick-arrow--right"),
    mobileFirst: false,
    fade: true,
    asNavFor: '.testimonial-slider--one-col-image'
  });
}
$('.testimonial-slider--one-col-image').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.testimonial-slider--one-col',
  dots: false,
  arrows: false,
  fade: true,
  focusOnSelect: true
});
if (jQuery(".testimonial-slider--two-col").length > 0) {
  $(".testimonial-slider--two-col").not(".slick-initialized").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $(".testimonial-slider--two-col__arrow .slick-arrow--left"),
    nextArrow: $(".testimonial-slider--two-col__arrow .slick-arrow--right"),
    mobileFirst: false,
      responsive: [
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
  });
}
if (jQuery(".testimonial-slider--01__nav").length > 0) {
  $(".testimonial-slider--01__nav").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".testimonial-slider--01",
    dots: false,
    centerMode: true,
    centerPadding: 0,
    focusOnSelect: true,
    arrows: true,
    prevArrow: $(".testimonial-section--01__arrow .slick-arrow-left"),
    nextArrow: $(".testimonial-section--01__arrow .slick-arrow-right"),
  });
}
if (jQuery(".testimonial-slider--02").length > 0) {
  $(".testimonial-slider--02")
    .not(".slick-initialized")
    .slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      mobileFirst: false,
      responsive: [
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    });
}
if (jQuery(".testimonial-slider--02-center").length > 0) {
  $(".testimonial-slider--02-center")
    .not(".slick-initialized")
    .slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      mobileFirst: false,
      centerMode: true,
      centerPadding: '0',
      responsive: [
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    });
}
if (jQuery(".feature-section--04__slider").length > 0) {
  $(".feature-section--04__slider").not(".slick-initialized").slick({
      dots: false,
      infinite: true,
      speed: 900,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: $(".feature-section--04 .slick-arrow--left"),
      nextArrow: $(".feature-section--04 .slick-arrow--right"),
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          },
        },
      ],
    });
}
if (jQuery(".screenshot-slider").length > 0) {
  $(".screenshot-slider")
    .not(".slick-initialized")
    .slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      centerMode: true,
      centerPadding: "130px",
      autoplay: true,
      autoplaySpeed: 3000,
      infinite: true,
      easing: "linear",
      speed: 800,
      appendDots: ".screenshots-dots",
      responsive: [
        {
          breakpoint: 1800,
          settings: {
            slidesToShow: 5,
            centerPadding: "100px",
          },
        },
        {
          breakpoint: 1750,
          settings: {
            slidesToShow: 5,
            centerPadding: "20px",
          },
        },
        {
          breakpoint: 1670,
          settings: {
            slidesToShow: 5,
            centerPadding: "60px",
          },
        },
        {
          breakpoint: 1640,
          settings: {
            slidesToShow: 5,
            centerPadding: "20px",
          },
        },
        {
          breakpoint: 1450,
          settings: {
            slidesToShow: 5,
            centerPadding: "10px",
          },
        },
        {
          breakpoint: 1350,
          settings: {
            slidesToShow: 3,
            centerPadding: "20px",
          },
        },
        {
          breakpoint: 1250,
          settings: {
            slidesToShow: 3,
            centerPadding: "10px",
          },
        },
        {
          breakpoint: 1150,
          settings: {
            slidesToShow: 3,
            centerPadding: "0px",
          },
        },
        {
          breakpoint: 1050,
          settings: {
            slidesToShow: 3,
            centerPadding: "10px",
          },
        },
        {
          breakpoint: 950,
          settings: {
            slidesToShow: 3,
            centerPadding: "0",
          },
        },
        {
          breakpoint: 830,
          settings: {
            fade: true,
            slidesToShow: 1,
            centerPadding: "20px",
          },
        },
        {
          breakpoint: 650,
          settings: {
            fade: true,
            slidesToShow: 1,
            centerPadding: "10px",
          },
        },
        {
          breakpoint: 515,
          settings: {
            fade: true,
            slidesToShow: 1,
            autoplay: true,
            centerPadding: "0px",
          },
        },
        {
          breakpoint: 480,
          settings: {
            fade: true,
            slidesToShow: 1,
            autoplay: true,
            centerPadding: "0px",
            arrows: false,
          },
        },
      ],
    });
}
if (jQuery(".portfolio-details-slider").length > 0) {
  $(".portfolio-details-slider").not(".slick-initialized").slick({
    centerMode: true,
    centerPadding: '350px',
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    appendDots: ".portfolio-dots",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          centerPadding: '150px',
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '70px',
        },
      },
    ],
  });
}
$(".price-deck-trigger").on("change", function (e) {
  // $(e.target).addClass("active").siblings().removeClass("active");
  var target = $(e.target).attr("data-target");
  // console.log($(target).attr("data-value-active") == "monthly");
  if ($(target).attr("data-value-active") == "monthly") {
    $(target).attr("data-value-active", "yearly");
  } else {
    $(target).attr("data-value-active", "monthly");
  }
});

// /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//       Preloader Activation
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

$(window).load(function () {
  setTimeout(function () {
    $("#loader").fadeOut(500);
  }, 1000);
  setTimeout(function () {
    $("#loader").remove();
  }, 2000);
});

//***ISOTOPE***
$(window).load(function(){
  $('.portfolio-masonry-active').isotope({
     itemSelector: '.grid-item',
     layoutMode: 'masonry',
     percentPosition: true,
     masonry: {
       // use element for option
       columnWidth: '.grid-sizer'
     }
   })
 
 });

$(window).load(function () {
  $(".portfolio-active").isotope({
    itemSelector: ".grid-item",
    layoutMode: "fitRows",
  });
});

// filter items on button click
$(".portfolio-filter-menu").on("click", "button", function () {
  var filterValue = $(this).attr("data-filter");
  $(".portfolio-active").isotope({ filter: filterValue });
});
// filter items on button click
$(".portfolio-filter-menu").on("click", "button", function () {
  var filterValue = $(this).attr("data-filter");
  $(".portfolio-masonry-active").isotope({ filter: filterValue });
});

$(".slider-arrow-click-active .slick-arrow").on("click", function (e) {
  if (!$(this).hasClass("active")) {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
  }
});

// Portfolio Menu Activation
// Get the container element
var btnContainer = document.getElementById("portfoliogridMenu");
var btns = document.getElementsByClassName("btn");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

function passowrdVisibility(passwrodField, button) {
  let passField = document.querySelector(passwrodField);
  let icon = document.querySelector(button);
  if (icon !== null && passField !== null) {
    icon.addEventListener("click", () => {
      if (passField.type === "password") {
        passField.type = "text";
        icon.classList.add("fa-eye");
        icon.classList.remove("fa-eye-slash");
      } else {
        passField.type = "password";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
      }
    });
  }
}

passowrdVisibility("#passField", "#eye");

// Countdown Timer
// var countDownDate = new Date("31 April 2022 12:12:10").getTime() / 1000;
// setInterval(()=>{
//   var now = new Date().getTime() / 1000;
//   var diff = countDownDate - now;
//   var day = Math.floor(diff / (60 * 60 * 24));
//   var hours = Math.floor((diff % (60 * 60 * 24)) / (60 * 60));
//   var min = Math.floor((diff % (60 * 60)) / 60);
//   var sec = Math.floor(diff % 60);
//   document.getElementById("days").innerHTML = day;
//   document.getElementById("hours").innerHTML = hours;
//   document.getElementById("minutes").innerHTML = min;
//   document.getElementById("seconds").innerHTML = sec;
// }, 1000);
if (jQuery(".testimonial-slider--half-fluid").length > 0) {
  $(".testimonial-slider--half-fluid").slick({
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 8,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1360,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
}
$(window).load(function () {
  if (this.innerWidth > 600) {
    const offestContainer = $(".container").offset().left;
    $(".testimonial-slider--half-fluid").css("margin-left", offestContainer);
  } else {
    $(".testimonial-slider--half-fluid").css("margin-left", "0px");
  }
});
$(window).on("resize", function () {
  if (this.innerWidth > 600) {
    const offestContainer = $(".container").offset().left;
    $(".testimonial-slider--half-fluid").css("margin-left", offestContainer);
  } else {
    $(".testimonial-slider--half-fluid").css("margin-left", "0px");
  }
});




$(".toggle-password").click(function() {
  var input = $(this).parent().find("input");
  if (input.attr("type") == "password") {
      input.attr("type", "text");
      $(this).toggleClass("fa-eye fa-eye-slash");
  } else {
      input.attr("type", "password");
  }
});


$("#slider-range").slider({
  range: true, 
  min: 0,
  max: 65,
  values: [ 5, 50 ],
  // step: 9,
  slide: function( event, ui ) {
    console.log(event.target );
    $( ".range-price--min").html(ui.values[ 0 ]);
    // console.log(ui.values[1]);
    
    let suffix = '';
    if (ui.values[ 1 ] == $( ".range-price--max").data('max') ){
      //  suffix = ' +';
      $(ui.handle).addClass("full");
    }else{
      $(ui.handle).removeClass("full");
    }
    // $( ".range-price--max").html(ui.values[ 1 ] + suffix);         
    $( ".range-price--max").html(ui.values[ 1 ]);         
  }
})
