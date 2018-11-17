kinput.onkeypress = keyed;
kinput.onkeydown = del;

currentString = "";
index = 0;

function keyed(e)
{
	var keyCode = e.keyCode || e.which || 0;

	//compare to the actual


	//add to thing (even if it's wrong)



	var output = keyCode + ": " + String.fromCharCode(keyCode);
	console.log(output);
}



function del(e) {
	var keyCode = e.keyCode || e.which || 0;
	if(keyCode == 46 || keyCode == 8)
	{
		index--;
	}
}