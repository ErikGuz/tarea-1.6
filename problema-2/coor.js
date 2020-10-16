var x=prompt("Coordenada X");
var y=prompt("Coordenada Y");
if (x>0 && y>0)
{
	alert("Q1");
}
else if (x>0 && y<0)
{
	alert("Q4");
}
else if(x<0 && y>0)
{
	alert("Q2");
}
else if (x<0 && y<0)
{
	alert("Q3");
}
else if (x==0 && y==0)
{
	alert("Origem");
}
else if(x==0 && y>0||y<0)
{
	alert("Eixo Y");
}
else
{
	alert("Eixo X");
}