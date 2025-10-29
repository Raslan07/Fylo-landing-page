document.addEventListener('DOMContentLoaded', () => {
  const ctaForm = document.getElementById('cta-form');
  const emailInput = document.getElementById('email-input');
  const errorMessage = document.getElementById('error-message');

  if (ctaForm) {
    ctaForm.addEventListener('submit', (e) => {
      // Prevent the form from submitting
      e.preventDefault(); 
      
      // Simple email validation regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
      const email = emailInput.value.trim();

      if (email === '' || !emailRegex.test(email)) {
        // If email is invalid, show error
        ctaForm.classList.add('is-invalid');
        errorMessage.textContent = 'Please enter a valid email address';
      } else {
        // If email is valid, remove error and (optionally) show success
        ctaForm.classList.remove('is-invalid');
        errorMessage.textContent = '';
        
        // You could add a success message here
        emailInput.value = ''; // Clear input
        alert('Thank you for signing up!');
      }
    });
  }
});