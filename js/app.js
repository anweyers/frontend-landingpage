
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
const unorderedList = document.getElementById('navbar__list');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function isVisibleInView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;
    isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// Read amount of sections 
for (i=0; i<sections.length; i++)  {
    const currentSection = sections[i];
    const sectionName = currentSection.getAttribute('data-nav');
    buildNav(sectionName);
}

// Create nav items 
function buildNav(sectionName) {
    let listitem = document.createElement('li');
    let link = document.createElement('a');
    listitem.classList.add('menu__link', sections[i].getAttribute('id'));
    link.textContent = sectionName;
    listitem.appendChild(link);
    unorderedList.appendChild(listitem);
    clickAndScroll(listitem);
}
// onClick eventhandling
function clickAndScroll(listItem) {
    listItem.addEventListener('click', function() {
        let elemId=listItem.classList[1];
        activateClass();
        document.getElementById(elemId).scrollIntoView({
            behavior: 'smooth'
      });
    });
}
// Set sections activ/inactiv
function activateClass() {
    for (const section of sections)  {
        section.classList.remove("active");
        if (isVisibleInView(section)===true){
            console.log("x"+ section.id);
            section.classList.add("active");
        }
    }      
}
// Scroll eventhandling
window.addEventListener('scroll', function (event) {
    activateClass();
});

    
