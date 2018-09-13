$(".form__control[type='tel']").mask("+7 (999) 999-99-99",{placeholder:"+7 (___) ___-__-__"});
$.mask.definitions['H'] = "[0-2]";
$.mask.definitions['h'] = "[0-9]";
$.mask.definitions['M'] = "[0-5]";
$.mask.definitions['m'] = "[0-9]";
$.mask.definitions['D'] = "[0-3]";
$.mask.definitions['d'] = "[0-9]";
$(".form__control.is--time").mask("Hh:Mm",{placeholder:"__:__"});
$(".form__block").validationEngine(
	'attach', {
		promptPosition : "bottomLeft",
		//scrollOffset: 200,		
		scroll: false
	}
); 

$('.form__control.is--date').datepicker({
    language : 'ru-RU',
    autoHide : true,
    //inline: true,
    //container: '.navbar-category__datepicker'
});