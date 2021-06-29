window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


// portfolio 1
var lbkdesktopDiv = document.getElementById('myDesktop');
var lbkmobileDiv = document.getElementById('myMobile');

var lbkdesktopBtn = document.getElementById('desktop');
var lbkmobileBtn = document.getElementById('mobile');

lbkdesktopBtn.onclick = function () {
    lbkmobileDiv.setAttribute('class', 'hidden');
    lbkdesktopDiv.setAttribute('class', 'visible');
};

lbkmobileBtn.onclick = function () {
    lbkdesktopDiv.setAttribute('class', 'hidden');
    lbkmobileDiv.setAttribute('class', 'visible');
};

// portfolio 2
var mdbdesktopDiv = document.getElementById('myDesktop2');
var mdbmobileDiv = document.getElementById('myMobile2');

var mdbdesktopBtn = document.getElementById('desktop2');
var mdbmobileBtn = document.getElementById('mobile2');

mdbdesktopBtn.onclick = function () {
    mdbmobileDiv.setAttribute('class', 'hidden');
    mdbdesktopDiv.setAttribute('class', 'visible');
};

mdbmobileBtn.onclick = function () {
    mdbdesktopDiv.setAttribute('class', 'hidden');
    mdbmobileDiv.setAttribute('class', 'visible');
};

// portfolio 3
var wndesktopDiv = document.getElementById('myDesktop3');
var wnmobileDiv = document.getElementById('myMobile3');

var wndesktopBtn = document.getElementById('desktop3');
var wnmobileBtn = document.getElementById('mobile3');

wndesktopBtn.onclick = function () {
    wnmobileDiv.setAttribute('class', 'hidden');
    wndesktopDiv.setAttribute('class', 'visible');
};

wnmobileBtn.onclick = function () {
    wndesktopDiv.setAttribute('class', 'hidden');
    wnmobileDiv.setAttribute('class', 'visible');
};

// portfolio 4
var desktopDiv = document.getElementById('myDesktop4');
var mobileDiv = document.getElementById('myMobile4');

var desktopBtn = document.getElementById('desktop4');
var mobileBtn = document.getElementById('mobile4');

desktopBtn.onclick = function () {
    mobileDiv.setAttribute('class', 'hidden');
    desktopDiv.setAttribute('class', 'visible');
};

mobileBtn.onclick = function () {
    desktopDiv.setAttribute('class', 'hidden');
    mobileDiv.setAttribute('class', 'visible');
};