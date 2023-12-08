// horizontalScroll
const horizontalScroll = () => {
    const triggerSection = document.querySelector(".js-scroll-trigger");
    const listContainer = document.querySelector(".js-list-container");
    const listElement = document.querySelector(".js-list-element");
    const scrollValue = listElement.clientWidth - listContainer.clientWidth;

    gsap.to(listElement, {
        x: -scrollValue,
        ease: "none",
        scrollTrigger: {
            trigger: triggerSection,
            start: "top top",
            end: `+=${scrollValue}`,
            scrub: true,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true
        }
    });
}

horizontalScroll();


var nav = document.getElementById('nav-wrapper');
var hamburger = document.getElementById('js-hamburger');

hamburger.addEventListener('click', function () {
    nav.classList.toggle('open');
});


const fade = document.querySelectorAll('.fade');
for (let i = fade.length; i--;) {
    let observer = new IntersectionObserver((entries, observer) => {
        for (let j = entries.length; j--;) {
            if (entries[j].isIntersecting) {
                entries[j].target.classList.add('fadeon');
                observer.unobserve(entries[j].target);
            }
        }
    });
    observer.observe(fade[i]);
}