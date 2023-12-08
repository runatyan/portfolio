
const paths = document.querySelectorAll('path');
paths.forEach((path, i) => {
    path.style.animationDelay = `${0.3 * i}s`
})


// ローディング画面
function loadedPage() {
    const loadingID = document.getElementById("js_loading");
    loadingID.classList.add("loaded");
}

if (!sessionStorage.getItem('visited')) {
    sessionStorage.setItem('visited', 'first');
    window.addEventListener('load', function () {
        setTimeout(loadedPage, 10000);
    });
    setTimeout(loadedPage, 6000);
} else {
    loadedPage();
}

const bl_loading = document.querySelector(".bl_loading");

if (bl_loading.classList.contains("loaded") === true) {
    bl_loading.classList.add("none");
}


/* ワンスクロールで一画面移動の動き */
$(function () {
    $.scrollify({
        section: ".panel",
        scrollbars: false,
        before: function (i, panels) {

            var ref = panels[i].attr("data-section-name");

            $(".pagination .active").removeClass("active");

            $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
        },
        afterRender: function () {
            var pagination = "<ul class=\"pagination\">";
            var activeClass = "";
            $(".panel").each(function (i) {
                activeClass = "";
                if (i === $.scrollify.currentIndex()) {
                    activeClass = "active";
                }
                pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
            });

            pagination += "</ul>";

            $(".home").append(pagination);

            $(".pagination a").on("click", $.scrollify.move);
        }
    });
});

let swiper = new Swiper(".mySwiper", {
    slidesPerView: 0.8,
    spaceBetween: 30,
    freeMode: true,
    breakpoints: {
        // 960px以上の場合
        960: {
            slidesPerView: 1.8
        }
    },
    mousewheel: {
        forceToAxis: true,
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


let nav = document.getElementById('nav-wrapper');
let hamburger = document.getElementById('js-hamburger');

hamburger.addEventListener('click', function () {
    nav.classList.toggle('open');
});

/*mouse*/
const stalker = document.querySelector('.mouse__stalker');
let hovFlag = false;

document.addEventListener('mousemove', function (e) {
    stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
});



const mySwiper = document.querySelector(".swiper-wrapper");
const mouse__text = document.querySelector('.mouse__text');

mySwiper.addEventListener("mouseenter", () => {
    stalker.classList.add("show");
    mouse__text.classList.add("show");
});

mySwiper.addEventListener("mouseleave", () => {
    stalker.classList.remove("show");
    mouse__text.classList.remove("show");
});
