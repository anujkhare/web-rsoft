$(document).ready(function(){
      
      /*For the one page scroller. */
      $(".main").onepage_scroll({
        sectionContainer: "section",
        responsiveFallback: 600,
        updateURL: true, 
        easing: "ease"
      });
    
      $('#da-slider').cslider({
            autoplay	: true,
            bgincrement	: 450
    });
      
      //For the slimmenu
      $('.slimmenu').slimmenu(
      {
          resizeWidth: '950',
          collapserTitle: 'R-SOFT',
          animSpeed: 'medium',
          easingEffect: null,
          indentChildren: false,
          childrenIndenter: '&nbsp;'
      });
      //to dynamically set the height and width of the jp-containers
      $(window).trigger('resize');
});

$(window).load(function(){
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({'overflow':'visible'});
});