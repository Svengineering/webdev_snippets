


window.addEventListener('scroll', setScrollVar);
window.addEventListener('resize', setScrollVar);
window.addEventListener('load', setScrollVar); // when all resources finish loading

function setScrollVar() {
    const $html = document.documentElement;

    // greater than 1 when scrolled past 100% of viewport height
    let percentScreenHeightScrolled = $html.scrollTop / $html.clientHeight;

    // between 0 and 100, capped at 100 if scrolled beyond the initial viewport height
    $html.style.setProperty('--scroll', Math.min(percentScreenHeightScrolled * 100, 100));
}

//CSS var --scroll is initialized in a CSS file


const observer = new IntersectionObserver((entries) => {
    for(let i = entries.length - 1; i >= 0; i--) {
        const entry = entries[i];
        if(entry.isIntersecting) {
            console.log("intersecting:", entry.target);
            document.querySelectorAll('img.showcase').forEach((el) => {
                el.classList.remove('show');
            });

            const imgToShow = document.querySelector(entry.target.dataset.imgToShow);
            if(imgToShow) {
                imgToShow.classList.add('show');
            }
        }
    }
});

document.querySelectorAll('[data-img-to-show]').forEach((el) => {
    observer.observe(el);
});