/*
* Project Requirements for Cat Clicker Premium
* Visuals
* The application should display
*
* a list of cats by name
* an area to display the selected cat
* In the cat display area, the following should be displayed
*
* the cat's name
* a picture of the cat
* text showing the number of clicks
* The specifics of the layout do not matter, so style it however you'd like.
* Interaction
* When a cat name is clicked in the list, the cat display area should update to show the data for the selected cat.
* The number of clicks in the cat area should be unique to each cat, and should increment when the cat's picture is clicked.
*/

/* MODEL */

var model = {
	currentCat: null,
	cats: [
		{
			clickCount: 0,
			name : 'Silvester',
			imgSrc : './images/chewie.jpg',
			imgAttribution: ''
		},
		{
			clickCount: 0,
			name : 'Milo',
			imgSrc : 'images/poplinrecat.jpg',
			imgAttribution: ''			
		},
		{
			clickCount: 0,
			name : 'Nina',
			imgSrc : 'images/nina.jpg',
			imgAttribution: 'http://placeimg.com'			
		},
		{
			clickCount: 0,
			name : 'Garfield',
			imgSrc : 'images/garfield.jpg',
			imgAttribution: 'http://placeimg.com'			
		},
		{
			clickCount: 0,
			name : 'Tom',
			imgSrc : 'images/tom.jpg',
			imgAttribution: 'http://placeimg.com'			
		}

	]
}

/* ======= Octopus ======= */

var octopus = {
    //init function initalizes with the begining data. Keep out of the DOM.
    init: function(){
        //set the current cat to the first one on the list
        model.currentCat = model.cats[0];
        
        //tell our views to initialize.
        catListView.init();
        catView.init();
    },
    
    getCurrentCat: function(){
        return model.currentCat;
    },
    
    //calls the array of cats.
    getCats: function(){
        return model.cats;
    },
    
    //sets the new cat.
    setCurrentCat: function(cat){
        model.currentCat = cat;
    },
    
    //increments the counter for the currently-selected cat.
    incrementCounter: function(){
        model.currentCat.clickCount ++;
        catView.render();
    },
};

/* ======= Views ======= */
var catView = {
    init: function(){
    this.catImage = document.getElementById("catImage"); //the cat image
    this.name = document.getElementById("catName"); //the cat's name above the image
    this.clickCount = document.getElementById("displayClicks"); //display for number of times this cat was clicked
    //on click, increment the current cat's click count
    this.catImage.addEventListener('click', function(){
        octopus.incrementCounter();
    });
    this.render();
    },
    
    render: function(){
        var currentCat = octopus.getCurrentCat(); //calls the current cat from octopus
        this.clickCount.textContent = "Click count: " + currentCat.clickCount;
        this.name.textContent = currentCat.name;
        this.catImage.src = currentCat.imgSrc;
    }
};

var catListView = {
    init: function(){
        
        //store the DOM element for easy access.
        this.catList = document.getElementById('names');
        
        //update the DOM elements with the right values.
        this.render();
    },
    
    render: function(){
        var i, cat, catElem;
        
        //call the array of cats from octopus
        var cats = octopus.getCats();
        
        this.catList.innerHTML= '';
        
//loop over each cat in our array of cats
        for (i = 0; i < cats.length; i++) {
            
            //This is the cat number that we are on
            cat = cats[i];
            
            
            //create a DOM element for each cat
            catElem = document.createElement('li'); //create li element
            catElem.textContent = cat.name; //fills the content of li with the cat's name
            
            //when the cat's name in the list is clicked, update the cat's picture
            catElem.addEventListener('click', (function(catCopy) {
                return function(){
                octopus.setCurrentCat(catCopy);
                catView.render();
                octopus.incrementCounter(); //increments cat clicker
                };
            })(cat));

            this.catList.appendChild(catElem); //append li elements to the list
        }
    }
    
};

//make it go!
octopus.init();