const searchTrigger = document.querySelector('.search-trigger');
const searchFormWrap = document.querySelector('.search-form-wrap.hide');
const searchIcon = document.querySelector('.fa-search'); 

searchTrigger.addEventListener('click', () => {

  if (searchTrigger.classList.contains('search-trigger')) {

    searchTrigger.classList.replace('search-trigger', 'slideshow');
    searchFormWrap.style.display = 'block';

    searchIcon.classList.replace('fa-search', 'fa-times');
  } else if (searchTrigger.classList.contains('slideshow')) {

    searchTrigger.classList.replace('slideshow', 'search-trigger');
    searchFormWrap.style.display = 'none';

    searchIcon.classList.replace('fa-times', 'fa-search');
  }
});


// check for dark mode drafts
if( localStorage.getItem( "themeMode" ) != null ) {
  if( localStorage.getItem("themeMode") == "dark" ) {
      $('body').addClass( 'dark_mode' ).removeClass('main_body')
      $('body .blaze-switcher-button').addClass( 'active' )
  } else {
      $('body').addClass( 'main_body' ).removeClass('dark_mode')
      $('body .blaze-switcher-button').removeClass( 'active' )
  }
}

jQuery(document).ready(function($) {

  // check for dark mode drafts
  if( localStorage.getItem( "themeMode" ) != null ) {
    if( localStorage.getItem("themeMode") == "dark" ) {
        $('body').addClass( 'pubnews_dark_mode' ).removeClass('pubnews_main_body')
        $('body .blaze-switcher-button').addClass( 'active' )
    } else {
        $('body').addClass( 'pubnews_main_body' ).removeClass('pubnews_dark_mode')
        $('body .blaze-switcher-button').removeClass( 'active' )
    }
  }

  // header - theme mode
  var themeModeContainer = $('.blaze-switcher-button')
  if( themeModeContainer.length > 0 ) {
    themeModeContainer.on( 'click', function(){
        var _this = $(this), bodyElement = _this.parents('body')
        if( bodyElement.hasClass('dark_mode') ) {
            localStorage.setItem( 'themeMode', 'light' )
            bodyElement.removeClass('dark_mode').addClass('main_body')
            $('body .blaze-switcher-button').removeClass( 'active' )
        } else {
            localStorage.setItem( 'themeMode', 'dark' )
            bodyElement.removeClass('main_body').addClass('dark_mode')
            $('body .blaze-switcher-button').addClass( 'active' )
        }
    })
  }

  // back to top script
  var scrollToTopButton = $("#pubnews-scroll-to-top");

  // عند التمرير للأسفل
  $(window).scroll(function() {
      if ($(this).scrollTop() > 300) { // إذا كان التمرير أكثر من 300px من أعلى الصفحة
          scrollToTopButton.addClass("show"); // إظهار الزر
      } else {
          scrollToTopButton.removeClass("show"); // إخفاء الزر إذا كان التمرير أقل من 300px
      }
  });

  // عند الضغط على الزر
  scrollToTopButton.click(function(e) {
      e.preventDefault(); // منع السلوك الافتراضي للزر
      $("html, body").animate({
          scrollTop: 0 // التمرير إلى أعلى الصفحة
      }, 800); // سرعة التمرير (800ms)
  });
})

