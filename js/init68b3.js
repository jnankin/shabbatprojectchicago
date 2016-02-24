jQuery(document).ready(function () {
    jQuery('.mobile-btn').click(function() {
        jQuery('.mobile-nav').slideToggle();

    });

    jQuery('.sticky-donate').click(function() {
      jQuery('.modal').fadeToggle();
    });

    jQuery('.join-in-link').click(function() {
      jQuery('.modal').fadeToggle();
    });

    jQuery('.close').click(function() {
      jQuery('.modal').fadeOut();

    });

});


jQuery(function() {
  jQuery('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = jQuery(this.hash);
      target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        jQuery('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});