function serializeForm(formNode) {
    const { elements } = formNode
  
    const data = Array.from(elements)
      .map((element) => {
        const { name, type } = element
        const value = type === 'checkbox' ? element.checked : element.value
  
        return { name, value }
      })
      .filter((item) => !!item.name)
  
    console.log(data);
    let arrWithAllParametersScript = findExperts(data);
    console.log(arrWithAllParametersScript[0]);
    let iframe = makeIframe(arrWithAllParametersScript, data);
    console.log(iframe)
    // pushResult('.resultText', iframe)
}

  

function handleFormSubmit(event) {
    event.preventDefault()
    serializeForm(applicantForm)
}
function pushResult (block, string) {
  let result = document.querySelector(block);
  result.textContent = string;
}

document.getElementById("copy").onclick = function() {
    let text = document.getElementById("content").textContent;
      clipboard.writeText(text);
  }
        
const applicantForm = document.getElementById('formTimer')
applicantForm.addEventListener('submit', handleFormSubmit)



// let dataTest = [
//     {
//       "name": "fact",
//       "value": "1"
//   },
//   {
//       "name": "verity-1",
//       "value": true
//   },
//   {
//       "name": "descr",
//       "value": "1.1"
//   },
//   {
//       "name": "fact",
//       "value": "2"
//   },
//   {
//       "name": "verity-2",
//       "value": false
//   },
//   {
//       "name": "descr",
//       "value": "2.1"
//   },
//   {
//       "name": "containerWidth",
//       "value": "65"
//   },
//   {
//       "name": "containerHeight",
//       "value": "400"
//   },
//   {
//       "name": "containerBg",
//       "value": "#0c0b51"
//   },
//   {
//       "name": "containerFont",
//       "value": "<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">                    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>                    <link href=\"https://fonts.googleapis.com/css2?family=Monomaniac+One&family=Montserrat:wght@300;400;600&family=Nunito:wght@400;700&family=Roboto:wght@400;500&display=swap\" rel=\"stylesheet\">"
//   },
//   {
//       "name": "containerFontName",
//       "value": "Roboto"
//   },
//   {
//       "name": "factSize",
//       "value": "35"
//   },
//   {
//       "name": "factColor",
//       "value": "#ffffff"
//   },
//   {
//       "name": "factSize",
//       "value": "25"
//   },
//   {
//       "name": "factColor",
//       "value": "#ffffff"
//   },
//   {
//       "name": "btnBg",
//       "value": "#d9d9d9"
//   },
//   {
//       "name": "btnSize",
//       "value": "20"
//   },
//   {
//       "name": "btnColor",
//       "value": "#1c1c1c"
//   },
//   {
//       "name": "rightBg",
//       "value": "#b5dc47"
//   },
//   {
//       "name": "wrongBg",
//       "value": "#b64b4b"
//   },
//   {
//       "name": "arrowColor",
//       "value": "#ffffff"
//   }
// ]


// nen 
function findExperts(dataArray) {
    let amountOfExperts = (dataArray.length - 15)/3;
    console.log(amountOfExperts);
    // dataArray[0], dataArray[1], dataArray[2] - это параметры заголовка, 
    // поэтому начинаме с третьей позиции
    let generalAmountOfProperties = amountOfExperts*3;

    let regex = /verity-./gm;
    // let test = regexp.test(regex);
    let facts = [];
    let answers = [];
    let descrs = [];
    for (let i = 0; i < generalAmountOfProperties; i++) {
        if (dataArray[i].name == "fact") {
            facts.push(dataArray[i]);
        }
        if (dataArray[i].name == "descr") {
            descrs.push(dataArray[i]);
        }
        if (regex.test(dataArray[i].name)) {
            answers.push(dataArray[i]);
        }
        
        // console.log(dataArray[i].name);
        
    }
    console.log(facts);
    console.log(answers);
    console.log(descrs);

    let clearAnswers = [];
    for (let i = 0; i < answers.length; i++) {
      clearAnswers.push(answers[i].value);
    }
    console.log(clearAnswers);

    let amount = facts.length;
    console.log(amount);
    let ids = makeArrayIDV2(amount);
    console.log(ids)
    // убрать повторяющиеся классы
    let clearIds = uniq(ids);
    // точку добавляю перед имененм класса
    let clearClass = clearIds.map(function (elem) {
      elem = '.' + elem;
      return elem;
    })

    console.log(clearClass);
    let slide = makeSlide(facts, ids, amount);
    // let clearSlide1 = slide.toString().replace(/\/n/g, '');
    // let clearSlide2 = clearSlide1.replace(/\//g, '');
    let arr = [slide, facts, descrs, clearClass, clearAnswers];
    console.log(arr)
    return arr;

}
    
