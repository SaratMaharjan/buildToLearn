
import * as utils from "./utilities";
import { personOne } from "../database/personOne";

let currentMonth = 1;
let currentDay = 1;
let months = ["jan", "feb", "march", "april", "may"];

// get reference to DOM Elements
const dailyDOM = document.getElementById("daily");
const monthlyDOM = document.getElementById("monthly");
const mainSection = document.querySelector('.main-section')
const wallet = document.querySelector('.wallet');
const monthDOM = document.querySelector('#selectMonth');
const dayDOM = document.querySelector('#selectDay');

utils.arrayToHtml( personOne[currentMonth - 1].daily[currentDay - 1], dailyDOM, "itemList" );
utils.arrayToHtml( personOne[currentMonth - 1].monthly, monthlyDOM, "itemList" );
utils.arrayToSelect( months, monthDOM, "monthSelect" );

utils.addDays(dayDOM, currentMonth);

const selectDayDOM = document.querySelector('.daySelect');
const selectMonthDOM = document.querySelector('.monthSelect');

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
	utils.arrayToHtml( personOne[currentMonth - 1].daily[currentDay - 1], dailyDOM, "itemList" );
}, false)

// update daily items according to day Selection
selectMonthDOM.addEventListener('change', function() {
	currentMonth = months.indexOf(selectMonthDOM.value) + 1;
	currentDay = 1;
	selectDayDOM.value = currentDay;
	utils.arrayToHtml( personOne[currentMonth - 1].daily[currentDay - 1], dailyDOM, "itemList" );
	utils.arrayToHtml( personOne[currentMonth - 1].monthly, monthlyDOM, "itemList" );
}, false)
