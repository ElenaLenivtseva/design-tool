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
    let arrForMaking = findExperts(data);
    makeIframe(arrForMaking, data);
}
        

        // дублировать паттерн строки столько раз, сколько укажет юзер 
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
            let prefix = 'player-';
            arrayId.length = amount;
            for (let i = 0; i < arrayId.length; i++) {
                arrayId[i] = prefix + (i+1);
            }
            return arrayId;
        }
        


        function makeBtns(names, descr, amount) {
            let firstBtn = "<button class='experts__item tabs__btn tabs__btn_active'> <p class='experts__name'> значениеимени </p> <p class='experts__descr'> значениесвойства </p> </button>";
            let patternBtn = "<button class='experts__item tabs__btn'> <p class='experts__name'> значениеимени </p> <p class='experts__descr'> значениесвойства </p> </button> ";
            let parameter1 = names;
            let parameter2 = descr;
            let allBtnHTML = createAll(patternBtn, firstBtn, amount);
            let strArray = mySplit(allBtnHTML);
            let indexOfNames = findIndexInArray(strArray, 'значениеимени');
            let changedArray = changeStrArray(strArray, parameter1, indexOfNames)
            let indexOfDescr = findIndexInArray(strArray, 'значениесвойства');
            let changedArray2 = changeStrArray(strArray, parameter2, indexOfDescr)
            let btnsReady = myJoin(changedArray2);
            return btnsReady;
        }

        
        function makeVideos(urls, ids, amount) {
            let firstVideo = "<div class='experts__video tabs__pane tabs__pane_show'> <div class='iframe'> <div class='player' id=' значениеID ' data-video-id= 'значениеURL' data-width='100%'> </div> </div> </div> ";
            let patternVideo = "<div class='experts__video tabs__pane'> <div class='iframe'> <div class='player' id=' значениеID ' data-video-id= 'значениеURL' data-width='100%'> </div> </div> </div> ";
            let parameter1 = urls;
            console.log(parameter1)
            let parameter2 = ids;
            console.log(parameter2)
            let allVideoHTML = createAll(patternVideo, firstVideo, amount);
            let strArray2 = mySplit(allVideoHTML);
            let indexOfVideo = findIndexInArray(strArray2, "'значениеURL'");
            console.log(indexOfVideo)
            let indexOfVideo2 = findIndexInArray(strArray2, 'значениеID');
            let changedArrayVideo = changeStrArray(strArray2, parameter1, indexOfVideo, 'url')
            console.log(changedArrayVideo)
            let changedArrayVideo2 = changeStrArray(strArray2, parameter2, indexOfVideo2, 'id')
            let videoReady = myJoin(changedArrayVideo2);
            return videoReady;
        }
// function makeIframe (data) {
//   console.log(data);
//   let [width, height, title, gif1, sign1, gif2, sign2, sizeTitle, sizeSign, inscriptionTitle, inscriptionSign, colorTitle, colorSign, colorBack] = data;
//   let string = `<iframe frameborder='0' width='${width.value}%' height='${height.value}px' srcdoc='<html> <style>body{background-color: ${colorBack.value};} .gif__container {
//   padding: 10%;
//   font-family:"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
// }
// .gif__title {
//   font-size: ${sizeTitle.value}px;
//   margin-top: 0;
//   margin-bottom: 6%;
//   text-align: center;
//   color: ${colorTitle.value};
// }
// .gif__wrapper {
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   gap: 5%;
// }
// .gif__block {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// }
// .gif__sign {
//   font-size: ${sizeSign.value}px;
//   color: ${colorSign.value};
//   text-align: center;
//   margin-top: 1%;
// }
// .gif__img {
//   max-width: 100%;
//   max-height: ${height.value/3}px;
// }</style> </head><body> <div class="gif__container">
// <h6 class="gif__title">${title.value}</h6>
// <div class="gif__wrapper">
//     <div class="gif__block gif__block1">
//         <div class="gif__img-wrap">
//             <img class="gif__img" src="${gif1.value}" alt="">
//         </div>
//         <p class="gif__sign gif__sign1">${sign1.value}</p>
//     </div>
//     <div class="gif__block gif__block2">
//         <div class="gif__img-wrap">
//             <img class="gif__img" src="${gif2.value}" alt="">
//         </div>
//         <p class="gif__sign gif__sign2">${sign2.value}</p>
//     </div>
// </div>
// </div><script>console.log("hi");</script>'></iframe>` + ' ';
// string.toString();
// console.log(string);
// pushResult ('.result__text', string);
// }
  

