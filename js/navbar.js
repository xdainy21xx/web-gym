/**--aninacion css */
  AOS.init();

//**--efecto de navbar responsive  */
$(document).ready(function(){
    $('.menu-toggle').click(function(){
		
		$('nav').toggleClass('active')
		.next('nav').toggleClass('fast');
    })

})

/* menu active*/
$(document).on('click','ul li',function(){
  $(this).addClass('active').siblings().removeClass('active')

})






