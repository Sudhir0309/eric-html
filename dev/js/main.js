'use strict';

import { handleViewportChange as handleViewportChange } from './videoBannerAccessibility.js';
import { setElementSticky as setElementSticky } from './sticky-nav.js';
import { setupScrolltopBtn as setupScrolltopBtn } from './scroll-top-btn.js';



document.addEventListener('DOMContentLoaded', function () {
  const mediaQuery = window.matchMedia('(min-width: 992px)');

  /**
   * Hide/reveal DOM elements to accessible technologies based on media queries
   */
  // 1) Initial check
  handleViewportChange(mediaQuery);  
  // 2) Listen for changes in the viewport width
  mediaQuery.addListener(handleViewportChange);


  /**
   * Set main navigation sticky
   */
  setElementSticky('main-nav');

  /**
   * 
   */
  setupScrolltopBtn('scroll-top-button', 300);
});


