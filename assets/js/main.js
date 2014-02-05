jQuery(document).ready(function($) {
  // Dropdown
  $('.nav--toggle').click(function(e){
    e.preventDefault();

    var getContainer  = $('nav.main_nav');
    var link = $(this);
    var icon = $(this).find('i');

    // Toggle Class and Animate & Change Link Title
    getContainer.slideToggle(300, function(){
        if ($(this).is(":visible") === false){
          $(this).removeClass('open').addClass('closed').removeAttr('style');
          link.attr('title', 'Menü anzeigen');
        } else {
          $(this).removeClass('closed').addClass('open').removeAttr('style');
          link.attr('title', 'Menü ausblenden');
        }
      });
    
    link.toggleClass('nav--open');
    icon.toggleClass('fa-bars fa-times');
  });

  // $('.nav--close').click(function(e){
  //   e.preventDefault();
  //   $('.layout').toggleClass('is--pushed-down is--pushed-up');
  //   $('.nav--toggle i').toggleClass('fa-bars fa-times');
  // });

  // var bgcol = $('.container').first().css('backgroundColor');
  // $('.nav--close').css('color',bgcol);

  // var toggle = $('.nav--toggle');
  // toggle.css({position:"fixed",top:"40px",right:"40px"});
});
