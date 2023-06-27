function serializeForm(formNode) {
    const { elements } = formNode
  
    const data = Array.from(elements)
      .map((element) => {
        const { name, type } = element
        const value = type === 'checkbox' ? element.checked : element.value
  
        return { name, value }
      })
      .filter((item) => !!item.name)
  
    makeIframe(data);
}
function makeIframe (data) {
  console.log(data);
  let [width, height, title, gif1, sign1, gif2, sign2, sizeTitle, sizeSign, inscriptionTitle, inscriptionSign, colorTitle, colorSign, colorBack] = data;
//   let string = `<div class="gif__container">
//   <h6 class="gif__title">${title.value}</h6>
//   <div class="gif__wrapper">
//       <div class="gif__block gif__block1">
//           <div class="gif__img-wrap">
//               <img class="gif__img" src="${gif1.value}" alt="">
//           </div>
//           <p class="gif__sign gif__sign1">${sign1.value}</p>
//       </div>
//       <div class="gif__block gif__block2">
//           <div class="gif__img-wrap">
//               <img class="gif__img" src="${gif2.value}" alt="">
//           </div>
//           <p class="gif__sign gif__sign2">${sign2.value}</p>
//       </div>
//   </div>
// </div>`;
let string = `<iframe frameborder='0' width='${width.value}%' height='${height.value}px' srcdoc='<html> <style>body{background-color: ${colorBack.value};} .gif__container {
  padding: 10%;
  font-family:"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
.gif__title {
  font-size: ${sizeTitle.value}px;
  margin-top: 0;
  margin-bottom: 6%;
  text-align: center;
  color: ${colorTitle.value};
}
.gif__wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5%;
}
.gif__block {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.gif__sign {
  font-size: ${sizeSign.value}px;
  color: ${colorSign.value};
  text-align: center;
  margin-top: 1%;
}
.gif__img {
  max-width: 100%;
  max-height: ${height.value/3}px;
}</style> </head><body> <div class="gif__container">
<h6 class="gif__title">${title.value}</h6>
<div class="gif__wrapper">
    <div class="gif__block gif__block1">
        <div class="gif__img-wrap">
            <img class="gif__img" src="${gif1.value}" alt="">
        </div>
        <p class="gif__sign gif__sign1">${sign1.value}</p>
    </div>
    <div class="gif__block gif__block2">
        <div class="gif__img-wrap">
            <img class="gif__img" src="${gif2.value}" alt="">
        </div>
        <p class="gif__sign gif__sign2">${sign2.value}</p>
    </div>
</div>
</div><script>console.log("hi");</script>'></iframe>` + ' ';
string.toString();
console.log(string);
pushResult ('.result__text', string);
}
  

function handleFormSubmit(event) {
    event.preventDefault()
    serializeForm(applicantForm)
}
function pushResult (block, string) {
  let result = document.querySelector(block);
  result.value = string;
}
// не работает норм
// function checkValidity(event) {
//     const formNode = event.target.form
//     const isValid = formNode.checkValidity()
  
//     formNode.querySelector('button').disabled = !isValid
// }
// function copyText(field) {
//   let copyText = document.getElementById(field);

//   /* Select the text field */
//   copyText.select();

//   /* Copy the text inside the text field */
//   document.execCommand("copy");

//   /* Alert the copied text */
//   alert("Copied the text: " + copyText.value);
// }  
document.getElementById("copy").onclick = function() {
  var text = document.getElementById("content").value;
  clipboard.writeText(text);
}
  
  
const applicantForm = document.getElementById('mars-once')
applicantForm.addEventListener('submit', handleFormSubmit)
// let button = document.getElementById('result__button');
// btn.onclick = copyText('result__text');
// applicantForm.addEventListener('input', checkValidity)



