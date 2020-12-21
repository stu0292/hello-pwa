// install sw
window.onload = () => {
  'use strict';
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('./sw.js');
  }
}

// parse url params for share target
window.addEventListener('DOMContentLoaded', () => {
  const parsedUrl = new URL(window.location);
  document.getElementById('title').textContent = parsedUrl.searchParams.get('title');
  document.getElementById('text').textContent = parsedUrl.searchParams.get('text');
  document.getElementById('url').textContent = parsedUrl.searchParams.get('url');
});