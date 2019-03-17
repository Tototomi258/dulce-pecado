$(() => {
//Const for each recipe´s title

	const GALLETA_1 = '';
	const GALLETA_2 = '';
	const GALLETA_3 = '';
	const GALLETA_4 = '';
	const GALLETA_5 = '';
	const GALLETA_6 = '';

	const MUFFIN_1 = '';
	const MUFFIN_2 = '';
	const MUFFIN_3 = '';
	const MUFFIN_4 = '';
	const MUFFIN_5 = '';
	const MUFFIN_6 = '';

	const POSTRE_1 = 'Arroz con Leche y Mermelada';
	const POSTRE_2 = 'Sopa de Melón Charentais Helado';
	const POSTRE_3 = 'Mousse de Chocolate';
	const POSTRE_4 = 'Pizza de Frutas';
	const POSTRE_5 = 'Pastel de Queso con Durazno';
	const POSTRE_6 = '';

	const TORTA_1 = 'Tarteletas de Chocolate y Pimienta';
	const TORTA_2 = 'Pastel de Queso con Arandanos';
	const TORTA_3 = 'Pastel de Mocha Italiano';
	const TORTA_4 = 'Torta de Chocolate Blanco y Miel';
	const TORTA_5 = 'Cuadraditos de Torta de Manteca';
	const TORTA_6 = '';

	$('.menu-selector').click(function() {
		const CURRENT_ID = this.id;

//Hides menu and shows new submenu

		$('.menu-selector').hide();
		$('.recipe-selector').show();

		$('#second').addClass('breadcrumb').text(CURRENT_ID);
		$('#first').click(function() {
			$('#second').removeClass('breadcrumb').empty();
			$('#third').removeClass('breadcrumb').empty();
			$('.menu-selector').show();
			$('.recipe-selector').hide();
			$('#recipe').hide();
		});
		$('#second').click(function() {
			$('#third').removeClass('breadcrumb').empty();
			$('.recipe-selector').show();
			$('#recipe').hide();
		});
	

//Selects image based on id

		$('.card-image > img').attr('src', (i) => {
			i++;
			return `media/${CURRENT_ID}${i}.jpg`;
		});	

//Displays text based on id

		$('p').ready(() => {
			let id = CURRENT_ID;

			$('.galleta-ingr').hide();
			$('.muffin-ingr').hide();
			$('.postre-ingr').hide();
			$('.torta-ingr').hide();
			$('.' + id.substring(0, id.length - 1) + '-ingr').show();
		});

		
//Selects title with a loop based on id

		$('.card-title').text((i) => {
			if (CURRENT_ID == 'galletas') {
				if (i == 0) return GALLETA_1;
				if (i == 2) return GALLETA_2;
				if (i == 4) return GALLETA_3;
				if (i == 6) return GALLETA_4;
				if (i == 8) return GALLETA_5;
				if (i == 10) return GALLETA_6;
			} else if (CURRENT_ID == 'muffins') {
				if (i == 0) return MUFFIN_1;
				if (i == 2) return MUFFIN_2;
				if (i == 4) return MUFFIN_3;
				if (i == 6) return MUFFIN_4;
				if (i == 8) return MUFFIN_5;
				if (i == 10) return MUFFIN_6;
			} else if (CURRENT_ID == 'postres') {
				if (i == 0) return POSTRE_1;
				if (i == 2) return POSTRE_2;
				if (i == 4) return POSTRE_3;
				if (i == 6) return POSTRE_4;
				if (i == 8) return POSTRE_5;
				if (i == 10) return POSTRE_6;
			} else if (CURRENT_ID == 'tortas') {
				if (i == 0) return TORTA_1;
				if (i == 2) return TORTA_2;
				if (i == 4) return TORTA_3;
				if (i == 6) return TORTA_4;
				if (i == 8)	return TORTA_5;
				if (i == 10) return TORTA_6;
			}
		});

//Shows the recipe page
		$('.recipe').click(function() {
			let linkId = this.id;

			$('.recipe-selector').hide();
			$('#recipe').show();
			$('#third').addClass('breadcrumb');

			$('.galletas-recipe').hide();
			$('.muffins-recipe').hide();
			$('.postres-recipe').hide();
			$('.tortas-recipe').hide();
			$('.extra-recipe').hide();
			$('.' + CURRENT_ID + '-recipe').show();

			$('.extra').click(function() {
				const MOCHA = $(this).hasClass('mocha');
				const MIGA = $(this).hasClass('miga');

				$('.extra-recipe').show();
				$('.galletas-recipe').hide();
				$('.muffins-recipe').hide();
				$('.postres-recipe').hide();
				$('.tortas-recipe').hide();

				$('.galleta-ingr').hide();
				$('.muffin-ingr').hide();
				$('.postre-ingr').hide();
				$('.torta-ingr').hide();

				if (MOCHA == true) {
					$('.1').show();
					$('#third').html('Crema Mocha')
				} else if (MIGA == true) {
					$('.2').show();
					$('#third').html('Torta de Miga');
				}
			});


//Selects a breadcrumb based on the link
			$(".1").hide();
			$(".2").hide();
			$(".3").hide();
			$(".4").hide();
			$(".5").hide();
			$(".6").hide();

			if (linkId == 'link1') {
				$('#third').html(() => {
					if (CURRENT_ID == 'galletas') {
						return GALLETA_1;
					} else if (CURRENT_ID == 'muffins') {
						return MUFFIN_1;
					} else if (CURRENT_ID == 'postres') {
						return POSTRE_1;
					} else if (CURRENT_ID == 'tortas') {
						return TORTA_1;
					}
				});
				$('.1').show();
			} else if (linkId == 'link2') {
				$('#third').html(() => {
					if (CURRENT_ID == 'galletas') {
						return GALLETA_2;
					} else if (CURRENT_ID == 'muffins') {
						return MUFFIN_2;
					} else if (CURRENT_ID == 'postres') {
						return POSTRE_2;
					} else if (CURRENT_ID == 'tortas') {
						return TORTA_2;
					}
				});				
				$('.2').show();
			} else if (linkId == 'link3') {
				$('#third').html(() => {
					if (CURRENT_ID == 'galletas') {
						return GALLETA_3;
					} else if (CURRENT_ID == 'muffins') {
						return MUFFIN_3;
					} else if (CURRENT_ID == 'postres') {
						return POSTRE_3;
					} else if (CURRENT_ID == 'tortas') {
						return TORTA_3;
					}
				});				
				$('.3').show();
			} else if (linkId == 'link4') {
				$('#third').html(() => {
					if (CURRENT_ID == 'galletas') {
						return GALLETA_4;
					} else if (CURRENT_ID == 'muffins') {
						return MUFFIN_4;
					} else if (CURRENT_ID == 'postres') {
						return POSTRE_4;
					} else if (CURRENT_ID == 'tortas') {
						return TORTA_4;
					}
				});				
				$('.4').show();
			} else if (linkId == 'link5') {
				$('#third').html(() => {
					if (CURRENT_ID == 'galletas') {
						return GALLETA_5;
					} else if (CURRENT_ID == 'muffins') {
						return MUFFIN_5;
					} else if (CURRENT_ID == 'postres') {
						return POSTRE_5;
					} else if (CURRENT_ID == 'tortas') {
						return TORTA_5;
					}
				});				
				$('.5').show();
			} else if (linkId == 'link6') {
				$('#third').html(() => {
					if (CURRENT_ID == 'galletas') {
						return GALLETA_6;
					} else if (CURRENT_ID == 'muffins') {
						return MUFFIN_6;
					} else if (CURRENT_ID == 'postres') {
						return POSTRE_6;
					} else if (CURRENT_ID == 'tortas') {
						return TORTA_6	;
					}
				});
				$('.6').show();
			}
		});
	});
});