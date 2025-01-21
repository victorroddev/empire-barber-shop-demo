document.addEventListener('DOMContentLoaded', () => {
    


    function handleIntersection(entries){
        entries.forEach(entry => {
            if(entry.isIntersecting)
            entry.target.classList.toggle('animate-fade-in');
            
            console.log('ContactSection es visible');
        })
    }

    const options = {
        rootMargin: '0px',
        threshold: 0
    }

    const observer = new IntersectionObserver(handleIntersection, options);
    const element = document.getElementById('contact-content');
    observer.observe(element)

})