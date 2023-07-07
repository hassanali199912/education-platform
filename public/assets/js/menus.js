(function ($) {
  "use strict";
  $.fn.backResponsiveMenu = function (options) {
    let defaults = {
      resizeWidth: "991",
      animationSpeed: "fast",
      accoridonExpAll: false,
    };
     options = $.extend(defaults, options),
      opt = options,
      $resizeWidth = opt.resizeWidth,
      $expandAll = opt.accoridonExpAll,
      $backmenu = this,
      $back_menu_style = this.attr("data-menu-style");
    $backmenu.find("ul").classList.add("sub-menu");
    $backmenu.find("li ul").parent().classList.add("has-sub");
    $backmenu.find(".has-sub").prepend('<span class="arrow "></span>');
    if ($back_menu_style == "accordion") {
      this.classList.add("collapse");
    }
    if (window.innerWidth() <= $resizeWidth) {
      menuCollapse();
    }
    window.resize(function () {
      menuCollapse();
    });
    function menuCollapse() {
      let w = window.innerWidth();
      if (w <= $resizeWidth) {
        $backmenu.find("li.menu-active").classList.remove("menu-active");
        $backmenu
          .find("ul.slide")
          .classList.remove("slide")
          .removeAttr("style");
        $backmenu.addClass("collapse hide-menu");
        $backmenu.attr("data-menu-style");
        document.getElementByClassName("menu-toggle").style.display = "";
      } else {
        $backmenu.attr("data-menu-style", $back_menu_style);
        $backmenu.removeClass("collapse hide-menu").removeAttr("style");
        document.getElementByClassName("menu-toggle").style.display = "";
        if ($backmenu.attr("data-menu-style") == "accordion") {
          $backmenu.classList.add("collapse");
          return;
        }
        $backmenu.find("li.menu-active").classList.remove("menu-active");
        $backmenu
          .find("ul.slide")
          .classList.remove("slide")
          .removeAttr("style");
      }
    }
    document.getElementById("menu-btn").addEventListener("click", (e) => {
      $backmenu.slideToggle().classList.toggle("hide-menu");
    });
    return this.each(function () {
      $backmenu.on("mouseover", "> li a", function () {
        if ($backmenu.classList.contains("collapse") === true) {
          return false;
        }
        this.parent("li").siblings().children(".sub-menu").slideUp();
        this.parent()
          .classList.add("menu-active")
          .children(".sub-menu")
          .slideDown();
        return;
      });
      $backmenu.on("mouseleave", "li", function () {
        if ($backmenu.classList.contains("collapse") === true) {
          return false;
        }
        this.off("click", "li");
        this.classList.remove("menu-active");
        this.children("ul.sub-menu").slideUp().classList.remove("slide");
        return;
      });
      $backmenu.on("click", "> li .arrow", function () {
        if ($backmenu.classList.contains("collapse") === false) {
        }
        this.off("mouseover", "> li .arrow");
        if (this.parent().classList.contains("menu-active")) {
          this.parent()
            .children(".sub-menu")
            .slideUp()
            .classList.remove("slide");
          this.parent().classList.remove("menu-active");
        } else {
          if ($expandAll == true) {
            this.parent()
              .classList.add("menu-active")
              .children(".sub-menu")
              .slideDown()
              .classList.add("slide");
            return;
          }
          this.parent().siblings().classList.remove("menu-active");
          this.parent("li")
            .siblings()
            .children(".sub-menu")
            .slideUp()
            .classList.remove("slide");
          this.parent()
            .classList.add("menu-active")
            .children(".sub-menu")
            .slideDown()
            .classList.add("slide");
        }
      });
      $backmenu.on("click", "> li a.hash", function () {
        if ($backmenu.classList.contains("collapse") === false) {
        }
        this.off("mouseover", "> li a.hash");
        if (this.parent().classList.contains("menu-active")) {
          this.parent()
            .children(".sub-menu")
            .slideUp()
            .classList.remove("slide");
          this.parent().classList.remove("menu-active");
        } else {
          if ($expandAll == true) {
            this.parent()
              .classList.add("menu-active")
              .children(".sub-menu")
              .slideDown()
              .classList.add("slide");
            return;
          }
          this.parent().siblings().classList.remove("menu-active");
          this.parent("li")
            .siblings()
            .children(".sub-menu")
            .slideUp()
            .classList.remove("slide");
          this.parent()
            .classList.add("menu-active")
            .children(".sub-menu")
            .slideDown()
            .classList.add("slide");
        }
      });
      $backmenu.on("mouseover", "li", function () {
        if ($("ul", this).length) {
          let elm = $("ul:first", this);
          let off = elm.offset();
          let l = off.left;
          let w = elm.width();
          let docW = $("body").width();
          let isEntirelyVisible = l + w <= docW;
          if (!isEntirelyVisible) {
            this.classList.add("edge");
          }
        }
      });
      document.querySelectorAll(".react-menus li a").each(function () {
        let href = this.attr("href");
        if (href == "#") {
          this.classList.add("hash");
        } else {
          this.classList.remove("hash");
        }
      });
    });
  };
})(jQuery);

