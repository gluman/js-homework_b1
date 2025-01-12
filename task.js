const dropdownLists = document.getElementsByClassName('dropdown__list');
const dropdownValues = document.getElementsByClassName('dropdown__value');

// Проходим по каждому элементу 'dropdown__value' и добавляем обработчик событий
for (let i = 0; i < dropdownValues.length; i++) {
    dropdownValues[i].addEventListener('click', () => {
        // Проверяем и изменяем класс текущего списка dropdown__list
        for (let y = 0; y < dropdownLists.length; y++) {
            if (dropdownLists[y].classList.contains('dropdown__list_active')) {
                dropdownLists[y].classList.remove('dropdown__list_active');
            } else {
                dropdownLists[y].classList.add('dropdown__list_active');
            }
        }
    });
}