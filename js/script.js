$(function() {
	$(".menu-selector").click(function() {
		var currentId = this.id;

//Hides menu and shows new submenu

		$(".menu-selector").hide();
		$(".content").show();

		$("#second").addClass('breadcrumb').text(currentId);
		$("#first").click(function() {
			$("#second").removeClass('breadcrumb').text('');
			$(".menu-selector").show();
			$(".content").hide();
		});

//Selects image based on id

		$("img").attr('src', function(i) {
			i++;
			return "media/"  + currentId + i + ".jpg";
		});	

//Displays text based on id

		$("p").ready(function() {
			if (currentId == 'galletas') {
				$(".galleta").css("display", "block");
			}
			if (currentId == 'muffins') {
				$(".muffin").css("display", "block");
			}
			if (currentId == 'postres') {
				$(".postre").css("display", "block");
			}
			if (currentId == 'tortas') {
				$(".torta").css("display", "block");
			}
		});

//Selects title with a loop based on id

		$(".card-title").text(function(i) {
			if (currentId == 'galletas') {
				if (i == 0) {
					return 'galleta 1';
				}
				if (i == 2) {
					return 'galleta 2';
				}
				if (i == 4) {
					return 'galleta 3';
				}
				if (i == 6) {
					return 'galleta 4';
				}
				if (i == 8) {
					return 'galleta 5';
				}
				if (i == 10) {
					return 'galleta 6';
				}
			}
			if (currentId == 'muffins') {
				if (i == 0) {
					return 'galleta 1';
				}
				if (i == 2) {
					return 'galleta 2';
				}
				if (i == 4) {
					return 'galleta 3';
				}
				if (i == 6) {
					return 'galleta 4';
				}
				if (i == 8) {
					return 'galleta 5';
				}
				if (i == 10) {
					return 'galleta 6';
				}
			}
			if (currentId == 'postres') {
				if (i == 0) {
					return 'galleta 1';
				}
				if (i == 2) {
					return 'galleta 2';
				}
				if (i == 4) {
					return 'galleta 3';
				}
				if (i == 6) {
					return 'galleta 4';
				}
				if (i == 8) {
					return 'galleta 5';
				}
				if (i == 10) {
					return 'galleta 6';
				}
			}
			if (currentId == 'tortas') {
				if (i == 0) {
					return 'galleta 1';
				}
				if (i == 2) {
					return 'galleta 2';
				}
				if (i == 4) {
					return 'galleta 3';
				}
				if (i == 6) {
					return 'galleta 4';
				}
				if (i == 8) {
					return 'galleta 5';
				}
				if (i == 10) {
					return 'galleta 6';
				}
			}
		});
	});

	$(".recipe").click(function() {
		
	});
});