function createAll(pattern, firstOne, amount) {
  let str = pattern;
  let newStr = firstOne + str.repeat(amount-1);
  return newStr;
}
// разбить строку на массив
function mySplit(array) {
  let strArray = array.split(' ');
  return strArray;
}
// найти индексы элементов с определенными значениями (что нужно заменить в строке)
function findIndexInArray(arrayFromStr, value) {
  let indices = [];
  let strArray = arrayFromStr;
  let element = value;
  let idx = strArray.indexOf(element);
  while (idx != -1) {
      indices.push(idx);
      idx = strArray.indexOf(element, idx + 1);
  }
  return indices;
} 
// поменять то, что в эих индексах на наши варианты (из формы)
function changeStrArray(arrayFromStr, parameterTochange, index, url) {
  let strArray = arrayFromStr;
  let parameter = parameterTochange;
  let allIndexes = index;
  if (url == 'url') {
      for (let i = 0; i < allIndexes.length; i++) {
          strArray[allIndexes[i]] = `'${parameter[i]}'`;
      } 
  } else if (url == 'id') {
      for (let i = 0; i < allIndexes.length; i++) {
          strArray[allIndexes[i]] = parameter[i];
      }
  } else {
      for (let i = 0; i < allIndexes.length; i++) {
          strArray[allIndexes[i]] = parameter[i].value;
      }
  }
  return strArray;
}
// вернуть строке ее строковый вид
// почему-то метод join не работает. Separator в параметры не стала добавлять
function myJoin(array) {
  let str = "";
  for (let i = 0; i < array.length; i++) {
      str+=array[i];
      str+=" ";
  }
  return str;
}
// для параметра ID в видео
function makeArrayID(amount) {
  let arrayId = [];
  let prefix = 'btnClass-';
  arrayId.length = amount;
  for (let i = 0; i < arrayId.length; i++) {
      arrayId[i] = prefix + (i+1);
  }
  return arrayId;
}
function makeArrayIDV2(amount) {
  let arrayId = [];
  let prefix = 'btnClass-';
  arrayId.length = amount*2;
  
  for (let i = 0; i < arrayId.length; i ++) {
    arrayId[i] = i;
  }

  let arrSlices = sliceIntoChunks(arrayId, 2)
  for (let i = 0; i < arrSlices.length; i++) {
    for (let k = 0; k < arrSlices[i].length; k++) {
      arrSlices[i][k] = prefix + (i)
    }
  }
  let oneDimensial = arrSlices.reduce((acc, val) => acc.concat(val), []);// [1, 2, 3, 4]
  console.log(oneDimensial)
  return oneDimensial;
}
function sliceIntoChunks(arr, chunkSize) {
  const res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
      const chunk = arr.slice(i, i + chunkSize);
      res.push(chunk);
  }
  return res;
}

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(sliceIntoChunks(arr, 3));
function makeSlide(facts, ids, amount) {
  let firstVideo = `<div class='item'>
  <div class='true-false__wrap'>
      <div class='true-false__main'>
          <h6 class='true-false__title'> значениеЗаголовка </h6>
          <div class='true-false__btns'>
              <button class='true-false__btn true-false__btn-truth класскнопки '>Правда</button>
              <button class='true-false__btn true-false__btn-false класскнопки '>Ложь</button>
          </div>
          <p class='true-false__descr'>  </p>
      </div>
  </div>
  </div>`;
  let patternVideo = `<div class='item'>
  <div class='true-false__wrap'>
      <div class='true-false__main'>
          <h6 class='true-false__title'> значениеЗаголовка </h6>
          <div class='true-false__btns'>
              <button class='true-false__btn true-false__btn-truth класскнопки '>Правда</button>
              <button class='true-false__btn true-false__btn-false класскнопки '>Ложь</button>
          </div>
          <p class='true-false__descr'>  </p>
      </div>
  </div>
  </div>`
  let parameter1 = facts;
  console.log(parameter1)
  let parameter2 = ids;
  console.log(parameter2)
  let allVideoHTML = createAll(patternVideo, firstVideo, amount);
  console.log(allVideoHTML)
  let strArray2 = mySplit(allVideoHTML);
  let indexOfVideo = findIndexInArray(strArray2, 'значениеЗаголовка');
  console.log(indexOfVideo)
  let indexOfVideo2 = findIndexInArray(strArray2, 'класскнопки');
  console.log(indexOfVideo2)
  let changedArrayVideo = changeStrArray(strArray2, parameter1, indexOfVideo)
  console.log(changedArrayVideo)
  let changedArrayVideo2 = changeStrArray(strArray2, parameter2, indexOfVideo2, 'id')
  let videoReady = myJoin(changedArrayVideo2);
  console.log(videoReady)
  return videoReady;
}
// let patternSlide = `<div class="swiper-slide">
// <div class="true-false__wrap">
//     <div class="true-false__main">
//         <h6 class="true-false__title"> значениеЗаголовка </h6>
//         <div class="true-false__btns">
//             <button class="true-false__btn true-false__btn-truth класскнопки ">Правда</button>
//             <button class="true-false__btn true-false__btn-false класскнопки ">Ложь</button>
//         </div>
//         <p class="true-false__descr"> значениеПояснения </p>
    
