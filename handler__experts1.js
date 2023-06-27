function formOneSumbitted (btn, step1, input, step2, parent, form2Btn) {
    let submit = document.querySelector(btn);
    let stepOne = document.querySelector(step1);
    let amountOfExperts = document.querySelector(input);
    let stepTwo = document.querySelector(step2);
    let btnEnd = document.querySelector(form2Btn);
    // let formTwo = document.querySelector(form2);
    submit.addEventListener('click', () => {
        if(amountOfExperts.value>0&&amountOfExperts.value<=10) {
            let amount = amountOfExperts.value;
            console.log(amount);
            stepOne.classList.toggle('unvisible');
            stepTwo.classList.toggle('unvisible');
            createExperts(amount, parent, `<div class="expert__line"></div>
            <div class="expert__info">
                <p class="expert__title">ЭКСПЕРТ</p>
                <div class="expert__item">
                    <p class="subtitle--form subtitle--form-down">Имя</p>
                    <input class="input input--text input--media" type="text" name="expertName">
                </div>
                <div class="expert__item">
                    <p class="subtitle--form subtitle--form-down">Подпись</p>
                    <input class="input input--text input--media" type="text" name="expertDescr">
                </div>
                <div class="expert__item">
                    <p class="subtitle--form subtitle--form-down">URL видео</p>
                    <input class="input input--text input--media" type="text" name="expertVideo">
                </div>
            </div>`);
            btnEnd.classList.toggle('unvisible');
        }    
    })
}


function createExperts(amount, parent, innerStr) {
    let parentElement = document.querySelector(parent);
    for (let i = 0; i < amount; i++) {
        let element = document.createElement("div");
        element.classList.add('expert');
        let inner = innerStr;
        element.innerHTML = inner;
      
        parentElement.appendChild(element);
        
    }

}

function deleteExperts (experts) {
    let expertsAll = document.querySelectorAll(experts);
    expertsAll.forEach(element => {
        element.remove();
    });
}
function comeback(btnBack, step1, step2, experts, form2Btn) {
    let buttonBack = document.querySelector(btnBack);
    let stepOne = document.querySelector(step1);
    let stepTwo = document.querySelector(step2);
    let btnEnd = document.querySelector(form2Btn);
    buttonBack.addEventListener('click', () => {
        btnEnd.classList.toggle('unvisible');
        stepOne.classList.toggle('unvisible');
        stepTwo.classList.toggle('unvisible');
        deleteExperts (experts);
            
    })
    
}
formOneSumbitted(".form__submit-one", ".step--one", ".form-one__input", ".step--two", ".form__content", ".form__submit-two")
comeback(".step__back-img", ".step--one", ".step--two", ".expert", ".form__submit-two");
// function serializeForm(formNode) {
//     const { elements } = formNode
  
//     const data = Array.from(elements)
//       .map((element) => {
//         const { name, type } = element
//         const value = type === 'checkbox' ? element.checked : element.value
  
//         return { name, value }
//       })
//       .filter((item) => !!item.name)
  
//     console.log(data);
// }