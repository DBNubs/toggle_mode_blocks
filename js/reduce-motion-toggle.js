(function ($, Drupal) {
  Drupal.behaviors.toggle_reduce_motion = {
    'attach': function(contenxt, settings) {
      // set storage
      if (window.matchMedia &&
          window.matchMedia('(prefers-reduced-motion: reduce)').matches
          && sessionStorage.getItem('reducemotion') != 'allow-motion') {
        sessionStorage.setItem('reducemotion', 'reduce-motion');
      } else if (window.matchMedia &&
          window.matchMedia('(prefers-reduced-motion: no-preference)').matches
          && sessionStorage.getItem('reducemotion') != 'reduce-motion') {
        sessionStorage.setItem('reducemotion', 'allow-motion');
      }

      // Trigger to control modes
      if (sessionStorage.getItem('reducemotion') != 'allow-motion') {
        $('body').addClass('reduce-motion');
        $('.toggle-reduce-motion').text('Allow Motion');
        sessionStorage.setItem('reducemotion', 'reduce-motion');
      }

      if (sessionStorage.getItem('reducemotion') != 'reduce-motion') {
        $('body').addClass('allow-motion');
        $('.toggle-reduce-motion').text('Reduce Motion');
        sessionStorage.setItem('reducemotion', 'allow-motion');
      }

      // Click triggers
      $('.toggle-reduce-motion').click(function() {
        if(sessionStorage.getItem('reducemotion') == 'allow-motion') {
          $(this).text('Allow Motion');
          $('body').addClass('reduce-motion');
          $('body').removeClass('allow-motion');
          sessionStorage.setItem('reducemotion', 'reduce-motion');
        } else {
          $(this).text('Reduce Motion');
          $('body').addClass('allow-motion');
          $('body').removeClass('reduce-motion');
          sessionStorage.setItem('reducemotion', 'allow-motion');
        }
      });
    }
  };
})(jQuery, Drupal, drupalSettings );
