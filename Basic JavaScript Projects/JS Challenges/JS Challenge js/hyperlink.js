//Code for slideshow.
  /*JQuery needs to be defined in script tag of html, or the code for the slideshow won't work.
  you will get an error of 'Uncaught ReferenceError: jQuery is not defined' in console*/
$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
  .fadeOut(1000)
  .next()
  .fadeIn(1000)
  .end()
  .appendTo('#slideshow');
}, 3000);