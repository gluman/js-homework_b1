const dropdownLinks = Array.from(document.getElementsByClassName('dropdown__link'));
const dropdownValue = Array.from(document.getElementsByClassName('dropdown__value'));
const dropdownLists = Array.from(document.getElementsByClassName('dropdown__list'));

function activate_list() {
    dropdownLists.forEach(list => {
        list.classList.toggle('dropdown__list_active')
    })
}

dropdownValue.forEach(value => {
    value.addEventListener('click', value => {
        activate_list()
    })
})

dropdownLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        dropdownValue[0].textContent = link.textContent
        activate_list()
    })
})
