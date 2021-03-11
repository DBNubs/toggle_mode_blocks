(function ($, Drupal) {
  Drupal.behaviors.toggle_dark_mode = {
    'attach': function(contenxt, settings) {
      // set storage
      if (window.matchMedia &&
          window.matchMedia('(prefers-color-scheme: dark)').matches
          && sessionStorage.getItem('colormode') != 'light-mode') {
        sessionStorage.setItem('colormode', 'dark-mode');
      } else if (window.matchMedia &&
          window.matchMedia('(prefers-color-scheme: light)').matches
          && sessionStorage.getItem('colormode') != 'dark-mode') {
        sessionStorage.setItem('colormode', 'light-mode');
      }

      // Trigger to control modes
      if (sessionStorage.getItem('colormode') != 'dark-mode') {
        $('body').addClass('light-mode');
        $('.toggle-dark-mode').text('Dark Mode');
        sessionStorage.setItem('colormode', 'light-mode');
      }
      if (sessionStorage.getItem('colormode') != 'light-mode') {
        $('body').addClass('dark-mode');
        $('.toggle-dark-mode').text('Light Mode');
        sessionStorage.setItem('colormode', 'dark-mode');
      }

      $('.toggle-dark-mode').click(function() {
        if(sessionStorage.getItem('colormode') == 'dark-mode') {
          $(this).text('Dark Mode');
          $('body').addClass('light-mode');
          $('body').removeClass('dark-mode');
          sessionStorage.setItem('colormode', 'light-mode');
        } else {
          $(this).text('Light Mode');
          $('body').addClass('dark-mode');
          $('body').removeClass('light-mode');
          sessionStorage.setItem('colormode', 'dark-mode');
        }
      });
    }
  };
})(jQuery, Drupal, drupalSettings );
