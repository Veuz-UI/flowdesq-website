//// loader
document.addEventListener('DOMContentLoaded', function () {
  const loader = document.getElementById('initial-loader');
  const logo1 = document.getElementById('logo1');
  const logo2 = document.getElementById('logo2');

  // After first zoom animation ends (1.5s)
  setTimeout(() => {
    logo1.style.display = 'none';   // Hide first image
    logo2.style.opacity = '1';      // Show second image
  }, 500);

  // Hide loader after showing second image
  window.addEventListener('load', function () {
    setTimeout(() => {
      loader.style.opacity = '0';
      setTimeout(() => {
        loader.style.display = 'none';
      }, 300);
    }, 1000); // total time before loader disappears
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


$(document).ready(function(){
  var docEl = $(document),
      headerEl = $('header'),
      headerWrapEl = $('.main-header-in'),
      navEl = $('nav'),
      linkScroll = $('.scroll');

  docEl.on('scroll', function(){
    if ( docEl.scrollTop() > 60 ){
      headerEl.addClass('fixed-to-top');
      headerWrapEl.addClass('fixed-to-top');
      navEl.addClass('fixed-to-top');
    }
    else {
      headerEl.removeClass('fixed-to-top');
      headerWrapEl.removeClass('fixed-to-top');
      navEl.removeClass('fixed-to-top');
    }
  });

  linkScroll.click(function(e){
      e.preventDefault();
      $('body, html').animate({
         scrollTop: $(this.hash).offset().top
      }, 500);
   });
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


document.addEventListener('DOMContentLoaded', function () {
  const sidebarItems = document.querySelectorAll('.sidebar-item');
  const contentSections = document.querySelectorAll('.content-section');

  sidebarItems.forEach(item => {
    item.addEventListener('click', function () {
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


//upgrade checkbox
document.querySelectorAll('.check-wrap input').forEach(cb => {
  cb.addEventListener('change', function () {

    // uncheck all others
    document.querySelectorAll('.check-wrap input').forEach(other => {
      if (other !== this) other.checked = false;
    });

  });
});


// return scroll
$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});


//// otp
document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll(".otp-inputs input");
  const timerEl = document.getElementById("timer");
  const resendBtn = document.getElementById("resend");

  // Auto focus first input
  inputs[0].focus();

  inputs.forEach((input, index) => {
    input.addEventListener("input", () => {
      if (input.value && index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    });

    input.addEventListener("keydown", (e) => {
      if (e.key === "Backspace" && !input.value && index > 0) {
        inputs[index - 1].focus();
      }
    });

    // Paste OTP support
    input.addEventListener("paste", (e) => {
      const data = e.clipboardData.getData("text").split("");
      inputs.forEach((inp, i) => inp.value = data[i] || "");
      e.preventDefault();
    });
  });

  // Countdown Timer
  let time = 150;
  const countdown = setInterval(() => {
    let min = Math.floor(time / 60);
    let sec = time % 60;
    timerEl.textContent = `${min}:${sec < 10 ? "0" : ""}${sec}`;
    time--;

    if (time < 0) {
      clearInterval(countdown);
      timerEl.textContent = "Expired";
    }
  }, 1000);

  // Resend
  resendBtn.addEventListener("click", (e) => {
    e.preventDefault();
    time = 150;
    alert("OTP Resent");
  });

  // Submit
  document.getElementById("submitOtp").addEventListener("click", () => {
    const otp = Array.from(inputs).map(i => i.value).join("");
    if (otp.length < inputs.length) {
      alert("Please enter complete OTP");
      return;
    }
    console.log("OTP Submitted:", otp);
  });
});

// form dropdown
document.addEventListener('DOMContentLoaded', function () {
    const selects = document.querySelectorAll('.floating-label2 select');
    selects.forEach(select => {
      const wrapper = select.closest('.floating-label2');
      function updateLabel() {
        if (select.value) {
          wrapper.classList.add('has-value');
        } else {
          wrapper.classList.remove('has-value');
        }
      }
      // Initial load
      updateLabel();
      // On change
      select.addEventListener('change', updateLabel);
    });
});


document.addEventListener("DOMContentLoaded", function () {

  console.log("JS LOADED");

  const headerTHs = document.querySelectorAll(".table-head th[data-col]");
  const tables = document.querySelectorAll(".sticky-table");

  if (!tables.length) return;

  function clearAllTables() {
    tables.forEach(table => {
      table.querySelectorAll("td").forEach(td => {
        td.classList.remove("col-active", "col-hover");
      });
    });
  }

  function highlightColumn(colIndex, className) {
    tables.forEach(table => {
      table.querySelectorAll("tbody tr").forEach(row => {
        const td = row.children[colIndex - 1];
        if (td && !td.classList.contains("feature-name")) {
          td.classList.add(className);
        }
      });
    });
  }

  headerTHs.forEach(th => {
    const col = parseInt(th.dataset.col);
    const inner = th.querySelector(".table-head-inner");

    // CLICK → ACTIVE COLUMN
    th.addEventListener("click", () => {
      document.querySelectorAll(".table-head-inner")
        .forEach(el => el.classList.remove("active"));

      clearAllTables();
      inner?.classList.add("active");
      highlightColumn(col, "col-active");
    });

    // HOVER → TEMP COLUMN
    th.addEventListener("mouseenter", () => {
      if (!inner?.classList.contains("active")) {
        highlightColumn(col, "col-hover");
      }
    });

    th.addEventListener("mouseleave", () => {
      tables.forEach(table => {
        table.querySelectorAll(".col-hover")
          .forEach(td => td.classList.remove("col-hover"));
      });
    });
  });

  // Default active column (Business)
  document.querySelector('.table-head th[data-col="4"]')?.click();

});


document.addEventListener("DOMContentLoaded", function () {
  const modes = document.querySelectorAll(".upgrade-mode");

  modes.forEach(mode => {
    mode.addEventListener("click", function () {
      // remove active from all
      modes.forEach(item => item.classList.remove("active"));

      // add active to clicked
      this.classList.add("active");
    });
  });
});

document.querySelectorAll('.option-card').forEach(card => {
    card.addEventListener('click', () => {
      const group = card.dataset.group;

      document
        .querySelectorAll(`.option-card[data-group="${group}"]`)
        .forEach(c => c.classList.remove('active'));

      card.classList.add('active');
    });
});


// dont have account signup
document.getElementById('openSignupTab').addEventListener('click', function (e) {
    e.preventDefault();

    const signupTab = document.querySelector('#profile-tab');
    const tab = new bootstrap.Tab(signupTab);
    tab.show();
});



// login signup 
document.addEventListener("DOMContentLoaded", function () {
  if (window.location.hash === "#signup") {
    const signupTab = new bootstrap.Tab(
      document.querySelector('#profile-tab')
    );
    signupTab.show();
  }
});
// upgrade page

  