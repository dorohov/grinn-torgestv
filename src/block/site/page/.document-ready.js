$(document.body).on('click', '.azbn7__menu__item a.azbn7__menu__item__link', null, function(event){
	event.preventDefault();

	var item = $(this).closest('.azbn7__menu__item');
	var item_id = item.attr('data-preview') || "";
	$('.card-item__card.is--menu-preview').removeClass('is--visible');
	$('.card-item__card.is--menu-preview[data-id="'+item_id+'"]').addClass('is--visible');
});