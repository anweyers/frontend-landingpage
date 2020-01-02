/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const listOfSections = document.querySelectorAll('section');
const unorderedList = document.getElementById('navbar__list');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
/*** Hilfsfkt ***/
function isScrolledIntoView(el) {
  var rect = el.getBoundingClientRect();
  var elemTop = rect.top;
  var elemBottom = rect.bottom;

  // Only completely visible elements return true:
  //var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
  // Partially visible elements return true:
  isVisible = elemTop < window.innerHeight && elemBottom >= 0;
  return isVisible;
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
/*** Iterieren durch die sections, falls im Viewport class=active hinzufügen ****/
for (let i=0; i<listOfSections.length; i++)  {
  console.log(listOfSections[i]);
  let sectionInView = isScrolledIntoView(listOfSections[i]);
  console.log("SectionInView? "+ sectionInView);
  if (sectionInView === true) {
    listOfSections[i].classList.add("active");
    console.log("added class-active to "+listOfSections[i])
  } 
}

// build the nav
for (let i=0; i<listOfSections.length; i++) { 
  const container = document.createElement('li');
  unorderedList.appendChild(container);
  }


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


