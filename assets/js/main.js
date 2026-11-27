// Появление секций при прокрутке
document.addEventListener('DOMContentLoaded', function () {
    const fadeElements = document.querySelectorAll('.fade-in');

    function checkFade() {
        fadeElements.forEach(function (element) {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            const isVisible = elementTop < window.innerHeight - 100 && elementBottom > 0;

            if (isVisible) {
                element.classList.add('visible');
            }
        });
    }

    checkFade();
    window.addEventListener('scroll', checkFade, { passive: true });
});

// Запасные иконки, если внешние картинки недоступны
document.querySelectorAll('img[data-fallback]').forEach(function (img) {
    function swap() {
        if (!img.parentNode) return;
        var el = document.createElement('div');
        if (img.classList.contains('logo')) {
            el.className = 'logo logo--fallback';
        } else if (img.classList.contains('contact-icon')) {
            el.className = 'contact-icon contact-icon--fallback';
        } else {
            el.className = 'edu-icon';
        }
        el.textContent = img.getAttribute('data-fallback');
        el.setAttribute('role', 'img');
        el.setAttribute('aria-label', img.alt || '');
        img.parentNode.replaceChild(el, img);
    }

    if (img.complete && img.naturalWidth === 0) {
        swap();
    } else {
        img.addEventListener('error', swap, { once: true });
    }
});
