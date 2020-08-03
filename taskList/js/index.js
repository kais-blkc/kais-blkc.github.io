let task = $('#task');
let notice = $('.notice');
let i = 1;

$('button.add').on('click', () => {
	// Проверка на пустоту и мин кол-во символов
	if (task.val().length < 3) {
		notice.addClass('error');
		notice.text('Должно быть не менее 3 символов');
		notice.fadeIn(500);
		setTimeout(() => {$('.notice').fadeOut(500);}, 1500);
	} else {
		notice.removeClass('error');
		notice.text('Элемент был добавлен');
		notice.fadeIn(500);
		setTimeout(() => {$('.notice').fadeOut(500);}, 1500);
		// Добавление задачи
		$('.nav').append(`<p>Задание #${i}: ${task.val()}</p>`);
		task.val("")
		i++;
	}
});

$('button.show').on('click', () => {
	$('.nav p').fadeIn(500);
});
