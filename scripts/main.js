// Get the modal
var $modal = {};


$('.popup-modal').on('click', function() {
  var $this = $(this);
  $modal = $('#intro-box-' + $this.data('pid'));
  $modal.fadeIn('slow')
    .off()
    .find('.close').on('click', function() {
      $modal.fadeOut('slow')
    });
});


//smooth scrolling
$(function() {
  $('a[href*=#m]:not([href=#])').click(function() {
    if(location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if(target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
