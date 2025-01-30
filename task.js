const dropdownLists = document.getElementsByClassName('dropdown__list');
const dropdownItem = document.getElementsByClassName('dropdown__link')
const dropdownValue = document.getElementsByClassName('dropdown__value');


let active_lang
console.log(dropdownItem)
Array.from(dropdownItem).forEach(item => {
    // dropdownItem.classList.add('dropdown__list_active')
    item.addEventListener('click', event => {
        event.preventDefault();
        item.classList.add('dropdown__list_active')
        active_lang = item[0].textContent()
    })
})
console.log(dropdownValue)

 {dropdownLists.addEventListener('click', val => {
    val.classList.add('dropdown__list_active')
    val.textContent() = active_lang
})}

// dropdownValue.classList.remove('dropdown__list_active');

dropdownValue[0].addEventListener('click', value => {
    Array.from(dropdownValue).forEach(value => {
        value.classList.remove('dropdown__list_active');
    })
    value.classList.add('dropdown__list_active')
})

// for (let i = 0; i < dropdownValue.length; i++) {

//     dropdownValue[i].addEventListener('click', (event) => {

//         for (let y = 0; y < dropdownLists.length; y++) {
//             if (dropdownLists[y].classList.contains('dropdown__list_active')) {
//                 dropdownLists[y].classList.remove('dropdown__list_active');
//             } else {
//                 dropdownLists[y].classList.add('dropdown__list_active');
//             }
//         }
//     });
// }

