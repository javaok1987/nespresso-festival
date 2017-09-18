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

var slickOption = {
  centerMode: true,
  centerPadding: '80px',
  slidesToShow: 1,
  infinite: false,
  arrows: false
}

$.each($('#minimalism,#mix-fashion,#master-doctrine,#set-list'), function(idx, slider) {
  var $slider = $(slider);
  $slider.find('.prod-slider').slick(slickOption);
  $slider.find('.prod').get(0).style.visibility = 'visible';
  $slider.find('.prod-slider').on('afterChange', function(event, slick, currentSlide, nextSlide) {
    $slider.find('.prod').css({
      visibility: 'hidden'
    }).get(currentSlide).style.visibility = 'visible'
  });
});
