// /* Set the width of the side navigation to 250px */
// function openNav(elem, trigger, close) {
//     elem.style.width = "335px";
//     elem.style.padding = "65px 54px 54px 54px";
//     trigger.style.display = "none";
//     close.style.width = "auto";
// }

// /* Set the width of the side navigation to 0 */
// function closeNav(elem, trigger, close) {
//     elem.style.width = "0";
//     elem.style.padding = "0";
//     trigger.style.display = "flex";
//     close.style.width = "0";
// }
// let menu = document.querySelector('.menu__open');
// let trigger = document.querySelector('.menu');
// let triggerToClose = document.querySelector('.menu__close');

// trigger.addEventListener('click', (e)=> {
//     openNav(menu, trigger, triggerToClose);
// })
// triggerToClose.addEventListener('click', (e)=> {
//     closeNav(menu, trigger, triggerToClose);
// })

function bindMenu(triggerSelector, modalSelector, closeSelector) {
    let body = document.querySelector('body');
    const trigger = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSelector),
          close = document.querySelector(closeSelector);

    trigger.forEach(item => {
        item.addEventListener('click', (e) => {
            if (e.target) {
                e.preventDefault();
            }
            item.classList.add('none');
            // item.style.height = "0";
            // item.style.opacity = "0";
            modal.style.display = "block";
            body.style.overflowY = 'hidden';
            // document.body.classList.add('modal-open');
        });
    });

    close.addEventListener('click', () => {
        
        modal.style.display = "none";
        body.style.overflowY = 'scroll';
        // конечно, тут ломается логика. Хорошо бы и здесь сделать перебор
        trigger[0].classList.remove('none');
        // trigger.style.display = "block";

        // document.body.classList.remove('modal-open');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
            trigger[0].classList.remove('none');
            // trigger.style.display = "block";
            // document.body.classList.remove('modal-open');
        }
    });
}
bindMenu('.menu__img', '.menu__open', '.menu__close');
// bindMenu('.header__burger-img', '.menu-mob', '.menu-mob__close');
