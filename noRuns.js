var myval=0;
var prev = [] ; 
var where = 0;

if (jsarguments.length>1)
	myval = jsarguments[1];



function bang()
{
	outlet(0,"myvalue","is",myval);
}


function msg_int(v)
{
	
	if (where > 2 && v != prev[0] || v != prev[1] || v != prev[2]){
		post("received int " + v + "\n");
		myval = v;
		
		prev[where] = myval;
		
		where ++
		bang();
	} 	else {
			where = 0;
		}	
}