// Запасные иконки, если внешние картинки недоступны
document.querySelectorAll('img[data-fallback]').forEach(function (img) {
    function swap() {
        if (!img.parentNode) return;
        var el = document.createElement('span');
        el.className = 'img-fallback';
        el.textContent = img.getAttribute('data-fallback');
        el.setAttribute('role', 'img');
        el.setAttribute('aria-label', img.alt || '');
        if (img.classList.contains('hero__avatar')) {
            el.classList.add('hero__avatar', 'hero__avatar--fallback');
            el.removeAttribute('style');
        }
        img.parentNode.replaceChild(el, img);
    }

    if (img.complete && img.naturalWidth === 0) {
        swap();
    } else {
        img.addEventListener('error', swap, { once: true });
    }
});