function handleFormSubmit(event) {
    event.preventDefault()
    serializeForm(applicantForm)
}
function pushResult (block, string) {
    let result = document.querySelector(block);
    result.innerText = string;
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

// let button = document.getElementById('result__button');
// btn.onclick = copyText('result__text');
// applicantForm.addEventListener('input', checkValidity)


function findExperts(dataArray) {
    let amountOfExperts = (dataArray.length - 12)/3;
    console.log(amountOfExperts);
    // dataArray[0], dataArray[1], dataArray[2] - это параметры заголовка, 
    // поэтому начинаме с третьей позиции
    let generalAmountOfProperties = amountOfExperts*3;
    let names = [];
    let descr = [];
    let expertVideo = [];
    for (let i = 3; i < generalAmountOfProperties+3; i++) {
        if (dataArray[i].name == "expertName") {
            names.push(dataArray[i]);
        }
        if (dataArray[i].name == "expertDescr") {
            descr.push(dataArray[i]);
        }
        if (dataArray[i].name == "expertVideo") {
            expertVideo.push(dataArray[i]);
        }
        
        // console.log(dataArray[i].name);
        
    }
    
    let urls = expertVideo.map(function(item, index, array) {
            let string = item.value;
            let newString = string.replace(/https:\/\/youtu.be\//, '')
            return newString;
    }); 
    
    console.log(names)
    console.log(descr)
    console.log(urls)
    let amount = names.length;
    let ids = makeArrayID(amount);
    let btns = makeBtns(names, descr, amount);
    let videos = makeVideos(urls, ids, amount);
    let arr = [amount, ids, btns, videos];
    return arr;
    // console.log(btns)
    // console.log(videos)
    // makeIframe (btns, videos)
}
// function cleanIframe(str) {
//   let string = str;
//   console.log(string)
//   let newString = string.replace(/https:\/\/youtu.be\//, '');
//   console.log(newString)
// }
// cleanIframe('<iframe src="https://drive.google.com/file/d/1QtT-R7bwSpsqBlyzp7hQKekaQbBVs4XA/preview" width="640" height="480" allow="autoplay"></iframe>')


function makeIframe (arr, data) {
  let [amount, ids, btns, videos] = arr;
  console.log(btns)
  console.log(videos)
  let font = data[data.length-7].value;

    let reg = /"/g;
    let cleanedfont = font.replace(reg, "'")
    console.log(cleanedfont);
  let string = `<iframe frameborder="0" width="100%" height="600px" srcdoc="<html> <style>.experts {
    padding: 57px;
    background: ${data[data.length-8].value};
    width: ${data[data.length-10].value}%;
    font-family: ${data[data.length-6].value};
}
.experts__title {
    font-size: ${data[1].value}px;
    margin-top: 0;
    margin-bottom: 55px;
    color: ${data[2].value};
    font-weight: 400;
}
.experts__content {
    display: flex;
    height: ${data[data.length-9].value}px;
}
.experts__nav {
    width: 50%;
    margin-right: 50px;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
}
.experts__list {
}
.experts__item {
    color: ${data[data.length-3].value};
    padding: 20px 20px;
    transition: 0.1s;
    -webkit-transition: 0.1s;
    -moz-transition: 0.1s;
    -ms-transition: 0.1s;
    -o-transition: 0.1s;
    background: rgba(1, 1, 1, 0);
    border: none;
}
.experts__item:not(:last-child) {
}
.experts__name {
    font-size: ${data[data.length-5].value}px;
    margin-bottom: 15px;
    margin-top: 0;
    pointer-events: none;
    font-weight: 400;  
}
.tabs__btn_active {
    color: white;
    background: ${data[data.length-1].value};
    cursor: pointer;
}
.tabs__btn:not(.tabs__btn_active):hover,
    .tabs__btn:not(.tabs__btn_active):focus {
      cursor: pointer;
      opacity: 0.8;
}
.experts__item--active {
    color: #ffffff;
    background: #383838;
    cursor: pointer;
}
.experts__descr {
    font-size: ${data[data.length-4].value}px;
    font-weight: 100;
    margin: 0;
    pointer-events: none;
    
}
.experts__video-wrap {
    width: 50%;
    height: 100%;
}
.experts__video {
    display: none;
    max-width: 100%;
    height: 100%;
}
.experts__video--active {
    display: block;
}
.parent2 {
    unicode-bidi: bidi-override;
    direction: rtl;
    overflow: scroll;
    overflow-x: hidden!important;
}
.sleeve2 {
    direction: ltr;
}
.parent2::-webkit-scrollbar {
    width: 9px;
}
.parent2::-webkit-scrollbar-track {
    background: #E8E8E8;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
}
.parent2::-webkit-scrollbar-thumb {
	background: #858282;
	border-radius: 10px;
	-webkit-border-radius: 10px;
	-moz-border-radius: 10px;
	-ms-border-radius: 10px;
	-o-border-radius: 10px;
}
.parent2::-webkit-scrollbar-thumb:hover {
    background: #683C73;
}
.tabs__pane {
    display: none;
}
.tabs__pane_show {
    display: block;
}
.player {
    height: 100%;
}
.iframe {
    height: 100%;
} }</style>    ${cleanedfont} </head><body> <div class='experts'>
    <h6 class='experts__title'>${data[0].value}</h6>
    <div class='experts__content tabs' id='tabs-1'>
        <div class='experts__nav parent2 tabs__nav'>
            ${btns}
            
        </div>
        <div class='experts__video-wrap tabs__content'>
            ${videos}
        </div>
    </div>
</div><script>
  
class ItcTabs {
  constructor(target, config) {
    const defaultConfig = {};
    this._config = Object.assign(defaultConfig, config);
    this._elTabs = typeof target === 'string' ? document.querySelector(target) : target;
    this._elButtons = this._elTabs.querySelectorAll('.tabs__btn');
    this._elPanes = this._elTabs.querySelectorAll('.tabs__pane');
    this._init();
    this._events();
  }
  _init() {
    this._elTabs.setAttribute('role', 'tablist');
    this._elButtons.forEach((el, index) => {
      el.dataset.index = index;
      el.setAttribute('role', 'tab');
      this._elPanes[index].setAttribute('role', 'tabpanel');
    });
  }
  show(elLinkTarget) {
    const elPaneTarget = this._elPanes[elLinkTarget.dataset.index];
    const elLinkActive = this._elTabs.querySelector('.tabs__btn_active');
    const elPaneShow = this._elTabs.querySelector('.tabs__pane_show');
    if (elLinkTarget === elLinkActive) {
      return;
    }
    this._paneFrom = elPaneShow;
    this._paneTo = elPaneTarget;
    elLinkActive ? elLinkActive.classList.remove('tabs__btn_active') : null;
    elPaneShow ? elPaneShow.classList.remove('tabs__pane_show') : null;
    elLinkTarget.classList.add('tabs__btn_active');
    elPaneTarget.classList.add('tabs__pane_show');
    this._elTabs.dispatchEvent(new CustomEvent('tab.itc.change', {
      detail: {
        elTab: this._elTabs,
        paneFrom: this._paneFrom,
        paneTo: this._paneTo
      }
    }));
    elLinkTarget.focus();
  }
  showByIndex(index) {
    const elLinkTarget = this._elButtons[index];
    elLinkTarget ? this.show(elLinkTarget) : null;
  };
  _events() {
    this._elTabs.addEventListener('click', (e) => {
      const target = e.target.closest('.tabs__btn');
      if (target) {
        e.preventDefault();
        this.show(target);
      }
    });
  }
}

const elTab = document.querySelector('.tabs');
new ItcTabs(elTab);

const elScript = document.createElement('script');
elScript.src = 'https://www.youtube.com/iframe_api';
document.head.append(elScript);

const players = {};
function onYouTubeIframeAPIReady() {
  document.querySelectorAll('.player').forEach(el => {
    players[el.id] = new YT.Player(el.id, {
      height: el.dataset.height,
      width: el.dataset.width,
      videoId: el.dataset.videoId
    });
  })
}

elTab.addEventListener('tab.itc.change', (e) => {
  const paneFrom = e.detail.paneFrom;
  if (paneFrom) {
    const player = paneFrom.querySelector('.player');
    player ? players[player.id].pauseVideo() : null;
  }
})
</script></body></html>"></iframe>` + ' ';

    
    pushResult ('.result__text', string);
}


document.getElementById("copy").onclick = function() {
  let text = document.getElementById("content").textContent;
	clipboard.writeText(text);
}
      
      
    const applicantForm = document.getElementById('formTimer')
    applicantForm.addEventListener('submit', handleFormSubmit)