const left_ = document.querySelector('.prev');
const right_ = document.querySelector('.next');

const slider = document.querySelector('.slider');

const indicatorParent = document.querySelector('.controls ul');
const indicators = document.querySelectorAll('.controls li');

var index = 0;
var xDown;

indicators.forEach((indicator, i) => {           // for dots below
	indicator.addEventListener('click', () => {
		document.querySelector('.controls .selected').classList.remove('selected');
		indicator.classList.add('selected');
		slider.style.transform = 'translateX(' + (i) * -20 + '%)';
		index = i;
	});
});

left_.addEventListener('click', function () {  // for left switch
	leftClick();
});

right_.addEventListener('click', function () { // for right switch
	rightClick();
});

$('img').click(function (e) {    // for image left or right side click
	let elm = $(this);
	let xPos = e.pageX - elm.offset().left;
	if ((elm.width() / 2) >= xPos) {
		leftClick();
	} else {
		rightClick();
	}
});

let cond1 = false;         
let cond2 = false;

var mousedownFired = false;

$('.carousel').mousedown(function () {
	cond1 = true;
	xDown = event.clientX;
	mousedownFired = true;
});

$('.carousel').mousemove(function () {
	cond2 = true;
});

$('.carousel').mouseup(function () {            // for swipe
	event.stopPropagation();
	var xUp = event.clientX;
	if (cond1 && cond2){
		swipe(xUp);
	}
	cond1 = false;
	cond2 = false;
});

function swipe(xUp) {
	if (xDown > xUp) {
		rightClick();
	}
	else {
		leftClick();
	}
}

function rightClick() {
	index = (index < 4) ? index + 1 : (index % 4);
	document.querySelector('.controls .selected').classList.remove('selected');
	indicatorParent.children[index].classList.add('selected');
	slider.style.transform = 'translateX(' + (index) * -20 + '%)';
}

function leftClick() {
	index = (index > 0) ? index - 1 : 4;
	document.querySelector('.controls .selected').classList.remove('selected');
	indicatorParent.children[index].classList.add('selected');
	slider.style.transform = 'translateX(' + (index) * -20 + '%)';
}

event.stopPropagation();
event.preventDefault();
