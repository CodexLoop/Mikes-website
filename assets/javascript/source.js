/* SHADOW HEADER */

const shadowHeader = () =>{
   const header = document.getElementById('header')
   this.scrollY >= 50 ? header.classList.add('shadow') 
                      : header.classList.remove('shadow')
}
window.addEventListener('scroll', shadowHeader);

/*=============== SCROLL REVEAL ANIMATION - SAMPLE===============*/

/*
    const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 2500,
        delay: 400,
        // reset: true // Animations repeat
    })

    sr.reveal(`.home__perfil, .about__image, .contact__mail,
                .wrapper, .tip__left, .tip__right`, {origin: 'right'})
    sr.reveal(`.home__name, .home__info, 
                .about__container .section__title-1, .about__info, 
                .contact__social, .contact__data,
                .introduction, #hero-links, .time, #challenge`, {origin: 'left'})
    sr.reveal(`#approach, #implementation, #seo, #lessons, #resources`, {origin: 'bottom'})
    sr.reveal(`.services__card, .projects__card`, {interval: 100})
*/