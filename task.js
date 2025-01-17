const dropdownLists = document.getElementsByClassName('dropdown__list');
const dropdownValues = document.getElementsByClassName('dropdown__value');


for (let i = 0; i < dropdownValues.length; i++) {
    dropdownValues[i].addEventListener('click', (event) => {
    event.preventDefault();
    
        for (let y = 0; y < dropdownLists.length; y++) {
            if (dropdownLists[y].classList.contains('dropdown__list_active')) {
                dropdownLists[y].classList.remove('dropdown__list_active');
            } else {
                dropdownLists[y].classList.add('dropdown__list_active');
            }
        }
    });
}

// $(document).ready(function() {
//     $('a').click(function(event) {
//         event.preventDefault();
//         var dropdown = $(this).closest('.dropdown'); // Находим родительский контейнер dropdown
//         var selectedItem = $(this).text(); // Получаем текст выбранной ссылки
//         dropdown.find('.selected').text(selectedItem); // Обновляем текст в dropdown
//     });
// });