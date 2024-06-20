'use strict';

import { handleViewportChange as handleViewportChange } from './videoBannerAccessibility.js';

document.addEventListener('DOMContentLoaded', function () {
  const mediaQuery = window.matchMedia('(min-width: 992px)');

  // Initial check
  handleViewportChange(mediaQuery);

  // Listen for changes in the viewport width
  mediaQuery.addListener(handleViewportChange);
});
