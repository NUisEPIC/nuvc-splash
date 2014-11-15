$('h1.bitter').waypoint(function() {
  $(this).removeClass('transparent').addClass('animated fadeIn');
}, { offset: '90%' });

$('.impress').waypoint(function() {
  $(this).removeClass('transparent').addClass('animated zoomInUp');
}, { offset: '90%' });

$('.track').waypoint(function() {
  $(this).removeClass('transparent').addClass('animated fadeInLeft');
}, { offset: '90%' });