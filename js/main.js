; (function () {

	'use strict';

	const recipesArray = [
		{
			name: "Pozole",
			img: "images/pozole.jpg",
			description: "El pozole tiene su origen en el caldo molido 'Pozotl' que los indigenas preparaban mezclando el maíz(cacahuazentle) con agua. En la época colonial se condimenta con diversas especies (chile molido, pimienta, ajo) y se agrega carne de cerdo a la preparación.",
			link: "https://www.cocinafacil.com.mx/recetas-de-comida/receta/pozole-rojo-receta/"
		},
		{
			name: "Mole Poblano",
			img: "images/mole.jpg",
			description: "Platillo representativo de la Ciudad de Puebla y aunque su historia se remonta a la época prehispánica existen varias leyendas sobre como lo conocemos actualmete. Hoy en día existen mas de 50 variedades de mole a lo largo y ancho del país (mole negro, mole verde, etc,).",
			link: "https://www.cocinafacil.com.mx/recetas/mole-poblano-tradicional-mexicano/"
		},
		{
			name: "Tamales",
			img: "images/tamales-2.jpg",
			description: "Los Tamales (Tamalli en náhuatl, que significa envuelto) tienen una historia de más de 500 años. Es un nombre dado a varios platillos de origen indigena basados en la misma preparación. No se tiene claro en que país surgieron. En México existen etre 500 y 5000 variedades de tamales",
			link: "https://www.cocinafacil.com.mx/recetas-de-comida/receta/tamales-verdes-de-pollo-en-hoja-de-maiz/"
		},
		{
			name: "Quesadillas",
			img: "images/quesadillas.jpg",
			description: "Se dice que se origino en el norte del país y surge en los tiempos de la Revolución. Aunque se considera el queso como principal ingrediente, las quesadillas estar rellenas de muchos otros guisos y pueden comerse calientes, frias o cocidas en el comal",
			link: "https://www.cocinafacil.com.mx/recetas-de-comida/receta/quesadillas-de-huitlacoche/"
		},
		{
			name: "Cóctel de Camarones",
			img: "images/cóctel.jpg",
			description: "Nace en un bar en Bostón en 1941 y esta inspirado en el Bloody Mary. En México, el cóctel ha añadido como ingredientes básicos como la salsa picante, salsa cátsup o refresco de naranja, el chile serrano. También es posible prepararlo con pulpo, almejas o jaibas ",
			link: "https://www.kiwilimon.com/receta/pescados-y-mariscos/camarones/recetas-de-coctel-de-camaron/coctel-de-camarones-con-catsup"
		},
		{
			name: "Chile en Nogada",
			img: "images/chile en nogada.jpg",
			description: "Se cree que fuerón las madres Agustinas del Convento de Santa Mónica (Puebla) quienes crearón este platillo en 1821 con motivo de la celebración de Independencia y como homenaje a Agustín de Iturbide. En México se puede degustar este platillo desde el mes de julio hasta finales de Septiembre.",
			link: "https://www.kiwilimon.com/receta/platos-fuertes/mexicanos/autenticos-chiles-en-nogada"
		},
		{
			name: "Pastes",
			img: "images/pastes.jpg",
			description: "Comida tradicional del Estdo de Hidalgo y que fue introducido por los británicos en la época de la explotación minera en Real del Monte y Pachuca. La trenza caracteristica del paste servía para que los mineros pudieran sostenerlo y no ensuciar el resto de pan al comerlo",
			link: "https://www.afuegolento.com/receta/pastes-real-monte/14918/"
		},
		{
			name: "Dulces de Tamarindo",
			img: "images/dulces de tamarindo.jpg",
			description: "El tamarindo llegó a México muy probablemente a principios de la Colonia, se cultiva en zonas tropicales en los estados de Michoacán, Guerrero, Oaxaca, Chiapas y Yucatán. A estos dulces también se les conoce como 'Tarugos' y normalmente se encuentran en los puestos de los mercados.",
			link: "https://www.recetasgratis.net/receta-de-dulce-de-tamarindo-59426.html"
		},
		{
			name: "Conchas de Dulce",
			img: "images/conchas.jpg",
			description: "Este famoso pan de dulce debe su nombre por el parecido que guarda con las conchas del mar, la capa superior esta formada por una pasta que tiene como base azúcar, manteca y harina. Su historia se remonta a la época colonial y se modifico más tarde con la migración de franceses e italianos.",
			link: "https://www.kiwilimon.com/receta/panes/conchas-esponjosas"
		},

	]

	var isMobile = {
		Android: function () {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function () {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function () {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function () {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function () {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function () {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var contentWayPoint = function () {
		var i = 0;

		// $('.gtco-section').waypoint( function( direction ) {


		$('.animate-box').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('animated-fast')) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function () {

					$('body .animate-box.item-animate').each(function (k) {
						var el = $(this);
						setTimeout(function () {
							var effect = el.data('animate-effect');
							if (effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if (effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if (effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						}, k * 200, 'easeInOutExpo');
					});

				}, 100);

			}

		}, { offset: '85%' });
		// }, { offset: '90%'} );
	};

	var dropdown = function () {

		$('.has-dropdown').mouseenter(function () {

			var $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'block')
				.addClass('animated-fast fadeInUpMenu');

		}).mouseleave(function () {
			var $this = $(this);

			$this
				.find('.dropdown')
				.css('display', 'none')
				.removeClass('animated-fast fadeInUpMenu');
		});

	};

	var goToTop = function () {

		$('.js-gotop').on('click', function (event) {

			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');

			return false;
		});

		$(window).scroll(function () {

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});

	};


	// Loading page
	var loaderPage = function () {
		$(".gtco-loader").fadeOut("slow");
	};

	var parallax = function () {

		if (!isMobile.any()) {
			$(window).stellar({
				horizontalScrolling: false,
				hideDistantElements: false,
				responsive: true

			});
		}
	};

	var createRecipeGrid = function () {
		console.log("creating recipe card ....");

		const recipesGrid = document.getElementById("recipes");

		for (var i = 0; i < recipesArray.length; i++) {
			let recipeCard = createRecipeCard(recipesArray[i]);

			recipesGrid.appendChild(recipeCard);

		}

	}

	var createRecipeCard = function (recipe) {

		let recipeDiv = document.createElement("div");
		recipeDiv.setAttribute("class", "col-lg-4 col-md-4 col-sm-6");

		let recipeAnchor = document.createElement("a");
		recipeAnchor.setAttribute("class", "fh5co-card-item image-popup");
		recipeAnchor.setAttribute("href", recipe.img);
		recipeAnchor.setAttribute("style", "height: 36em;");

		let recipeFigure = document.createElement("figure");

		let figureDiv = document.createElement("div");
		figureDiv.setAttribute("class", "overlay");

		let figureIcon = document.createElement("i");
		figureIcon.setAttribute("class", "ti-plus");

		figureDiv.appendChild(figureIcon);

		let figureImage = document.createElement("img");
		figureImage.setAttribute("src", recipe.img);
		figureImage.setAttribute("alt", recipe.name);
		figureImage.setAttribute("class", "img-responsive");

		recipeFigure.appendChild(figureDiv);
		recipeFigure.appendChild(figureImage);

		let anchorDiv = document.createElement("div");
		anchorDiv.setAttribute("class", "fh5co-text");

		let anchorDivH2 = document.createElement("h2");
		let h2Content = document.createTextNode(recipe.name);
		anchorDivH2.appendChild(h2Content);
		let anchorDivP = document.createElement("p");
		let pContent = document.createTextNode(recipe.description);
		anchorDivP.appendChild(pContent);

		anchorDiv.appendChild(anchorDivH2);
		anchorDiv.appendChild(anchorDivP);


		let recipeButton = document.createElement("a");
		recipeButton.setAttribute("class", "btn btn-primary btn-block");
		recipeButton.setAttribute("href", recipe.link);
		recipeButton.setAttribute("target", "_blank");


		let recipeButtonLabel = document.createTextNode("Ir a");
		recipeButton.appendChild(recipeButtonLabel);

		recipeAnchor.appendChild(recipeFigure);
		recipeAnchor.appendChild(anchorDiv);
		recipeAnchor.appendChild(recipeButton);

		recipeDiv.appendChild(recipeAnchor);


		return recipeDiv;

	}


	$(function () {
		contentWayPoint();
		dropdown();
		goToTop();
		loaderPage();
		parallax();
		createRecipeGrid();
	});


}());




