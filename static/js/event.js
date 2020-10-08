function btn_Start_onclick()
{
	onGame = true;
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
