/*

*/


const arrMain = new Array(10);
let strArrayDataType = ``;
const prefixIndex = `tdIndex`;
const prefixArrayValue = `tdArrayValue`;
const prefixReverseIndex = `tdReverseIndex`;
const delayBeforeDelete = 2500;

//let numSelectedIndex


function arrMain_FillByConsecutiveNumbers() {
	for (let i = 0; i < arrMain.length; i++) {
		arrMain[i] = i + 100;
	}
	strArrayDataType = `number`;
	tableArray_Create();
}

function arrMain_FillByRandomNumbers() {
	for (let i = 0; i < arrMain.length; i++) {
		arrMain[i] = Math.floor(100 * Math.random());
	}
	strArrayDataType = `number`;
	tableArray_Create();
}

function arrMain_FillByConsecutiveLetters() {
	for (let i = 0; i < arrMain.length; i++) {
		arrMain[i] = String.fromCharCode(65 + i);
	}
	strArrayDataType = `string`;
	tableArray_Create();
}

function arrMain_FillByRandomLetters() {
	for (let i = 0; i < arrMain.length; i++) {
		arrMain[i] = String.fromCharCode(65 + 26 * Math.random());
	}
	strArrayDataType = `string`;
	tableArray_Create();
}

function arrMain_sort() {
	// const arrVisible = arrMain.slice(0, Number(inputArrLength.value));
	// arrVisible.sort();
	// for (let i = 0; i < arrVisible.length; i++) {
	// 	arrMain[i] = arrVisible[i];
	// }
	// tableArray_Create();

	arrMain.sort();
	tableArray_Create();
}

function arrMain_reverse() {
	// const arrVisible = arrMain.slice(0, Number(inputArrLength.value));

	// arrVisible.reverse();
	// for (let i = 0; i < arrVisible.length; i++) {
	// 	arrMain[i] = arrVisible[i];
	// }
	// tableArray_Create();

	arrMain.reverse();
	tableArray_Create();
}

function arrMain_push() {
	if (strArrayDataType === `number`) {
		arrMain.push(Math.floor(100 * Math.random()));
	} else if (strArrayDataType === `string`) {
		arrMain.push(String.fromCharCode(65 + 26 * Math.random()));
	}
	inputArrLength.value = arrMain.length;
	tableArray_Create();
	tableArray_setClassName(Array.of(arrMain.length - 1), `created-cell`);
}

function arrMain_pop() {
	// tableArray_selectColumns(Array.of(arrMain.length - 1), `red`);
	// arrMain.pop();
	// setTimeout(tableArray_Create, delayBeforeDelete);

	tableArray_setClassName(Array.of(arrMain.length - 1), `removing-cell`);
	arrMain.pop();
	inputArrLength.value = arrMain.length;
	setTimeout(tableArray_Create, delayBeforeDelete);
}

function arrMain_unshift() {
	if (strArrayDataType === `number`) {
		arrMain.unshift(Math.floor(100 * Math.random()));
	} else if (strArrayDataType === `string`) {
		arrMain.unshift(String.fromCharCode(65 + 26 * Math.random()));
	}
	inputArrLength.value = arrMain.length;
	tableArray_Create();
	// tableArray_selectColumns(Array.of(0), `green`);
	// setTimeout(tableArray_selectColumns, delayBeforeDelete / 2, Array.of(0), `lime`);
	// setTimeout(tableArray_selectColumns, delayBeforeDelete, Array.of(0), `white`);
	tableArray_setClassName(Array.of(0), `created-cell`);
}

function arrMain_shift() {
	// tableArray_selectColumns(Array.of(0), `red`);
	// arrMain.shift();
	// setTimeout(tableArray_Create, delayBeforeDelete);

	tableArray_setClassName(Array.of(0), `removing-cell`);
	arrMain.shift();
	inputArrLength.value = arrMain.length;
	setTimeout(tableArray_Create, delayBeforeDelete);
}

