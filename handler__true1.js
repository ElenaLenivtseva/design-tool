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
            createExperts(amount, parent);
            btnEnd.classList.toggle('unvisible');
        }    
    })
}


function createExperts(amount, parent) {
    let parentElement = document.querySelector(parent);
    let ids = makeArrayIDVerity(amount);
    let newInner = makeVideos(ids, amount, `<div class="expert">
    <div class="expert__line"></div>
    <div class="expert__info">
        <p class="expert__title">КАРТОЧКА</p>
        <div class="expert__item">
          <div class="parameter">
              <div class="parameter__left">
              <p class="subtitle--form subtitle--form-down">Факт</p>
              <textarea class="input input--textarea" name="fact" id="fact" min="1"  required></textarea>
          </div>
              <div class="parameter__right">
                  
              </div>
          </div>
        </div>
        
          <div class="expert__item">
              <input class="custom-checkbox" type="checkbox" id= "истинность" name= "истинность2" value="1">
              <label for= "истинность3" >Правда</label>
          </div>
       
        <div class="expert__item">
              <div class="parameter">
                  <div class="parameter__left">
                      <p class="subtitle--form subtitle--form-down">Пояснение</p>
                      <textarea class="input input--textarea" name="descr" id="descr" min="1"  required></textarea>
                  </div>
                  <div class="parameter__right">
                  
                  </div>
              </div>
        </div>
    </div>
  </div>`, `<div class="expert">
  <div class="expert__line"></div>
  <div class="expert__info">
      <p class="expert__title">КАРТОЧКА</p>
      <div class="expert__item">
        <div class="parameter">
            <div class="parameter__left">
            <p class="subtitle--form subtitle--form-down">Факт</p>
            <textarea class="input input--textarea" name="fact" id="fact" min="1"  required></textarea>
        </div>
            <div class="parameter__right">
                
            </div>
        </div>
      </div>
      
        <div class="expert__item">
            <input class="custom-checkbox" type="checkbox" id= "истинность" name= "истинность2" value="1">
            <label for= "истинность3" >Правда</label>
        </div>
     
      <div class="expert__item">
            <div class="parameter">
                <div class="parameter__left">
                    <p class="subtitle--form subtitle--form-down">Пояснение</p>
                    <textarea class="input input--textarea" name="descr" id="descr" min="1"  required></textarea>
                </div>
                <div class="parameter__right">
                
                </div>
            </div>
      </div>
  </div>
</div>`);
    parentElement.innerHTML = newInner;


    // for (let i = 0; i < amount; i++) {
    //     let element = document.createElement("div");
    //     element.classList.add('expert');
    //     let inner = innerStr;
    //     inner = 
    //     element.innerHTML = inner;
      
    //     parentElement.appendChild(element);

        
    // }

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
function createAll(pattern, firstOne, amount) {
        let str = pattern;
        let newStr = firstOne + str.repeat(amount-1);
        return newStr;
}
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
function makeArrayIDVerity(amount) {
    let arrayId = [];
    let prefix = '"verity-';
    arrayId.length = amount;
    for (let i = 0; i < arrayId.length; i++) {
        arrayId[i] = prefix + (i+1) + '"';
    }
    return arrayId;
}



// function makeBtns(names, descr, amount) {
//     let firstBtn = "<button class='experts__item tabs__btn tabs__btn_active'> <p class='experts__name'> значениеимени </p> <p class='experts__descr'> значениесвойства </p> </button>";
//     let patternBtn = "<button class='experts__item tabs__btn'> <p class='experts__name'> значениеимени </p> <p class='experts__descr'> значениесвойства </p> </button> ";
//     let parameter1 = names;
//     let parameter2 = descr;
//     let allBtnHTML = createAll(patternBtn, firstBtn, amount);
//     let strArray = mySplit(allBtnHTML);
//     let indexOfNames = findIndexInArray(strArray, 'значениеимени');
//     let changedArray = changeStrArray(strArray, parameter1, indexOfNames)
//     let indexOfDescr = findIndexInArray(strArray, 'значениесвойства');
//     let changedArray2 = changeStrArray(strArray, parameter2, indexOfDescr)
//     let btnsReady = myJoin(changedArray2);
//     return btnsReady;
// }


function makeVideos(ids, amount, firstExample, patternExample) {
    let firstVideo = firstExample;
    let patternVideo = patternExample;
    // let patternVideo = "<div class='experts__video tabs__pane'> <div class='iframe'> <div class='player' id=' значениеID ' data-video-id= 'значениеURL' data-width='100%'> </div> </div> </div> ";
    let parameter2 = ids;
    let allVideoHTML = createAll(patternVideo, firstVideo, amount);
    let strArray2 = mySplit(allVideoHTML);
    let indexOfVideo2 = findIndexInArray(strArray2, '"истинность"');
    let changedArrayVideo2 = changeStrArray(strArray2, parameter2, indexOfVideo2, 'id')
    let indexOfVideo3 = findIndexInArray(strArray2, '"истинность2"');
    let changedArrayVideo3 = changeStrArray(strArray2, parameter2, indexOfVideo3, 'id')
    let indexOfVideo4 = findIndexInArray(strArray2, '"истинность3"');
    let changedArrayVideo4 = changeStrArray(strArray2, parameter2, indexOfVideo4, 'id')
    let videoReady = myJoin(changedArrayVideo4);
    return videoReady;
}