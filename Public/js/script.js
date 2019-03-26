$('document').ready(() => {
//Const for each recipe´s title
	const galletas = [''];
	const muffins = [''];
	const postres = ['Arroz con Leche y Mermelada', 'Sopa de Melón Charentais Helado', 'Mousse de Chocolate', 'Pizza de Frutas', 'Pastel de Queso con Durazno'];
	const tortas = ['Tarteletas de Chocolate y Pimienta', 'Pastel de Queso con Arandanos', 'Pastel de Mocha Italiano', 'Torta de Chocolate Blanco y Miel', 'Cuadraditos de Torta de Manteca'];

	$('.menu-selector').hover(
		function() {
		  $(this).addClass('shadow-lg').css('cursor', 'pointer'); 
		}, function() {
		  $(this).removeClass('shadow-lg');
		}
	);

	$('.menu-selector').click(function() {
		const currentID = this.id;

//Hides menu and shows new submenu

		$('.menu-selector').hide();
		$('.recipe-selector').show();

		$('.breadcrumb').append(`<li class="breadcrumb-item text-capitalize" id="second"><a href="#">${currentID}</a></li>`)

		$('#first').click(function() {
			$('.menu-selector').show();
			$('#second').remove();
			$('#third').remove();
			$('.recipe-selector').hide();
			$('#recipe').hide();
		});

		$('#second').click(function() {
			$('.recipe-selector').show();
			$('#recipe').hide();
			$('#third').remove();
		});
	

//Selects image based on id

		$('.card-img-top').attr('src', (i) => {
			i++;
			return `media/${currentID}${i}.jpg`;
		});	

//Selects title with a loop based on id

		$('.card-title').text((i) => {
			if (currentID == 'galletas') {
				return galletas[i];	
			} else if (currentID == 'postres') {
				return postres[i];	
			} else if (currentID == 'muffins') {
				return muffins[i];	
			} else if (currentID == 'tortas') {
				return tortas[i];	
			}
		});

//Shows the recipe page

		$('.btn').click(function() {
			const linkId = this.id;
			const linkNum = linkId.charAt(4);

			$('.recipe-selector').hide();
			$('#recipe').show();

			$('.breadcrumb').append(function() {
				if ($('#third').length) {
					return null;
				} else {
					return '<li class="breadcrumb-item text-capitalize text-truncate" id="third"><a href="#"></a></li>';
				}
			});

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

			$('#third a').text(() => {
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