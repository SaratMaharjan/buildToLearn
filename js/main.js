
var currentMonth = "jan";
var currentDay = 1;
var months = ["jan", "feb", "march", "april", "may"];
var daysInMonth = [30, 30, 30, 30];

// get reference to DOM Elements
var dailyDOM = document.getElementById("daily");
var monthlyDOM = document.getElementById("monthly");
var mainSection = document.querySelector('.main-section')
var wallet = document.querySelector('.wallet');
var monthDOM = document.querySelector('#selectMonth');
var dayDOM = document.querySelector('#selectDay');

arrayToHtml( jan2017.daily[currentDay-1], dailyDOM, "itemList" );
arrayToHtml( jan2017.monthly, monthlyDOM, "itemList" );
arrayToSelect( months, monthDOM, "monthSelect" );

var contentString = "<select " + "class='daySelect'>";
for (var i = 1; i <= daysInMonth[0]; i++) {
	contentString += "<option>" + i + "</option>";
}
contentString += "</select>";
dayDOM.innerHTML = contentString;

/*
	Event Listeners
*/

//menu switching
wallet.addEventListener('click', function() {
	mainSection.classList.toggle('swap')
}, false)


/*
	Funtions used repeatedly are added below
*/

// insert array as list in DOM element
function arrayToHtml (txtArray, domElement, addClass ) {
	var contentString = "<ul " + "class='" + addClass + "'>";
	for (var i = 0; i < txtArray.length; i++) {
		contentString += "<li>" + txtArray[i] + "</li>";
	}
	contentString += "</ul>";
	domElement.innerHTML = contentString;
}

// insert array as selection in DOM element
function arrayToSelect (txtArray, domElement, addClass ) {
	var contentString = "<select " + "class='" + addClass + "'>";
	for (var i = 0; i < txtArray.length; i++) {
		contentString += "<option value ='" + txtArray[i] + "'>" + txtArray[i] + "</option>";
	}
	contentString += "</select>";
	domElement.innerHTML = contentString;
}
