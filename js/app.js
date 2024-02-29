document.addEventListener('DOMContentLoaded', function() {
    eventListeners();

    darkMode();
});


function darkMode() {

    const prefiereDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
    if(prefiereDarkMode.matches) {
        document.body.classList.add('dark-mode1');
    }else {
        document.body.classList.remove('dark-mode1');
    }

    const botonDarkMode = document.querySelector('.dark-mode');
    botonDarkMode.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode1');
    });


    prefiereDarkMode.addEventListener('change', function() {
        if(prefiereDarkMode.matches) {
            document.body.classList.add('dark-mode1');
        }else {
            document.body.classList.remove('dark-mode1');
        }
    });
}


function eventListeners() {
    const mobileMenu = document.querySelector('.menu-telefono');
    mobileMenu.addEventListener('click', navegacionResponsive);
}

function navegacionResponsive() {
    const navegacion = document.querySelector('.navegacion');
    if(navegacion.classList.contains('mostrar')) {
        navegacion.classList.remove('mostrar');
    }else {
        navegacion.classList.add('mostrar');
    }
}