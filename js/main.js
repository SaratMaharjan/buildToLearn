
var currentMonth = 1;
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

arrayToHtml( personOne[currentMonth - 1].daily[currentDay - 1], dailyDOM, "itemList" );
arrayToHtml( personOne[currentMonth - 1].monthly, monthlyDOM, "itemList" );
arrayToSelect( months, monthDOM, "monthSelect" );

addDays(dayDOM, currentMonth);

var selectDayDOM = document.querySelector('.daySelect');
var selectMonthDOM = document.querySelector('.monthSelect');

/*
	Event Listeners
*/

// menu switching
wallet.addEventListener('click', function() {
	mainSection.classList.toggle('swap')
}, false)

// update daily items according to day Selection
selectDayDOM.addEventListener('change', function() {
	currentDay = selectDayDOM.value;
	arrayToHtml( personOne[currentMonth - 1].daily[currentDay - 1], dailyDOM, "itemList" );
}, false)

// update daily items according to day Selection
selectMonthDOM.addEventListener('change', function() {
	currentMonth = months.indexOf(selectMonthDOM.value) + 1;
	currentDay = 1;
	selectDayDOM.value = currentDay;
	arrayToHtml( personOne[currentMonth - 1].daily[currentDay - 1], dailyDOM, "itemList" );
	arrayToHtml( personOne[currentMonth - 1].monthly, monthlyDOM, "itemList" );
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

// add days to selection
function addDays (dayDOM, currentMonth) {
	var contentString = "<select " + "class='daySelect'>";
	for (var i = 1; i <= daysInMonth[currentMonth - 1]; i++) {
		contentString += "<option>" + i + "</option>";
	}
	contentString += "</select>";
	dayDOM.innerHTML = contentString;
}