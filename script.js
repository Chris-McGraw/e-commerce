/* ------------------------- VARIABLE DECLARATIONS ------------------------- */

/* ~~~~~~~~~~~~ NAVBAR ~~~~~~~~~~~~ */
var $hamburgerMenu = $("#hamburger-menu");
var $navbarDropdown = $("#navbar-dropdown");
var dropdownNavActive = false;

var $searchIconDropdown = $("#search-icon-dropdown");
var $searchDropdown = $("#search-dropdown");



/* ~~~~~~~~ BANNER SECTION ~~~~~~~~ */
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



/* ~~~~~~~ CATEGORY SECTION ~~~~~~~ */
var $categoryTileMen = $("#category-tile-men");

var $categoryTileMask = $(".category-tile-mask");

var $categoryTileMenMask = $("#category-tile-men-mask");
var $categoryTileWomenMask = $("#category-tile-women-mask");
var $categoryTileChildrenMask = $("#category-tile-children-mask");



/* ~~~~~ POPULAR ITEM SECTION ~~~~~ */
var $arrowLeftIcon = $("#arrow-left-icon");
var $arrowRightIcon = $("#arrow-right-icon");

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

  changeCarouselPosition();
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


function changeCarouselPosition() {
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



  $categoryTileMask.on("mouseenter", function() {
    categoryTileMaskFadeIn($(this));
  });

  $categoryTileMask.on("mouseleave", function() {
    categoryTileMaskFadeOut($(this));
  });



  $arrowLeftIcon.on("click", function() {
    carouselPageDown();

    changeCarouselPosition();

    /* $popularItemCarouselInner.addClass("carousel-animation");

    scrollCarousel(); */
  });



  $arrowRightIcon.on("click", function() {
    carouselPageUp();

    changeCarouselPosition();

    /* $popularItemCarouselInner.addClass("carousel-animation");

    scrollCarousel(); */
  });



  $popularItemPageNumber.on("click", function() {
    carouselPageSelect($(this));
  });



  $(window).resize(function() {
    if(carouselClicked === true) {
      changeCarouselPosition();

      /* $popularItemCarouselInner.removeClass("carousel-animation");

      scrollCarousel(); */
    }
  });


});
