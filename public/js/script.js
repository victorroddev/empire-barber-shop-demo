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

    menuIcon.addEventListener('click', () => {
        menu.classList.toggle('hidden');
        navBar.classList.toggle('hidden');
    });

    closeIcon.addEventListener('click', () => {
        menu.classList.toggle('hidden');
        navBar.classList.toggle('hidden');
        navBar.classList.toggle('animate-fade-in'); 
    });

        

});