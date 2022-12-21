var dummyTimerSeconds = -1;
var dummyTimerMinutes = 0;
var dummyTimerHours = 0;
const dumdum = document.getElementById('dumdum')
const btn = document.getElementById('btn');
const btnc = document.getElementById('btnc');
const ccounter = document.getElementById('ccounter');
const btng = document.getElementById('btng');
const btngun = document.getElementById('btngun');
const gunUpg = document.getElementById('gunUpg');
const gmaUpg = document.getElementById('gmaUpg');
const btnthousc = document.getElementById('btnthousc');
var clickUpgradeValue = 20;
var j = 0; //j is currency

var grandmas = 0;
var grandmaValue = 100;
var grandmaUpgradeValue = 125;
var gmaEfficiency = 1;

var clickEfficiency = 1;

var guns = 0;
var gunValue = 1500;
var gunUpgradeValue = 1875;
var gunEfficiency = 35;

var cursors = 0;
var cursorValue = 10;
var thousandClickersUpgradeValue = 1000000;
var cursorEfficiency = 1;
var hasthousandClickers = false;
var thousandClickersEfficiency = 1;

// ✅ Change button text on click
btn.addEventListener('click', function handleClick() {
  j = j + (cursorEfficiency);
  ccounter.textContent = Math.floor(j) + " cookies";
});
function addjnum(){

if (hasthousandClickers == true){
  cursorEfficiency = ((thousandClickersEfficiency)*(grandmas+guns));
}

  j = (j+(cursors*cursorEfficiency/10));
  j = (j+(grandmas*gmaEfficiency));
  j = (j+(guns*gunEfficiency));
  ccounter.textContent = Math.floor(j) + " cookies";

//past this point is the dummy timer instead of the addjnum (for efficiency)
  
  if (dummyTimerSeconds < 59) {
    dummyTimerSeconds = dummyTimerSeconds+1;
    dumdum.textContent = "Dummy timer -->  " + dummyTimerHours + ":" + dummyTimerMinutes + ":" + dummyTimerSeconds;
  }else if (dummyTimerMinutes < 59) {
    dummyTimerSeconds = 0;
    dummyTimerMinutes = dummyTimerMinutes+1;
    dumdum.textContent = "Dummy timer -->  " + dummyTimerHours + ":" + dummyTimerMinutes + ":" + dummyTimerSeconds;
  }else {
    dummyTimerSeconds = 0;
    dummyTimerMinutes = 0;
    dummyTimerHours = dummyTimerHours+1;
    dumdum.textContent = "Dummy timer -->  " + dummyTimerHours + ":" + dummyTimerMinutes + ":" + dummyTimerSeconds;
  }


} 
function grandmaLoop(){
  setInterval(addjnum, 1000);
  

}



btnc.addEventListener('click', function handleClick(){//buy cursor/
  if (j >= cursorValue) {
cursors = (cursors + 1);
j = (j-cursorValue);
ccounter.textContent = Math.floor(j) + " cookies";
cursorValue = ((cursorValue * 1.15) - ((cursorValue * 1.15)% 1));
btnc.textContent = "buy Cursor (" + cursorValue + " cookies) (" + cursors + " Cursors) (" + cursorEfficiency/10 + " c/s per cursor)";
  }
});

btnthousc.addEventListener('click', function handleClick(){//buy thousandClickers/
  if (j >= 100000 && hasthousandClickers == false) {
    hasthousandClickers = true;
j = (j-100000);
ccounter.textContent = Math.floor(j) + " cookies";
btnthousc.textContent = "[sold!]";
btnc.textContent = "buy Cursor (" + cursorValue + " cookies) (" + cursors + " Cursors) (" + cursorEfficiency/10 + " c/s per cursor)";
  }
});

/*gmaUpg.addEventListener('click', function handleClick(){//buy thousandClickers upgrade/
  if (j >= 1000000 && hasthousandClickers == true) {
gmaEfficiency = (gmaEfficiency * 2);
j = (j-grandmaUpgradeValue);
ccounter.textContent = Math.floor(j) + " cookies";
grandmaUpgradeValue = (grandmaUpgradeValue * 3);
gmaUpg.textContent = " Upgrade the Elders!!! (" + grandmaUpgradeValue + " cookies)";
btng.textContent = "buy grandma (" + grandmaValue + " cookies) (" + grandmas + " grandmas) (" + gmaEfficiency + " c/s per grandma)";
  }
});*/

btng.addEventListener('click', function handleClick(){//buy grandma/
  if (j >= grandmaValue) {
grandmas = (grandmas + 1);
j = (j-grandmaValue);
ccounter.textContent = Math.floor(j) + " cookies";
grandmaValue = ((grandmaValue * 1.15) - ((grandmaValue * 1.15)% 1));
btng.textContent = "buy grandma (" + grandmaValue + " cookies) (" + grandmas + " grandmas) (" + gmaEfficiency + " c/s per grandma)";
  }
});

gmaUpg.addEventListener('click', function handleClick(){//buy grandma upgrade/
  if (j >= grandmaUpgradeValue) {
gmaEfficiency = (gmaEfficiency * 2);
j = (j-grandmaUpgradeValue);
ccounter.textContent = Math.floor(j) + " cookies";
grandmaUpgradeValue = (grandmaUpgradeValue * 3);
gmaUpg.textContent = " Upgrade the Elders!!! (" + grandmaUpgradeValue + " cookies)";
btng.textContent = "buy grandma (" + grandmaValue + " cookies) (" + grandmas + " grandmas) (" + gmaEfficiency + " c/s per grandma)";
  }
});



btngun.addEventListener('click', function handleClick(){//buy gun/
  if (j >= gunValue) {
guns = (guns + 1);
j = (j-gunValue);
ccounter.textContent = Math.floor(j) + " cookies";
gunValue = ((gunValue * 1.15) - ((gunValue * 1.15)% 1));
btngun.textContent = "Buy Cookie Gun (" + gunValue + " cookies) (" + guns + ") (" + gunEfficiency +" c/s per gun)";
  }
});

gunUpg.addEventListener('click', function handleClick(){//buy gun upgrade/
  if (j >= gunUpgradeValue) {
gunEfficiency = (gunEfficiency * 2);
j = (j-gunUpgradeValue);
ccounter.textContent = Math.floor(j) + " cookies";
gunUpgradeValue = (gunUpgradeValue * 3);
gunUpg.textContent = " Get shootier guns!!! (" + gunUpgradeValue + " cookies)";
btngun.textContent = "Buy Cookie Gun (" + gunValue + " cookies) (" + guns + ") (" + gunEfficiency +" c/s per gun)";
  }
});

grandmaLoop();
/**
 * ✅ If you need to change the button's inner HTML use:
 *  - `innerHTML` instead of `textContent`
 */


