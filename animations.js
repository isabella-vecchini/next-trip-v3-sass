document.addEventListener('DOMContentLoaded', () => {
    const features = document.querySelectorAll('.feature'); // Select all feature cards
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); // Add 'visible' class when in view
        }
      });
    }, { threshold: 0.1 }); // Trigger when 10% of the card is visible
  
    features.forEach(feature => observer.observe(feature)); // Observe each feature card
  });
  