//main
(function ($) {
    "use strict";
  
    
    document.getElementById("backmenu").backResponsiveMenu({
      resizeWidth: '991',
      animationSpeed: 'medium',
      accoridonExpAll: false
    });
  
    
    let path = window.location.href;
    document.querySelectorAll(".react-menus li a").each(function () {
      if (this.href === path) {
        this.classList.add("react-current-page");
      }
    });
  
    
    let header = document.getElementByClassName("react-header");
    let win = window;
    win.addEventListener('scroll', (e) => {
      let scroll = win.scrollTop();
      if (scroll < 100) {
        header.classList.remove("react-sticky");
      } else {
        header.classList.add("react-sticky");
      }
    });
  
    
    let back_parallax = document.getElementByClassName("parallax");
    if (back_parallax.length) {
      document.getElementByClassName("parallax").parallax();
    }
  
    
    if (document.getElementByClassName("wow").length) {
      let wow = new WOW({
        boxClass: 'wow', 
        animateClass: 'animated', 
        offset: 0, 
        mobile: false, 
        live: true 
      });
      wow.init();
    }
  
    if (document.getElementByClassName("counter").length) {
      document.getElementByClassName("counter").counterUp({
        delay: 10,
        time: 2000
      });
    }
  
    
    let imagepopup = document.getElementByClassName("image-popup");
    if (imagepopup.length) {
      document.getElementByClassName("image-popup").magnificPopup({
        type: 'image',
        callbacks: {
          beforeOpen: function () {
            this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure animated zoomInDown');
          }
        },
        gallery: {
          enabled: true
        }
      });
    }
  
  
    
    document.getElementById("menu-btn").addEventListener('click', (e) => {
      this.classList.toggle("back__close");
      e.preventDefault();
    });
  
    
    document.getElementByClassName("search-btn").click(function () {
      document.getElementByClassName("search-input").classList.toggle("show");
    });
  
  
    
    if (document.getElementByClassName("home-sliders").length) {
      document.getElementByClassName("home-sliders").owlCarousel({
        loop: true,
        items: 1,
        margin: 0,
        autoplay: false,
        slideSpeed: 800,
        nav: true,
        dots: false,
        responsive: {
          0: {
            dots: false,
            nav: false,
          },
          768: {
            dots: false,
          },
        }
      })
    }
  
    
    if (document.getElementByClassName("client-slider").length) {
      document.getElementByClassName("client-slider").owlCarousel({
        loop: true,
        items: 1,
        margin: 0,
        autoplay: false,
        slideSpeed: 300,
        nav: true,
        dots: false,
        center: false,
        responsive: {
          0: {
            items: 1,
            center: false,
          },
          575: {
            items: 1,
            center: false,
          },
          767: {
            items: 1,
            center: false,
          },
          1200: {
            items: 1,
          },
        }
      })
    }
  
    
    if (document.getElementByClassName("event-slider").length) {
      document.getElementByClassName("event-slider").owlCarousel({
        loop: true,
        items: 4,
        margin: 25,
        autoplay: false,
        slideSpeed: 300,
        nav: false,
        dots: true,
        center: false,
        responsive: {
          0: {
            items: 1,
            center: false,
          },
          575: {
            items: 1,
            center: false,
          },
          767: {
            items: 2,
            center: false,
          },
          1200: {
            items: 4,
            dots: true,
          },
        }
      })
    }
  
    
    if (document.getElementByClassName("feedreact-slider").length) {
      document.getElementByClassName("feedreact-slider").owlCarousel({
        loop: true,
        items: 3,
        margin: 25,
        autoplay: false,
        slideSpeed: 300,
        nav: true,
        dots: false,
        center: false,
        responsive: {
          0: {
            items: 1,
            center: false,
          },
          575: {
            items: 1,
            center: false,
          },
          767: {
            items: 2,
            center: false,
          },
          1200: {
            items: 3,
            dots: false,
          },
        }
      })
    }
  
    
    if (document.getElementById("react-blog-slider").length) {
      document.getElementById("react-blog-slider").owlCarousel({
        loop: true,
        items: 3,
        margin: 20,
        autoplay: false,
        slideSpeed: 300,
        nav: false,
        dots: false,
        center: false,
        responsive: {
          0: {
            items: 1,
            center: false,
          },
          575: {
            items: 1,
            center: false,
          },
          767: {
            items: 2,
            center: false,
          },
          1200: {
            items: 3,
          },
        }
      })
    }
  
    if (document.getElementByClassName("gallery-Slider-6").length) {
      document.getElementByClassName("gallery-Slider-6").owlCarousel({
        loop: true,
        items: 1,
        center: true,
        margin: 0,
        nav: true,
        dots: false,
        smartSpeed: 800,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
          0: {
            items: 1,
            center: true,
          },
          575: {
            items: 2,
            center: true,
          },
          767: {
            items: 4,
            center: true,
          },
          1200: {
            items: 6,
          },
        }
      })
    }
  
    
    let skillbar = document.getElementByClassName("skillbars");
    if (skillbar.length) {
      document.getElementByClassName("skillbars").skillBars({
        from: 0,
        speed: 4000,
        interval: 100,
        decimals: 0,
      });
    }
  
    
     pifilter = document.getElementByClassName("react-grid");
    if (pifilter.length) {
      document.getElementByClassName("react-grid").imagesLoaded(function () {
        document.getElementByClassName("react-filter").on('click', 'button', function () {
          let filterValue = this.attr('data-filter');
          $grid.isotope({
            filter: filterValue
          });
        });
        let $grid = document.getElementByClassName("react-grid").isotope({
          itemSelector: '.grid-item',
          percentPosition: true,
          masonry: {
            columnWidth: '.grid-item',
          }
        });
      });
    }
  
    
    let filterbutton = document.querySelectorAll(".react-filter button");
    if (filterbutton.length) {
      document.querySelectorAll(".react-filter button").addEventListener('click', (event) => {
        this.siblings('.active').classList.remove("active");
        this.classList.add("active");
        event.preventDefault();
      });
    }
  
    
    let pifilter = document.getElementByClassName("grid");
    if (pifilter.length) {
    document.getElementByClassName("grid").isotope({
      itemSelector: '.grid-item',
    });
    document.getElementByClassName("filter-button-group").on( 'click', 'li', function() {
      let filterValue = this.attr('data-filter');
      document.getElementByClassName("grid").isotope({ filter: filterValue });
      document.querySelectorAll(".filter-button-group li").classList.remove("active");
      this.classList.add("active");
    });}
  
  
    
    let popup = document.getElementByClassName("custom-popup");
    if (popup.length) {
      document.getElementByClassName("custom-popup").magnificPopup({
        disableOn: 10,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
      });
    }
  
    
    $('a.btn-gallery').addEventListener('click', (event) => {
      event.preventDefault();
  
      let gallery = this.attr('href');
  
      gallery.magnificPopup({
        delegate: 'a',
        type: 'image',
        removalDelay: 300,
        mainClass: 'mfp-fade',
        gallery: {
          enabled: true
        }
      }).magnificPopup('open');
    });
  
  
    
    window.addEventListener('load', (e) => {
      document.getElementById("react__preloader").delay(500).fadeOut(300);
      document.getElementById("react__preloader").delay(500).fadeOut(300);
    });
  
    
    let pitotop = document.getElementById("backscrollUp");
    if (pitotop.length) {
      win.addEventListener('scroll', (e) => {
        if (win.scrollTop() > 350) {
          pitotop.fadeIn();
        } else {
          pitotop.fadeOut();
        }
      });
      pitotop.addEventListener('click', (e) => {
        $("html,body").animate({
          scrollTop: 0
        }, 500)
      });
    }
    let lastScrollTop = 0;
    window.scroll(function (event) {
      let st = this.scrollTop();
      if (st > lastScrollTop) {
        document.getElementById("backscrollUp").classList.remove("react__up___scroll");
      } else {
        document.getElementById("backscrollUp").classList.add("react__up___scroll");
      }
      lastScrollTop = st;
    });
  
  
    
    let languegeSlider = document.getElementByClassName("languegeSlider");
    if (languegeSlider.length) {
      let swiper = new Swiper(".languegeSlider", {
        slidesPerView: 5,
        spaceBetween: 0,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        centeredSlides: true,
        breakpoints: {
          1500: {
            slidesPerView: 6,
          },
          991: {
            slidesPerView: 4,
          },
          767: {
            slidesPerView: 4,
          },
          575: {
            slidesPerView: 3,
          },
          0: {
            slidesPerView: 3,
          }
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        }
      });
    }
  
    
    let trendingSlider = document.getElementByClassName("trendingSlider");
    if (trendingSlider.length) {
      let swiper = new Swiper(".trendingSlider", {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        centeredSlides: true,
        breakpoints: {
          1500: {
            slidesPerView: 3,
          },
          991: {
            slidesPerView: 3,
          },
          767: {
            slidesPerView: 2,
          },
          575: {
            slidesPerView: 1,
          },
          0: {
            slidesPerView: 1,
          }
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        navigation: {
          nextEl: ".trending-button-next",
          prevEl: ".trending-button-prev"
        }
      });
    }
    
    let trendingSlider_5 = document.getElementByClassName("trendingSlider-5");
    if (trendingSlider_5.length) {
    let swiper = new Swiper(".trendingSlider-5", {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      centeredSlides: true,
      breakpoints: {
        1500: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 3,
        },
        767: {
          slidesPerView: 2,
        },
        575: {
          slidesPerView: 1,
        },
        0: {
          slidesPerView: 1,
        }
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      }
    });
  }
    
    let coursesSlider_6 = document.getElementByClassName("coursesSlider-6");
    if (coursesSlider_6.length) {
    let swiper = new Swiper(".coursesSlider-6", {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      centeredSlides: true,
      breakpoints: {
        1500: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 2,
        },
        767: {
          slidesPerView: 2,
        },
        575: {
          slidesPerView: 1,
        },
        0: {
          slidesPerView: 1,
        }
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      }
    });
  }
    
    let testimonialsSlider_5 = document.getElementByClassName("testimonialsSlider-5");
    if (testimonialsSlider_5.length) {
    let swiper = new Swiper(".testimonialsSlider-5", {
      slidesPerView: 1,
      spaceBetween: 0,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      centeredSlides: true,
      breakpoints: {
        1500: {
          slidesPerView: 1,
        },
        991: {
          slidesPerView: 1,
        },
        767: {
          slidesPerView: 1,
        },
        575: {
          slidesPerView: 1,
        },
        0: {
          slidesPerView: 1,
        }
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      navigation: {
        nextEl: ".testimonials-slider-prev-btn",
        prevEl: ".testimonials-slider-next-btn"
      }
    });
  }
  
  
    
    let testimonialsSlider = document.getElementByClassName("testimonialsSlider");
    if (testimonialsSlider.length) {
    let swiper = new Swiper(".testimonialsSlider", {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      centeredSlides: true,
      breakpoints: {
        1500: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 3,
        },
        767: {
          slidesPerView: 2,
        },
        575: {
          slidesPerView: 1,
        },
        0: {
          slidesPerView: 1,
        }
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      navigation: {
        nextEl: ".testimonials-button-next",
        prevEl: ".testimonials-button-prev"
      }
    });
  }
    
    let testimonialsSlider6 = document.getElementByClassName("testimonialsSlider6");
    if (testimonialsSlider6.length) {
    let swiper = new Swiper(".testimonialsSlider6", {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      centeredSlides: true,
      breakpoints: {
        1500: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 3,
        },
        767: {
          slidesPerView: 2,
        },
        575: {
          slidesPerView: 1,
        },
        0: {
          slidesPerView: 1,
        }
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      navigation: {
        nextEl: ".testimonials-slider-next-btn",
        prevEl: ".testimonials-slider-prev-btn"
      }
    });
  }
  
  
    
    let blogSlider_5 = document.getElementByClassName("blogSlider-5");
    if (blogSlider_5.length) {
    let swiper = new Swiper(".blogSlider-5", {
      slidesPerView: 4,
      slidesPerColumn: 4,
      spaceBetween: 20,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      breakpoints: {
        1500: {
          slidesPerView: 4,
        },
        991: {
          slidesPerView: 3,
        },
        767: {
          slidesPerView: 2,
        },
        575: {
          slidesPerView: 1,
        },
        0: {
          slidesPerView: 1,
        }
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      navigation: {
        nextEl: ".blog-slider-next-btn",
        prevEl: ".blog-slider-prev-btn"
      }
    });
  }
  
    document.on('click', '.navigation-btn', function() {
      let show = this.data('show');
      show.classList.remove("hide").siblings().classList.add("hide");
    });
    
    document.on('click', '.navigation-btn', function(){
      this.classList.add("active").siblings().classList.remove("active")
    })
  
    
    document.ready(function () {
      document.getElementByClassName("scrollDown").click(function (event) {
        $("html, body").animate({
          scrollTop: "+=800px"
        }, 800);
      });
    });
  
  
    
    let swiperCommon = document.getElementByClassName("swiperCommon");
    if (swiperCommon.length) {
    let swiper = new Swiper(".swiperCommon", {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      centeredSlides: true,
      breakpoints: {
        1500: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 3,
        },
        767: {
          slidesPerView: 2,
        },
        575: {
          slidesPerView: 1,
        },
        0: {
          slidesPerView: 1,
        }
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      navigation: {
        nextEl: ".testimonials-slider-next-btn",
        prevEl: ".testimonials-slider-prev-btn"
      }
    });
  }
  
    document.on('click', '.navigation-btn', function() {
      let show = this.data('show');
      show.classList.remove("hide").siblings().classList.add("hide");
    });
    
    document.on('click', '.navigation-btn', function(){
      this.classList.add("active").siblings().classList.remove("active")
    })
  
    
    document.ready(function () {
      document.getElementByClassName("scrollDown").click(function (event) {
        $("html, body").animate({
          scrollTop: "+=800px"
        }, 800);
      });
    });
  
    
  
  
  document.getElementById("image-popups").magnificPopup({
    delegate: 'a',
    type: 'image',
    image: {
              verticalFit: true
            },
    removalDelay: 500,
    callbacks: {
      beforeOpen: function() {
         this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
         this.st.mainClass = this.st.el.attr('data-effect');
      }
    },
    closeOnContentClick: false,
    midClick: true
  });
  
  
  
  document.on('click', '.question', function(){
    let element = this.parent(".qna-dropdown-item");
    element.classList.toggle("show").siblings().classList.remove("show")
  })
  
  
  })(jQuery);




