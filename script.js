/* ------------------------- VARIABLE DECLARATIONS ------------------------- */
var $hamburgerMenu = $("#hamburger-menu");
var $navbarDropdown = $("#navbar-dropdown");
var dropdownNavActive = false;



var $searchIconDropdown = $("#search-icon-dropdown");
var $searchDropdown = $("#search-dropdown");



var $bannerPageImg = $(".banner-page-img");
var $bannerPageImgLeft = $("#banner-page-img-left");
var $bannerPageImgCenter = $("#banner-page-img-center");
var $bannerPageImgRight = $("#banner-page-img-right");

var homeBannerImg1 = "images/shoe-pennyboard.jpg";
var homeBannerImg2 = "images/shoe-track.jpg";
var homeBannerImg3 = "images/shoe-fog.jpg";

var $bannerPageCircleLeft = $("#banner-page-circle-left");
var $bannerPageCircleCenter = $("#banner-page-circle-center");
var $bannerPageCircleRight = $("#banner-page-circle-right");

var $bannerPageCircleOuter = $(".banner-page-circle-outer");
var $bannerPageCircleInner = $(".banner-page-circle-inner");

var bannerChangeDelay = false;



var $arrowLeftIcon = $("#arrow-left-icon");
var $arrowRightIcon = $("#arrow-right-icon");

var $popularItemCarouselInner = $("#popular-item-carousel-inner");
var $carTile1 = $("#car-tile-1");
var carouselClicked = false;

var currentCarouselPage = 1;
var carouselPageMultiplier = 0;

var carouselPositionLg = 0;
var carouselPositionSm = 0;

var caroPageNum1 = $("#caro-page-num-1");
var caroPageNum2 = $("#caro-page-num-2");
var caroPageNum3 = $("#caro-page-num-3");
var caroPageNum4 = $("#caro-page-num-4");





/* ------------------------- FUNCTION DECLARATIONS ------------------------- */
function openDropdownNav() {
  console.log("dropdown opened");

  dropdownNavActive = true;

  $navbarDropdown.slideToggle(600);
}


function closeDropdownNav() {
  console.log("dropdown closed");

  dropdownNavActive = false;

  $navbarDropdown.slideToggle(600);
}


function selectBannerPageCircle(currentBannerPageCircle) {
  if(currentBannerPageCircle.hasClass("banner-page-circle-selected") === false) {
    $bannerPageCircleOuter.removeClass("banner-page-circle-selected");
    $bannerPageCircleInner.css("background-color", "initial");

    currentBannerPageCircle.addClass("banner-page-circle-selected");
    currentBannerPageCircle.children().css("background-color", "white");

    fadeBannerImage(currentBannerPageCircle);
  }
}


function fadeBannerImage(currentBannerPageCircle) {
  if(currentBannerPageCircle.is($bannerPageCircleLeft)) {
    if($bannerPageImgLeft.css("opacity") === "0") {
      $bannerPageImg.removeClass("banner-fade-in");
      $bannerPageImg.removeClass("banner-fade-out");

      $bannerPageImgCenter.addClass("banner-fade-out");
      $bannerPageImgRight.addClass("banner-fade-out");

      $bannerPageImgLeft.addClass("banner-fade-in");
    }
  }

  else if(currentBannerPageCircle.is($bannerPageCircleCenter)) {
    if($bannerPageImgCenter.css("opacity") === "0") {
      $bannerPageImg.removeClass("banner-fade-in");
      $bannerPageImg.removeClass("banner-fade-out");

      $bannerPageImgLeft.addClass("banner-fade-out");
      $bannerPageImgRight.addClass("banner-fade-out");

      $bannerPageImgCenter.addClass("banner-fade-in");
    }
  }

  else if(currentBannerPageCircle.is($bannerPageCircleRight)) {
    if($bannerPageImgRight.css("opacity") === "0") {
      $bannerPageImg.removeClass("banner-fade-in");
      $bannerPageImg.removeClass("banner-fade-out");

      $bannerPageImgLeft.addClass("banner-fade-out");
      $bannerPageImgCenter.addClass("banner-fade-out");

      $bannerPageImgRight.addClass("banner-fade-in");
    }
  }
}


/* function scrollCarousel() {
  if($(window).width() > 985) {
    var carouselPositionLg = ($carTile1.width() + 23) * 4;

    $popularItemCarouselInner.css({"transform": "translateX(-" + carouselPositionLg + "px)"});
  }

  else if($(window).width() <= 985 && $(window).width() > 785) {
    var carouselPositionSm = ($carTile1.width() + 19.5) * 4;

    $popularItemCarouselInner.css({"transform": "translateX(-" + carouselPositionSm + "px)"});
  }

  else if($(window).width() <= 785 && $(window).width() > 585) {
    var carouselPositionSm2 = ($carTile1.width() + 19.5) * 3;

    $popularItemCarouselInner.css({"transform": "translateX(-" + carouselPositionSm2 + "px)"});
  }

  else if($(window).width() <= 585 && $(window).width() > 386) {
    var carouselPositionSm3 = ($carTile1.width() + 19.5) * 2;

    $popularItemCarouselInner.css({"transform": "translateX(-" + carouselPositionSm3 + "px)"});
  }

  else if($(window).width() <= 386) {
    var carouselPositionSm4 = ($carTile1.width() + 19.5) * 1;

    $popularItemCarouselInner.css({"transform": "translateX(-" + carouselPositionSm4 + "px)"});
  }
} */