// function tableArray_getTDIndex(argIndex) {
// 	return prefixIndex + String(argIndex);
// }
// function tableArray_getTDArrayValue(argIndex) {
// 	return prefixArrayValue + String(argIndex);
// }
// function tableArray_getTDReverseIndex(argIndex) {
// 	return prefixReverseIndex + String(argIndex);
// }
// function tableArray_selectColumns(argIndexes, argBackground) {
// 	for (let i = 0; i < argIndexes.length; i++) {
// 		const tableData_Index = document.getElementById(tableArray_getTDIndex(argIndexes[i]));
// 		tableData_Index.style.backgroundColor = argBackground;
// 		const tableData_ArrayValue = document.getElementById(tableArray_getTDArrayValue(argIndexes[i]));
// 		tableData_ArrayValue.style.backgroundColor = argBackground;
// 		//const tableData_ReverseIndex = document.getElementById(tableArray_getTDReverseIndex(argIndexes[i] - arrMain.length));
// 		const tableData_ReverseIndex = document.getElementById(tableArray_getTDReverseIndex(argIndexes[i]));
// 		tableData_ReverseIndex.style.backgroundColor = argBackground;
// 	}
// }
// function ___tableArray_setClassName(argIndexes, argClassName) {
// 	for (let i = 0; i < argIndexes.length; i++) {
// 		const tableData_Index = document.getElementById(tableArray_getTDIndex(argIndexes[i]));
// 		tableData_Index.className += argClassName;
		
// 		//tableData_Index.style.width = tableData_Index.offsetWidth + 'px';

// 		// document.addEventListener('DOMContentLoaded', () => {
// 		// 	const columns = document.querySelectorAll('.dynamic-column');

// 		// 	columns.forEach(column => {
// 		// 		const initialWidth = column.offsetWidth + 'px';

// 		// 		column.style.width = initialWidth;
// 		// 		column.classList.add('animate-column');
// 		// 	});
// 		// });

// 		const tableData_ArrayValue = document.getElementById(tableArray_getTDArrayValue(argIndexes[i]));
// 		//tableData_ArrayValue.className += argClassName;
// 		tableData_ArrayValue.classList.add(argClassName.trim());

// 		//const tableData_ReverseIndex = document.getElementById(tableArray_getTDReverseIndex(argIndexes[i] - arrMain.length));
// 		const tableData_ReverseIndex = document.getElementById(tableArray_getTDReverseIndex(argIndexes[i]));
// 		tableData_ReverseIndex.className += argClassName;
// 	}
// }

function tableArray_setClassName(argIndexes, argClassName) {
	const cells = document.querySelectorAll(`td`);
	cells.forEach((cell) => {
		cell.classList.remove(argClassName);
	});

	for (let i = 0; i < argIndexes.length; i++) {
		if (argIndexes[i] >=0 ) {
			//console.log(getClassIndex(argIndexes[i]));
			const cells = document.querySelectorAll(`.` + getClassIndex(argIndexes[i]));
			//const cells = document.querySelectorAll(".tdIndex1");
			//tdIndex1 tdIndex-9
			cells.forEach((cell) => {
				cell.classList.add(argClassName);
			});
		} else {
			const cells = document.querySelectorAll(`.` + getClassReverseIndex(argIndexes[i]));
			cells.forEach((cell) => {
				cell.classList.add(argClassName);
			});
		}

		//cells.classList.add(argClassName);
		// for (let j = 0; j < cells.length; j++) {
		// 	cells[j].classList.add(argClassName);
		// 	//console.log(cells);
		// 	// cells.forEach(cell => {
		// 	// 	cell.classList.add(argClassName);
		// 	// });
		// }


	};
}

/*
*/

function arrayToString(argArray) {
	let result = `[`;
	let strData = ``;
	for (let i = 0; i < argArray.length; i++) {
		let strType = typeof(argArray[i]);
		if (strType === `number`) {
			strData = String(argArray[i]);
		} else if ((strType === `string`)) {
			strData = `"` + argArray[i] + `"`;
		} else {
			strData = String(argArray[i]);
		}
		result += ` ` + strData;
		if (i === (argArray.length - 1)) {
		} else {
			result += `,`;
		}
	}
	result += ` ]`;
	
	return result;
}




