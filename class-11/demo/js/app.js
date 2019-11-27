'use strict';

//global variables
var picOne = document.getElementById('picture1');
var picTwo = document.getElementById('picture2');
var picOneName = document.getElementById('pic1-name');
var picTwoName = document.getElementById('pic2-name');
var pictureContainer = document.getElementById('image-container');
var picArray = [];

//make a constructor
function Picture(src, name) {
  this.src = `../images/${src}.jpg`;
  this.title = name;
  this.alt = name;
  this.clicked = 0;
  this.viewed = 0;

  picArray.push(this);
}

// helper function to generate a random number from 0 to the last index of the array
function randomIndex(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

//function that dynamically renders images randomly selected from the array
function generateImages() {
  var index = randomIndex(picArray.length);

  picOne.src = picArray[index].src;
  picOne.title = picArray[index].title;
  picOne.alt = picArray[index].alt;
  picOneName.textContent = picOne.title = picArray[index].title;

  picArray[index].viewed++;

  var indexTwo = randomIndex(picArray.length);

  //prevent duplicate images
  while (indexTwo === index) {
    indexTwo = randomIndex(picArray.length);
  }

  picTwo.src = picArray[indexTwo].src;
  picTwo.title = picArray[indexTwo].title;
  picTwo.alt = picArray[indexTwo].alt;
  picTwoName.textContent = picTwo.title = picArray[indexTwo].title;

  picArray[indexTwo].viewed++;
}

//callback function used in the event handler
function handleClick(event) {
  var vote = event.target.title;

  for (var i = 0; i < picArray.length; i++) {
    if (vote === picArray[i].title) {
      picArray[i].clicked++;
    }
  }

  generateImages();
}

//initialize picture objects on page load
function createOnPageLoad() {
  new Picture('apple-salad', 'Apple Salad');
  new Picture('brussel-sprouts', 'Brussel Sprouts');
  new Picture('cranberry-salad', 'Cranberry Salad');
  new Picture('green-beans', 'Green Beans');
  new Picture('harvest-salad', 'Harvest Salad');
  new Picture('maple-carrots', 'Maple Carrots');
  new Picture('mashed-potatoes', 'Mashed Potatoes');
  new Picture('pumpkin-soup', 'Pumpkin Soup');
  new Picture('stuffed-squash', 'Stuffed Squash');
  new Picture('stuffing', 'Stuffing');
}

createOnPageLoad();
pictureContainer.addEventListener('click', handleClick);
generateImages();
