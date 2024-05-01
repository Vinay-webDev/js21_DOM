// DOM - Document Object Model
// DOM object with properties and methods, here we work more on methods***

// let's know how to select an element with an ID****
// getElementById
// I'm gonna select view
const view1 = document.getElementById("view1");
console.log(view1);
// another method to select an element with an Id (querySelector())
const view2 = document.querySelector("view2");
console.log(view2);
// here we can't directly write view2 use #view2
const view2 = document.querySelector("#view2");
console.log(view2);

// while using querySelector use ( # )
const view2 = document.querySelector("#view2");
console.log(view2);
//====================================================//
// now let's see how we can change the style of the view

const view1 = document.getElementById("view1");
console.log(view1);
const view2 = document.querySelector("#view2");
console.log(view2);
// to change style of the view i.e..to show or hide the view
// we can't change the nav element as it always show. we can't hide the nav element 
view1.style.display = "none";
view2.style.display = "none";
view1.style.display = "none";
view2.style.display = "flex";
view1.style.display = "flex";
view2.style.display = "flex"; 


// so let's goahead and look at the methods to select all views***

// here also two different methods to select multiple views
// 1. getElementsByClassName() 
// 2. querySelectorAll()
//============<< I'm writing again fo practice >>===================//
const view1 = document.getElementById("view1");
console.log(view1);
const view2 = document.querySelector("#view2");
console.log(view2);
view1.style.display = "flex";
view2.style.display = "none";
//=============<<>>============//
// getElementByClassName()
// we are using "view" inside the getElementsByClassName. we more than one views (i.e,, view1 & view2)
const views = document.getElementsByClassName("view")
console.log(views);

// querySelectorAll()
// use .view while using querySelectorAll()
const sameViews = document.querySelectorAll(".view");
console.log(sameViews);

// HTMlCollection[] Vs NodeList[] 
// HTMLCollection = collection of HTML elements  ex: <div> <p> <img>
// NodeList = collection of nodes 
// nodes = these everything in HTML every elements, white space, every text inside the elements */

// individual divs
// to select divs

const divs = document.querySelectorAll("div");
console.log(divs);
const sameDivs = document.getElementsByTagName("div");
console.log(sameDivs); 
////////////////////////////////////////////////////////////////////////////////////
// imma practice one more time!

const view1 = document.getElementById("view1");
console.log(view1);
const view2 = document.querySelector("#view2");
console.log(view2);
view1.style.display = "flex";
view2.style.display = "flex";
const views = document.getElementsByClassName("view");
console.log(views);
const sameViews = document.querySelectorAll(".view");
console.log(sameViews);
const divs = document.querySelectorAll("#div") 
console.log(divs);
const sameDivs = document.getElementsByTagName("div");
console.log(sameDivs); 
////////////////////////////////////////////////////////////////////////
// selecting divs using previous selectors
// ** we don't need to use # or . while we are selecting from previous selectors ***

const view1 = document.getElementById("view1");
console.log(view1);
const view2 = document.querySelector("#view2");
console.log(view2);

view1.style.display = "flex";
view2.style.dispaly = "none";


const views = document.getElementsByClassName("view");
console.log(views);
const sameViews = document.querySelectorAll(".view");
console.log(sameViews);
//++++selection divs using+++//+++previous selectors++++//
// you don't need to use # or . anymore because we are using previous selectors 
const divs = view1.querySelectorAll("div");
console.log(divs);
// why view1 only because divs are only in view1
const sameDivs = view1.getElementsByTagName("div");
console.log(sameDivs);

// what if I wanted to select only even divs?
// to do that we have 
// inside the .querySelectorAll we need to be specific ("div: nth-of-type(2n)")
const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);

// we can also to select only odd divs 
const oddDivs = view1.querySelectorAll("div:nth-of-type(2n+1)");
console.log(oddDivs); 

// not only this we can alter anything on the page!
// so let's try to do some changes to the page!

for ( i=0; i<evenDivs.length; i++ ) {
    evenDivs[i].style.background = "blue";
}

for ( i=0; i<oddDivs.length; i++ ) {
    oddDivs[i].style.background = "orange";
} 

for (i=0; i<evenDivs.length; i++) {
    evenDivs[i].style.background = "blue";
    evenDivs[i].style.width = "200px";
    evenDivs[i].style.height = "200px";
} 
/////////////

for (i=0; i<oddDivs.length; i++) {
    oddDivs[i].style.background = "orange";
    oddDivs[i].style.width = "200px";
    oddDivs[i].style.height = "200px";
} 
//////////////////////////////////////////////////////////////////////////////////
// let's select the nav 
//====< practice one more time! =====//
const view1 = document.getElementById("view1");
console.log(view1);
const view2 = document.querySelector("#view2");
console.log(view2);

view1.style.display = "flex";
view2.style.display = "none";

const views = document.getElementsByClassName("view");
console.log(views);
const sameViews = document.querySelectorAll(".view");
console.log(sameViews);

const divs = view1.querySelectorAll("div");
console.log(divs);
const sameDivs = view1.getElementsByTagName("div");
console.log(sameDivs);

const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);

for(i=0; i<evenDivs.length; i++) {
    evenDivs[i].style.background = "blue";
    // evenDivs[i].style.width = "200px";
    // evenDivs[i].style.height = "200px";
}
// let's change text in the nav
const navText = document.querySelector("nav h1");
console.log(navText);
navText.textContent = "Hello World!";

// we can change HTML too**(.innerHTML)
const navbar = document.querySelector("nav");
navbar.innerHTML = `<h1>Hello!</h1> <p> this should align right`;
console.log(navbar);

navbar.style.justifyContent = "space-between";


















































