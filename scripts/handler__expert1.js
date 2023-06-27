function formOneSumbitted (btn, form1, input, form2) {
    let submit = document.querySelector(btn);
    let formOne = document.querySelector(form1);
    let amountOfExperts = document.querySelector(input);
    let formTwo = document.querySelector(form2);
    submit.addEventListener('click', () => {
        console.log(amountOfExperts.value)
        
    })
}
formOneSumbitted(".form__submit-one", ".step--one", ".form-one__input", ".step--two")

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