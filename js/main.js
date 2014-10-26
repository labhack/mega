
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

    var graphSettingsLarge = {
          bindto: '#fseven',
          size: {
              height: 450
          },
          padding: {
              top: 0,
              right: 0,
              bottom: 0
          },
          data: {
              x: 'Time',
              columns: [
                  data3.Time,
                  data3.FSeven
              ]
          },
          tooltip: {
              show: false,
          },
          point: {
              show: false
          },
          legend: {
              show: false
          },
          grid: {
              x: {
		 show: false
              },
		y: {
		 show: false,
		 lines: [{value: 50}, {value: 0}, {value: -50}]
		}
          },
          axis: {
              x: {
                  show: true,
                  padding: {top:0, right:0, bottom:0, left: 0},
 		 tick: {
		  count: 10
		 },
                  text: 'Time (sec)',
                  position: 'inner-center'
              },
              y: {
                  show: true,
                  padding: {top:0, right:0, bottom:0, left: 0}
              }
          }
    };

    switch (buttonID) {
      case '1':
        jQuery("div.mainGraph").html('<div id="fseven"></div><div id="feight"></div><div id="fz"></div><div id="tthree"></div><div id="tfour"></div><div id="pz"></div><div id="otwo"></div>');

        graphSettingsLarge.bindto = '#fseven';
        graphSettingsLarge.data.columns = [data3.Time,data3.FSeven];
        var fseven = c3.generate(graphSettingsLarge);
        break;
      case '2':
        jQuery("div.mainGraph").html('<div id="veog"></div>');

        graphSettingsLarge.bindto = '#veog';
        graphSettingsLarge.data.columns = [data3.Time,data3.VEOG];
        var fseven = c3.generate(graphSettingsLarge);
        break;
      case '3':
      case '4':
      case '5':
        jQuery("div.mainGraph").html('<p style="text-align:center;"><img src="img/graph-placeholder.jpg" width="999" height="577"></p>');
        break;
      default:
        console.log('WTF HOME ASS FRY?');
        break;
    }

     // Buttons
    var graphSettingsSmall = {
          size: {
              height: 135
          },
          padding: {
              top: 0,
              right: 0,
              bottom: 0
          },
          data: {
              x: 'Time'
          },
          tooltip: {
              show: false,
          },
          point: {
              show: false
          },
          legend: {
              show: false
          },
          grid: {
              x: {
            		 show: false
              },
          		y: {
            		 show: false,
            		 lines: [{value: 50}, {value: 0}, {value: -50}]
		          }
          },
          axis: {
              x: {
                  show: false,
                  padding: {top:0, right:0, bottom:0, left: 0},
 		              tick: {
                      show: false
		              }
              },
              y: {
                  show: false,
                  padding: {top:0, right:0, bottom:0, left: 0},
 		              tick: {
                      show: false
		              }
              }
          }
    };
     graphSettingsSmall.bindto = '#button2 .graph';
     graphSettingsSmall.size.height = 135;
     graphSettingsSmall.data.columns = [data10.Time,data10.VEOG];
     var veogPreview = c3.generate(graphSettingsSmall);
	}
}
