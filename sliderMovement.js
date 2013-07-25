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
