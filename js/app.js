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
const nav_list = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function isInViewPort (section) {
    let rect = section.getBoundingClientRect();
    return ( rect.top <= 0  && rect.bottom >= 0);
}

function scrollToTop(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/


// build the nav
function buildTheNav(nav_list,sections){
    const div = document.createElement('div');
    sections.forEach(section => {

        // create list element 
        let ele = document.createElement('li');
        
        // create href Attribute 
        let ele_link = document.createElement('a');
        ele_link.innerHTML = section.getAttribute('data-nav');
        ele_link.classList.add("menu__link");
        ele_link.href = "#"  + section.getAttribute('id');

        // append href to it's list item
        ele.appendChild(ele_link);
        div.appendChild(ele);
        
    });
    nav_list.appendChild(div);
}

// Add class 'active' to section when near top of viewport
function activateSectionInViewPort(sections){
    
    sections.forEach(section => {
        if(isInViewPort(section))
            section.classList.add('your-active-class');
        else
            section.classList.remove('your-active-class');
        
    });
}

// Scroll to anchor ID using scrollTO event
function scrollToAnchor(event){
    if(event.target.nodeName === 'A'){
        event.preventDefault();
        let href = event.target.getAttribute('href');
        let section = document.querySelector(href);
        section.scrollIntoView({behavior: "smooth"});
    }
}

/**
 * End Main Functions
 * Begin Events
 * 
*/
// Build menu 
buildTheNav(nav_list,sections);
// Scroll to section on link click
nav_list.addEventListener('click', function(event){
    scrollToAnchor(event)
});

// Set sections as active
document.addEventListener('scroll',function(){
    activateSectionInViewPort(sections);
});





