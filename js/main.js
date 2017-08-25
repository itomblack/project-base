(function () { 'use strict';

  $(document).on('focus active', 'input',function(){
  	$('label[for="'+$(this).attr('id')+'"]').addClass('active');
  });

  $(document).on('blur', 'input',function(){

	if (!($(this).length && $(this).val().length)) {
		$('label[for="'+$(this).attr('id')+'"]').removeClass('active');
	}
  });







}()); // end 'use strict'