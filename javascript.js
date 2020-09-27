function hamburguer()
{
	var x = document.getElementById("minhanav");
	if (x.className == "nav")
		x.className += " responsive";
	else
		x.className = "nav";
}
