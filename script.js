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


});