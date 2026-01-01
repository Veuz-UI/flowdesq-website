//// loader
document.addEventListener('DOMContentLoaded', function () {
  const loader = document.querySelector('.main-loader');

  // Hide loader after content loads
  window.addEventListener('load', function () {
    setTimeout(() => {
      loader.style.display = 'none';

    }, 1300); // Adjust time as needed
  });
});
// END pre loader

//// mobile header
const menuButton = document.querySelector('.menu-button');
const menuOverlay = document.querySelector('.menu-overlay');
const menuItems = document.querySelectorAll('.menu a');
const html = document.documentElement;
const body = document.body;
 
let isOpen = false;
 
// Function to check if it's mobile view
function isMobileView() {
  return window.innerWidth <= 992;
}
 
// Function to open the menu
function openMenu() {
  html.classList.add('no-scroll');
  body.classList.add('no-scroll');
 
  // Slide in menu from right
  gsap.to(menuOverlay, {
    duration: 0.5,
    right: '0%',
    ease: 'power3.out'
  });
 
  // Animate menu links
  gsap.fromTo(menuItems, {
    opacity: 0,
    x: 20
  }, {
    duration: 0.5,
    opacity: 1,
    x: 0,
    stagger: 0.1,
    delay: 0.2,
    ease: 'power3.out'
  });
}
 
// Function to close the menu
function closeMenu() {
  html.classList.remove('no-scroll');
  body.classList.remove('no-scroll');
 
  // Animate links out
  gsap.to(menuItems, {
    duration: 0.3,
    opacity: 0,
    x: 20,
    stagger: -0.1
  });
 
  // Slide out menu to the right
  gsap.to(menuOverlay, {
    duration: 0.5,
    right: isMobileView() ? '-100%' : '-50%',
    delay: 0.3,
    ease: 'power3.in'
  });
}
 
// Toggle menu on button click
menuButton.addEventListener('click', () => {
  if (!isOpen) {
    openMenu();
  } else {
    closeMenu();
  }
  isOpen = !isOpen;
  menuButton.classList.toggle('open', isOpen);
});


const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

dropdownToggles.forEach(toggle => {
  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    
    const parent = toggle.closest('.menu-dropdown');

    // Close all other dropdowns
    document.querySelectorAll('.menu-dropdown').forEach(item => {
      if (item !== parent) {
        item.classList.remove('open');
      }
    });

    // Toggle the clicked one
    parent.classList.toggle('open');
  });
});


// navbar
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".main-header");
  if (window.scrollY > 200) {
      navbar.classList.add("fixed");
  } else {
      navbar.classList.remove("fixed");
  }
});



/* <!-- ==================== Reveal type ==================== --> */
gsap.registerPlugin(ScrollTrigger);

const splitTypes = document.querySelectorAll('.reveal-type');

splitTypes.forEach((char, i) => {
    const bg = char.dataset.bgColor;
    const fg = char.dataset.fgColor;

    // Split into words first to prevent breakage
    const text = new SplitType(char, {
        types: 'words, chars' // First split into words, then into characters
    });

    // Ensure words stay together by using `white-space: nowrap`
    gsap.set(text.words, {
        display: 'inline-block',
        whiteSpace: 'nowrap'
    });

    gsap.fromTo(text.chars, {
        color: bg,
    }, {
        color: fg,
        duration: 0.3,
        stagger: 0.02,
        scrollTrigger: {
            trigger: char,
            start: 'top 90%',
            end: 'bottom 40%',
            scrub: true,
            markers: false,
            toggleActions: 'play play reverse reverse'
        }
    });
});

/* <!-- ==================== Reveal type ==================== --> */


// testimonial
var testimonialOwl = $('.testimonial-carousel');
testimonialOwl.owlCarousel({
  loop: true,
  margin: 15,
  nav: false,
  dots: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsive: {
    0: { items: 1 },
    992: { items: 1 },
    1000: { items: 1 }
  }
});
// Custom Buttons
$(document).on('click', '.custom-prev', function(e) {
  e.preventDefault();
  if (testimonialOwl && testimonialOwl.length) {
    testimonialOwl.trigger('prev.owl.carousel');
  }
});
$(document).on('click', '.custom-next', function(e) {
  e.preventDefault();
  if (testimonialOwl && testimonialOwl.length) {
    testimonialOwl.trigger('next.owl.carousel');
  }
});


        document.addEventListener('DOMContentLoaded', function() {
            const sidebarItems = document.querySelectorAll('.sidebar-item');
            const contentSections = document.querySelectorAll('.content-section');

            sidebarItems.forEach(item => {
                item.addEventListener('click', function() {
                    const sectionId = this.getAttribute('data-section');
                    
                    // Remove active class from all sidebar items
                    sidebarItems.forEach(i => i.classList.remove('active'));
                    
                    // Add active class to clicked item
                    this.classList.add('active');
                    
                    // Hide all content sections
                    contentSections.forEach(section => section.classList.remove('active'));
                    
                    // Show selected content section
                    document.getElementById(sectionId).classList.add('active');
                });
            });
        });


// Sync image tabs with content tabs
const tabButtons = document.querySelectorAll('[data-bs-toggle="tab"]');

tabButtons.forEach(button => {
    button.addEventListener('shown.bs.tab', function (event) {
        const imageId = this.getAttribute('data-image');
        const imageTabElement = document.querySelector(`#${imageId}`);
        
        if (imageTabElement) {
            // Remove active from all image panes
            document.querySelectorAll('#imageTabContent .tab-pane').forEach(pane => {
                pane.classList.remove('show', 'active');
            });
            
            // Activate the target image pane
            imageTabElement.classList.add('show', 'active');
        }
    });
});


  


// return scroll
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#scroll').fadeIn();
    } else {
      $('#scroll').fadeOut();
    }
  });

  $('#scroll').click(function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 600);
  });
});







