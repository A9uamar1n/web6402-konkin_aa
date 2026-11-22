// Класс «Заявка на бронирование»
class Booking {
    constructor(name, email, epoch, insurance, comment, agree) {
        this.name = name;
        this.email = email;
        this.epoch = epoch;
        this.insurance = insurance;
        this.comment = comment;
        this.agree = agree;
    }

    // Форматированный вывод в консоль
    print() {
        console.log(
            "===== Новая заявка Chronos Tours =====\n" +
            `Имя:           ${this.name}\n` +
            `Почта:         ${this.email}\n` +
            `Эпоха:         ${this.epoch}\n` +
            `Страховка:     ${this.insurance}\n` +
            `Пожелания:     ${this.comment || "нет"}\n` +
            `Согласие:      ${this.agree ? "да" : "нет"}\n` +
            "======================================"
        );
    }
}

const form = document.getElementById("booking-form");
const message = document.getElementById("form-message");

form.addEventListener("submit", function (event) {
    // отменяем перезагрузку страницы
    event.preventDefault();

    // создаём объект с введёнными данными
    const booking = new Booking(
        form.elements.name.value,
        form.elements.email.value,
        form.elements.epoch.value,
        form.elements.insurance.value,
        form.elements.comment.value,
        form.elements.agree.checked
    );

    // выводим его в консоль
    booking.print();

    message.classList.remove("form__message--hidden");
    form.reset();
});
