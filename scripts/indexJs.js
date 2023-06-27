let filterBtn = document.querySelector('.header__filter');
let filterOpenBtn = document.querySelector('.header__filter-open');
let elements = document.querySelectorAll('.element');
filterBtn.addEventListener('click', function (event) {
    filterBtn.classList.toggle('header__filter-round-bottom')
    filterOpenBtn.classList.toggle('hide');
})

filterOpenBtn.addEventListener('click', event => {
    if (!event.target.classList.contains('header__filter-type')) return false;
    let filterClass = event.target.dataset['type'];
    elements.forEach(elem => {
        if (elem.classList.contains('hide')) {
            elem.classList.remove('hide')
        }
        if (!elem.classList.contains(filterClass)) {
            elem.classList.add('hide')
        }
    });
})