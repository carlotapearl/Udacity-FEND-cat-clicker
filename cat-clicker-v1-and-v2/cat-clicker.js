/*
* Version 2 
* New Project Requirements for Cat Clicker
* Visuals
* The application should display two cats. Each cat includes
* the cat's name
* a picture of the cat
* text showing the number of clicks
* The specifics of the layout do not matter, so style it however you'd like.
* Interaction
* The number of clicks should increment when each cat picture is clicked.
*/

var cats = [];
var Cat = function(name, img_url, default_click_count) {
  this.name = name;
  this.image = img_url;
  this.clickCount = default_click_count;
};

Cat.prototype.createDisplay = function() {
    var newDiv = document.createElement("div");
    var newCatImg = new Image();
    newCatImg.src = this.image;
    newDiv.appendChild(newCatImg);
    this.imgElement = newCatImg;
  
    var newP = document.createElement("p");
    newP.innerText = this.name + "'s Clicks: ";
    var newCount = document.createElement("strong");
    newCount.innerText = this.clickCount;
    newP.appendChild(newCount);
    newDiv.appendChild(newP);
    this.countElement = newCount;
  
    catContainer.appendChild(newDiv);
  };

  Cat.prototype.bindImage = function() {
    var cat = this;
    cat.imgElement.addEventListener('click', function(){
      cat.clickCount++;
      cat.countElement.innerText = cat.clickCount;
    }, false);
  };
  Cat.prototype.init = function() {
    this.createDisplay();
    this.bindImage();
  };
  
  cats.push(new Cat("Silvester", "images/chewie.jpg", 0));
  cats.push(new Cat("Milo", "images/poplinrecat.jpg", 0));
  
  var catContainer = document.getElementById("cat_container");
  
  var startCatClicker = function() {
    for (var i = 0; i < cats.length; i++) {
      cats[i].init();
    }
  }();