// const inputTableOrientation = document.getElementById('inputTableOrientation');
// const labelTableOrientation = document.getElementById('labelTableOrientation');
// inputTableOrientation.addEventListener('input', (event) => {
// 	const newValue = event.target.checked;
// 	//console.log(`newValue`, newValue);
// 	//document.querySelector('value').innerHTML = newValue;
// 	if (newValue) {
// 		labelTableOrientation.innerText = `table horizontal`;
// 	} else {
// 		labelTableOrientation.innerText = `table vertical`;
// 	}
// 	tableArray_Create();
// });



const divCode = document.getElementById('divCode');

const inputArrLength = document.getElementById('inputArrLength');
inputArrLength.addEventListener('input', (event) => {
	const newValue = event.target.value;

	// inputArrIndex.max = newValue - 1;
	// inputArrAt.min = -newValue;
	// if (Number(inputArrIndex.value) >= Number(newValue)) {
	// 	inputArrIndex.value = newValue - 1;
	// 	labelArrIndex2_Renew();
	// }
	if (newValue > 100) {
		alert(`max 100 elements!`);
		event.target = arrMain.length;
	} else {
		arrMain.length = newValue;
	}
	tableArray_Create();
});



const labelArrIndex1 = document.getElementById('labelArrIndex1');
const inputArrIndex = document.getElementById('inputArrIndex');
inputArrIndex.max = Number(inputArrLength.value) - 1;
const inputArrAt = document.getElementById('inputArrAt');
inputArrAt.min = -Number(inputArrLength.value);
//const labelArrIndex2 = document.getElementById('labelArrIndex2');
const inputArrayValue = document.getElementById('inputArrayValue');
//labelArrIndex2_Renew();
inputArrayValue_Renew();
inputArrIndex.addEventListener('input', (event) => {
	const newValue = event.target.value;
	//labelArrIndex2_Renew();
	inputArrayValue_Renew();
	//tableArray_ShowSelected();
	divCode_Renew();
	tableArray_setClassName(Array.of(Number(inputArrIndex.value)), `selected-cell`);
	//labelArrIndex2.innerHTML = `] = ` + String(arrMain[Number(newValue)]);
});

inputArrAt.addEventListener('input', (event) => {
	const newValue = event.target.value;
	//labelArrIndex2_Renew();
	inputArrayValue_Renew();
	//tableArray_ShowSelected();
	tableArray_setClassName(Array.of(Number(inputArrIndex.value)), `selected-cell`);
});


inputArrayValue.addEventListener('input', (event) => {
	const newValue = event.target.value;
	arrMain[Number(inputArrIndex.value)] = newValue;
	tableArray_Create();
	//labelArrIndex2_Renew();
	inputArrayValue_Renew();
	
});

function labelArrIndex2_Renew() {
	// labelArrIndex2.innerHTML = `] = ` + String(arrMain[Number(inputArrIndex.value)]);
	inputArrayValue.value = String(arrMain[Number(inputArrIndex.value)]);
}

function inputArrayValue_Renew() {
	inputArrayValue.value = String(arrMain[Number(inputArrIndex.value)]);
}





