var TAT = TAT || {};

TAT.adTrack = (function() {

  var
    // exposureArray = [], // 已曝光的廣告.

    /**
     * 空閒控制 返回函數連續調用時，空閒時間必須大於或等於 wait，func 才會執行.
     *
     * @param  {function} func        傳入函數
     * @param  {number}   wait        表示時間窗口的間隔
     * @param  {boolean}  immediate   設置為ture時，調用觸發於開始邊界而不是結束邊界
     * @return {function}             返回客戶調用函數
     */
    debounce = function(func, wait, immediate) {
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
    },

    /**
     * 檢查元素是否出現在可視範圍內.
     * @param  {dom}      jQuery 元素.
     * @return {boolean}  返回結果.
     */
    isElementInViewport = function(el) {
      var elemRect = el.getBoundingClientRect();
      return(window.innerHeight - (elemRect.height / 2) - elemRect.top) > 0 &&
        elemRect.bottom > 0;
    },

    init = function() {

      var className = 'fixed';

      var watchScroll = debounce(function() {

        var $footer = document.getElementsByClassName('footer')[0],
          $sets = document.getElementById('set-list'),
          $all = document.getElementById('all-list');

        if(isElementInViewport($sets)) {
          if(isElementInViewport($all)) {
            console.log('remove')
            if($footer.classList) {
              $footer.classList.remove(className);
              $all.classList.remove(className);
            } else {
              $footer.className = $footer.className.replace(new RegExp('(^|\\b)' + className.split(' ').join(
                  '|') +
                '(\\b|$)', 'gi'), ' ');
              $all.className = $all.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') +
                '(\\b|$)', 'gi'), ' ');
            }
          } else {
            console.log('add')
            if($footer.classList) {
              $footer.classList.add(className);
              $all.classList.add(className);
            } else {
              $footer.className += ' ' + className;
              $all.className += ' ' + className;
            }
          }

        }





      }, 500); // 每500ms最多觸發一次.

      window.addEventListener('scroll', watchScroll);
    },

    ready = function(fn) { // document.ready().
      if(document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading') {
        fn();
      } else {
        document.addEventListener('DOMContentLoaded', fn);
      }
    };


  return {
    init: init,
    ready: ready
  };

})();

TAT.adTrack.ready(TAT.adTrack.init);
