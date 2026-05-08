/* ====================================
   LOAD COMPONENTS
==================================== */

document.addEventListener(

    'DOMContentLoaded',

    () => {

        loadNavbar();

        loadFooter();

        initializeCarousel();

    }

);

/* ====================================
   LOAD NAVBAR
==================================== */

function loadNavbar() {

    const navbar =
        document.getElementById('navbar');

    if (!navbar) return;

    fetch('./components/navbar.html')

        .then(response => response.text())

        .then(data => {

            navbar.innerHTML = data;

            initializeMobileMenu();

            setActiveNavLink();

            // PROFILE MENU

            if (

                typeof initializeProfileMenu ===
                'function'

            ) {

                initializeProfileMenu();

            }

        })

        .catch(error => {

            console.log(
                'Navbar Load Error:',
                error
            );

        });

}

/* ====================================
   LOAD FOOTER
==================================== */

function loadFooter() {

    const footer =
        document.getElementById('footer');

    if (!footer) return;

    fetch('./components/footer.html')

        .then(response => response.text())

        .then(data => {

            footer.innerHTML = data;

        })

        .catch(error => {

            console.log(
                'Footer Load Error:',
                error
            );

        });

}

/* ====================================
   MOBILE MENU
==================================== */

function initializeMobileMenu() {

    const menuToggle =
        document.getElementById(
            'menuToggle'
        );

    const navList =
        document.getElementById(
            'navList'
        );

    if (

        menuToggle &&

        navList

    ) {

        menuToggle.addEventListener(

            'click',

            () => {

                navList.classList.toggle(
                    'active'
                );

            }

        );

    }

}

/* ====================================
   ACTIVE NAVIGATION
==================================== */

function setActiveNavLink() {

    const navLinks =
        document.querySelectorAll(
            '.nav-link'
        );

    const currentPage =
        window.location.pathname
            .split('/')
            .pop();

    navLinks.forEach((link) => {

        const href =
            link.getAttribute('href');

        if (

            href === currentPage

        ) {

            link.classList.add('active');

        }

    });

}

/* ====================================
   HERO CAROUSEL
==================================== */

function initializeCarousel() {

    const slides =
        document.querySelectorAll(
            '.carousel-item'
        );

    if (!slides.length) return;

    let currentSlide = 0;

    setInterval(() => {

        slides[currentSlide]
            .classList.remove('active');

        currentSlide =
            (currentSlide + 1)
            % slides.length;

        slides[currentSlide]
            .classList.add('active');

    }, 5000);

}

/* ====================================
   LOGOUT FUNCTION
==================================== */

function logout() {

    const confirmLogout =
        confirm(
            'Are you sure you want to logout?'
        );

    if (!confirmLogout) {

        return;

    }

    // CLEAR STORAGE

    localStorage.removeItem('token');

    localStorage.removeItem('user');

    // REDIRECT

    window.location.href =
        'login.html';

}
// for test