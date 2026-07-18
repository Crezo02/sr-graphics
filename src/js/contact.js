export function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const formSuccess = document.getElementById('formSuccess');

  if (!contactForm) return;

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    if (submitBtn) {
      submitBtn.classList.add('loading');
      const span = submitBtn.querySelector('span');
      if (span) span.textContent = 'Sending...';
    }

    // Build WhatsApp message from form data
    const data = new FormData(this);
    const msg = encodeURIComponent(
      `New Quote Request from SR Graphics Website\n\nName: ${data.get('name')}\nPhone: ${data.get('phone')}\nEmail: ${data.get('email') || 'N/A'}\nService: ${data.get('service')}\nMessage: ${data.get('message')}`
    );

    // Simulate send delay then redirect to WA
    setTimeout(() => {
      if (formSuccess) formSuccess.classList.add('visible');
      contactForm.style.display = 'none';
      window.open(`https://wa.me/917584896513?text=${msg}`, '_blank');
    }, 1200);
  });
}
