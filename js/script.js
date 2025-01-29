const scrollIcon = document.getElementById('scrollIcon');
let scrollTimeout;

window.addEventListener('scroll', () => {
  // Hide the icon when scrolling starts
  scrollIcon.style.opacity = '0';

  // Clear the previous timeout if it exists
  clearTimeout(scrollTimeout);

  // Set a timeout to show the icon after scrolling stops
  scrollTimeout = setTimeout(() => {
    scrollIcon.style.opacity = '1';
  }, 500); // Adjust the delay to suit your preference
});