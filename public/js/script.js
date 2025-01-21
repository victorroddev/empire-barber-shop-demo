document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const menu = document.getElementById('menu');
    const navBar = document.getElementById('navbar');
    const closeIcon = document.getElementById('close-icon');
    const aboutIndex = document.getElementById('about-index');
    const servicesIndex = document.getElementById('services-index');
    const pricesIndex = document.getElementById('prices-index');
    const apointmentsIndex = document.getElementById('apointments-index');
    const locationIndex = document.getElementById('location-index');
    const contactIndex = document.getElementById('contact-index');
    const heroContent = document.getElementById('hero-section');

    menuIcon.addEventListener('click', () => {
        menu.classList.toggle('hidden');
        navBar.classList.toggle('hidden');
        heroContent.classList.toggle('hidden');
    });

    closeIcon.addEventListener('click', () => {
        menu.classList.toggle('hidden');
        navBar.classList.toggle('hidden');
        navBar.classList.toggle('animate-fade-in');
        heroContent.classList.toggle('hidden');
        if (heroContent.classList.contains('animate-fade-in')) {
            console.log('existe')
        } else {
            heroContent.classList.add('animate-fade-in')
            console.log('no existe')
        }
    });

        

});