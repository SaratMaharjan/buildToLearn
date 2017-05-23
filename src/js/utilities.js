
// insert array as list in DOM element
export const arrayToHtml = (txtArray, domElement, addClass ) => {
	let contentString = "<ul " + "class='" + addClass + "'>";
	for (let i = 0; i < txtArray.length; i++) {
		contentString += "<li>" + txtArray[i] + "</li>";
	}
	contentString += "</ul>";
	domElement.innerHTML = contentString;
}

// insert array as selection in DOM element
export const arrayToSelect = (txtArray, domElement, addClass ) => {
	let contentString = "<select " + "class='" + addClass + "'>";
	for (let i = 0; i < txtArray.length; i++) {
		contentString += "<option value ='" + txtArray[i] + "'>" + txtArray[i] + "</option>";
	}
	contentString += "</select>";
	domElement.innerHTML = contentString;
}

// add days to selection
export const addDays = (dayDOM, currentMonth) => {
	const daysInMonth = [30, 30, 30, 30];
	let contentString = "<select " + "class='daySelect'>";
	for (let i = 1; i <= daysInMonth[currentMonth - 1]; i++) {
		contentString += "<option>" + i + "</option>";
	}
	contentString += "</select>";
	dayDOM.innerHTML = contentString;
}