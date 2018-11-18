kinput.onkeypress = keyed;
kinput.onkeydown = del;

current = "";
index = 0;

count = 0;
wrong = 0;
correct = document.getElementById("correct");
correct = 0;
correctword = 0;
pert = 100;
percentage = pert.toFixed(2);

let setTimer = 0;

document.getElementById("accuracy").innerHTML = percentage + "%";

function reset()
{
	count = 0;
	pert = 100;
	correct = 0;
	wrong = 0;
	index = 0;
	current = "";
	seconds = 0;
	minutes = 0;
	document.getElementById('kinput').value = "";
	parse();
}		

function keyed(e)
{
	var keyCode = e.keyCode || e.which || 0;
	if(keyCode) //if a character is actually read in
	{
		if (keyCode == 13)
		{
			reset();
		}
		timeOn();
		let char = String.fromCharCode(keyCode)
		//compare to the actual
		if(real.charAt(index) != char)
		{
			wrong++;
		}
		else
		{
			correct++;
		}
		//keep track of everything
		current += char;
		index++;
		count++;
		start = 1;	
		pert = (count - wrong) / count * 100;
		percentage = pert.toFixed(2);
		document.getElementById("accuracy").innerHTML = percentage + "%";
		

		var output = keyCode + ": " + char + " index:" + index;
		console.log(output);

		
	}
}

function del(e) {
	var keyCode = e.keyCode || e.which || 0;
	if((keyCode == 46 || keyCode == 8) && index > 0)
	{
		index--;

		console.log(index)
	}
}