//     </div>
// </div>
// </div>`;
function uniq(arr) {
  let seen = {};
  return arr.filter(function(item) {
      return seen.hasOwnProperty(item) ? false : (seen[item] = true);
  });
}

// [
//   {
//       "name": "fact",
//       "value": "1"
//   },
//   {
//       "name": "verity-1",
//       "value": false
//   },
//   {
//       "name": "descr",
//       "value": "11"
//   },
//   {
//       "name": "fact",
//       "value": "2"
//   },
//   {
//       "name": "verity-2",
//       "value": true
//   },
//   {
//       "name": "descr",
//       "value": "22"
//   },
//   {
//       "name": "containerWidth",
//       "value": "65"
//   },
//   {
//       "name": "containerHeight",
//       "value": "400"
//   },
//   {
//       "name": "containerBg",
//       "value": "#0c0b51"
//   },
//   {
//       "name": "containerFont",
//       "value": "<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">                    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>                    <link href=\"https://fonts.googleapis.com/css2?family=Monomaniac+One&family=Montserrat:wght@300;400;600&family=Nunito:wght@400;700&family=Roboto:wght@400;500&display=swap\" rel=\"stylesheet\">"
//   },
//   {
//       "name": "containerFontName",
//       "value": "Roboto"
//   },
//   {
//       "name": "factSize",
//       "value": "35"
//   },
//   {
//       "name": "factColor",
//       "value": "#ffffff"
//   },
//   {
//       "name": "descrSize",
//       "value": "25"
//   },
//   {
//       "name": "descrColor",
//       "value": "#ffffff"
//   },
//   {
//       "name": "btnBg",
//       "value": "#d9d9d9"
//   },
//   {
//       "name": "btnSize",
//       "value": "20"
//   },
//   {
//       "name": "btnColor",
//       "value": "#1c1c1c"
//   },
//   {
//       "name": "rightBg",
//       "value": "#b5dc47"
//   },
//   {
//       "name": "wrongBg",
//       "value": "#b64b4b"
//   },
//   {
//       "name": "arrowColor",
//       "value": "#ffffff"
//   }
// ]
// arrowColor = ${data[data.length-1].value}
// wrongBg = ${data[data.length-2].value}
// rightBg = ${data[data.length-3].value}
// btnColor = ${data[data.length-4].value}
// btnSize = ${data[data.length-5].value}
// btnBg = ${data[data.length-6].value}
// descrColor = ${data[data.length-7].value}
// decrSize = ${data[data.length-8].value}
// factColor = ${data[data.length-9].value}
// factSize = ${data[data.length-10].value}


// containerFontName = ${data[data.length-11].value}
// containerFont = ${data[data.length-12].value}
// containerBg = ${data[data.length-13].value}
// containerHeight = ${data[data.length-14].value}
// containerWidth = ${data[data.length-15].value}



