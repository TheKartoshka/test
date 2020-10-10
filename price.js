$(function() {
	let filter = $("[data-filter]");
	filter.on("click", function(event){
		event.preventDefault();
		let cat = $(this).data('filter');
		if(cat == 'all'){
			$("[data-cat]").removeClass('hide');
		} else {
			$("[data-cat]").each(function(){
				let item = $(this).data('cat');
				if(item != cat) {
					$(this).addClass('hide');
				} else {
					$(this).removeClass('hide');
				}
			});
		}
	});
});

// SEARCH
$(document).keypress(function(e) {
	let value = $('#search').val();

	if(e.which == 13) {
	
		
		$(function() {

			if(value == 'Сок') {
				$('.shop__item').addClass('hide');
				$('#juic').removeClass('hide');
			} else if (value == 'Вода') {
				$('.shop__item').addClass('hide');
				$('#water').removeClass('hide');				
			} else if (value == 'Макароны') {
				$('.shop__item').addClass('hide');
				$('#maka').removeClass('hide');	
			} else if (value == 'Сыр') {
				$('.shop__item').addClass('hide');
				$('#cheese').removeClass('hide');	
			} else if (value == 'Перловка') {
				$('.shop__item').addClass('hide');
				$('#perl').removeClass('hide');	
			} else if (value == 'Манка') {
				$('.shop__item').addClass('hide');
				$('#man').removeClass('hide');	
			} else if (value == 'Яблоки') {
				$('.shop__item').addClass('hide');
				$('#apple').removeClass('hide');	
			} else if (value == 'Груши') {
				$('.shop__item').addClass('hide');
				$('#grusha').removeClass('hide');	
			} else if (value == 'Морковка') {
				$('.shop__item').addClass('hide');
				$('#carrot').removeClass('hide');	
			} else if (value == 'Капуста') {
				$('.shop__item').addClass('hide');
				$('#bang').removeClass('hide');	
			} else if (value == 'Смеси') {
				$('.shop__item').addClass('hide');
				$('#smesfirst').removeClass('hide');	
				$('#smessecond').removeClass('hide');
			} else if (value == 'Специи') {
				$('.shop__item').addClass('hide');
				$('#speci').removeClass('hide');	
				$('#specii').removeClass('hide');	
			} else if (value == 'Молоко') {
				$('.shop__item').addClass('hide');
				$('#milk').removeClass('hide');	
			} else if (value == 'Чипсы') {
				$('.shop__item').addClass('hide');
				$('#snak').removeClass('hide');	
			}


		});
		

	}
});
