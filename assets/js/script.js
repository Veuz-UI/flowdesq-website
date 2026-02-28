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

// nav Stying for small screens
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".menu-outr");
    const links = document.querySelectorAll(".nav-links li");

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle("open");
        links.forEach(link => {
            link.classList.toggle("fade");
        });
        hamburger.classList.toggle("toggle");
    });
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


// //// otp
document.addEventListener("DOMContentLoaded", function () {

  const inputs = document.querySelectorAll(".otp-inputs input");
  const timerEl = document.getElementById("timer");
  const resendBtn = document.getElementById("resend");
  const submitBtn = document.getElementById("submitOtp");

  // 🚫 Stop script if OTP section not on page
  if (!inputs.length) return;

  // Focus first input
  inputs[0].focus();

  // Handle input behavior
  inputs.forEach((input, index) => {

    // Allow only numbers
    input.addEventListener("input", (e) => {
      input.value = input.value.replace(/[^0-9]/g, "");

      if (input.value && index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    });

    // Backspace support
    input.addEventListener("keydown", (e) => {
      if (e.key === "Backspace" && !input.value && index > 0) {
        inputs[index - 1].focus();
      }
    });

    // Paste support
    input.addEventListener("paste", (e) => {
      e.preventDefault();
      const data = e.clipboardData.getData("text").replace(/[^0-9]/g, "");
      const digits = data.split("");

      inputs.forEach((inp, i) => {
        inp.value = digits[i] || "";
      });

      const lastFilled = Math.min(digits.length, inputs.length) - 1;
      if (lastFilled >= 0) {
        inputs[lastFilled].focus();
      }
    });

  });

  // ⏳ Countdown Timer
  if (timerEl) {
    let time = 150;
    let countdown = startTimer();

    function startTimer() {
      return setInterval(() => {
        let min = Math.floor(time / 60);
        let sec = time % 60;

        timerEl.textContent = `${min}:${sec < 10 ? "0" : ""}${sec}`;
        time--;

        if (time < 0) {
          clearInterval(countdown);
          timerEl.textContent = "Expired";
        }
      }, 1000);
    }

    // 🔁 Resend OTP
    if (resendBtn) {
      resendBtn.addEventListener("click", function (e) {
        e.preventDefault();
        time = 150;
        clearInterval(countdown);
        countdown = startTimer();
        alert("OTP Resent");
      });
    }
  }

  // ✅ Submit OTP
  if (submitBtn) {
    submitBtn.addEventListener("click", function () {
      const otp = Array.from(inputs).map(input => input.value).join("");

      if (otp.length < inputs.length) {
        alert("Please enter complete OTP");
        return;
      }

      console.log("OTP Submitted:", otp);
      // You can send OTP to server here
    });
  }

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

// upgrade-page
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

//login option2 page
document.querySelectorAll('.option-card').forEach(card => {
    card.addEventListener('click', () => {
      const group = card.dataset.group;

      document
        .querySelectorAll(`.option-card[data-group="${group}"]`)
        .forEach(c => c.classList.remove('active'));

      card.classList.add('active');
    });
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

  