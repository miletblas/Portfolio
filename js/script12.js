	// Sticky Navbar
    let header = document.querySelector('header');
    let menu = document.querySelector('#menu-icon1');
    let navbar1 = document.querySelector('.navbar1');
     
     
    window.addEventListener('scroll', () => {
        header.classList.toggle('shadow', window.scrollY > 0);
    });
     
    menu.onclick = () => {
        navbar1.classList.toggle('active');
    }
    window.onscroll = () => {
        navbar1.classList.remove('active');
    }