
// Get the button
let my_scroll_up_btn = document.getElementById("my_scroll_up_btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction(), mySticky()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        my_scroll_up_btn.style.display = "block";
    } else {
        my_scroll_up_btn.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// // for sticky nav
// let header = document.getElementById("my_nav");
// let sticky = header.offsetTop;

// function mySticky() {
//     if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//     } else {
//     header.classList.remove("sticky");
//     }
// }

// for dark theme
    const change_theme = document.body;
    const moon = document.getElementById('moon');
    // const moon = document.querySelectorAll('.moon');

    moon.onclick = function() {
        change_theme.classList.toggle('dark_theme');
        if(change_theme.classList.contains('dark_theme')){
            moon.src="image/sun.png";
            // header.classList.add('dark_theme');
        }else{
            moon.src="image/moon.png";
            // header.classList.remove('dark_theme');
        }
        
    }



    // const initApp = () => {
        // menu-btn
    const menu_btn = document.getElementById('menu_btn');
    const nav_mobile = document.getElementById('nav-mobile');

    menu_btn.addEventListener('click', () => {
        nav_mobile.classList.toggle('hidden');
        nav_mobile.classList.toggle('flex');
        menu_btn.classList.toggle('mytoggle-btn');

        // nav_mobile.style.background= 'red';
    })

        // const change_hamburger = () => {
        //     // nav_mobile.classList.toggle('hidden');
        //     nav_mobile.classList.toggle('flex');
        //     nav_mobile.style.background= 'red';

        // }

        // menu_btn.addEventListener('click', change_hamburger);
    // }

    // document.addEventListener('DOMContentLoaded', initApp);


    // function my_humburger() {
    //     my_nav.style.background = 'red';
    
    // }


