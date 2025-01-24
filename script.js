let timeTag = document.querySelector('#time');
let dateTag = document.querySelector('#date');
let dayTag = document.querySelector('#day');

let container = document.querySelector('.container');

let cakes = document.querySelectorAll('.cake');
let pies = document.querySelectorAll('.pie');
let icecreams = document.querySelectorAll('.icecream');
let snacks = document.querySelectorAll('.Snakes');
let allBtn = document.querySelector('.all');
let cakeBtn = document.querySelector('.Cake');
let pieBtn = document.querySelector('.Pie');
let iceCreamBtn = document.querySelector('.IceCream');
let snacksBtn = document.querySelector('.Snacks');

window.addEventListener("load", () => {
    showTime();
	allBtn.style.backgroundColor = '#F8E8D4';
	allBtn.style.color = '#1C1C1C';
});

let timeFunction = () =>{
	let fullDate = new Date();
	let hours = fullDate.getHours();
	if(hours >12){
		hours = hours - 12;
	}
	if(hours <10){
		hours = `0${hours}`;
	}
	let minute = fullDate.getMinutes();
	if(minute <10){
		minute = `0${minute}`;
	}
	let seconds = fullDate.getSeconds();
	if(seconds <10){
		seconds = `0${seconds}`;
	}
	
	timeTag.innerText = `${hours} : ${minute} : ${seconds}`;
	setTimeout(timeFunction, 1000);	
}
let showTime = () => {
	let fullDate = new Date();
	let month = fullDate.getMonth()+1;	
	let date = fullDate.getDate();
	let year = fullDate.getFullYear();
	
	if(month <=9){
		month = `0${month}`;
	}

	dateTag.innerText = `${date} / ${month} / ${year}`;

	timeFunction();

	let dayIndex = fullDate.getDay();
	let dayList = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	
	dayTag.innerText = `${dayList[dayIndex]}`;
}

allBtn.addEventListener('click', () => {
	for(let pie of pies){
		pie.style.display = 'block';
	}

	for(let cake of cakes){
		cake.style.display = 'block';
	}

	for(let icecream of icecreams){
		icecream.style.display = 'block';
	}

	for(let snack of snacks){ 
		console.log(snack);
		snack.style.display = 'block';
	}



	allBtn.style.backgroundColor = '#F8E8D4';
	allBtn.style.color = '#1C1C1C';
	cakeBtn.style.backgroundColor = '#1C1C1C';
	cakeBtn.style.color = '#F8E8D4';
	pieBtn.style.backgroundColor = '#1C1C1C';
	pieBtn.style.color = '#F8E8D4';
	iceCreamBtn.style.backgroundColor = '#1C1C1C';
	iceCreamBtn.style.color = '#F8E8D4';
	snacksBtn.style.backgroundColor = '#1C1C1C';
	snacksBtn.style.color = '#F8E8D4';
});

cakeBtn.addEventListener('click', () =>{
	
	for(let pie of pies){
		pie.style.display = 'none';
	}

	for(let cake of cakes){
		cake.style.display = 'block';
	}

	for(let icecream of icecreams){
		icecream.style.display = 'none';
	}

	for(let snack of snacks){ 
		console.log(snack);
		snack.style.display = 'none';
	}

	cakeBtn.style.backgroundColor = '#F8E8D4';
	cakeBtn.style.color = '#1C1C1C';
	allBtn.style.backgroundColor = '#1C1C1C';
	allBtn.style.color = '#F8E8D4';
	pieBtn.style.backgroundColor = '#1C1C1C';
	pieBtn.style.color = '#F8E8D4';
	iceCreamBtn.style.backgroundColor = '#1C1C1C';
	iceCreamBtn.style.color = '#F8E8D4';
	snacksBtn.style.backgroundColor = '#1C1C1C';
	snacksBtn.style.color = '#F8E8D4';
});

pieBtn.addEventListener('click', () =>{
	
	for(let pie of pies){
		pie.style.display = 'block';
	}

	for(let cake of cakes){
		cake.style.display = 'none';
	}

	for(let icecream of icecreams){
		icecream.style.display = 'none';
	}

	for(let snack of snacks){ 
		console.log(snack);
		snack.style.display = 'none';
	}

	pieBtn.style.backgroundColor = '#F8E8D4';
	pieBtn.style.color = '#1C1C1C';
	allBtn.style.backgroundColor = '#1C1C1C';
	allBtn.style.color = '#F8E8D4';
	cakeBtn.style.backgroundColor = '#1C1C1C';
	cakeBtn.style.color = '#F8E8D4';
	iceCreamBtn.style.backgroundColor = '#1C1C1C';
	iceCreamBtn.style.color = '#F8E8D4';
	snacksBtn.style.backgroundColor = '#1C1C1C';
	snacksBtn.style.color = '#F8E8D4';
});

iceCreamBtn.addEventListener('click', () =>{
	
	for(let pie of pies){
		pie.style.display = 'none';
	}

	for(let cake of cakes){
		cake.style.display = 'none';
	}

	for(let icecream of icecreams){
		icecream.style.display = 'block';
	}

	for(let snack of snacks){ 
		console.log(snack);
		snack.style.display = 'none';
	}

	iceCreamBtn.style.backgroundColor = '#F8E8D4';
	iceCreamBtn.style.color = '#1C1C1C';
	allBtn.style.backgroundColor = '#1C1C1C';
	allBtn.style.color = '#F8E8D4';
	pieBtn.style.backgroundColor = '#1C1C1C';
	pieBtn.style.color = '#F8E8D4';
	cakeBtn.style.backgroundColor = '#1C1C1C';
	cakeBtn.style.color = '#F8E8D4';
	snacksBtn.style.backgroundColor = '#1C1C1C';
	snacksBtn.style.color = '#F8E8D4';
});

snacksBtn.addEventListener('click', () =>{
	
	for(let pie of pies){
		pie.style.display = 'none';
	}

	for(let cake of cakes){
		cake.style.display = 'none';
	}

	for(let icecream of icecreams){
		icecream.style.display = 'none';
	}

	for(let snack of snacks){ 
		console.log(snack);
		snack.style.display = 'block';
	}

	snacksBtn.style.backgroundColor = '#F8E8D4';
	snacksBtn.style.color = '#1C1C1C';
	allBtn.style.backgroundColor = '#1C1C1C';
	allBtn.style.color = '#F8E8D4';
	pieBtn.style.backgroundColor = '#1C1C1C';
	pieBtn.style.color = '#F8E8D4';
	iceCreamBtn.style.backgroundColor = '#1C1C1C';
	iceCreamBtn.style.color = '#F8E8D4';
	cakeBtn.style.backgroundColor = '#1C1C1C';
	cakeBtn.style.color = '#F8E8D4';
});