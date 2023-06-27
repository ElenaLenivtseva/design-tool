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
function makeIframe (data) {
  console.log(data);
  let [date, title, titleSize, titleColor, numberSize, numberColor, signSize, signColor, containerWidth, containerHeight, containerColor, containerFont, containerFontName] = data;
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
let string = `<iframe frameborder='0' width='100%' height='400px' srcdoc='<html> <style>body {
	
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: ${containerFontName.value};
}

.timeCount {
	background: ${containerColor.value};
	box-shadow: 4px 8px 40px rgba(8, 24, 111, 0.2);
	border-radius: 30px;
	height: ${containerHeight.value}px;
	width: ${containerWidth.value}%;
}

.timeCountContent {
	display: flex;
	justify-content: center;
}

.timeCountTitle {
	margin: 0;
	margin-bottom: -16px;
	font-weight: 700;
	font-size: ${titleSize.value}px;
	text-align: center;
	color: ${titleColor.value};
	padding: 75px 85px;
}

.timeCountItem{
	text-align: center;
}
.timeCountVal {
	min-width: 81px;
	font-weight: 700;
	font-size: ${numberSize.value}px;
	line-height: 82px;
	text-align: center;
	color: ${numberColor.value};
}

.timeCountSeparator {
	font-weight: 700;
	font-size: ${numberSize.value-numberSize.value/3}px;
	line-height: 74px;
	text-align: center;
	color: ${numberColor.value};
	margin: 0 36px;
}

.timeCountText {
	font-weight: 400;
	font-size: ${signSize.value}px;
	color: ${signColor.value};
	line-height: 20px;
}
</style> </head><body> <!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<link rel="stylesheet" href="style.css">
	${containerFont.value}
</head>
<body>
	<!-- <h1 class="visuallyHidden"> Таймер обратного отсчета </h1> -->
	<div class="timeCount">
		<h2 class="timeCountTitle">${title.value}</h2>
		<div class="timeCountContent">
			<div class="timeCountItem timeCountDays">
				<div class="timeCountVal">00</div>
				<span class="timeCountText">дней</span>
			</div>
			<div class="timeCountSeparator">:</div>

			<div class="timeCountItem timeCountHours">
				<div class="timeCountVal">00</div>
			<span class="timeCountText">часов</span>
			</div>

			<div class="timeCountSeparator">:</div>

			<div class="timeCountItem timeCountMinutes">
				<div class="timeCountVal">00</div>
			<span class="timeCountText">минут</span>
			</div>

			<div class="timeCountSeparator">:</div>

			<div class="timeCountItem timeCountSeconds">
				<div class="timeCountVal">00</div>
			<span class="timeCountText">секунд</span>
			</div>
		</div>
		</div>
	</div></html><script>document.addEventListener("DOMContentLoaded", () => {
	const newYear = new Date("${date.value}");

	const daysVal = document.querySelector(".timeCountDays .timeCountVal");
	const hoursVal = document.querySelector(".timeCountHours .timeCountVal");
	const minutesVal = document.querySelector(".timeCountMinutes .timeCountVal");
	const secondsVal = document.querySelector(".timeCountSeconds .timeCountVal");

	const daysText = document.querySelector(".timeCountDays .timeCountText");
	const hoursText = document.querySelector(".timeCountHours .timeCountText");
	const minutesText = document.querySelector(".timeCountMinutes .timeCountText");
	const secondsText = document.querySelector(".timeCountSeconds .timeCountText");

	function decOfNum(number, titles) {
		let cases = [2, 0, 1, 1, 1, 2];
		return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5]];
	}


		const timeCount = () => {
		let now = new Date();
		let until = newYear - now;
		
		let days = Math.floor(until / 1000 / 60 / 60 / 24);
		let hours = Math.floor(until / 1000 / 60 / 60) % 24;
		let minutes = Math.floor(until / 1000 / 60) % 60;
		let seconds = Math.floor(until / 1000) % 60;

		daysVal.innerHTML = days;
		hoursVal.innerHTML = hours;
		minutesVal.innerHTML = minutes;
		secondsVal.innerHTML = seconds;
		

		daysText.innerHTML = decOfNum(days, ["день", "дня", "дней"]);
		hoursText.innerHTML = decOfNum(hours, ["час", "часа", "часов"]);
		minutesText.innerHTML = decOfNum(minutes, ["минута", "минуты", "минут"]);
		secondsText.innerHTML = decOfNum(seconds, ["секунда", "секунды", "секунд"]);
	};

	timeCount();
	setInterval(timeCount, 1000);
});</script>'></iframe>` + ' ';
string.toString();
console.log(string);
pushResult ('.result__text', string);
}
  

// function handleFormSubmit(event) {
//     event.preventDefault()
//     serializeForm(applicantForm)
// }
function pushResult (block, string) {
  let result = document.querySelector(block);
  result.textContent = string;
}

document.getElementById("copy").onclick = function() {
	let text = document.getElementById("content").textContent;
	clipboard.writeText(text);
}
function serializeForm(formNode) {
	const { elements } = formNode
	const data = Array.from(elements)
	  .filter((item) => !!item.name)
	  .map((element) => {
		const { name, value } = element
  
		return { name, value }
	  })
	console.log(data)
	makeIframe(data)
  }
  
  
function handleFormSubmit(event) {
	event.preventDefault()
	serializeForm(applicantForm)
}
  
const applicantForm = document.getElementById('formTimer')
applicantForm.addEventListener('submit', handleFormSubmit)