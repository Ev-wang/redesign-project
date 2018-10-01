$(document).foundation()




$(document).mouseup(function (e) {
  var container = $('#contact-panel');
  if (!container.is(e.target) // if the target of the click isn't the container...
  && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
      container.removeClass('is-active');
    }
});



 $(window).scroll(function() {
 var wintop = $(window).scrollTop(), docheight =

 $(document).height(), winheight = $(window).height();
 var scrolled = (wintop/(docheight-winheight))*100;

 $('.scroll-line').css('width', (scrolled + '%'));
});
