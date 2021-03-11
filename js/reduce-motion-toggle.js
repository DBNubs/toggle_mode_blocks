(function ($, Drupal) {
  Drupal.behaviors.toggle_reduce_motion = {
    'attach': function(contenxt, settings) {
      // Trigger to control modes
      var $reducemotion = false;
      if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        $('body').addClass('reduce-motion');
        $('.toggle-reduce-motion').text('Allow Motion');
        $reducemotion = true;
      } else {
        $('body').once().addClass('allow-motion');
        $('.toggle-reduce-motion').text('Reduce Motion');
        $reducemotion = false;
      }

      $('.toggle-reduce-motion').click(function() {
        if($reducemotion == false) {
          $(this).text('Allow Motion');
          $('body').addClass('reduce-motion');
          $('body').removeClass('allow-motion');
          $reducemotion = true;
        } else {
          $(this).text('Reduce Motion');
          $('body').addClass('allow-motion');
          $('body').removeClass('reduce-motion');
          $reducemotion = false;
        }
      });
    }
  };
})(jQuery, Drupal, drupalSettings );
