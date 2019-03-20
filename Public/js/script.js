$(() => {
//Const for each recipe´s title
	const galletas = [''];
	const muffins = [''];
	const postres = ['Arroz con Leche y Mermelada', 'Sopa de Melón Charentais Helado', 'Mousse de Chocolate', 'Pizza de Frutas', 'Pastel de Queso con Durazno'];
	const tortas = ['Tarteletas de Chocolate y Pimienta', 'Pastel de Queso con Arandanos', 'Pastel de Mocha Italiano', 'Torta de Chocolate Blanco y Miel', 'Cuadraditos de Torta de Manteca'];

	$('.menu-selector').click(function() {
		const currentID = this.id;

//Hides menu and shows new submenu

		$('.menu-selector').hide();
		$('.recipe-selector').show();

		$('#second').addClass('breadcrumb').text(currentID);
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
			return `media/${currentID}${i}.jpg`;
		});	

//Displays text based on id

		$('.card-reveal').ready(() => {
			$('.' + currentID.substring(0, currentID.length - 1) + '-ingr').show().siblings().hide();
			$('span').show();
		});

		
//Selects title with a loop based on id

		$('.card-title').text((i) => {
			if (currentID == 'galletas') {
				return galletas[i/2];	
			} else if (currentID == 'postres') {
				return postres[i/2];	
			} else if (currentID == 'muffins') {
				return muffins[i/2];	
			} else if (currentID == 'tortas') {
				return tortas[i/2];	
			}
		});

//Shows the recipe page

		$('.recipe').click(function() {
			const linkId = this.id;
			const linkNum = linkId.charAt(4);

			$('.recipe-selector').hide();
			$('#recipe').show();
			$('#third').addClass('breadcrumb');

			$('.1, .2, .3, .4, .5, .6').hide();

			$(`.${currentID}-recipe`).show().siblings().hide();
			$(`.${linkNum}`).show();

			$('.extra').click(function() {
				const mocha = $(this).hasClass('mocha');
				const miga = $(this).hasClass('miga');

				$('.extra-recipe').show().siblings().hide();

				if (mocha == true) {
					$('.1').show();
					$('#third').html('Crema Mocha')
				} else if (miga == true) {
					$('.2').show();
					$('#third').html('Torta de Miga');
				}
			});


//Selects a breadcrumb based on the link number

			$('#third').html(() => {
				if (currentID == 'galletas') {
					return galletas[linkNum - 1];
				} else if (currentID == 'muffins') {
					return muffins[linkNum - 1];
				} else if (currentID == 'postres') {
					return postres[linkNum - 1]
				} else if (currentID == 'tortas') {
					return tortas[linkNum - 1];
				}
			});
		});
	});
});