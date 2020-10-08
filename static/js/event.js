function btn_Start_onclick()
{
	onGame = true;
	divalert.hidden = false;
}
function btn_Restart_onclick()
{
	time[3] = 0;
	divtimer.innerHTML = "00:00:00";
	onGame = false;
	showAll();
}
function btn_Back_onclick()
{
	showAll();
}
function btn_Last_onclick()
{
	if (currentRow > 0)
	{
		showSquare(currentRow-1,currentCol);
	}
	else if (currentCol > 0)
	{
		showSquare(size-1,currentCol-1)
	}
}

function btn_Next_onclick()
{
	if (currentRow+1 < size)
	{
		showSquare(currentRow+1,currentCol);
	}
	else if (currentCol+1 < size)
	{
		showSquare(0,currentCol+1)
	}
}

function chooseLevel(level)
{
	currentLevel = level;
	createMatrix();
	divalert.hidden = true;
	showAll();
	time = [0,0,0,1];
	runTimer();
}

function runTimer(){
	if (time[3] == 0) return;
		time[2] += 1;
		if (time[2] > 99) {time[1] += 1; time[2] = 0;}
		if (time[1] > 59) {time[0] += 1; time[1] = 0;}
		if (time[0] >= maxtime) time[3] = 0;
		var m = String(time[0]);
		var s =  String(time[1]);
		var ms = String(time[2]);
		if (m.length < 2) m = "0" + m;
		if (s.length < 2) s = "0" + s;
		if (ms.length < 2) ms = "0" + ms;
		divtimer.innerHTML = m + ":"+s+":"+ms;
}

var timer = setInterval(runTimer,10);
