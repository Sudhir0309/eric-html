
/**
 * Set an element sticky
 * @param {*} navId 
 */
export function setupScrolltopBtn(btnId, pageYOffset) {
    const scrollTopButton = document.getElementById(btnId);

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > pageYOffset) { // Show the button after scrolling down 300px
            scrollTopButton.style.display = 'block';
        } else {
            scrollTopButton.style.display = 'none';
        }
    });
  
    scrollTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}