document.addEventListener('DOMContentLoaded', () => {
    /*========== menu icon navbar ==========*/
    
    /*========== scroll sections active link ==========*/
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');
    
    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');
    
            if(top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
            };
        });
    
        /*========== sticky navbar ==========*/
        let header = document.querySelector('.header');
        header.classList.toggle('sticky', window.scrollY > 100);
    
        /*========== remove menu icon navbar when click navbar link (scroll) ==========*/
    };
    
    /*========== swiper ==========*/
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 50,
        loop: true,
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    });
    
    /*========== dark light mode ==========*/
    let darkModeIcon = document.querySelector('#darkMode-icon');
    let logoText = document.querySelector('.logo p');
    
    // Set default to dark mode
    document.body.classList.add('dark-mode');
    darkModeIcon.classList.add('bx-sun'); // Add sun icon
    logoText.style.color = 'white'; // Set text color for dark mode
    
    darkModeIcon.onclick = () => {
        darkModeIcon.classList.toggle('bx-sun');
        document.body.classList.toggle('dark-mode');
        if(document.body.classList.contains('dark-mode')) {
            logoText.style.color = 'white';
        }
        else {
            logoText.style.color = '';
        }
    };
    
    /*========== scroll reveal ==========*/
    ScrollReveal({
        // reset: true,
        distance: '80px',
        duration: 2000,
        delay: 200
    });
    
    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
    ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });
});


// =========================


document.addEventListener('DOMContentLoaded', () => {
    const datesLinks = document.querySelectorAll('#dates a');
    const issuesItems = document.querySelectorAll('#issues li');
  
    datesLinks.forEach(link => {
        link.addEventListener('click', function (e) {
          e.preventDefault(); // Prevent default anchor behavior
      
          // Remove active class from all links
          datesLinks.forEach(link => link.classList.remove('active'));
          this.classList.add('active');
      
          // Get the target issue ID from href
          const targetId = this.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);
      
          // Remove selected class from all issues
          issuesItems.forEach(issue => issue.classList.remove('selected'));
          targetElement.classList.add('selected');
      
          // Scroll to the target element smoothly
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      
          // Update the URL hash without jumping
          history.pushState(null, null, `#${targetId}`);
        });
      });
      
      
  });
