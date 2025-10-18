


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