function carouselPageUp() {
  if($(window).width() > 985 && currentCarouselPage <= 2) {
    carouselClicked = true;

    currentCarouselPage += 1;
    console.log("page " + currentCarouselPage);
  }

  else if($(window).width() <= 985 && $(window).width() > 785 && currentCarouselPage <= 2) {
    carouselClicked = true;

    currentCarouselPage += 1;
    console.log("page " + currentCarouselPage);
  }

  else if($(window).width() <= 785 && $(window).width() > 585 && currentCarouselPage <= 3) {
    carouselClicked = true;

    currentCarouselPage += 1;
    console.log("page " + currentCarouselPage);
  }

  else if($(window).width() <= 585 && $(window).width() > 386 && currentCarouselPage <= 5) {
    carouselClicked = true;

    currentCarouselPage += 1;
    console.log("page " + currentCarouselPage);
  }

  else if($(window).width() <= 386 && currentCarouselPage <= 11) {
    carouselClicked = true;

    currentCarouselPage += 1;
    console.log("page " + currentCarouselPage);
  }
}


function getCarouselMultiplier() {
  if(currentCarouselPage === 1) {
    carouselPageMultiplier = 1;

    /* caroPageNum1.removeClass("popular-item-page-selected");
    caroPageNum2.addClass("popular-item-page-selected"); */
  }

  else if(currentCarouselPage === 2) {
    carouselPageMultiplier = 1;
  }

  else if(currentCarouselPage === 3) {
    carouselPageMultiplier = 2;
  }

  else if(currentCarouselPage === 4) {
    carouselPageMultiplier = 3;
  }

  else if(currentCarouselPage === 5) {
    carouselPageMultiplier = 4;
  }

  else if(currentCarouselPage === 6) {
    carouselPageMultiplier = 5;
  }

  else if(currentCarouselPage === 7) {
    carouselPageMultiplier = 6;
  }

  else if(currentCarouselPage === 8) {
    carouselPageMultiplier = 7;
  }

  else if(currentCarouselPage === 9) {
    carouselPageMultiplier = 8;
  }

  else if(currentCarouselPage === 10) {
    carouselPageMultiplier = 9;
  }

  else if(currentCarouselPage === 11) {
    carouselPageMultiplier = 10;
  }

  else if(currentCarouselPage === 12) {
    carouselPageMultiplier = 11;
  }
}


function changeCarouselPosition() {
  getCarouselMultiplier();

  if($(window).width() > 985) {
    if(currentCarouselPage <= 2) {
      carouselPositionLg = ($carTile1.width() + 23) * (4 * carouselPageMultiplier);

      $popularItemCarouselInner.css("left", -carouselPositionLg);
    }

    else if(currentCarouselPage > 2) {
      carouselPositionLg = ($carTile1.width() + 23) * (4 * 2);

      $popularItemCarouselInner.css("left", -carouselPositionLg);
    }
  }

  else if($(window).width() <= 985 && $(window).width() > 785) {
    if(currentCarouselPage <= 2) {
      carouselPositionSm = ($carTile1.width() + 19.5) * (4 * carouselPageMultiplier);

      $popularItemCarouselInner.css("left", -carouselPositionSm);
    }

    else if(currentCarouselPage > 2) {
      carouselPositionSm = ($carTile1.width() + 19.5) * (4 * 2);

      $popularItemCarouselInner.css("left", -carouselPositionSm);
    }
  }

  else if($(window).width() <= 785 && $(window).width() > 585) {
    if(currentCarouselPage <= 3) {
      carouselPositionSm = ($carTile1.width() + 19.5) * (3 * carouselPageMultiplier);

      $popularItemCarouselInner.css("left", -carouselPositionSm);
    }

    else if(currentCarouselPage > 3) {
      carouselPositionSm = ($carTile1.width() + 19.5) * (3 * 3);

      $popularItemCarouselInner.css("left", -carouselPositionSm);
    }
  }

  else if($(window).width() <= 585 && $(window).width() > 386) {
    if(currentCarouselPage <= 5) {
      carouselPositionSm = ($carTile1.width() + 19.5) * (2 * carouselPageMultiplier);

      $popularItemCarouselInner.css("left", -carouselPositionSm);
    }

    else if(currentCarouselPage > 5) {
      carouselPositionSm = ($carTile1.width() + 19.5) * (2 * 5);

      $popularItemCarouselInner.css("left", -carouselPositionSm);
    }
  }

  else if($(window).width() <= 386) {
    carouselPositionSm = ($carTile1.width() + 19.5) * (1 * carouselPageMultiplier);

    $popularItemCarouselInner.css("left", -carouselPositionSm);
  }
}





/* ---------------------------- EVENT HANDLERS ---------------------------- */
$(document).ready(function() {


  $bannerPageCircleLeft.addClass("banner-page-circle-selected");
  $bannerPageCircleLeft.children().css("background-color", "white");



  $hamburgerMenu.on("click", function() {
    if(dropdownNavActive === false) {
      openDropdownNav();
    }
    else if(dropdownNavActive === true) {
      closeDropdownNav();
    }
  });



  $searchIconDropdown.on("click", function() {
    console.log("search bar dropdown toggle");

    $searchDropdown.slideToggle(200);
  });



  $bannerPageCircleOuter.on("click", function() {
    if(bannerChangeDelay === false) {
      bannerChangeDelay = true;

      selectBannerPageCircle($(this));

      setTimeout(function() {
        bannerChangeDelay = false;
      }, 800);
    }
  });



  $arrowRightIcon.on("click", function() {
    carouselPageUp();

    changeCarouselPosition();

    /* $popularItemCarouselInner.addClass("carousel-animation");

    scrollCarousel(); */
  });


  $(window).resize(function() {
    if(carouselClicked === true) {
      changeCarouselPosition();

      /* $popularItemCarouselInner.removeClass("carousel-animation");

      scrollCarousel(); */
    }
  });


});
