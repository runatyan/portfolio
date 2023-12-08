let nav = document.getElementById('nav-wrapper');
let hamburger = document.getElementById('js-hamburger');

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