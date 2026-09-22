const Text = `Ivan Petrov живёт по адресу example.com, его email ivan.petrov@gmail.com, 
телефон +380501234567, дата рождения 15.08.1990, встреча назначена на 01.01.2025.
Sasha  и    Olga  придут    тоже. Контакт: sasha_k@mail.ua. Возраст 25 лет, рост 180 см.`;
 
console.log("Исходный текст:");
console.log(Text);
console.log("--------------");
 
console.log(" Задание 1:");
const hasDigitRegex = /\d/;
console.log("Содержит цифру:", hasDigitRegex.test(Text));
 
console.log(" Задание 2:");
const numbersRegex = /\d+/g;
const allNumbers = Text.match(numbersRegex);
console.log("Найденные числа:", allNumbers);
 
console.log(" Задание 3:");
const emailRegex = /[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}/g;
const allEmails = Text.match(emailRegex);
console.log("Найденные email:", allEmails);
 
console.log("Задание 4: ");
const phoneRegex = /\+380\d{9}/g;
const allPhones = Text.match(phoneRegex);
console.log("Найденные телефоны:", allPhones);
 
console.log(" Задание 5:");
const dateRegex = /\b\d{2}\.\d{2}\.\d{4}\b/g;
const allDates = Text.match(dateRegex);
console.log("Найденные даты:", allDates);
 
console.log(" Задание 6:");
const capitalWordRegex = /\b[A-ZА-ЯЁ][a-zа-яё]*\b/g;
const capitalWords = Text.match(capitalWordRegex);
console.log("Слова с большой буквы:", capitalWords);
 
console.log(" Задание 7:");
const withoutDigits = Text.replace(/\d/g, "");
console.log(withoutDigits);
 
console.log(" Задание 8:");
const onlyDigits = Text.replace(/\D/g, "");
console.log(onlyDigits);
 
console.log(" Задание 9:");
const singleSpacedText = Text.replace(/ {2,}/g, " ");
console.log(singleSpacedText);
 
console.log("Задание 10:");
const longWordsRegex = /\b[a-zA-Zа-яА-ЯёЁ]{5,}\b/g;
const longWords = Text.match(longWordsRegex);
console.log("Слова длиной от 5 символов:", longWords);