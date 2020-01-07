
const sections = document.getElementsByTagName('section');
const unorderedList = document.getElementById('navbar__list');

/*Helper*/
function isVisibleInView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;
    isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
}

/* read amount of sections */
for (i=0; i<sections.length; i++)  {
    const currentSection = sections[i];
    const sectionName = currentSection.getAttribute('data-nav');
    buildNav(sectionName);
}

/* create navigation items */
function buildNav(sectionName) {
    let listitem = document.createElement('li');
    let link = document.createElement('a');
    listitem.classList.add('menu__link', sections[i].getAttribute('id'));
    link.textContent = sectionName;
    listitem.appendChild(link);
    unorderedList.appendChild(listitem);
    clickAndScroll(listitem);
}

/* click event handling */
function clickAndScroll (listItem) {
    let sectionInView = isVisibleInView(sections[i]);
    listItem.addEventListener('click', function() {
        let elemId=listItem.classList[1];
        let activeSection=document.getElementById(elemId);
        for (const section of sections)  {
            section.classList.remove("active");
        }
        activeSection.classList.add("active");
        document.getElementById(elemId).scrollIntoView({
            behavior: 'smooth'
      });
    });
}