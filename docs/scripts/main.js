// Get the modal
$('.popup-modal').on('click', function() {
  var $this = $(this),
    $modal = $('#intro-box-' + $this.data('pid'));
  $modal.fadeIn()
    .find('.close').on('click', function() {
      $modal.fadeOut()
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


window.sr = ScrollReveal({
  duration: 1200,
  delay: -200,
  scale: 1,
  distance: 0,
  easing: 'ease-in',
  reset: true,
});
sr.reveal('.ani-imgbox--festival', 300);


var debounce = function(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if(!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if(callNow) func.apply(context, args);
  };
};

var handleScrollEvent = debounce(function() {
  var $window = $(this);
  if($window.scrollTop() > $('#my-favourite').offset().top) {
    $('.fixed-footer').slideDown('slow');
    // window.removeEventListener('scroll', handleScrollEvent);
  }

  if($window.scrollTop() + $window.height() > $('#all-list').offset().top) {
    $('.fixed-footer').hide();
  }

}, 100); // 每100ms最多觸發一次.

window.addEventListener('scroll', handleScrollEvent);
