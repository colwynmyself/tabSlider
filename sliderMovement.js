/* To change what shows up as the little tab to open and close the slider, just change what's inside the 'a' tag for 
'innerHTML'.

Currently the slider is aligned along the right side fo the page, so switch it to the left side just switch 'right' to
'left' here and in the .css file. If you want to change the width (should match #tabSlider) just change the '-100px'.*/

function openAll()
{
  document.getElementById('tabSlider').style.right = '0';
	document.getElementById('tabSlider').className = "openTabOpen";
	document.getElementById('sliderSwitch').innerHTML = '<a id="tabText" href="javascript:void(0);" title="Show Tab">&#62;</a>';
	document.getElementById('sliderSwitch').onclick = closeAll;
}
function closeAll()
{
	document.getElementById('tabSlider').style.right = '-100px';
	document.getElementById('tabSlider').className = "openTabClose";
	document.getElementById('sliderSwitch').innerHTML = '<a id="tabText" href="javascript:void(0);" title="Hide Tab">&#60;</a>';
	document.getElementById('sliderSwitch').onclick = openAll;
}
