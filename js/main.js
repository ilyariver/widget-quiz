jQuery(function(e){e("button.go_next").click(function(){var s=e(this).attr("data-next"),o=e(this).attr("data-now");"done"==s?(e(".nav-tabs a").removeClass("closed"),e('.nav-tabs a[href="#sel1"]').tab("show")):(e('.nav-tabs a[href="#'+o+'"]').addClass("closed"),e('.nav-tabs a[href="#'+s+'"]').removeClass("closed"),e('.nav-tabs a[href="#'+s+'"]').tab("show"))}),e("button#open_share").click(function(){e(this).toggleClass("active"),e(".share_box").toggleClass("active")}),e("#open_gift").click(function(){e("#presMe").modal("hide"),e("#presMe2").modal("show")}),e("#open_skidka").click(function(){e("#skidMe").modal("hide"),e("#skidMe2").modal("show")}),e("button.go_back").click(function(){var s=e(this).next("button.go_next").attr("data-prev");e('.nav-tabs a[href="#'+s+'"]').removeClass("closed"),e('.nav-tabs a[href="#'+s+'"]').tab("show")}),e("button.search_btn").click(function(){e(".top_head .search").toggleClass("active")}),e("button.close_search").click(function(){e(".top_head .search").toggleClass("active")}),e(".service_menu a").click(function(){e(".services_box").toggleClass("open")}),e(".services_close").click(function(){e(".services_box").toggleClass("open")}),e("button.open_filtr").click(function(){e(".side .sort_product").toggleClass("active"),e("body").toggleClass("no-scroll")}),e("button.close_filtr").click(function(){e(".side .sort_product").toggleClass("active"),e("body").toggleClass("no-scroll")}),e("header button.menu").click(function(){e(".slider nav.navbar").toggleClass("active"),e(this).toggleClass("active"),e("body").toggleClass("no-scroll")}),e(".slide_list").slick({slidesToShow:1,slidesToScroll:1,infinite:!0,arrows:!1,fade:!0,dots:!0,cssEase:"linear",speed:500,autoplay:!0,autoplaySpeed:2e3}),e(".pict_main").slick({slidesToShow:1,slidesToScroll:1,infinite:!0,arrows:!1,dots:!0,speed:500,autoplay:!0,autoplaySpeed:2e3}),e(".pict_nav").slick({slidesToShow:3,slidesToScroll:1,infinite:!0,arrows:!0,speed:500,autoplay:!0,autoplaySpeed:2e3,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:1,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),e(".com_product").slick({slidesToShow:3,slidesToScroll:1,infinite:!0,arrows:!0,speed:500,autoplay:!1,autoplaySpeed:2e3,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),e(".pro_list .products_l").slick({slidesToShow:4,slidesToScroll:1,infinite:!0,arrows:!0,speed:500,autoplay:!0,autoplaySpeed:2e3,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),e(".pro_list .cartpro_l").slick({slidesToShow:4,slidesToScroll:1,infinite:!0,arrows:!0,speed:500,autoplay:!0,autoplaySpeed:2e3,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),e(".pro_list .fproducts_l").slick({slidesToShow:4,slidesToScroll:1,infinite:!0,arrows:!0,speed:500,autoplay:!0,autoplaySpeed:2e3,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),e(".widget a.dropdown-toggle").click(function(){e(this).next(".dropdown-menu").toggleClass("uopen"),e(this).toggleClass("focusme")}),e(window).width()<500&&(e(".best_sale .container .row").slick({slidesToShow:1,slidesToScroll:1,infinite:!0,speed:500,autoplay:!0,autoplaySpeed:2e3}),e(".partner_list").slick({slidesToShow:1,slidesToScroll:1,infinite:!0,speed:500,autoplay:!0,autoplaySpeed:2e3}));new function(s){var i=e(document),l=!1,t=s.find(".sticky-anchor"),a=s.find(".sticky-content");e(window).on("scroll",function(s){var o=i.scrollTop(),e=t.offset().top;console.log("scroll",o,e),e<o?l||(t.height(a.outerHeight()),a.addClass("fixed"),l=!0):l&&(t.height(0),a.removeClass("fixed"),l=!1)})}(e(".product_item"))});