// Задача: Дана строка. Перевернуть строку в обратном порядке, справа налево.

// Алгоритм инвертирования строки:
//
// Начало.
//     Получить строку.
// Создать пустую строку для результата.
// Для каждого символа в исходной строке, начиная с последнего:
// Добавить символ в конец результирующей строки.
// Вывести результирующую строку.
// Конец.

//              01234
const string = "hello";
let reversed = "";

for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
}

console.log(reversed);