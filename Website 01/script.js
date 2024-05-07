const hamburger = document.querySelector('.hamburger');
const menuItems = document.querySelector('.menu_items');

hamburger.addEventListener('click', () => {
  menuItems.classList.toggle('show');
});
// // Wait for the document to fully load
// document.addEventListener("DOMContentLoaded", function() {
//   // Function to update the countdown
//   function updateCountdown() {
//     var currentCount = 115; // Starting count
//     var targetCount = 500; // Target count

//     // Animate the countdown
//     var countdownInterval = setInterval(function() {
//       if (currentCount < targetCount) {
//         currentCount++; // Increment count
//         document.getElementById('countdown').innerHTML = currentCount + '+';
//       } else {
//         clearInterval(countdownInterval); // Stop the interval when target count is reached
//       }
//     }, 5); // Milliseconds between increments
//   }

//   // Call the updateCountdown function when user scrolls to the section or when the section comes into view
//   // You can use a library like Waypoints.js or Intersection Observer API for this purpose
//   // For example, using Intersection Observer API:
//   var section = document.querySelector('#people'); // Replace 'your-section-id' with the actual ID of your section
//   var observer = new IntersectionObserver(function(entries) {
//     if (entries[0].isIntersecting) {
//       updateCountdown();
//       observer.unobserve(section); // Stop observing once the section is in view
//     }
//   }, { threshold: 0.5 }); // Adjust threshold as needed
//   observer.observe(section);
// });

