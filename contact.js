// contact.js — client-side validation for contact form
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const nameEl = document.getElementById('name');
    const emailEl = document.getElementById('email');
    const messageEl = document.getElementById('message');
    const successEl = document.getElementById('successMessage');

    function showError(el, msg) {
        const id = el.getAttribute('id') + 'Error';
        const err = document.getElementById(id);
        err.textContent = msg;
        el.setAttribute('aria-invalid', 'true');
        el.setAttribute('aria-describedby', id);
    }

    function clearError(el) {
        const id = el.getAttribute('id') + 'Error';
        const err = document.getElementById(id);
        err.textContent = '';
        el.removeAttribute('aria-invalid');
        el.removeAttribute('aria-describedby');
    }

    function validateEmail(email) {
        // Simple email regex — good enough for client-side validation
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let valid = true;
        successEl.textContent = '';

        // Name
        if (!nameEl.value.trim()) {
            showError(nameEl, 'Name is required.');
            valid = false;
        } else {
            clearError(nameEl);
        }

        // Email
        if (!emailEl.value.trim()) {
            showError(emailEl, 'Email is required.');
            valid = false;
        } else if (!validateEmail(emailEl.value.trim())) {
            showError(emailEl, 'Please enter a valid email address.');
            valid = false;
        } else {
            clearError(emailEl);
        }

        // Message
        if (!messageEl.value.trim()) {
            showError(messageEl, 'Message is required.');
            valid = false;
        } else if (messageEl.value.trim().length < 10) {
            showError(messageEl, 'Message must be at least 10 characters.');
            valid = false;
        } else {
            clearError(messageEl);
        }

        if (valid) {
            // Simulate successful submission
            successEl.textContent = 'Thank you! Your message has been sent.';
            form.reset();
            // Move focus to success message for screen readers
            successEl.focus({ preventScroll: true });
        } else {
            // Focus first invalid field
            const firstInvalid = form.querySelector('[aria-invalid="true"]');
            if (firstInvalid) firstInvalid.focus();
        }
    });
});