const tableArray = document.getElementById(`tableArray`);
// function tableArray_ShowSelected() {
// 	for (let i = 0; i < arrMain.length; i++) {
// 		const tableData_Index = document.getElementById(`tdIndex` + String(i));
// 		const tableData_ArrayValue = document.getElementById(`tdArrayValue` + String(i));
// 		if (i === Number(inputArrIndex.value)) {
// 			tableData_Index.style.backgroundColor = `aqua`;
// 			tableData_ArrayValue.style.backgroundColor = `aqua`;
// 		} else {
// 			tableData_Index.style.backgroundColor = ``;
// 			tableData_ArrayValue.style.backgroundColor = ``;
// 			//tableData_ArrayValue.style["background-color"] = `#FFFFFF`;
// 		}
// 	}
// }
// function tableArray_ShowSelected() {
// 	for (let i = 0; i < arrMain.length; i++) {
// 		const tableData_Index = document.getElementById(`tdIndex` + String(i));
// 		const tableData_ArrayValue = document.getElementById(`tdArrayValue` + String(i));
// 		if (i === Number(inputArrIndex.value)) {
// 			tableData_Index.style.backgroundColor = `aqua`;
// 			tableData_ArrayValue.style.backgroundColor = `aqua`;
// 		} else {
// 			tableData_Index.style.backgroundColor = ``;
// 			tableData_ArrayValue.style.backgroundColor = ``;
// 			//tableData_ArrayValue.style["background-color"] = `#FFFFFF`;
// 		}
// 	}
// }

function getClassIndex(argIndex) {
	return prefixIndex + String(argIndex);
}
function getClassReverseIndex(argIndex) {
	return prefixIndex + String(argIndex);
}

function setClasses(argObj, argIndex) {
	argObj.classList.add(getClassIndex(argIndex));
	argObj.classList.add(getClassReverseIndex(argIndex - arrMain.length));
}

function tableArray_CreateHorizontal() {
	//
	tableArray.innerHTML = ``;
	
	
	const tableRow_Index = document.createElement(`tr`);

	const tableData_Index = document.createElement(`td`);
	//tableData_Index.textContent = `<b>Index</b>`;
	tableData_Index.innerHTML = `<b>Index</b>`;
	tableRow_Index.appendChild(tableData_Index);
	for (let i = 0; i < arrMain.length; i++) {
		const tableData_Index = document.createElement(`td`);
		//tableData_Index.id = `tdIndex` + String(i);
		tableData_Index.id = getClassIndex(i);
		setClasses(tableData_Index, i);
		tableData_Index.textContent = String(i);
		tableRow_Index.appendChild(tableData_Index);
	}

	const tableRow_ArrayValue = document.createElement(`tr`);

	const tableData_ArrayValue = document.createElement(`td`);
	//tableData_ArrayValue.textContent = `Value`;
	tableData_ArrayValue.innerHTML = `<b>Value</b>`;
	tableRow_ArrayValue.appendChild(tableData_ArrayValue);
	for (let i = 0; i < arrMain.length; i++) {
		const tableData_ArrayValue = document.createElement(`td`);
		//tableData_ArrayValue.id = `tdArrayValue` + String(i);
		tableData_ArrayValue.id = getClassIndex(i);
		setClasses(tableData_ArrayValue, i);
		tableData_ArrayValue.textContent = String(arrMain[i]);
		tableRow_ArrayValue.appendChild(tableData_ArrayValue);
	}

	const tableRow_ReverseIndex = document.createElement(`tr`);

	const tableData_ReverseIndex = document.createElement(`td`);
	//tableData_Index.textContent = `<b>Reverse Index</b>`;
	tableData_ReverseIndex.innerHTML = `<b>Reverse Index</b>`;
	tableRow_ReverseIndex.appendChild(tableData_ReverseIndex);
	// for (let i = -Number(arrMain.length); i < 0; i++) {
	// 	const tableData_ReverseIndex = document.createElement(`td`);
	// 	//tableData_ReverseIndex.id = `tdReverseIndex` + String(i);
	// 	tableData_ReverseIndex.id = tableArray_getTDReverseIndex(i);
	// 	tableData_ReverseIndex.textContent = String(i);
	// 	tableRow_ReverseIndex.appendChild(tableData_ReverseIndex);
	// }
	for (let i = 0; i < arrMain.length; i++) {
		const tableData_ReverseIndex = document.createElement(`td`);
		//tableData_ReverseIndex.id = `tdReverseIndex` + String(i);
		tableData_ReverseIndex.id = getClassIndex(i);
		setClasses(tableData_ReverseIndex, i);
		tableData_ReverseIndex.textContent = String(i - arrMain.length);
		tableRow_ReverseIndex.appendChild(tableData_ReverseIndex);
	}



	const tableBody = document.createElement(`tbody`);
	tableBody.appendChild(tableRow_Index);
	tableBody.appendChild(tableRow_ArrayValue);
	tableBody.appendChild(tableRow_ReverseIndex);
	tableArray.appendChild(tableBody);
	//const tableArray = document.querySelector('#cssPropertiesTable tbody');

	//tableArray_ShowSelected();
	tableArray_setClassName(Array.of(Number(inputArrIndex.value)), `selected-cell`);
}

