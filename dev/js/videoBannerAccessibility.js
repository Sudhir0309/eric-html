

export function handleViewportChange(event) {
    const vidBannerElements = document.querySelectorAll('.section-video-banner');
    vidBannerElements.forEach(vidBannerElement => {
        const dSmallElements = vidBannerElement.querySelectorAll('.d-small');
        const dLargeElements = vidBannerElement.querySelectorAll('.d-large');

        if (event.matches) {
            // Viewport is at least 992px
            dSmallElements.forEach(el => el.setAttribute('aria-hidden', 'true'));
            dLargeElements.forEach(el => el.setAttribute('aria-hidden', 'false'));
        } else {
            // Viewport is below 992px
            dSmallElements.forEach(el => el.setAttribute('aria-hidden', 'false'));
            dLargeElements.forEach(el => el.setAttribute('aria-hidden', 'true'));
        }
    });
}
