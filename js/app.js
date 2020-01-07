
const sections = document.getElementsByTagName('section');
const unorderedList = document.getElementById('navbar__list');


function isVisibleInView(el) {
  var rect = el.getBoundingClientRect();
  var elemTop = rect.top;
  var elemBottom = rect.bottom;
  isVisible = elemTop < window.innerHeight && elemBottom >= 0;
  return isVisible;
}

/* begin */
for (i=0; i<sections.length; i++)  {
  const currentSection = sections[i];
  const sectionName = currentSection.getAttribute('data-nav');
  buildNav(sectionName);
}
function buildNav(secName) {
  let listitem = document.createElement('li');
  listitem.classList.add('menu__link', sections[i].getAttribute('id'));
  let link = document.createElement('a');
  link.textContent = secName;
  listitem.appendChild(link);
  unorderedList.appendChild(listitem);
  clickAndScroll(listitem);
}

//click event
function clickAndScroll (liItem) {
    let sectionInView = isVisibleInView(sections[i]); //true or false
    console.log(sections[i].id+" SectionInView? "+ sectionInView); 

    liItem.addEventListener('click', function() {
    //read li and move smoothly to the id corresponding section
    let elemId=liItem.classList[1];
    console.log("you clicked li "+elemId);
    let activeSection=document.getElementById(elemId); // section elem
    
      for (const section of sections)  {
        console.log(section.id);
        section.classList.remove("active");
    }
    activeSection.classList.add("active");
    scroll(elemId);
  });    

  function scroll(elemId) {
    document.getElementById(elemId).scrollIntoView({
      behavior: 'smooth'
    });
  }
}
function setSectionActive() {
  let sectionInView = isScrolledIntoView(sections[i]); //true or false
  console.log("SectionInView? "+ sectionInView);
  if (sectionInView === true) {
    console.log("added class-active to "+sections[i].id);
  } 
  else {
   console.log("removed class-active to "+sections[i].id);
  }
}