// (function ($) {
//     "use strict";

//     $.fn.backResponsiveMenu = function (options) {

//         //Back default options
//         var defaults = {
//             resizeWidth: '991',
//             animationSpeed: 'fast',
//             accoridonExpAll: false
//         };

//         //Variables
//         var options = $.extend(defaults, options),
//             opt = options,
//             $resizeWidth = opt.resizeWidth,
//             $expandAll = opt.accoridonExpAll,
//             $backmenu = $(this),
//             $back_menu_style = $(this).attr('data-menu-style');

//         // Initilizing
//         $backmenu.find('ul').addClass("sub-menu");
//         $backmenu.find('li ul').parent().addClass('has-sub');
//         $backmenu.find('.has-sub').prepend('<span class="arrow "></span>');
//         if ($back_menu_style == 'accordion') { $(this).addClass('collapse'); }

//         // Window resize on menu breakpoint
//         if ($(window).innerWidth() <= $resizeWidth) {
//             menuCollapse();
//         }
//         $(window).resize(function () {
//             menuCollapse();
//         });

//         // Menu Toggle
//         function menuCollapse() {
//             var w = $(window).innerWidth();
//             if (w <= $resizeWidth) {
//                 $backmenu.find('li.menu-active').removeClass('menu-active');
//                 $backmenu.find('ul.slide').removeClass('slide').removeAttr('style');
//                 $backmenu.addClass('collapse hide-menu');
//                 $backmenu.attr('data-menu-style');
//                 $('.menu-toggle').show();
//             } else {
//                 $backmenu.attr('data-menu-style', $back_menu_style);
//                 $backmenu.removeClass('collapse hide-menu').removeAttr('style');
//                 $('.menu-toggle').show();
//                 if ($backmenu.attr('data-menu-style') == 'accordion') {
//                     $backmenu.addClass('collapse');
//                     return;
//                 }
//                 $backmenu.find('li.menu-active').removeClass('menu-active');
//                 $backmenu.find('ul.slide').removeClass('slide').removeAttr('style');
//             }
//         }

