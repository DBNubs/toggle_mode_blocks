(function ($, Drupal) {
  Drupal.behaviors.toggle_dark_mode = {
    'attach': function(contenxt, settings) {
      // Trigger to control modes
      var $darkmode = false;
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        $('body').addClass('dark-mode');
        $('.toggle-dark-mode').text('Light Mode');
        $darkmode = true;
      } else {
        $('body').once().addClass('light-mode');
        $('.toggle-dark-mode').text('Dark Mode');
        $darkmode = false;
      }

      $('.toggle-dark-mode').click(function() {
        if($darkmode == false) {
          $(this).text('Light Mode');
          $('body').addClass('dark-mode');
          $('body').removeClass('light-mode');
          $darkmode = true;
        } else {
          $(this).text('Dark Mode');
          $('body').removeClass('dark-mode');
          $('body').addClass('light-mode');
          $darkmode = false;
        }
      });
    }
  };
})(jQuery, Drupal, drupalSettings );
