const btn = document.getElementById('btn');
const ccounter = document.getElementById('ccounter');
const btng = document.getElementById('btng');
const btngun = document.getElementById('btngun');
const gunUpg = document.getElementById('gunUpg');
const gmaUpg = document.getElementById('gmaUpg');
const clickUpg = document.getElementById('clickUpg');
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
var gunEfficiency = 20;


// ✅ Change button text on click
btn.addEventListener('click', function handleClick() {
  j = (j+clickEfficiency);
  ccounter.textContent = j + " cookies";
});
function addjnum(){
  j = (j+(grandmas*gmaEfficiency));
  j = (j+(guns*gunEfficiency));
  ccounter.textContent = j + " cookies";


} 
function grandmaLoop(){
  setInterval(addjnum, 1000);
  
  
}

btng.addEventListener('click', function handleClick(){/buy grandma/
  if (j >= grandmaValue) {
grandmas = (grandmas + 1);
j = (j-grandmaValue);
ccounter.textContent = j + " cookies";
grandmaValue = ((grandmaValue * 1.3) - ((grandmaValue * 1.3)% 1));
btng.textContent = "buy grandma (" + grandmaValue + " cookies)";
  }
});

gmaUpg.addEventListener('click', function handleClick(){/buy grandma upgrade/
  if (j >= grandmaUpgradeValue) {
gmaEfficiency = (gmaEfficiency * 2);
j = (j-grandmaUpgradeValue);
ccounter.textContent = j + " cookies";
grandmaUpgradeValue = (grandmaUpgradeValue * 3);
gmaUpg.textContent = " Upgrade the Elders!!! (" + grandmaUpgradeValue + " cookies)";
  }
});

clickUpg.addEventListener('click', function handleClick(){/buy click upgrade/
  if (j >= clickUpgradeValue) {
clickEfficiency = (clickEfficiency*2);
j = (j-clickUpgradeValue);
ccounter.textContent = j + " cookies";
clickUpgradeValue = (clickUpgradeValue*3);
clickUpg.textContent = " Upgrade Click! ($" + clickUpgradeValue + ")";
  }
});

btngun.addEventListener('click', function handleClick(){/buy gun/
  if (j >= gunValue) {
guns = (guns + 1);
j = (j-gunValue);
ccounter.textContent = j + " cookies";
gunValue = ((gunValue * 1.3) - ((gunValue * 1.3)% 1));
btngun.textContent = "Buy Cookie Gun (" + gunValue + " cookies)";
  }
});

gunUpg.addEventListener('click', function handleClick(){/buy gun upgrade/
  if (j >= gunUpgradeValue) {
gunEfficiency = (gunEfficiency * 2);
j = (j-gunUpgradeValue);
ccounter.textContent = j + " cookies";
gunUpgradeValue = (gunUpgradeValue * 3);
gunUpg.textContent = " Get shootier guns!!! (" + gunUpgradeValue + " cookies)";
  }
});

grandmaLoop();
/**
 * ✅ If you need to change the button's inner HTML use:
 *  - `innerHTML` instead of `textContent`
 */