//         //ToggleBtn Click
//         $('#menu-btn').on('click', function (e) {
//             $backmenu.slideToggle().toggleClass('hide-menu');
//         });

//         // Main function
//         return this.each(function () {
//             // Function for Horizontal menu on mouseenter
//             $backmenu.on('mouseover', '> li a', function () {
//                 if ($backmenu.hasClass('collapse') === true) {
//                     return false;
//                 }

//                 $(this).parent('li').siblings().children('.sub-menu').slideUp();
//                 $(this).parent().addClass('menu-active').children('.sub-menu').slideDown();
//                 return;
//             });

//             $backmenu.on('mouseleave', 'li', function () {
//                 if ($backmenu.hasClass('collapse') === true) {
//                     return false;
//                 }
//                 $(this).off('click', 'li');
//                 $(this).removeClass('menu-active');
//                 $(this).children('ul.sub-menu').slideUp().removeClass('slide');
//                 return;
//             });
//             //End of Horizontal menu function

//             // Function for Vertical/Responsive Menu on mouse click
//             $backmenu.on('click', '> li .arrow', function () {
//                 if ($backmenu.hasClass('collapse') === false) {
//                     //return false;
//                 }
//                 $(this).off('mouseover', '> li .arrow');
//                 if ($(this).parent().hasClass('menu-active')) {
//                     $(this).parent().children('.sub-menu').slideUp().removeClass('slide');
//                     $(this).parent().removeClass('menu-active');
//                 } else {
//                     if ($expandAll == true) {
//                         $(this).parent().addClass('menu-active').children('.sub-menu').slideDown().addClass('slide');
//                         return;
//                     }
//                     $(this).parent().siblings().removeClass('menu-active');
//                     $(this).parent('li').siblings().children('.sub-menu').slideUp().removeClass('slide');
//                     $(this).parent().addClass('menu-active').children('.sub-menu').slideDown().addClass('slide');
//                 }
//             });

