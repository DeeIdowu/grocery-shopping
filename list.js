//this process is known as caching, to store the dom-manipulation
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
//to append Child to the ul the parent of the li
var ul = document.querySelector("ul");



//This function is a preventative to repeating code:
function inputLength(){
    return input.value.length;
    //returning the results of the loop
         
 }
 //for the creating list function
 function createListElement(){
     var li = document.createElement("li");
     //appendChild adds it to the bottom of the list
     //to create a text document.createTextNode(input.value));
     //because input.value derives from getting userinput in the documentgetElementbyId
     li.appendChild(document.createTextNode(input.value));
     //to append child/ adding to the list/ ul
     ul.appendChild(li);
     //to force the input to type something new instead of keep clicking enter
     input.value="";
 
 
 }
 //for function addlist after click
 function addListAfterClick(){
     //Conditional if input value is empty dont not emit
    if(inputLength() > 0){
        //to add to list, create another li
        createListElement();

    }
 }

 //function for keypress
 function addListAfterKeypress(event){
         //Conditional if input value is empty dont not emit
    //&& event.keyCode allows to the event of click enter to work
    if(inputLength() > 0 && event.keyCode === 13){
        //to add to list, create another li
    createListElement();


     }
    }

//for event listener
button.addEventListener("click", addListAfterClick);

//for the enter key being press
input.addEventListener("keypress", addListAfterKeypress); 


