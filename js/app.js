$(document).ready(function() {

	var $background = $('<div class="overlay"></div>');
	var $box = $('<div class="infobox"></div>')

	$(".gallery img").click(function(event) {
		event.preventDefault();
		var image = $(this).attr("src");
		var title = $(this).attr("title");
		var alt = $(this).attr("alt");
		$("body").append($background);
		$background.hide();
		$background.append($box);

		// Put everything in the box
		console.log(title);
		$box.append('<span id="boxtitle">' + title + '</span>');
		$box.append('<img src="' + image + '" />');
		$box.append('<p id="boxtext">' + alt + '</p>');

		$background.fadeIn("fast", function() {
			$(".overlay").click(function() {
				$background.fadeOut("fast", function() {
					$box.empty();
					$(".overlay").remove();
				});
			});
		});
		// Remove elements from box and destroy overlay
		
	});


});