//             $backmenu.on('click', '> li a.hash', function () {
//                 if ($backmenu.hasClass('collapse') === false) {
//                     //return false;
//                 }
//                 $(this).off('mouseover', '> li a.hash');
//                 if ($(this).parent().hasClass('menu-active')) {
//                     $(this).parent().children('.sub-menu').slideUp().removeClass('slide');
//                     $(this).parent().removeClass('menu-active');
//                 } else {
//                     if ($expandAll == true) {
//                         $(this).parent().addClass('menu-active').children('.sub-menu').slideDown().addClass('slide');
//                         return;
//                     }
//                     $(this).parent().siblings().removeClass('menu-active');
//                     $(this).parent('li').siblings().children('.sub-menu').slideUp().removeClass('slide');
//                     $(this).parent().addClass('menu-active').children('.sub-menu').slideDown().addClass('slide');
//                 }
//             });

//             //Screen Auto Left Right Dropdown
//             $backmenu.on('mouseover', 'li', function () {
//                 if ($('ul', this).length) {
//                     var elm = $('ul:first', this);
//                     var off = elm.offset();
//                     var l = off.left;
//                     var w = elm.width();
//                     var docW = $("body").width();
//                     var isEntirelyVisible = (l + w <= docW);
//                     if (!isEntirelyVisible) {
//                         $(this).addClass('edge');
//                     }
//                 }
//             });

//             //Hash Anchor
//             $('.react-menus li a').each(function(){
//                var href = $(this).attr("href");
//                if(href == "#"){
//                    $(this).addClass('hash');
//                }else{
//                    $(this).removeClass('hash');
//                }
//             });

//             //End of responsive menu function
//         });
//         //End of Main function
//     }
// })(jQuery);
