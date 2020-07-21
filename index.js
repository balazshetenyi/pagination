const list_names = ["John", "Ben", "James", "David", "Tom", "Samuel", "Sarah", "Jane", "Daniel", "Samantha"];

const names_wrapper = document.getElementById('results')
const btn_wrapper = document.getElementById('btn_wrapper')

let rows = 3
let current_page = 1

function displayNames(names, wrapper, rows_per_page, curr_page) {
    wrapper.innerHTML = ''
    curr_page--

    let start = curr_page * rows_per_page
    let end = start + rows_per_page
    let paginatedItems = names.slice(start, end)

    for (let i = 0; i < paginatedItems.length; i++) {
        let name = paginatedItems[i]

        const li = document.createElement('li')
        li.classList.add('name')
        li.textContent = name

        wrapper.appendChild(li)
    }
}

function pagination(names, wrapper, rows_per_page) {
    wrapper.innerHTML = ''

    let page_count = Math.ceil(names.length / rows_per_page)

    for (let i = 1; i <= page_count; i++) {
        let button = createButton(i, names)
        wrapper.appendChild(button)
    }
}

function createButton(page, items) {
    let btn = document.createElement('button')
    btn.innerText = page

    if (current_page == page) btn.classList.add('active')

    btn.addEventListener('click', function () {
        current_page = page
        displayNames(list_names, names_wrapper, rows, current_page)

        let current_btn = document.querySelector('#btn_wrapper button.active')
        current_btn.classList.remove('active')

        btn.classList.add('active')
    })

    return btn
}

displayNames(list_names, names_wrapper, rows, current_page)
pagination(list_names, btn_wrapper, rows)