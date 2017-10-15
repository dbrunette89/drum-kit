window.addEventListener('keydown', function(e){
	const audio = document.querySelector(`audio[data-key='${e.keyCode}']`)
	const key = document.querySelector(`.key[data-key='${e.keyCode}']`)
	if (!audio) return; //stop function from continiuing
	audio.currentTime = 0 ; // rewind to start
	audio.play();
	key.classList.add('playing');
	});



$(document).ready(function(){
  $(this).keyup(function(){
    $('div').removeClass('playing');

  });
});