function makeIframe (arr, data) {
  let response = arr;
  let newResponseHTML = JSON.stringify(response[0])
  let responseHTMLObject = JSON.parse(newResponseHTML)
  response[0] = responseHTMLObject;
  console.log(response[0])
  let responseAnswers = response[4].reduce(function(target, key, index) {
    target[index] = key;
    return target;
  }, {});
  // let responseHTML = JSON.parse(response[0]);
  let responseClasses = response[3].reduce(function(target, key, index) {
    target[index] = key;
    return target;
  }, {});

    // let newResponse = response.reduce(function(target, key, index) {
    //     target[index] = key;
    //     return target;
    //   }, {})

  response[4] = responseAnswers;
  // response[0] = responseHTML;
  response[3] = responseClasses;
  console.log(response)
  let slides = response[0];
  let oldFacts = JSON.stringify(response[1]);
  let oldDescrs = JSON.stringify(response[2]).replace(/"/g, "'");
  let oldClearClass = JSON.stringify(response[3]);
  let oldClearAnswers = JSON.stringify(response[4]);
  let facts = oldFacts.replace(/"/g, "'");
  let descrs = oldDescrs.replace(/"/g, "'" );
  let clearClass = oldClearClass.replace(/"/g, "'" );
  let clearAnswers = oldClearAnswers.replace(/"/g, "'");
  // let [slides, facts, descrs, clearClass, clearAnswers] = arr;
  let font = data[data.length-11].value;
  let reg = /"/g;
  let fontLink = data[data.length-12].value;
  let cleanedfont = fontLink.replace(reg, "'")
  console.log(cleanedfont);

  
  let strBody = `<div class='true-false'>
  <div class='true-false__toShort'>
      <div class='swiper slider'>
          
              
          ${slides}

          
          
          <a class='previous' onclick='previousSlide()'>&#10094;</a>
          <a class='next' onclick='nextSlide()'>&#10095;</a>
          
          
      </div>
  </div>
</div> `
let strStyle = `/* Слайдер: */
.slider{
    max-width: ${data[data.length-15].value}%;
    /* Положение элемента устанавливается относительно его исходной позиции: */
    position: relative;
    /* Центрируем по горизонтали: */
    margin: auto;
    min-height: ${data[data.length-14].value}px;
}

/* Картинка масштабируется по отношению к родительскому элементу: */
.slider .item img {
    /* Элемент меняет размер так, чтобы заполнить блок и сохранить пропорции: */
    object-fit: cover;
    width: 100%;
    height: 300px;
}

/* Кнопки назад и вперёд: */
.slider .previous, .slider .next {
    /* Добавляет курсору иконку, когда тот оказывается над кнопкой: */
    cursor: pointer;
    /* Положение элемента задаётся относительно границ браузера: */
    position: absolute;
    top: 50%;
    width: auto;
    margin-top: -22px;
    padding: 16px;
    /* Оформление самих кнопок: */
    color: ${data[data.length-1].value};
    font-weight: bold;
    font-size: 32px;
    /* Плавное появление фона при наведении курсора: */
    transition: 0.6s ease;
    /* Скругление границ: */
    border-radius: 0 3px 3px 0;
}
.slider .next {
    right: 0;
    border-radius: 3px 0 0 3px;
}

/* При наведении курсора на кнопки добавляем фон кнопок: */
.slider .previous:hover,
.slider .next:hover {
    background-color: rgba(0, 0, 0, 0.2);
}

/* Анимация слайдов: */
.slider .item {
    animation-name: fade;
    animation-duration: 1s;
}
@keyframes fade {
    /* Устанавливаем и изменяем степень прозрачности: */
    from {
        opacity: 0.9
    }
    to {
        opacity: 1
    }
} .true-false {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 50px 0;
  font-family: ${font};
}
.true-false__wrap {
  background: ${data[data.length-13].value};
  border-radius: 30px;
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  -ms-border-radius: 30px;
  -o-border-radius: 30px;
  padding: 62px 124px;
  min-height: ${data[data.length-14].value}px;

}
.true-false__main {
  margin-bottom: 70px;
}
.true-false__title {
  font-size: ${data[data.length-10].value}px;
  font-weight: 400;
  margin-bottom: 40px;
  color: ${data[data.length-9].value};
}
.true-false__btns {
  display: flex;
}
.true-false__btn {
  background: ${data[data.length-6].value};
  border-radius: 15px;
  display: flex;
  width: 25%;
  height: 40px;
  align-items: center;
  justify-content: center;
  font-size: ${data[data.length-5].value}px;
  color: ${data[data.length-4].value};
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  -ms-border-radius: 15px;
  -o-border-radius: 15px;
  border: none;
}
.true-false__btn-truth {
  margin-right: 21px;
}
.true-false__btn-false {
}
.true-false__descr {
  margin-top: 60px;
  font-size: ${data[data.length-8].value}px;
  color: ${data[data.length-7].value};
}
.true-false__nav {
 display: flex;
 justify-content: space-between;
 transition: 0.3s;
 -webkit-transition: 0.3s;
 -moz-transition: 0.3s;
 -ms-transition: 0.3s;
 -o-transition: 0.3s;
}
.true-false__nav-img {
  color: #FCFCFC;
  font-size: 100px;
  transition: 0.3s;
}
.true-false__btn:hover {
  cursor: pointer;
  opacity: 0.9;
}
.true-false__nav-img:hover {
  cursor: pointer;
  opacity: 0.7;
}
.true-false__right-answer {
  background: ${data[data.length-3].value};
}
.true-false__wrong-answer {
  background: ${data[data.length-2].value};
}
.true-false__toShort {
  width: ${data[data.length-15].value}%;
}
.swiper-button-prev, .swiper-rtl .swiper-button-next {
  left: 6%;
  right: auto;
}
.swiper-button-next, .swiper-rtl .swiper-button-prev {
  right: 7%;
  left: auto;
}
.swiper-button-next, .swiper-button-prev {
  color: ${data[data.length-1].value};
  top: ${data[data.length-14].value-150}px;
}`

let fullIframe = `<iframe frameborder="0" width="100%" height="600px" srcdoc="<html> ${cleanedfont}<style> ${strStyle} </style>    <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css/'>
 </head><body> ${strBody} 
<script>
/* Устанавливаем стартовый индекс слайда по умолчанию: */
        let slideIndex = 1;
        /* Вызываем функцию, которая реализована ниже: */
        showSlides(slideIndex);
        
        /* Увеличиваем индекс на 1 — показываем следующий слайд: */
        function nextSlide() {
            showSlides(slideIndex += 1);
        }
        
        /* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
        function previousSlide() {
            showSlides(slideIndex -= 1);
        }
        
        /* Устанавливаем текущий слайд: */
        function currentSlide(n) {
            showSlides(slideIndex = n);
        }
        
        /* Функция перелистывания: */
        function showSlides(n) {
            /* Обращаемся к элементам с названием класса 'item', то есть к картинкам: */
            let slides = document.getElementsByClassName('item');
        
            /* Проверяем количество слайдов: */
            if (n > slides.length) {
              slideIndex = 1
            }
            if (n < 1) {
                slideIndex = slides.length
            }
        
            /* Проходим по каждому слайду в цикле for: */
            for (let slide of slides) {
                slide.style.display = 'none';
            }
            /* Делаем элемент блочным: */
            slides[slideIndex - 1].style.display = 'block';
        }
        let facts = ${facts};
        let descrsDirty = ${descrs};
        let answers = Object.values(${clearAnswers});
        let btnsClass = Object.values(${clearClass});
                
        
                let descrsClean = [];
                descrsClean.length = descrsDirty.length;
                for (let i = 0; i < descrsDirty.length; i++) {
                    descrsClean[i] = descrsDirty[i].value;
                    
                }
                console.log(descrsClean)
                document.addEventListener('DOMContentLoaded', {handleEvent: pullTitles, facts: facts})
                
                function pullTitles(event) {
                  let titles = this.facts;
                  let allTitlesElem = document.querySelectorAll('.true-false__title');
                  for (let i = 0; i < allTitlesElem.length; i++) {
                    allTitlesElem[i].innerText = titles[i].value;
                  }
                }
        
                function forAllCards(btnsClass, answers, descrsClean) {
                    for (let i = 0; i < answers.length; i++) {
                        let descr = descrsClean[i];
                        
                        let answer = answers[i];
                        console.log(answer)
                        let btnTest = document.querySelectorAll(btnsClass[i]);
                    
                        console.log(btnTest)
                        btnTest.forEach(element => {
                                element.addEventListener('click', {handleEvent: handler, answer: answer, descr: descr});
                        });
                    }
                }
                forAllCards(btnsClass, answers, descrsClean)
        
                
                function handler(event) {
                    let answer = this.answer;
                    let descr = this.descr;
                    
        
                    if (event.target.classList.contains('true-false__btn-truth')&&answer==true) {
                        event.target.classList.add('true-false__right-answer')
                        if (event.target.nextSibling.nextSibling) {
                            event.target.nextSibling.nextSibling.classList.add('true-false__wrong-answer');
                        }
                    }
        
                    if (event.target.classList.contains('true-false__btn-false')&&answer==false) {
                        event.target.classList.add('true-false__right-answer')
                        if (event.target.previousSibling.previousSibling) {
                             event.target.previousSibling.previousSibling.classList.add('true-false__wrong-answer');
                        }
                    }
        
                    if (event.target.classList.contains('true-false__btn-truth')&&answer==false) {
                        event.target.classList.add('true-false__wrong-answer')
                        if (event.target.nextSibling.nextSibling) {
                            event.target.nextSibling.nextSibling.classList.add('true-false__right-answer');
                        }
                    }
        
                    if (event.target.classList.contains('true-false__btn-false')&&answer==true) {
                        event.target.classList.add('true-false__wrong-answer')
                        if (event.target.previousSibling.previousSibling) {
                             event.target.previousSibling.previousSibling.classList.add('true-false__right-answer');
                        }
                    }
                    
                    let parent = event.target.parentElement.parentElement;
                    console.log(parent)
                    let descrInParent = parent.lastChild.previousSibling;
                    console.log(descrInParent);
                    descrInParent.textContent = descr;
                }
       
</script></body></html>"></iframe>` + ' ';
console.log(fullIframe)
pushResult ('.result__text', fullIframe);
}
//         let btnsClass = ['.btnTest1', '.btnTest2', '.btnTest3'];
//         let answers = [true, false, false];
//         let descrs = ['залупа1', 'залупа2', 'залупа3']
//         function forAllCards(btnsClass, answers, descrs) {
//             for (let i = 0; i < answers.length; i++) {
//                 let descr = descrs[i];
//                 console.log(descr)
//                 let answer = answers[i];
//                 console.log(answer)
//                 let btnTest = document.querySelectorAll(btnsClass[i]);
//                 // let classBtnTest = document.querySelectorAll(`${btnTest}`)
//                 console.log(btnTest)
//                 btnTest.forEach(element => {
//                         element.addEventListener('click', {handleEvent: handler, answer: answer, descr: descr});
//                 });
//             }
//         }
//         forAllCards(btnsClass, answers, descrs)
//         // let descr = 'залупа';
//         // let answer = true;
//         // let btnTest = document.querySelectorAll('.testBtn');
        
//         function handler(event) {
//             let answer = this.answer;
//             let descr = this.descr;
//             if (event.target.classList.contains('true-false__btn-truth')&&answer==true || event.target.classList.contains('true-false__btn-false')&&answer==false) {
//                 event.target.classList.add('true-false__right-answer');
//                 if (event.target.nextSibling.nextSibling) {
//                     event.target.nextSibling.nextSibling.classList.add('true-false__wrong-answer');
//                 }
//                 if (event.target.previousSibling.previousSibling) {
//                     event.target.previousSibling.previousSibling.classList.add('true-false__wrong-answer');
//                 }
//             } else {
//                 event.target.classList.add('true-false__wrong-answer');
//                 if (event.target.nextSibling.nextSibling) {
//                     event.target.nextSibling.nextSibling.classList.add('true-false__right-answer');
//                 }
//                 if (event.target.previousSibling.previousSibling) {
//                     event.target.previousSibling.previousSibling.classList.add('true-false__right-answer');
//                 }
//             }
//             let allBtns = event.target.parentNode.childNodes;

//             for (let i = 0; i < allBtns.length; i++) {
//                 console.log(allBtns[i])
//                 allBtns[i].removeEventListener('click', {handleEvent: handler, answer: answer, descr: descr});
                    
//             }
//             let parent = event.target.parentElement.parentElement;
//             let descrInParent = parent.lastChild.previousElementSibling;
//             console.log(descrInParent);
//             descrInParent.textContent = descr;
//         }



//     console.log(names)
//     console.log(descr)
//     console.log(urls)
//     let amount = names.length;
//     let ids = makeArrayID(amount);
//     let btns = makeBtns(names, descr, amount);
//     let videos = makeVideos(urls, ids, amount);
//     let arr = [amount, ids, btns, videos];
//     return arr;
//     // console.log(btns)
//     // console.log(videos)
//     // makeIframe (btns, videos)
// }

