var days = [1, 2, 3, 4, 5];

var dailyItems = {
	"one": ["buy something", "buy nothing"],
	"two": ["buy something", "buy nothing"],
	"three": ["buy something", "buy nothing"],
	"four": ["buy something", "buy nothing"],
	"five": ["buy something", "buy nothing"]
}

var dailyDOM = document.getElementById("daily");

dailyDOM.innerHTML = "<ul>";

for (var i = 0; i < dailyItems.one.length; i++) {

	dailyDOM.innerHTML += "<li>" + dailyItems.one[i] + "</li>";

}

dailyDOM.innerHTML += "</ul>";

//menu switching
var mainSection = document.querySelector('.main-section')
var wallet = document.querySelector('.wallet')

wallet.addEventListener('click', function() {
	mainSection.classList.toggle('swap')
}, false)
