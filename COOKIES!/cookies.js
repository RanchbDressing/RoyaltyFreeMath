const btn = document.getElementById('btn');
const ccounter = document.getElementById('ccounter');
const btng = document.getElementById('btng');
const gmaUpg = document.getElementById('gmaUpg');
const clickUpg = document.getElementById('clickUpg');
var clickUpgradeValue = 20;
var j = 0;
var grandmas = 0;
var grandmaValue = 100;
var grandmaUpgradeValue = 125;
var gmaEfficiency = 1;
var clickEfficiency = 1;

// ✅ Change button text on click
btn.addEventListener('click', function handleClick() {
  j = (j+clickEfficiency);
  ccounter.textContent = j + " cookies";
});
function addjnum(){
  j = (j+(grandmas*gmaEfficiency));
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
grandmaValue = ((grandmaValue * 1.1) - ((grandmaValue * 1.1)% 1));
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

grandmaLoop();
/**
 * ✅ If you need to change the button's inner HTML use:
 *  - `innerHTML` instead of `textContent`
 */


