
var buttonState = [1,0,0,0,0];

function selectItem(buttonID) {
	var thisItem = 'button' + buttonID;
	var nowSelect = document.getElementById(thisItem);
	if (buttonState[buttonID] == 0) {
		for (i=1; i<=5; i++) {
				strItem = "button" + i;
				thisButton = document.getElementById(strItem);
				thisButton.style.backgroundColor = '#d0d8ee';
				thisButton.style.fontSize = '18px';
				buttonState[i] = 0;
				thisLabel = document.getElementById(strItem).getElementsByClassName("buttonLabel")[0];
				thisLabel.style.top = '';
				thisLabel.style.bottom = '5px';
		}
		buttonState[buttonID] = 1;
		nowSelect.style.backgroundColor = '#d3eebd';
		nowSelect.style.fontSize = '4.5em';
		thisLabel = document.getElementById(thisItem).getElementsByClassName("buttonLabel")[0];
		thisLabel.style.top = '15%'; 
		
	} 
}