function tableArray_CreateVertical() {


	//
	tableArray.innerHTML = ``;
	
	
	const tableRow_Index = document.createElement('tr');

	const tableData_Index = document.createElement('td');
	tableData_Index.textContent = `Index`;
	tableRow_Index.appendChild(tableData_Index);
	for (let i = 0; i < inputArrLength.value; i++) {
		const tableData_Index = document.createElement('td');
		tableData_Index.textContent = String(i);
		tableRow_Index.appendChild(tableData_Index);
	}

	const tableRow_ArrayValue = document.createElement('tr');

	const tableData_ArrayValue = document.createElement('td');
	tableData_ArrayValue.textContent = `Value`;
	tableRow_ArrayValue.appendChild(tableData_ArrayValue);
	// for (let i = 0; i < inputArrLength.value; i++) {
	// 	const tableData_ArrayValue = document.createElement('td');
	// 	tableData_ArrayValue.textContent = String(arrMain[i]);
	// 	tableRow_ArrayValue.appendChild(tableData_ArrayValue);
	// }



	const tableBody = document.createElement('tbody');
	tableBody.appendChild(tableRow_Index);
	tableBody.appendChild(tableRow_ArrayValue);
	tableArray.appendChild(tableBody);
	//const tableArray = document.querySelector('#cssPropertiesTable tbody');

}

function divCode_Renew() {
	const numLength = arrMain.length;
	const numIndex = inputArrIndex.value;
	const numReverseIndex = inputArrIndex.value - arrMain.length;
	const strArrayValue = String(inputArrIndex.value);
	divCode.innerHTML =
		`arr = ${arrayToString(arrMain)}<br>` +
		`arr.length = ${numLength}<br>` +
		`arr[${numIndex}] = ${arrMain[numIndex]}<br>` +
		`arr[arr.length - ${-numReverseIndex}] = ${arrMain[numLength + numReverseIndex]}<br>` +
		`arr.at(${numReverseIndex}) = ${arrMain.at(numReverseIndex)}`;

}
function tableArray_Create() {
	arrMain_changeLength();
	divCode_Renew();
	if (inputTableOrientation.checked) { // horizontal
		tableArray_CreateHorizontal();
	} else {
		tableArray_CreateVertical();
	}
}







function arrMain_changeLength() {
	// inputArrLength
	if (inputArrLength.value > arrMain.length) {
		inputArrLength.value = arrMain.length;
	}
	//inputArrLength.min = 0;
	inputArrLength.max = arrMain.length;

	// inputArrIndex
	if (inputArrIndex.value >= arrMain.length) {
		inputArrIndex.value = arrMain.length - 1;
	}
	//inputArrIndex.min = 0;
	inputArrIndex.max = arrMain.length - 1;

	// inputArrAt
	if (inputArrAt.value < -arrMain.length) {
		inputArrAt.value = -arrMain.length
	}
	//inputArrAt.min = -1;
	inputArrAt.max = -arrMain.length;
}

//arrMain_FillByRandomNumbers();

inputArrLength.value = arrMain.length;
inputArrLength.min = 0;
// inputArrLength.max = arrMain.length;
inputArrIndex.value = 0;
inputArrIndex.min = 0;
//inputArrIndex.max = arrMain.length - 1;
inputArrAt.value = -arrMain.length;
inputArrAt.min = -1;
// inputArrAt.max = -arrMain.length;
arrMain_FillByRandomLetters();
//