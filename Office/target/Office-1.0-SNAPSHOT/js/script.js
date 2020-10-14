// Функция подсчета количества символов - START
function limitChars(myObject, max, typeChars, leftChars) {
    $(myObject).keydown(function () {
        var count = $(this).val().length; // кол-во уже введенных символов
        var num = max - count; // кол-во символов, которое еще можно ввести

        if (num > 0) {
            // если не достигнут лимит символов
            $(typeChars).text('Введено символов: ' + count);
            $(leftChars).text('Можно ввести символов: ' + num);
            $(this).removeClass('type');
        } else {
            // если достигнут лимит символов
            $(typeChars).text('Введено символов: ' + count);
            $(leftChars).text('Достигнут лимит символов');
            $(this).addClass('type');
        }
    });
}

// Функция подсчета количества символов - END

$(document).ready(function () {

});


$(document).ready(function () {
    var myObject = '.limitInput'; // объект, у которого считаем символы
    var max = 5; // максимум символов
    var typeChars = '#typeChars'; // куда выводим кол-во введенных символов
    var leftChars = '#leftChars'; // куда выводим кол-во оставшихся символов

    limitChars(myObject, max, typeChars, leftChars);
    limitChars('#limitInput', 400, typeChars, leftChars);
});