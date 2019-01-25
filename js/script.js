$(function() {
	var receta;

	$(".menu-selector").click(function() {
		var currentId = this.id;

//Hides menu and shows new submenu

		$(".menu-selector").hide();
		$(".content").show();

		$("#second").addClass('breadcrumb').text(currentId);
		$("#first").click(function() {
			$("#second").removeClass('breadcrumb').text('');
			$("#third").removeClass('breadcrumb').text('');
			$(".menu-selector").show();
			$(".content").hide();
			$(".recipe").hide();
		});
		$("#second").click(function() {
			$("#third").removeClass('breadcrumb').text('');
			$(".content").show();
			$(".recipe").hide();
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
			} else if (currentId == 'muffins') {
				if (i == 0) {
					return 'muffin 1';
				}
				if (i == 2) {
					return 'muffin 2';
				}
				if (i == 4) {
					return 'muffin 3';
				}
				if (i == 6) {
					return 'muffin 4';
				}
				if (i == 8) {
					return 'muffin 5';
				}
				if (i == 10) {
					return 'muffin 6';
				}
			} else if (currentId == 'postres') {
				if (i == 0) {
					return 'postre 1';
				}
				if (i == 2) {
					return 'postre 2';
				}
				if (i == 4) {
					return 'postre 3';
				}
				if (i == 6) {
					return 'postre 4';
				}
				if (i == 8) {
					return 'postre 5';
				}
				if (i == 10) {
					return 'postre 6';
				}
			} else if (currentId == 'tortas') {
				if (i == 0) {
					return 'torta 1';
				}
				if (i == 2) {
					return 'torta 2';
				}
				if (i == 4) {
					return 'torta 3';
				}
				if (i == 6) {
					return 'torta 4';
				}
				if (i == 8) {
					return 'torta 5';
				}
				if (i == 10) {
					return 'torta 6';
				}
			}
		});

		$(".recipe").click(function() {
			var linkId = this.id;

			$(".content").hide();
			$("#recipe").show();
			$("#third").addClass('breadcrumb');

			if (currentId == 'galletas') {
				$(".galletas-recipe").show();
				$(".muffins-recipe").hide();
				$(".postres-recipe").hide();
				$(".tortas-recipe").hide();
			} else if (currentId == 'muffins') {
				$(".galletas-recipe").hide();
				$(".muffins-recipe").show();
				$(".postres-recipe").hide();
				$(".tortas-recipe").hide();
			} else if (currentId == 'postres') {
				$(".galletas-recipe").hide();
				$(".muffins-recipe").hide();
				$(".postres-recipe").show();
				$(".tortas-recipe").hide();
			} else if (currentId == 'tortas') {
				$(".galletas-recipe").hide();
				$(".muffins-recipe").hide();
				$(".postres-recipe").hide();
				$(".tortas-recipe").shoe();
			}

			if (linkId == 'link1') {
				$("#third").html(title1);
				$(".1").show();
			} else if (linkId == 'link2') {
				$("#third").html(title2);
				$(".2").show();
			} else if (linkId == 'link3') {
				$("#third").html(title3);
				$(".3").show();
			} else if (linkId == 'link4') {
				$("#third").html(title4);
				$(".4").show();
			} else if (linkId == 'link5') {
				$("#third").html(title5);
				$(".5").show();
			} else if (linkId == 'link6') {
				$("#third").html(title6);
				$(".6").show();
			}
		});
	});
});