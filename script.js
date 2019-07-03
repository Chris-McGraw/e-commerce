/* ------------------------- VARIABLE DECLARATIONS ------------------------- */

var $bodyMask = $("#body-mask");
var bodyMaskActive = false;
var bodyMaskDelay = false;

/* ~~~~~~~~~~~~ NAVBAR ~~~~~~~~~~~~ */
var $navLink = $(".nav-link");
var $navLinkButton = $(".nav-link-button");
var $loginButtonTop = $("#login-button-top");
var $loginDropdown = $("#login-dropdown");
var $loginExitButton = $("#login-exit-button");
var loginDropdownActive = false;

var $hamburgerMenu = $("#hamburger-menu");
var $hamburgerBar = $(".hamburger-bar");

var $navbarDropdown = $("#navbar-dropdown");
var dropdownNavActive = false;
var $navLinkDropdown = $(".nav-link-dropdown");
var $loginButtonDropdown = $("#login-button-dropdown");

var $searchIconDropdown = $("#search-icon-dropdown");
var $searchDropdown = $("#search-dropdown");



/* ~~~~~~~~ BANNER SECTION ~~~~~~~~ */
var $bannerPageImg = $(".banner-page-img");
var $bannerPageImgLeft = $("#banner-page-img-left");
var $bannerPageImgCenter = $("#banner-page-img-center");
var $bannerPageImgRight = $("#banner-page-img-right");

var homeBannerImg1 = "images/shoe-pennyboard.jpg";
//var homeBannerImg1 = "images/shoe-pennyboard-tiny.jpg";
var homeBannerImg2 = "images/shoe-track.jpg";
var homeBannerImg3 = "images/shoe-fog.jpg";

var $bannerPageCircleLeft = $("#banner-page-circle-left");
var $bannerPageCircleCenter = $("#banner-page-circle-center");
var $bannerPageCircleRight = $("#banner-page-circle-right");

var $bannerPageCircleOuter = $(".banner-page-circle-outer");
var $bannerPageCircleInner = $(".banner-page-circle-inner");

var bannerChangeDelay = false;



/* ~~~~~~~ CATEGORY SECTION ~~~~~~~ */
var $categoryTileMen = $("#category-tile-men");
var $categoryTileWomen = $("#category-tile-women");
var $categoryTileChildren = $("#category-tile-children");

var $categoryTileMask = $(".category-tile-mask");
var $categoryTileMenMask = $("#category-tile-men-mask");
var $categoryTileWomenMask = $("#category-tile-women-mask");
var $categoryTileChildrenMask = $("#category-tile-children-mask");



/* ~~~~~~~ CAMPAIGN SECTION ~~~~~~~ */
var $campaignButton = $(".campaign-button");



/* ~~~~~ POPULAR ITEM SECTION ~~~~~ */
var $arrowLeftIcon = $("#arrow-left-icon");
var $arrowRightIcon = $("#arrow-right-icon");

var $carouselTile = $(".carousel-tile");
var $popularItemCarouselInner = $("#popular-item-carousel-inner");
var $carTile1 = $("#car-tile-1");
var carouselClicked = false;

var currentCarouselPage = 1;
var carouselPageMultiplier = 0;

var carouselPositionLg = 0;
var carouselPositionSm = 0;

var $popularItemPageSelect = $("#popular-item-page-select");
var $popularItemPageNumber = $(".popular-item-page-number");
var $caroPageEllipsisLeft = $("#caro-page-ellipsis-left");
var $caroPageNum1 = $("#caro-page-num-1");
var $caroPageNum2 = $("#caro-page-num-2");
var $caroPageNum3 = $("#caro-page-num-3");
var $caroPageNum4 = $("#caro-page-num-4");
var $caroPageNum5 = $("#caro-page-num-5");
var $caroPageNum6 = $("#caro-page-num-6");
var $caroPageNum7 = $("#caro-page-num-7");
var $caroPageNum8 = $("#caro-page-num-8");
var $caroPageNum9 = $("#caro-page-num-9");
var $caroPageNum10 = $("#caro-page-num-10");
var $caroPageNum11 = $("#caro-page-num-11");
var $caroPageNum12 = $("#caro-page-num-12");
var $caroPageEllipsisRight = $("#caro-page-ellipsis-right");

var currentCarouselPosition = 0;



/* ~~~~~~~ FEATURE SECTION ~~~~~~~ */
var $featureButton = $(".feature-button");



