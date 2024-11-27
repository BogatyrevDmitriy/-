// Пример добавления интерактивности
document.addEventListener('DOMContentLoaded', function () {
    const feynmanSection = document.querySelector('#feynman');
    const kaufmanSection = document.querySelector('#kaufman');

    const feynmanButton = document.createElement('button');
    feynmanButton.textContent = "Узнать больше о методе Фейнмана";
    feynmanSection.appendChild(feynmanButton);

    feynmanButton.addEventListener('click', function() {
        alert("Метод Фейнмана помогает укрепить знания через объяснение материала.");
    });

    const kaufmanButton = document.createElement('button');
    kaufmanButton.textContent = "Узнать больше о методе Кауфмана";
    kaufmanSection.appendChild(kaufmanButton);

    kaufmanButton.addEventListener('click', function() {
        alert("Метод Кауфмана ориентирован на минимизацию барьеров для начала обучения.");
    });
});
