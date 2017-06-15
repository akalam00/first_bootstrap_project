// var $mainheader = $('#main-header');
// $mainheader.html('Hello to the world');
$('#random-gif-btn').click(function(){
$.get( "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=american+psycho", function( data ) {
	var img = '<img src=" ' + data.data.fixed_width_small_url + '">'
  $ ('#random-gif-container').html(img);	
});

});