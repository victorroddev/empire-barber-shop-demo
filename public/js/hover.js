document.addEventListener('DOMContentLoaded', () => {
    const barberOne = document.getElementById('barber-1');
    const barberResumeOne = document.getElementById('barber-1-description');
    const barberTwo = document.getElementById('barber-2');
    const barberResumeTwo = document.getElementById('barber-2-description');


    /* Functions */
    function fadeIn(element){
        element.classList.replace('hidden','flex');
        if (element.classList.contains('animate-fade-out-Fast')){
            element.classList.replace('animate-fade-out-Fast', 'animate-fade-in-Fast');
        } else {
            element.classList.toggle('animate-fade-in-Fast');
        }
    }

    function fadeOut(element){
        element.classList.replace('animate-fade-in-Fast','animate-fade-out-Fast');
        // Asegurar que se oculte después de la animación
        element.addEventListener('animationend', () => {
        element.classList.remove('flex');
        element.classList.add('hidden'); 
        }, { once: true }); // Ejecutar solo una vez al finalizar la animación
    }

    barberOne.addEventListener('mouseenter', () => {
        fadeIn(barberResumeOne);
    });

    barberOne.addEventListener('mouseleave', () => {
        fadeOut(barberResumeOne);
    });


    barberTwo.addEventListener('mouseenter', () => {
        fadeIn(barberResumeTwo);
    })

    barberTwo.addEventListener('mouseleave', () => {
        fadeOut(barberResumeTwo);
    })
})