/*
* Project Requirements for Cat Clicker Premium
* Visuals
* The application should display
*
* a list of at least 5 cats, listed by name
* an area to display the selected cat
* In the cat display area, the following should be displayed
*
* the cat's name
* a picture of the cat
* text showing the number of clicks
* The specifics of the layout do not matter, so style it however you'd like.
*

  cats.push(new Cat("Silvester", "images/chewie.jpg", 0));
  cats.push(new Cat("Milo", "images/poplinrecat.jpg", 0));



* Interaction
* When a cat name is clicked in the list, the cat display area should update to show the data for the selected cat.
* The number of clicks in the cat area should be unique to each cat, and should increment when the cat's picture is clicked.
*/
var cats = [
	{
		"name": "Silvester",
		"pic": "./images/chewie.jpg",
		"clicks": 0
	},
	{
		"name": "Milo",
		"pic": "images/poplinrecat.jpg",
		"clicks": 0
	},
	{
		"name": "Garfield",
		"pic": "http://placeimg.com/200/200/animals?t=1532345858210",
		"clicks": 0
	},
	{
		"name": "Nina",
		"pic": "http://placeimg.com/200/200/animals?t=1532345889972",
		"clicks": 0
	},
	{
		"name": "Tom",
		"pic": "http://placeimg.com/200/200/animals?t=1532345917536",
		"clicks": 0
	}
];

function createCatList() {
	var toAppend = "";
	$.each(cats, function(catIndex, cat) {
		toAppend += "<li class='cat list-group-item'>" + cat.name + "</li>";
	});
	$("#list").append("<ul class='list-group'>" + toAppend + "</ul>");
}

function displayCat(id) {
	$("#display").empty();
	cat = cats[id];
	var toDisplay = "<div class='container'><div class='name'>" + cat.name + "</div><img src='" + cat.pic + "' class='clickable'/><div id='" + id.toString() + "' class='count'>" + cat.clicks.toString() + "</div></div>";
	$("#display").append(toDisplay);
	$(".clickable").click(function(object) {
		var elem = object.target.parentElement.childNodes[2];
		cats[elem.id].clicks += 1;
		$("#" + elem.id).text(cats[elem.id].clicks);
	});	
}

$(document).ready(function() {
	createCatList();
	$(".cat").click(function(obj) {
		id = cats.indexOf(cats.filter(function(a){ return a.name == obj.target.innerHTML; })[0]);
		displayCat(id);
	});
});