var gInterval

var gBalloons = []

var audioPop = new Audio('pop.mp3')
init()
function init() {
	createBalloons(10)
	renderBalloons()
	styleBalloons()
	gInterval = setInterval(moveBalloons, 100)
}

function createBalloons(amount) {
	for (var i = 0; i < amount; i++) {
		var balloon = { bottom: 0, speed: getRandomInt(1, 5) }
		gBalloons.push(balloon)
	}
}
console.log(gBalloons)

function renderBalloons() {
	var strHTML = ''
	for (var i = 0; i < gBalloons.length; i++) {
		strHTML += `<div class="balloon balloon${i}" onclick="popBalloon(this)"></div>\n`
	}
	var elBody = document.querySelector('body')
	elBody.innerHTML = strHTML
}

function styleBalloons() {
	var elBalloons = document.querySelectorAll('.balloon')
	for (var i = 0; i < elBalloons.length; i++) {
		var elBalloon = elBalloons[i]
		elBalloon.style.backgroundColor = getRandomColor()
		elBalloon.style.left = 150 * i + 'px'
	}
}

function moveBalloons(elBalloons) {
	var elBalloons = document.querySelectorAll('.balloon')
	for (var i = 0; i < elBalloons.length; i++) {
		gBalloons[i].bottom += gBalloons[i].speed
		elBalloons[i].style.bottom = gBalloons[i].bottom + 'px'
	}
}

function popBalloon(elBalloon) {
	audioPop.play()
	elBalloon.innerText = '🌟'
	elBalloon.style.opacity = 0
}

function getRandomColor() {
	var letters = '0123456789ABCDEF'
	var color = '#'
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)]
	}
	return color
}
function getRandomInt(min, max) {
	return min + Math.floor(Math.random() * (max - min))
}
