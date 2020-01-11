
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
const sections = document.getElementsByTagName('section');
const navbarList = document.getElementById('navbar__list');
const unorderedList = document.getElementsByTagName('ul');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function isVisibleInView(el,isDownScroll) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;
    if (isDownScroll) {
         isVisible = elemTop < window.innerHeight && elemBottom >= 50;
    } else {
        isVisible = elemTop < window.innerHeight && elemBottom >= 500;
    }
    return isVisible;
}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
 
// Read amount of sections 
for (i=0; i<sections.length; i++) {
    const currentSection = sections[i];
    const sectionName = currentSection.getAttribute('data-nav');
    buildNav(sectionName);
}

// Create nav items 
function buildNav(sectionName) {
    let listitem = document.createElement('li');
    let link = document.createElement('a');
    let li_id = sections[i].getAttribute('id');
    listitem.classList.add('menu__link', li_id);
    link.textContent = sectionName;
    listitem.appendChild(link);
    navbarList.appendChild(listitem);
    clickAndScroll(listitem);
}

// onClick eventhandling
function clickAndScroll(listItem) { 
    listItem.classList.remove("active");   
    listItem.addEventListener('click', function() {
        console.log (listItem);
        let elemId=listItem.classList[1];
        listItem.classList.add("active");
        activateClass(true);
        document.getElementById(elemId).scrollIntoView({
            behavior: 'smooth'
      }); 
    });
} 

// Scroll eventhandling
let Position = 0;
window.addEventListener('scroll', function (event) {
    let isDown = true;
    newPosition = window.pageYOffset;
    if (Position - newPosition < 0) {
        console.log("Down");
    } else if (Position - newPosition > 0) {
        console.log("Up");
        isDown = false;
    }
    Position = newPosition;
    activateClass(isDown);
});

  // Set sections activ
function activateClass(isDown) {
    let bool = false; 
    for (i=0; i<sections.length; i++) {
        sections[i].classList.remove("active");
        if (isVisibleInView(sections[i], isDown) === true && bool==false) {     
            sections[i].classList.add("active");
            bool=true;
        }           
    }
}   