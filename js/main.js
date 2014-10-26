
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
				thisLabel = document.getElementById(strItem).getElementsByClassName("graph")[0];
				thisLabel.style.display = 'block';
		}
		buttonState[buttonID] = 1;
		nowSelect.style.backgroundColor = '#d3eebd';
		nowSelect.style.fontSize = '4.5em';
		thisLabel = document.getElementById(thisItem).getElementsByClassName("buttonLabel")[0];
		thisLabel.style.top = '20%';
		thisLabel = document.getElementById(thisItem).getElementsByClassName("graph")[0];
		thisLabel.style.display = 'none';

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
		 }
              },
              y: {
                  show: true,
                  padding: {top:0, right:0, bottom:0, left: 0}
              }
          }
    };

    switch (buttonID) {
      case '1':
        jQuery("div.mainGraph").html('<div id="fseven"></div><div id="feight"></div><div id="fz"></div><div id="tthree"></div><div id="tfour"></div><div id="pz"></div><div id="otwo"><div class="axisLabels" id="xAxis">ELAPSED TIME (sec)</div><div class="axisLabels" id="yAxis">EEG F7 (µV)</div></div>');

        graphSettingsLarge.bindto = '#fseven';
        graphSettingsLarge.data.columns = [data3.Time,data3.FSeven];
        var fseven = c3.generate(graphSettingsLarge);
        break;
      case '2':
        jQuery("div.mainGraph").html('<div id="veog"></div><div class="axisLabels" id="xAxis">ELAPSED TIME (sec)</div><div class="axisLabels" id="yAxis">VEOG (mV)</div></div>');

        graphSettingsLarge.bindto = '#veog';
        graphSettingsLarge.data.columns = [data3.Time,data3.VEOG];
        var veog = c3.generate(graphSettingsLarge);
        break;
      case '3':
        jQuery("div.mainGraph").html('<div id="heog"></div><div class="axisLabels" id="xAxis">ELAPSED TIME (sec)</div><div class="axisLabels" id="yAxis">HEOG (mV)</div></div>');

        graphSettingsLarge.bindto = '#heog';
        graphSettingsLarge.data.columns = [data3.Time,data3.HEOG];
        var heog = c3.generate(graphSettingsLarge);
        break;
      case '4':
        jQuery("div.mainGraph").html('<div id="ecg"></div><div class="axisLabels" id="xAxis">ELAPSED TIME (sec)</div><div class="axisLabels" id="yAxis">ECG (mV)</div></div>');

        graphSettingsLarge.bindto = '#ecg';
        graphSettingsLarge.data.columns = [data3.Time,data3.ECG];
        var ecg = c3.generate(graphSettingsLarge);
        break;
      case '5':
        jQuery("div.mainGraph").html('<div id="resp"></div><div class="axisLabels" id="xAxis">ELAPSED TIME (sec)</div><div class="axisLabels" id="yAxis" style="left: -4%">RESPIRATION</div></div>');

        graphSettingsLarge.bindto = '#resp';
        graphSettingsLarge.data.columns = [Resp.ElapsedTime,Resp.FilteredAmp];
	 	graphSettingsLarge.data.x = "ElapsedTime";
        var resp = c3.generate(graphSettingsLarge);
        break;
    }

     // Buttons
    var graphSettingsSmall = {
          size: {
              height: 115
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
     graphSettingsSmall.bindto = '#button1 .graph';
     graphSettingsSmall.size.height = 135;
     graphSettingsSmall.data.columns = [data10.Time,data10.FSeven];
     var eegPreview = c3.generate(graphSettingsSmall);
     graphSettingsSmall.bindto = '#button2 .graph';
     graphSettingsSmall.size.height = 135;
     graphSettingsSmall.data.columns = [data10.Time,data10.VEOG];
     var veogPreview = c3.generate(graphSettingsSmall);
     graphSettingsSmall.bindto = '#button3 .graph';
     graphSettingsSmall.size.height = 135;
     graphSettingsSmall.data.columns = [data10.Time,data10.HEOG];
     var heogPreview = c3.generate(graphSettingsSmall);
     graphSettingsSmall.bindto = '#button4 .graph';
     graphSettingsSmall.size.height = 135;
     graphSettingsSmall.data.columns = [data10.Time,data10.ECG];
     var ecgPreview = c3.generate(graphSettingsSmall);
	 graphSettingsSmall.bindto = '#button5 .graph';
	 graphSettingsSmall.size.height = 135;
	 graphSettingsSmall.data.x = "ElapsedTime";
	 graphSettingsSmall.data.columns = [Resp.ElapsedTime,Resp.FilteredAmp];
	 var respPreview = c3.generate(graphSettingsSmall);

   setTimeout(function() {
     var temp = {};
     temp.ElapsedTime = RespFULL.ElapsedTime.slice(18,108);
     temp.ElapsedTime.unshift("ElapsedTime");
     temp.FilteredAmp = RespFULL.FilteredAmp.slice(18,108);
     temp.FilteredAmp.unshift("FilteredAmp");
     respPreview.flow({
       columns: [
        temp.ElapsedTime,
        temp.FilteredAmp
       ],
       duration: 50
     });
   }, 1000);
   setTimeout(function() {
     var temp = {};
     temp.ElapsedTime = RespFULL.ElapsedTime.slice(36,126);
     temp.ElapsedTime.unshift("ElapsedTime");
     temp.FilteredAmp = RespFULL.FilteredAmp.slice(36,126);
     temp.FilteredAmp.unshift("FilteredAmp");
     respPreview.flow({
       columns: [
        temp.ElapsedTime,
        temp.FilteredAmp
       ],
       duration: 50
     });
     resp.flow({
       columns: [
        temp.ElapsedTime,
        temp.FilteredAmp
       ],
       duration: 50
     });
   }, 2000);
   setTimeout(function() {
     var temp = {};
     temp.ElapsedTime = RespFULL.ElapsedTime.slice(54,144);
     temp.ElapsedTime.unshift("ElapsedTime");
     temp.FilteredAmp = RespFULL.FilteredAmp.slice(54,144);
     temp.FilteredAmp.unshift("FilteredAmp");
     respPreview.flow({
       columns: [
        temp.ElapsedTime,
        temp.FilteredAmp
       ],
       duration: 50
     });
     resp.flow({
       columns: [
        temp.ElapsedTime,
        temp.FilteredAmp
       ],
       duration: 50
     });
   }, 3000);

	}
}
