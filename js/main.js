
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

    switch (buttonID) {
      case '1':
        jQuery("div.mainGraph").html('<div id="fseven"></div><div id="feight"></div><div id="fz"></div><div id="tthree"></div><div id="tfour"></div><div id="pz"></div><div id="otwo"></div>');
        var graphSettings = {
              bindto: '#fseven',
			  size: { height: 450},
              padding: {
                  top: 0,
                  right: 0,
                  bottom: 0
              },
              data: {
                  x: 'Time',
                  columns: [
                      data.Time,
                      data.FSeven
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

        graphSettings.bindto = '#fseven';
        graphSettings.data.columns = [data.Time,data.FSeven];
        var fseven = c3.generate(graphSettings);
/*
        graphSettings.bindto = '#feight';
        graphSettings.data.columns = [data.Time,data.FEight];
        var feight = c3.generate(graphSettings);

        graphSettings.bindto = '#fz';
        graphSettings.data.columns = [data.Time,data.Fz];
        var fz = c3.generate(graphSettings);

        graphSettings.bindto = '#tthree';
        graphSettings.data.columns = [data.Time,data.TThree];
        var tthree = c3.generate(graphSettings);

        graphSettings.bindto = '#pz';
        graphSettings.data.columns = [data.Time,data.Pz];
        var pz = c3.generate(graphSettings);

        graphSettings.bindto = '#otwo';
        graphSettings.data.columns = [data.Time,data.OTwo];
        var otwo = c3.generate(graphSettings);

        graphSettings.bindto = '#tfour';
        graphSettings.data.columns = [data.Time,data.TFour];
        var tfour = c3.generate(graphSettings);
*/
        setTimeout(function() {
          fseven.flow({
            columns: [data.Time,data.FSeven]
          });
          /*
          feight.flow({
            columns: [data.Time,data.FEight]
          });
          fz.flow({
            columns: [data.Time,data.Fz]
          });
          tthree.flow({
            columns: [data.Time,data.TThree]
          });
          tfour.flow({
            columns: [data.Time,data.TFour]
          });
          pz.flow({
            columns: [data.Time,data.Pz]
          });
          otwo.flow({
            columns: [data.Time,data.OTwo]
          });
          tfour.flow({
            columns: [data.Time,data.TFour]
          });
          */
        }, 1000);
        break;
      case '2':
        jQuery("div.mainGraph").html('<div id="fseven"></div><div id="feight"></div><div id="fz"></div><div id="tthree"></div><div id="tfour"></div><div id="pz"></div><div id="otwo"></div>');
        var graphSettings = {
              bindto: '#fseven',
			  size: { height: 450},
              padding: {
                  top: 0,
                  right: 0,
                  bottom: 0
              },
              data: {
                  x: 'Time',
                  columns: [
                      data.Time,
                      data.FSeven
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

        graphSettings.bindto = '#fseven';
        graphSettings.data.columns = [data.Time,data.FSeven];
        var fseven = c3.generate(graphSettings);
/*
        graphSettings.bindto = '#feight';
        graphSettings.data.columns = [data.Time,data.FEight];
        var feight = c3.generate(graphSettings);

        graphSettings.bindto = '#fz';
        graphSettings.data.columns = [data.Time,data.Fz];
        var fz = c3.generate(graphSettings);

        graphSettings.bindto = '#tthree';
        graphSettings.data.columns = [data.Time,data.TThree];
        var tthree = c3.generate(graphSettings);

        graphSettings.bindto = '#pz';
        graphSettings.data.columns = [data.Time,data.Pz];
        var pz = c3.generate(graphSettings);

        graphSettings.bindto = '#otwo';
        graphSettings.data.columns = [data.Time,data.OTwo];
        var otwo = c3.generate(graphSettings);

        graphSettings.bindto = '#tfour';
        graphSettings.data.columns = [data.Time,data.TFour];
        var tfour = c3.generate(graphSettings);
*/
        setTimeout(function() {
          fseven.flow({
            columns: [data.Time,data.FSeven]
          });
          /*
          feight.flow({
            columns: [data.Time,data.FEight]
          });
          fz.flow({
            columns: [data.Time,data.Fz]
          });
          tthree.flow({
            columns: [data.Time,data.TThree]
          });
          tfour.flow({
            columns: [data.Time,data.TFour]
          });
          pz.flow({
            columns: [data.Time,data.Pz]
          });
          otwo.flow({
            columns: [data.Time,data.OTwo]
          });
          tfour.flow({
            columns: [data.Time,data.TFour]
          });
          */
        }, 1000);
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

	}
}
