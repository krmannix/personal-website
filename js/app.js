$(document).ready(function() {

	var $background = $('<div class="overlay"></div>');
	var $box = $('<div class="infobox"></div>')

	$(".gallery img").click(function(event) {
		event.preventDefault();
		var image = $(this).attr("src");
		var title = $(this).attr("title");
		var alt = $(this).attr("alt");
		$("body").append($background);
		$background.append($box);

		// Put everything in the box
		console.log(title);
		$box.append('<span id="boxtitle">' + title + '</span>');
		$box.append('<img src="' + image + '" />');
		$box.append('<p id="boxtext">' + alt + '</p>');

		// Remove elements from box and destroy overlay
		$(".overlay").click(function() {
			$box.empty();
			$(".overlay").remove();
		});
	});


});

