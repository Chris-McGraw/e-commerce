/* ------------------------- VARIABLE DECLARATIONS ------------------------- */
var $homeBanner = $("#home-banner");
var homeBannerImg1 = "images/shoe-pennyboard.jpg";
var homeBannerImg2 = "images/shoe-track.jpg";
var homeBannerImg3 = "images/shoe-fog.jpg";

var $bannerPageCircleLeft = $("#banner-page-circle-left");
var $bannerPageCircleCenter = $("#banner-page-circle-center");
var $bannerPageCircleRight = $("#banner-page-circle-right");

var $bannerPageCircleOuter = $(".banner-page-circle-outer");
var $bannerPageCircleInner = $(".banner-page-circle-inner");





/* ------------------------- FUNCTION DECLARATIONS ------------------------- */
function selectBannerPageCircle(currentBannerPageCircle) {
  if(currentBannerPageCircle.hasClass("banner-page-circle-selected") === false) {
    $bannerPageCircleOuter.removeClass("banner-page-circle-selected");
    $bannerPageCircleInner.css("background-color", "initial");

    currentBannerPageCircle.addClass("banner-page-circle-selected");
    currentBannerPageCircle.children().css("background-color", "white");

    changeBannerImage(currentBannerPageCircle);
  }
}


function changeBannerImage(currentBannerPageCircle) {
  if(currentBannerPageCircle.is($bannerPageCircleLeft)) {
    $homeBanner.css("background-image", "url(" + homeBannerImg1 + ")");
    $homeBanner.css("background-position", "center 35%");
  }

  else if(currentBannerPageCircle.is($bannerPageCircleCenter)) {
    $homeBanner.css("background-image", "url(" + homeBannerImg2 + ")");
    $homeBanner.css("background-position", "center 85%");
  }

  else if(currentBannerPageCircle.is($bannerPageCircleRight)) {
    $homeBanner.css("background-image", "url(" + homeBannerImg3 + ")");
    $homeBanner.css("background-position", "center 35%");
  }
}





/* ---------------------------- EVENT HANDLERS ---------------------------- */
$(document).ready(function() {


  $bannerPageCircleLeft.addClass("banner-page-circle-selected");
  $bannerPageCircleLeft.children().css("background-color", "white");

  $bannerPageCircleOuter.on("click", function() {
    selectBannerPageCircle($(this));
  });


});
