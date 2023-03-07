//------ PAGE-TOP BUTTON ------//
//the movements when scrolling
function PageTopAnime() {
  var scroll = $(window).scrollTop();
  if (scroll >= 200) {
    //200px from the top when scrolled
    $("#page-top").removeClass("RightMove"); //#page-topについているRightMoveというクラス名を除く
    $("#page-top").addClass("LeftMove"); //#page-topについているLeftMoveというクラス名を付与
  } else {
    if ($("#page-top").hasClass("LeftMove")) {
      //すでに#page-topにLeftMoveというクラス名がついていたら
      $("#page-top").removeClass("LeftMove"); //LeftMoveというクラス名を除き
      $("#page-top").addClass("RightMove"); //RightMoveというクラス名を#page-topに付与
    }
  }
}

//when scrolling
$(window).scroll(function () {
  PageTopAnime(); /* call the function*/
});

// how to move when the page is loaded
$(window).on("load", function () {
  PageTopAnime(); /* スクロールした際の動きの関数を呼ぶ*/
});

// the settings when #page-top is clicked
$("#page-top").click(function () {
  $("body,html").animate(
    {
      scrollTop: 0, //scrolling to the top page
    },
    500
  ); //the speed for the page top scroll(bigger number will be slower)
  return false; //Disable the link itself
});

//------ WORKS SECTION ------//

$(".slider").slick({
  autoplay: false, //automatically move?
  infinite: true, //loop the slide?
  speed: 500, //the speed for the slide(default is 300)
  slidesToShow: 3, //how many slide?
  slidesToScroll: 1, //one img for one scroll
  prevArrow: '<div class="slick-prev"></div>', //change the html for the Preview
  nextArrow: '<div class="slick-next"></div>', //change the html for the Next
  centerMode: true, //center elements
  variableWidth: true, //Display images with different widths at the same height
  dots: true, //display dot navigation
});

//------ MENU ------//
// function toggleMenu() {
//   const menuBox = document.querySelector('.menu_box.mobile-menu');
//   const menuIcon = document.querySelector('.menu-icon.hamburger');

//   menuBox.classList.toggle('show');
//   menuIcon.classList.toggle('active');
// }

function toggleMenu() {
  var menu = document.querySelector('.mobile-menu');
  menu.classList.toggle('visible');
}
