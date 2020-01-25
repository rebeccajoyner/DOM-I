
let siteContent = { /////  siteContent === is the Object.
 
  ///// key:value pair
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"])

//NAV /////////////
let navItems = document.querySelectorAll('a');
//console.log(navItems); 

//HTML Collection - it's array like.

// Going through and grabing the items individually in an array like 
navItems[0].textContent = siteContent['nav']['nav-item-1'];
navItems[1].textContent = siteContent['nav']['nav-item-2'];
navItems[2].textContent = siteContent['nav']['nav-item-3'];
navItems[3].textContent = siteContent['nav']['nav-item-4'];
navItems[4].textContent = siteContent['nav']['nav-item-5'];
navItems[5].textContent = siteContent['nav']['nav-item-6'];

//.textContent: gets and sets the text of an element. 
//.siteContent: is the object


//.querySelectorAll: This method will search for and return ALL elements matching the query string. 
// we had to use document in front of querySelector() ] because querySelector is a method of the document object.

let logo = document.getElementById('logo-img');
logo.src = siteContent['nav']['img-src'];
//.getElementById: This method will search for and return ID elements matching the query string.

let ctaHeader = document.querySelector('h1');
ctaHeader.textContent = siteContent['cta']['h1'];

let ctaBtn = document.querySelector('button');
ctaBtn.textContent = siteContent['cta']['button'];

let ctaImg = document.getElementById('cta-img');
ctaImg.src = siteContent['cta']['img-src'];

let headerH4 = document.querySelectorAll('h4');
headerH4[0].textContent = siteContent['main-content']['features-h4'];
headerH4[1].textContent = siteContent['main-content']['about-h4'];
headerH4[2].textContent = siteContent['main-content']['services-h4'];
headerH4[3].textContent = siteContent['main-content']['product-h4'];
headerH4[4].textContent = siteContent['main-content']['vision-h4'];
headerH4[5].textContent = siteContent['contact']['contact-h4'];

let mainContent = document.querySelectorAll('.text-content p');
mainContent[0].textContent = siteContent['main-content']['features-content'];
mainContent[1].textContent = siteContent['main-content']['about-content'];
mainContent[2].textContent = siteContent['main-content']['services-content'];
mainContent[3].textContent = siteContent['main-content']['product-content'];
mainContent[4].textContent = siteContent['main-content']['vision-content'];

let mainImg = document.getElementById('middle-img');
mainImg.src = siteContent['main-content']['middle-img-src'];

let contactInfo = document.querySelectorAll('.contact p');
contactInfo[0].textContent = siteContent['contact']['address'];
contactInfo[1].textContent = siteContent['contact']['phone'];
contactInfo[2].textContent = siteContent['contact']['email'];

let footerInfo = document.querySelector('footer p');
footerInfo.textContent = siteContent['footer']['copyright'];

//bracket notation


//APPEND CHILD///ADDED ON THE NAV/////////////////////////////////////////
let appendChild = document.createElement('a');
appendChild.textContent = 'Learn More';
document.querySelector('nav').appendChild(appendChild);

//

//PREPEND CHILD//////ADDED ON THE FRONT OF THE NAV//////////////////////
let prependNav = document.createElement('a');
prependNav.textContent = 'Home';
document.querySelector('nav').prepend(prependNav);

//NAV COLOR CHANGE/////////////////////////
navItems = document.querySelectorAll('a');
navItems.forEach(item => {
  item.style.color = '#2feb35';
});