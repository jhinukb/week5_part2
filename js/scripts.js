const customName = document.getElementById('customname');

//location is a keyword so changed variable name to loc
const loc = document.getElementById('location');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

var storyText = 'My dad\'s side of the family is from location, but my family lives in :insertx:. Tradition every year is to open one gift on Christmas Eve, so once when Nancy was 12, my mom gave me this really :inserty: box to open. I opened it and it was :insertz:. This was :inserta:. There was a piece of paper It said that I was going to England first thing in the morning with my dad. Best gift ever! I missed my family so much, and we even got to surprise most of them when we showed up at the annual family Boxing Day party. Truly grateful.';
var insertX = ['California','Oklahoma','Australia'];
var insertY = ['heavy','light','small', 'giant'];
var insertZ = ['a beautiful painting','my favorite pair of boots','a board game', 'just toilet paper'];
var insertA = ['not what I wanted', 'exactly what I wanted', 'unexpected'];

var curr_val = ':insertz:';

randomize.addEventListener('click', result);

function result() {

  var newStory = storyText;
  var xItem = randomValueFromArray(insertX);
  var yItem = randomValueFromArray(insertY);
  // var zItem = randomValueFromArray(insertZ);
  var aItem = randomValueFromArray(insertA);

  //replace strings in newStory
  newStory = newStory.replace(/:insertx:/g, xItem);
  newStory = newStory.replace(':inserty:', yItem);
  // newStory = newStory.replace(':insertz:', zItem);
  newStory = newStory.replace(':inserta:', aItem);

  if(customName.value !== '') {
    let name = customName.value;
    newStory = newStory.replace('Nancy', name);
  }

  if(loc.value !== '') {
    let place = loc.value;
    newStory = newStory.replace('location', place);
  }

  var ddl= document.getElementById("SelectUserChoice");
  if(ddl.selectedIndex != 0) {

    // var ddl= document.getElementById("SelectUserChoice");
    let gift = ddl.options[ddl.selectedIndex].text;
    storyText = storyText.replace(curr_val, gift);
    curr_val = gift;
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';

}
