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
/*const listOfSections = document.querySelectorAll('section');*/
const sections = document.getElementsByTagName('section');
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
/************* */
iterate();

function iterate() {
/*** Iterieren durch die sections, falls im Viewport class=active hinzufügen ****/
  for (i=0; i<sections.length; i++)  {
   console.log(sections[i]);
   readSectionName();
   setSectionActive();
  }
}

function readSectionName() {
  const currentSection = sections[i];
  const sectionName = currentSection.getAttribute('data-nav');
  console.log('current Section: ' +sectionName); ///Ausgabe Section 1/2/3
  buildNav(sectionName);
}
 

function buildNav(secName) {
  let listitem = document.createElement('li');
  listitem.classList.add('menu__link', sections[i].getAttribute('id'));
  let link = document.createElement('a');
  link.textContent = secName;
  listitem.appendChild(link);
  unorderedList.appendChild(listitem);
}

function setSectionActive() {
  let sectionInView = isScrolledIntoView(sections[i]); //true or false
  console.log("SectionInView? "+ sectionInView);
  if (sectionInView === true) {
    sections[i].classList.add("active"); // falls sichtbar class = active setzen
    console.log("added class-active to "+sections[i].id);
  } 
}

  /*let sectionInView = isScrolledIntoView(sections[i]); //true or false
  console.log("SectionInView? "+ sectionInView);
  if (sectionInView === true) {
    sections[i].classList.add("active"); // falls sichtbar class = active setzen
    console.log("added class-active to "+sections[i].id);
  } 
}*/



/*const mainHeading = document.querySelector('li');
  mainHeading.addEventListener('click', function () {
    console.log('The heading was clicked!');
  }); */






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


