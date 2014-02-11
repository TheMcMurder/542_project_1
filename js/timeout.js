
var milliseconds = 10000


timer()

var modal = document.getElementById('openModal')
var no_button = document.getElementById('noButton')
var yes_button = document.getElementById('yesButton')


no_button.addEventListener('click', function(){
	window.location = 'https://www.google.com'
})


yes_button.addEventListener('click', function(){
	modal.className = 'modalDialog modalHidden'
	timer()
})

function timer(){
	// console.log('timer')
	setTimeout(function(){

		show_modal()
	}, milliseconds)
}

function show_modal() {
	modal.className = 'modalDialog modalActive'
}


