var swiper = new Swiper('.blog-slider', {
      spaceBetween: 30,
      effect: 'fade',
      loop: true,
      mousewheel: {
        invert: false,
      },
      // autoHeight: true,
      pagination: {
        el: '.blog-slider__pagination',
        clickable: true,
      }
    });
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

$(document).ready(function(){
  $('.btn-start').click( function(){
    $('.step-wrapper').toggleClass('move-line');
  });
  
});
/*hoshi
$(document).ready(function(){
  
  $('.input__field').change(function() {
    var $this = $(this);
    var $thisInput = $this.find('input');        
    if ($this.val() !== "") {
      $this.addClass('input--filled');
    } else {
      $this.removeClass('input--filled');      
    }
  });
  
});*/






