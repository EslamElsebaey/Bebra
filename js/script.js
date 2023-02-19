$(document).ready(function () { 
       // preloader
       setTimeout(function () {
        $(".preloader").css({
          opacity : "0" , 
          visibility : "hidden" , 
        })
      }, 2000);
  

/***************************************************************************************** */

  // show and hide search box

  $(".openMySearch").click(function(){
    $(".search-holder-parent").fadeToggle(200);
    $(" .account-text .header-dropdown").removeClass("show-user-account")
    $("body").addClass("overflow-hidden-body") ;
    $(".search-holder-input").addClass("open-search");
  })
  $(".closeSearh-btn").click(function(){
      $(".search-holder-input").removeClass("open-search");
      $(".control-section i").removeClass("icon-color");
      $(".openMySearch i ").removeClass("icon-color")
      setTimeout(() => {
      $(".search-holder-parent").fadeToggle(300);
    }, 200);
    $("body").removeClass("overflow-hidden-body") ;
   
  })


  /***************************************************************************************** */


// open and close sideBar


$(".menu-bars").click(function(){
  $(this).toggleClass("open-bars");
  $(" .account-text .header-dropdown").removeClass("show-user-account")
  $("nav").toggleClass("reset-left");
  $("body").toggleClass("overflowHidden");
})




/********************************************************************************* */


    // SWIPERS 

// main Swiper 
const mainSwiper = new Swiper('.mainBanner .swiper', {
  loop: true,
  // autoplay: true,
  draggable: true,
  navigation: {
    nextEl: ' .mainBanner .swiper-button-next',
    prevEl: '.mainBanner .swiper-button-prev',
  },

  pagination: {
    el: '.mainBanner .swiper-pagination',
    clickable: true,
  },
  
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
  }
});




//  bestseller swiper

const bestsellerSwiper = new Swiper(' .bestseller .swiper', {
  loop: true,
  // autoplay: true,
  draggable: true,
 
  pagination: {
    el: '.bestseller .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.bestseller .swiper-button-next ',
    prevEl: '.bestseller .swiper-button-prev',
  },
  breakpoints: {
  
    350: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    770: {
      slidesPerView: 3,
      spaceBetween: 20
    } , 
    1199: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});


//  Special Offers swiper

const specialOffers = new Swiper(' .special-offers .swiper', {
  loop: true,
  // autoplay: true,
  draggable: true,
 
  pagination: {
    el: '.special-offers .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.special-offers .swiper-button-next ',
    prevEl: '.special-offers .swiper-button-prev',
  },
  breakpoints: {
  
    350: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    770: {
      slidesPerView: 3,
      spaceBetween: 20
    } , 
    1199: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});


//  New Arrivals swiper

const newArrivals = new Swiper(' .new-arrivals .swiper', {
  loop: true,
  // autoplay: true,
  draggable: true,
 
  pagination: {
    el: '.new-arrivals .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.new-arrivals .swiper-button-next ',
    prevEl: '.new-arrivals .swiper-button-prev',
  },
  breakpoints: {
  
    350: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    770: {
      slidesPerView: 3,
      spaceBetween: 20
    } , 
    1199: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});

//  bed rooms swiper

const bedRooms = new Swiper(' .bed-rooms .swiper', {
  loop: true,
  // autoplay: true,
  draggable: true,
 
  pagination: {
    el: '.bed-rooms .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.bed-rooms .swiper-button-next ',
    prevEl: '.bed-rooms .swiper-button-prev',
  },
  breakpoints: {
  
    350: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    770: {
      slidesPerView: 3,
      spaceBetween: 20
    } , 
    1199: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});


//  Sofa swiper

const sofa = new Swiper(' .sofa .swiper', {
  loop: true,
  // autoplay: true,
  draggable: true,
 
  pagination: {
    el: '.sofa .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.sofa .swiper-button-next ',
    prevEl: '.sofa .swiper-button-prev',
  },
  breakpoints: {
  
    350: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    770: {
      slidesPerView: 3,
      spaceBetween: 20
    } , 
    1199: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});


//  clientsReview swiper

const  clientsReview = new Swiper(' .clients-reviews  .swiper', {
  loop: true,
  // autoplay: true,
  draggable: true,
 
  pagination: {
    el: '.clients-reviews .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.clients-reviews .swiper-button-next ',
    prevEl: '.clients-reviews .swiper-button-prev',
  },
  breakpoints: {
  
    350: {
      slidesPerView: 1,
      spaceBetween: 15
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 35
    } 
  }
});








/********************************************************************************* */

// show user account in Mobile
if($(window).width() < 992 ){
  $(".account-text").click(function(){
    $(" .account-text .header-dropdown").toggleClass("show-user-account")
  })
}





/********************************************************************************* */

// to top button

$(window).scroll(function(){
  if($(window).scrollTop() > 150){
    $(".toTop").addClass("showToTop")
  }else{
    $(".toTop").removeClass("showToTop")
  }
})

$(".toTop").click(function(){
  $('html, body').animate({scrollTop:0}, 500);
}) 


/********************************************************************************* */

//  nested menus in footer


if($(window).width() < 768){
  $(".footer-title").click(function(e){
    e.preventDefault() ;
    $(this).next().slideToggle(300) ; 
    $(this).toggleClass("arrow-rotate");
    $(".footer-title").not($(this)).next().slideUp(300);
    $(".footer-title").not($(this)).removeClass("arrow-rotate");
  })
  }
  



/********************************************************************************* */




// FIXED NAV
    
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 150) {
    $("header").addClass("fixed");
    $(" .account-text .header-dropdown").removeClass("show-user-account");
    $(".control-section i").removeClass("icon-color");
    if($(window).width() > 768){
      $(".logo img").addClass("logo-img-big");
      $("header").addClass("header-padding-30");
    }
  } else {
    $("header").removeClass("fixed");
    if($(window).width() > 768){
      $(".logo img").removeClass("logo-img-big");
      $("header").removeClass("header-padding-30");
    }
  
  }
});
var fixedBar = document.querySelector("header"),
  prevScrollposition = $(window).scrollTop();

(window.onscroll = function () {
  var o = $(window).scrollTop();
  prevScrollposition < o && prevScrollposition > 0 ? fixedBar.classList.add("fixedset") : fixedBar.classList.remove("fixedset"), (prevScrollposition = o);
})   


/********************************************************************************* */
 
// add color to icons when clicked

if($(window).width() < 768){
  $(".control-section i").click(function(){
    $(this).toggleClass("icon-color");
  })
}

/********************************************************************************* */

// nested menus

if($(window).width() <= 992) {  
  $(".li-drop").click(function (e) {
    e.preventDefault() ;
    $(this).children().children(".mega-items-parent").slideToggle(300) ;
    $(this).children(".ancor-btn").toggleClass("nav-arrow-rotate");
    $(".li-drop").not($(this)).children(".ancor-btn").removeClass("nav-arrow-rotate");
     $(".li-drop").not($(this)).children(".mega-menu").children(".mega-items-parent").slideUp(300)
    })
    $(".li-drop .ancor-btn").removeAttr("href")
  }



// Move Whatsapp to show company name
if($(window).width() > 768){
  $(window).scroll(function() {
    let footerOffset = $('footer').offset().top,
        footerHeight = $('footer').outerHeight(),
        windowHeight = $(window).height(),
        windowScroll = $(this).scrollTop();
    if (windowScroll > (footerOffset+footerHeight-windowHeight)){
        $(".fixed-whatsapp").addClass("goUp");
    }else{
      $(".fixed-whatsapp").removeClass("goUp");
    }
  });
}



 })


 
/********************************************************************************* */


// fire wow


new WOW().init();




