$(window).load(function() {
  $("body").removeClass("load");
});


function outputUpdate(vol) {
	var output = document.querySelector ('#volume');
	output.value = vol;
}