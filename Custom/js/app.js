$(document).ready(function() {

	/*****
	*
	*  Creating Gallery Modals
	*
	******/

	var $background = $('<div class="overlay"></div>');
	var $box = $('<div class="infobox"></div>');
	var $go_button = $('<button id="gobutton">Visit Link</button>');
	var $cancel = $('<p id="cancel_x"><a href="#">X</a></p>');

	//console.log($("gallery").children("li"));

	$(".gallery img").click(function(event) {
		event.preventDefault();
		var link = $(this).parent().attr("href"); // Get "go link"
		console.log(link);
		var image = $(this).attr("src");
		var title = $(this).attr("title");
		var alt = $(this).attr("alt");
		$("body").append($background);
		$background.hide();
		$background.append($box);

		// Put everything in the box
		$box.append($cancel);
		$box.append('<span id="boxtitle">' + title + '</span>');
		$box.append('<img src="' + image + '" />');
		$box.append('<p id="boxtext">' + alt + '</p>');
		if (typeof link != 'undefined') {
			$go_button.click(function(event) {
				
				window.location = link;
			});
			$box.append($go_button);
		}

		$background.fadeIn("fast", function() {
			$cancel.click(function() {
				$background.fadeOut("fast", function() {
					$box.empty();
					$(".overlay").remove();
				});
			});
		});
		// Remove elements from box and destroy overlay
		
	});


});

