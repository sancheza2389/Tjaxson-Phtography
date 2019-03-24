$(document).ready(function(){
  // Switches between the camera icon and the X for the navigation button
  $('.closed').hide();
  $('.closed, .opened').on('click', function(){
    $('.closed, .opened').toggle();
  });

  $('.nav__link').on('click', function(){
    $('#toggle').prop('checked', false);
    $('.closed, .opened').toggle();
  });

  //  Phot gallery light box ( Pop up ) feature.
  $(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });

  // Brings the user back to the gallery section of the home page
  // after clicking back button on the gallery pages
  $('#back-button').click(function(event){
    event.preventDefault();
    history.back(1);
  });

  //Gallery back to top Button
  $('#toTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});

});
