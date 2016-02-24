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

jQuery('.video-thumb').click(function() {
    var youtubeId = jQuery(this).attr('rel');
    jQuery('.video-container').fadeIn();
    jQuery('.video-container').append('<iframe width="1130" height="636" src="https://www.youtube.com/embed/' + youtubeId + '?autoplay=1" frameborder="0" allowfullscreen></iframe>');
    jQuery('.video-thumb').hide();
    jQuery(".video").fitVids();
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