let current = ""; //current string
let index = 0; //where we at?

let count = 0; //how many letters in total
let wrong = 0; //how many wrong in total
let errs = 0; //current uncorrected errors
let errstack = [];

let wpm = 0;
let start = 0; //start time
document.getElementById("wpm").innerHTML = wpm + " wpm";

let pert = 100;
percentage = pert.toFixed(2);
document.getElementById("accuracy").innerHTML = percentage + "%";




kinput.onkeypress = keyed;
kinput.onkeydown = del; //for backspace

function keyed(e)
{
	var keyCode = e.keyCode || e.which || 0;
	if(keyCode) //if a character is actually read in
	{
		//start and ending
		if(index == 0) start = Date.now();
		if(index + 1 >= verselen || keyCode == 13) 
		{
			reset();
			return;
		}


		let char = String.fromCharCode(keyCode)

		//correctness checking
		if(vers.charAt(index) != char)
		{
			wrong++;

			
			errstack.push(index);
			failed();
			errs++;

			console.log(index);
		}

		//keep track of variables now
		current += char; //add typed character in
		index++; 
		count++; //how many letters


		//wpm
		wpm = getwpm();
		document.getElementById("wpm").innerHTML = wpm + " wpm";


		//accuracy
		pert = (count - wrong) / count * 100;
		percentage = pert.toFixed(2);
		document.getElementById("accuracy").innerHTML = percentage + "%";


		//render the verse again

		
		//just for debugging
		// var output = keyCode + ": " + char + " index:" + index;
		// console.log(output);
	}
}

function del(e) //specifcally for backspace
{
	var keyCode = e.keyCode || e.which || 0;
	if((keyCode == 46 || keyCode == 8) && index > 0)
	{
		index--;

		if(index <= errstack[errs - 1])
		{
			var a = errstack.pop();
			right(a);

			errs--;
		}		
	}
}


function reset()
{
	current = "";
	index = 0;
	start = 0;

	count = 0;
	wrong = 0;
	errs = 0;
	errstack = [];
	wpm = 0;

	pert = 100;
	percentage = pert.toFixed(2);
	document.getElementById("accuracy").innerHTML = percentage + "%";

	parse();
	document.getElementById("wpm").innerHTML = wpm;

	document.getElementById('kinput').value = "";
}