/* ~~~~~~~~ FOOTER SECTION ~~~~~~~~ */
var $footerTileListItem = $(".footer-tile-list-item");





/* ------------------------- FUNCTION DECLARATIONS ------------------------- */
function toggleBodyMask() {
  if(bodyMaskActive === false) {
    bodyMaskActive = true;

    $bodyMask.css("z-index", "100");

    $bodyMask.addClass("body-mask-fade");
  }

  else if(bodyMaskActive === true) {
    $bodyMask.removeClass("body-mask-fade");

    setTimeout(function() {
      bodyMaskActive = false;

      $bodyMask.css("z-index", "0");
    }, 300);
  }
}


function toggleLoginDropdown() {
  if(loginDropdownActive === false) {
    loginDropdownActive = true;

    $loginDropdown.css("z-index", "150");

    $loginDropdown.addClass("body-mask-fade");
  }

  else if(loginDropdownActive === true) {
    $loginDropdown.removeClass("body-mask-fade");

    setTimeout(function() {
      loginDropdownActive = false;

      $loginDropdown.css("z-index", "0");
    }, 300);
  }
}


function toggleDropdownNav() {
  if(dropdownNavActive === false) {
    console.log("dropdown opened");

    dropdownNavActive = true;

    $navbarDropdown.slideToggle(300);
  }

  else if(dropdownNavActive === true) {
    console.log("dropdown closed");

    dropdownNavActive = false;

    $navbarDropdown.slideToggle(300);
  }
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


function categoryTileMaskFadeIn(hoveredCategoryTile) {
  if(hoveredCategoryTile.attr("id") === "category-tile-men-mask") {
    $categoryTileMenMask.addClass("category-tile-mask-fade");
  }

  else if(hoveredCategoryTile.attr("id") === "category-tile-women-mask") {
    $categoryTileWomenMask.addClass("category-tile-mask-fade");
  }

  else if(hoveredCategoryTile.attr("id") === "category-tile-children-mask") {
    $categoryTileChildrenMask.addClass("category-tile-mask-fade");
  }
}


function categoryTileMaskFadeOut(hoveredCategoryTile) {
  if(hoveredCategoryTile.attr("id") === "category-tile-men-mask") {
    $categoryTileMenMask.removeClass("category-tile-mask-fade");
  }

  else if(hoveredCategoryTile.attr("id") === "category-tile-women-mask") {
    $categoryTileWomenMask.removeClass("category-tile-mask-fade");
  }

  else if(hoveredCategoryTile.attr("id") === "category-tile-children-mask") {
    $categoryTileChildrenMask.removeClass("category-tile-mask-fade");
  }
}


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


function carouselPageDown() {
  if(currentCarouselPage > 1) {
    carouselClicked = true;

    currentCarouselPage -= 1;
    console.log("page " + currentCarouselPage);
  }
}


function carouselPageSelect(clickedCarouselPage) {
  carouselClicked = true;

  if(clickedCarouselPage.attr("id") === "caro-page-num-1") {
    currentCarouselPage = 1;
  }
  else if(clickedCarouselPage.attr("id") === "caro-page-num-2") {
    currentCarouselPage = 2;
  }
  else if(clickedCarouselPage.attr("id") === "caro-page-num-3") {
    currentCarouselPage = 3;
  }
  else if(clickedCarouselPage.attr("id") === "caro-page-num-4") {
    currentCarouselPage = 4;
  }
  else if(clickedCarouselPage.attr("id") === "caro-page-num-5") {
    currentCarouselPage = 5;
  }
  else if(clickedCarouselPage.attr("id") === "caro-page-num-6") {
    currentCarouselPage = 6;
  }
  else if(clickedCarouselPage.attr("id") === "caro-page-num-7") {
    currentCarouselPage = 7;
  }
  else if(clickedCarouselPage.attr("id") === "caro-page-num-8") {
    currentCarouselPage = 8;
  }
  else if(clickedCarouselPage.attr("id") === "caro-page-num-9") {
    currentCarouselPage = 9;
  }
  else if(clickedCarouselPage.attr("id") === "caro-page-num-10") {
    currentCarouselPage = 10;
  }
  else if(clickedCarouselPage.attr("id") === "caro-page-num-11") {
    currentCarouselPage = 11;
  }
  else if(clickedCarouselPage.attr("id") === "caro-page-num-12") {
    currentCarouselPage = 12;
  }

  // changeCarouselPosition();

  $popularItemCarouselInner.addClass("carousel-animation");

  scrollCarousel();
}


function showCaroPageNum1_3() {
  $caroPageNum1.css("display", "inline-block");
  $caroPageNum2.css("display", "inline-block");
  $caroPageNum3.css("display", "inline-block");
}


function hideCaroPageNum1_3() {
  $caroPageNum1.css("display", "none");
  $caroPageNum2.css("display", "none");
  $caroPageNum3.css("display", "none");
}


function showCaroPageNum5_6() {
  $caroPageNum5.css("display", "inline-block");
  $caroPageNum6.css("display", "inline-block");
}


function hideCaroPageNum5_6() {
  $caroPageNum5.css("display", "none");
  $caroPageNum6.css("display", "none");
}

function showCaroPageNum7_9() {
  $caroPageNum7.css("display", "inline-block");
  $caroPageNum8.css("display", "inline-block");
  $caroPageNum9.css("display", "inline-block");
}

function hideCaroPageNum7_9() {
  $caroPageNum7.css("display", "none");
  $caroPageNum8.css("display", "none");
  $caroPageNum9.css("display", "none");
}

function showCaroPageNum10_12() {
  $caroPageNum10.css("display", "inline-block");
  $caroPageNum11.css("display", "inline-block");
  $caroPageNum12.css("display", "inline-block");

  $popularItemPageSelect.css("letter-spacing", "normal");
}

function hideCaroPageNum10_12() {
  $caroPageNum10.css("display", "none");
  $caroPageNum11.css("display", "none");
  $caroPageNum12.css("display", "none");

  $popularItemPageSelect.css("letter-spacing", "2px");
}


function getCarouselPageList() {
  if(currentCarouselPage <= 3) {
    showCaroPageNum1_3();

    $caroPageEllipsisLeft.css("display", "none");

    hideCaroPageNum5_6();

    hideCaroPageNum7_9();

    hideCaroPageNum10_12();

    if($(window).width() <= 785 && $(window).width() > 585) {
      $caroPageNum4.css("display", "inline-block");
    }
    else {
      $caroPageNum4.css("display", "none");
    }

    if($(window).width() <= 585) {
      $caroPageEllipsisRight.css("display", "block");
    }
    else {
      $caroPageEllipsisRight.css("display", "none");
    }
  }

  else if(currentCarouselPage >= 4 && currentCarouselPage <= 6) {
    hideCaroPageNum1_3();

    hideCaroPageNum7_9();

    hideCaroPageNum10_12();

    $caroPageNum4.css("display", "inline-block");

    showCaroPageNum5_6();

    if($(window).width() > 386) {
      $caroPageEllipsisRight.css("display", "none");
    }
    else if($(window).width() <= 386) {
      $caroPageEllipsisRight.css("display", "block");
    }
  }

  else if(currentCarouselPage >= 7 && currentCarouselPage <= 9) {
    hideCaroPageNum1_3();

    $caroPageNum4.css("display", "none");

    hideCaroPageNum5_6();

    hideCaroPageNum10_12();

    showCaroPageNum7_9();

    $caroPageEllipsisRight.css("display", "block");
  }

  else if(currentCarouselPage >= 9 && currentCarouselPage <= 12) {
    hideCaroPageNum1_3();

    $caroPageNum4.css("display", "none");

    hideCaroPageNum5_6();

    hideCaroPageNum7_9();

    showCaroPageNum10_12();

    $caroPageEllipsisRight.css("display", "none");
  }
}


function getCarouselMultiplier() {
  if(currentCarouselPage === 1) {
    carouselPageMultiplier = 0;

    $popularItemPageNumber.removeClass("popular-item-page-selected");
    $caroPageNum1.addClass("popular-item-page-selected");
  }

  else if(currentCarouselPage === 2) {
    carouselPageMultiplier = 1;

    $popularItemPageNumber.removeClass("popular-item-page-selected");
    $caroPageNum2.addClass("popular-item-page-selected");
  }

  else if(currentCarouselPage === 3) {
    carouselPageMultiplier = 2;

    $popularItemPageNumber.removeClass("popular-item-page-selected");
    $caroPageNum3.addClass("popular-item-page-selected");
  }

  else if(currentCarouselPage === 4) {
    carouselPageMultiplier = 3;

    $caroPageNum4.css("display", "inline-block");

    $popularItemPageNumber.removeClass("popular-item-page-selected");
    $caroPageNum4.addClass("popular-item-page-selected");

    if($(window).width() <= 785 && $(window).width() > 585) {
      showCaroPageNum1_3();

      hideCaroPageNum5_6();

      $caroPageEllipsisLeft.css("display", "none");
    }
    else {
      hideCaroPageNum1_3();

      showCaroPageNum5_6();

      $caroPageEllipsisLeft.css("display", "block");
    }
  }

  else if(currentCarouselPage === 5) {
    carouselPageMultiplier = 4;

    $popularItemPageNumber.removeClass("popular-item-page-selected");
    $caroPageNum5.addClass("popular-item-page-selected");
  }

  else if(currentCarouselPage === 6) {
    carouselPageMultiplier = 5;

    $popularItemPageNumber.removeClass("popular-item-page-selected");
    $caroPageNum6.addClass("popular-item-page-selected");
  }

  else if(currentCarouselPage === 7) {
    carouselPageMultiplier = 6;

    $popularItemPageNumber.removeClass("popular-item-page-selected");
    $caroPageNum7.addClass("popular-item-page-selected");
  }

  else if(currentCarouselPage === 8) {
    carouselPageMultiplier = 7;

    $popularItemPageNumber.removeClass("popular-item-page-selected");
    $caroPageNum8.addClass("popular-item-page-selected");
  }

  else if(currentCarouselPage === 9) {
    carouselPageMultiplier = 8;

    $popularItemPageNumber.removeClass("popular-item-page-selected");
    $caroPageNum9.addClass("popular-item-page-selected");
  }

  else if(currentCarouselPage === 10) {
    carouselPageMultiplier = 9;

    $popularItemPageNumber.removeClass("popular-item-page-selected");
    $caroPageNum10.addClass("popular-item-page-selected");
  }

  else if(currentCarouselPage === 11) {
    carouselPageMultiplier = 10;

    $popularItemPageNumber.removeClass("popular-item-page-selected");
    $caroPageNum11.addClass("popular-item-page-selected");
  }

  else if(currentCarouselPage === 12) {
    carouselPageMultiplier = 11;

    $popularItemPageNumber.removeClass("popular-item-page-selected");
    $caroPageNum12.addClass("popular-item-page-selected");
  }
}


function scrollCarousel() {
  getCarouselPageList();

  getCarouselMultiplier();

  if($(window).width() > 985) {
    if(currentCarouselPage <= 2) {
      carouselPositionLg = ($carTile1.width() + 23) * (4 * carouselPageMultiplier);

      $popularItemCarouselInner.css({"transform": "translateX(-" + carouselPositionLg + "px)"});
    }

    else if(currentCarouselPage > 2) {
      carouselPositionLg = ($carTile1.width() + 23) * (4 * 2);

      $popularItemCarouselInner.css({"transform": "translateX(-" + carouselPositionLg + "px)"});

      currentCarouselPage = 3;
    }
  }

  else if($(window).width() <= 985 && $(window).width() > 785) {
    if(currentCarouselPage <= 2) {
      carouselPositionSm = ($carTile1.width() + 19.5) * (4 * carouselPageMultiplier);

      $popularItemCarouselInner.css({"transform": "translateX(-" + carouselPositionSm + "px)"});
    }

    else if(currentCarouselPage > 2) {
      carouselPositionSm = ($carTile1.width() + 19.5) * (4 * 2);

      $popularItemCarouselInner.css({"transform": "translateX(-" + carouselPositionSm + "px)"});

      currentCarouselPage = 3;
    }
  }

  else if($(window).width() <= 785 && $(window).width() > 585) {
    if(currentCarouselPage <= 3) {
      carouselPositionSm = ($carTile1.width() + 19.5) * (3 * carouselPageMultiplier);

      $popularItemCarouselInner.css({"transform": "translateX(-" + carouselPositionSm + "px)"});
    }

    else if(currentCarouselPage > 3) {
      carouselPositionSm = ($carTile1.width() + 19.5) * (3 * 3);

      $popularItemCarouselInner.css({"transform": "translateX(-" + carouselPositionSm + "px)"});

      currentCarouselPage = 4;
    }
  }

  else if($(window).width() <= 585 && $(window).width() > 386) {
    if(currentCarouselPage <= 5) {
      carouselPositionSm = ($carTile1.width() + 19.5) * (2 * carouselPageMultiplier);

      $popularItemCarouselInner.css({"transform": "translateX(-" + carouselPositionSm + "px)"});
    }

    else if(currentCarouselPage > 5) {
      carouselPositionSm = ($carTile1.width() + 19.5) * (2 * 5);

      $popularItemCarouselInner.css({"transform": "translateX(-" + carouselPositionSm + "px)"});

      currentCarouselPage = 6;
    }
  }

  else if($(window).width() <= 386) {
    carouselPositionSm = ($carTile1.width() + 19.5) * (1 * carouselPageMultiplier);

    $popularItemCarouselInner.css({"transform": "translateX(-" + carouselPositionSm + "px)"});
  }
}


/* function changeCarouselPosition() {
  getCarouselPageList();

  getCarouselMultiplier();

  if($(window).width() > 985) {
    if(currentCarouselPage <= 2) {
      carouselPositionLg = ($carTile1.width() + 23) * (4 * carouselPageMultiplier);

      $popularItemCarouselInner.css("left", -carouselPositionLg);
    }

    else if(currentCarouselPage > 2) {
      carouselPositionLg = ($carTile1.width() + 23) * (4 * 2);

      $popularItemCarouselInner.css("left", -carouselPositionLg);

      currentCarouselPage = 3;
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

      currentCarouselPage = 3;
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

      currentCarouselPage = 4;
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

      currentCarouselPage = 6;
    }
  }

  else if($(window).width() <= 386) {
    carouselPositionSm = ($carTile1.width() + 19.5) * (1 * carouselPageMultiplier);

    $popularItemCarouselInner.css("left", -carouselPositionSm);
  }
} */


function containCarouselDrag(ui) {
  var leftPosition = ui.position.left;

  if(leftPosition > 0 && currentCarouselPage === 1) {
    ui.position.left = 0;
  }


  else if($(window).width() > 785) {
    if(leftPosition > 30) {
      ui.position.left = 30;
    }

    if(leftPosition < 0 && currentCarouselPage === 3) {
      ui.position.left = 0;
    }

    else if(leftPosition < -30) {
      ui.position.left = -30;
    }
  }


  else if($(window).width() <= 785 && $(window).width() > 585) {
    if(leftPosition > 30) {
      ui.position.left = 30;
    }

    if(leftPosition < 0 && currentCarouselPage === 4) {
      ui.position.left = 0;
    }

    else if(leftPosition < -30) {
      ui.position.left = -30;
    }
  }


  else if($(window).width() <= 585 && $(window).width() > 386) {
    if(leftPosition > 30) {
      ui.position.left = 30;
    }

    if(leftPosition < 0 && currentCarouselPage === 6) {
      ui.position.left = 0;
    }

    else if(leftPosition < -30) {
      ui.position.left = -30;
    }
  }


  else if($(window).width() <= 386) {
    if(leftPosition > 30) {
      ui.position.left = 30;
    }

    if(leftPosition < 0 && currentCarouselPage === 12) {
      ui.position.left = 0;
    }

    else if(leftPosition < -30) {
      ui.position.left = -30;
    }
  }
}





/* ---------------------------- EVENT HANDLERS ---------------------------- */
$(document).ready(function() {


  $("body *").on("touchstart", function() {
    $navLink.off("mouseenter");
    $navLinkButton.off("mouseenter");
    $hamburgerMenu.off("mouseenter");
    $navLinkDropdown.off("mouseenter");
    $loginButtonDropdown.off("mouseenter");
    $searchIconDropdown.off("mouseenter");

    $categoryTileMask.off("mouseenter");

    $carouselTile.off("mouseenter");

    $footerTileListItem.off("mouseenter");
  });



/* ~~~~~~~~~~~~ NAVBAR ~~~~~~~~~~~~ */
  $navLink.on("mouseenter", function() {
    $(this).addClass("nav-link-hovered");
  });

  $navLink.on("mouseleave", function() {
    $(this).removeClass("nav-link-hovered");
  });



  $navLinkButton.on("mouseenter", function() {
    $(this).addClass("nav-link-hovered");
  });

  $navLinkButton.on("mouseleave", function() {
    $(this).removeClass("nav-link-hovered");
  });



  $loginButtonTop.on("click", function() {
    if(bodyMaskDelay === false) {
      bodyMaskDelay = true;

      toggleBodyMask();
      toggleLoginDropdown();

      setTimeout(function() {
        bodyMaskDelay = false;
      }, 300);
    }
  });



  $loginExitButton.on("click", function() {
    if(bodyMaskDelay === false) {
      bodyMaskDelay = true;

      toggleBodyMask();
      toggleLoginDropdown();

      setTimeout(function() {
        bodyMaskDelay = false;
      }, 300);
    }
  });



  $hamburgerMenu.on("mouseenter", function() {
    $hamburgerBar.addClass("nav-link-icon-hovered");
  });

  $hamburgerMenu.on("mouseleave", function() {
    $hamburgerBar.removeClass("nav-link-icon-hovered");
  });

  $hamburgerMenu.on("click", function() {
    if(bodyMaskDelay === false && loginDropdownActive === true) {
      bodyMaskDelay = true;

      toggleLoginDropdown();

      setTimeout(function() {
        toggleDropdownNav();

        setTimeout(function() {
          bodyMaskDelay = false;
        }, 300);
      }, 300);
    }

    else if(bodyMaskDelay === false && loginDropdownActive === false) {
      bodyMaskDelay = true;

      toggleBodyMask();
      toggleDropdownNav();

      setTimeout(function() {
        bodyMaskDelay = false;
      }, 300);
    }
  });



  $navLinkDropdown.on("mouseenter", function() {
    $(this).addClass("nav-link-hovered");
  });

  $navLinkDropdown.on("mouseleave", function() {
    $(this).removeClass("nav-link-hovered");
  });



  $loginButtonDropdown.on("mouseenter", function() {
    $(this).addClass("nav-link-hovered");
  });

  $loginButtonDropdown.on("mouseleave", function() {
    $(this).removeClass("nav-link-hovered");
  });

  $loginButtonDropdown.on("click", function() {
    if(bodyMaskDelay === false) {
      bodyMaskDelay = true;

      toggleDropdownNav();

      setTimeout(function() {
        toggleLoginDropdown();

        setTimeout(function() {
          bodyMaskDelay = false;
        }, 300);
      }, 300);
    }
  });



  $searchIconDropdown.on("mouseenter", function() {
    $(this).addClass("nav-link-hovered");
  });

  $searchIconDropdown.on("mouseleave", function() {
    $(this).removeClass("nav-link-hovered");
  });

  $searchIconDropdown.on("click", function() {
    console.log("search bar dropdown toggle");

    $searchDropdown.slideToggle(200);
  });



/* ~~~~~~~~ BANNER SECTION ~~~~~~~~ */
  $bannerPageCircleLeft.addClass("banner-page-circle-selected");
  $bannerPageCircleLeft.children().css("background-color", "white");




/* !!!!!!!!!!!!!!!!!!!!!!!! TEMPORARY IMAGE PRELOAD !!!!!!!!!!!!!!!!!!!!!!!! */
  $('<img/>').attr('src', 'images/shoe-pennyboard.jpg').on('load', function() {
    $(this).remove();
    $bannerPageImgLeft.css('background-image', 'url(images/shoe-pennyboard.jpg)');

    $bannerPageImgLeft.css('filter', 'blur(0)');
  });

  $('<img/>').attr('src', 'images/shoe-track-tiny.jpg').on('load', function() {
    $(this).remove();
    $bannerPageImgCenter.css('background-image', 'url(images/shoe-track.jpg)');

    $bannerPageImgCenter.css('filter', 'blur(0)');
  });

  $('<img/>').attr('src', 'images/shoe-fog.jpg').on('load', function() {
    $(this).remove();
    $bannerPageImgRight.css('background-image', 'url(images/shoe-fog.jpg)');

    $bannerPageImgRight.css('filter', 'blur(0)');
  });

  $('<img/>').attr('src', 'images/male-model-crop-top.png').on('load', function() {
    $(this).remove();
    $categoryTileMen.css('background-image', 'url(images/male-model-crop-top.png)');

    $categoryTileMen.css('filter', 'blur(0)');
  });

  $('<img/>').attr('src', 'images/female-model-crop-top.png').on('load', function() {
    $(this).remove();
    $categoryTileWomen.css('background-image', 'url(images/female-model-crop-top.png)');

    $categoryTileWomen.css('filter', 'blur(0)');
  });

  $('<img/>').attr('src', 'images/child-model.jpg').on('load', function() {
    $(this).remove();
    $categoryTileChildren.css('background-image', 'url(images/child-model.jpg)');

    $categoryTileChildren.css('filter', 'blur(0)');
  });





  $bannerPageCircleOuter.on("click", function() {
    if(bannerChangeDelay === false) {
      bannerChangeDelay = true;

      selectBannerPageCircle($(this));

      setTimeout(function() {
        bannerChangeDelay = false;
      }, 750);
    }
  });



/* ~~~~~~~ CATEGORY SECTION ~~~~~~~ */
  $categoryTileMask.on("mouseenter", function() {
    categoryTileMaskFadeIn($(this));
  });

  $categoryTileMask.on("mouseleave", function() {
    categoryTileMaskFadeOut($(this));
  });



/* ~~~~~~~ CAMPAIGN SECTION ~~~~~~~ */
  /* $campaignButton.on("mousedown", function() {
    $(this).addClass("button-pressed");
  });

  $campaignButton.on("mouseup", function() {
    $(this).removeClass("button-pressed");
  });

  $campaignButton.on("mouseleave", function() {
    $(this).removeClass("button-pressed");
  }); */



/* ~~~~~ POPULAR ITEM SECTION ~~~~~ */
  $popularItemCarouselInner.draggable({
    axis: "x",
    revert: true,

    drag: function(event, ui) {
      containCarouselDrag(ui);

      //$popularItemCarouselInner.draggable({ revert: false });
      $popularItemCarouselInner.draggable({ revertDuration: 0 });

      currentCarouselPosition = ui.position.left;
      // console.log(currentCarouselPosition);

      if(currentCarouselPosition >= -10 && currentCarouselPosition <= 10) {
        // $popularItemCarouselInner.draggable({ revert: true });
        $popularItemCarouselInner.draggable({ revertDuration: 300 });
      }
    },

    start: function(event, ui) {
      currentCarouselPosition = ui.position.left;
      console.log("start: " + currentCarouselPosition);

      console.log("start other: " + $popularItemCarouselInner.position().left);
    },

    stop: function(event, ui ) {
      console.log("end: " + currentCarouselPosition);

      if(currentCarouselPosition >= -10 && currentCarouselPosition <= 10) {
        console.log("REVERT");
        console.log("");
      }

      else if(currentCarouselPosition < -10) {
        console.log("PAGE UP");
        console.log("");

        carouselPageUp();

        /* changeCarouselPosition(); */

        $popularItemCarouselInner.addClass("carousel-animation");

        scrollCarousel();
      }

      else if(currentCarouselPosition > 10) {
        console.log("PAGE DOWN");
        console.log("");

        carouselPageDown();

        /* changeCarouselPosition(); */

        $popularItemCarouselInner.addClass("carousel-animation");

        scrollCarousel();
      }
    }
  });



  $carouselTile.on("mouseenter", function() {
    $(this).addClass("carousel-tile-hovered");
  });

  $carouselTile.on("mouseleave", function() {
    $(this).removeClass("carousel-tile-hovered");
  });



  $arrowLeftIcon.on("click", function() {
    carouselPageDown();

    /* changeCarouselPosition(); */

    $popularItemCarouselInner.addClass("carousel-animation");

    scrollCarousel();
  });



  $arrowRightIcon.on("click", function() {
    carouselPageUp();

    /* changeCarouselPosition(); */

    $popularItemCarouselInner.addClass("carousel-animation");

    scrollCarousel();
  });



  $popularItemPageNumber.on("click", function() {
    carouselPageSelect($(this));
  });



/* ~~~~~~~ FEATURE SECTION ~~~~~~~ */
  /* $featureButton.on("mousedown", function() {
    $(this).addClass("button-pressed");
  });

  $featureButton.on("mouseup", function() {
    $(this).removeClass("button-pressed");
  });

  $featureButton.on("mouseleave", function() {
    $(this).removeClass("button-pressed");
  }); */



/* ~~~~~~~~ FOOTER SECTION ~~~~~~~~ */
  $footerTileListItem.on("mouseenter", function() {
    $(this).addClass("nav-link-hovered");
  });

  $footerTileListItem.on("mouseleave", function() {
    $(this).removeClass("nav-link-hovered");
  });



  $(window).resize(function() {
    if(carouselClicked === true) {
      /* changeCarouselPosition(); */

      $popularItemCarouselInner.removeClass("carousel-animation");

      scrollCarousel();
    }

    if(dropdownNavActive === true && $(window).width() > 785) {
      toggleBodyMask();
      toggleDropdownNav();
    }
  });


});
