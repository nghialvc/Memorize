// JavaScript Document
// JavaScript Document
const Cols = ["A","B","C","D","E","F","G","H","I","K"];
const Rows = ["0","1","2","3","4","5","6","7","8","9"];
const Levels = ["Easy","Medium","Hard"];
const size = 10;
var divtable = document.getElementById("div_table");
var divbtn = document.getElementById("div_btn");
var Matrix = Array(size), currentLevel = 0;

function createMatrix()
{
	for (i = 0; i < size; i++)
	{
		Matrix[i] = Array(size);
		for (j = 0; j < size; j++)
		{
			Matrix[i][j] = Array(size);
			for (k = 0; k < size; k++)
			{
				Matrix[i][j][k] = Array(size);
				for (l = 0; l < size; l++)
				{
					Matrix[i][j][k][l] = Math.floor(Math.random()*(currentLevel*2+2));
				}
			}
		}
	}
}

function newButton(name)
{
	var btn = "<button class='col-4 btn btn-success font-weight-bold' style='padding:10px;margin:0px 10px 0px 10px;font-size:36px;' onclick='btn_"+name+"_onclick()'>"+name+"</button>";
	return btn;
}

function showAll()
{
	divtable.innerHTML = "";
	for (i = 0; i <= size; i++)
	{
		divtable.innerHTML += "<div class='row' style='margin-bottom:10px;' id='row_"+i+"'></div>";
		for (j = 0; j <= size;j++)
		{
			var row = document.getElementById("row_"+i);
			if (j != 0 && i != 0)
			{	
				var square = "<img class='col-1 img-fluid w-100' style='padding:0px;' src='./media/square.png' onclick='showSquare("+(i-1)+","+(j-1)+")'/>";
				row.innerHTML += square;
			}
			else if (i == 0 && j != 0)
			{
				var rowtext = "<div class='col-1 text-center font-weight-bold'>"+Cols[j-1]+"</div>";
				row.innerHTML += rowtext;
			}
			else if (i != 0)
			{
				var rowtext = "<div class='col-1 text-center font-weight-bold'>"+Rows[i-1]+"</div>";
				row.innerHTML += rowtext;
			}
			else
			{
				var rowtext = "<div class='col-1'></div>";
				row.innerHTML += rowtext;
			}
		}
	}
	var btn = newButton("Start");
	divbtn.innerHTML = btn;
}

function showSquare(row, col)
{
	divtable.innerHTML = "";
	for (i = 0; i < size; i++)
	{
		divtable.innerHTML += "<div class='row justify-content-center' style='margin-bottom:10px;' id='row_"+i+"'></div>";
		for (j = 0; j < size; j++)
		{
			var divrow = document.getElementById("row_"+i);
			var img = "<img class='col-1 img-fluid w-100' style='padding:0px;margin:5px;' src='./media/butterfly"+Matrix[parseInt(row)][parseInt(col)][i][j]+".png'/>";
			divrow.innerHTML+=img;
		}
	}
	var btnlast = newButton("Last");
	var btnnext = newButton("Next");
	var position = "<div class='col-2 font-weight-bold text-center text-white bg-secondary rounded-pill' style='font-size:48px;'>"+Cols[col]+Rows[row]+"</div>";
	divbtn.innerHTML = btnlast+position+btnnext;
}

createMatrix();
showAll();