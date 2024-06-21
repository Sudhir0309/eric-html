'use strict';

import { handleViewportChange as handleViewportChange } from './videoBannerAccessibility.js';
// import { videoBackgroundSetup as videoBackgroundSetup } from './video-background.js';

document.addEventListener('DOMContentLoaded', function () {
  const mediaQuery = window.matchMedia('(min-width: 992px)');

  // Initial check
  handleViewportChange(mediaQuery);
  // videoBackgroundSetup();

  // Listen for changes in the viewport width
  mediaQuery.addListener(handleViewportChange);
});





// script.js

document.addEventListener('DOMContentLoaded', function() {
  const stickyDiv = document.getElementById('main-nav');
  const offsetTop = stickyDiv.offsetTop;

  window.addEventListener('scroll', function() {
      if (window.pageYOffset >= offsetTop) {
          stickyDiv.classList.add('is-fixed');
      } else {
          stickyDiv.classList.remove('is-fixed');
      }
  });
});
