    // Form validation and submission
        const form = document.getElementById('contactForm');
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        const submitBtn = document.getElementById('submitBtn');
        const successMessage = document.getElementById('successMessage');

        // Real-time validation
        nameInput.addEventListener('blur', validateName);
        emailInput.addEventListener('blur', validateEmail);
        messageInput.addEventListener('blur', validateMessage);

        function validateName() {
            const nameError = document.getElementById('nameError');
            if (!nameInput.value.trim()) {
                nameError.textContent = 'Name is required';
                nameInput.classList.add('invalid');
                nameInput.classList.remove('valid');
                return false;
            }
            nameError.textContent = '';
            nameInput.classList.add('valid');
            nameInput.classList.remove('invalid');
            return true;
        }

        function validateEmail() {
            const emailError = document.getElementById('emailError');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (!emailInput.value.trim()) {
                emailError.textContent = 'Email is required';
                emailInput.classList.add('invalid');
                emailInput.classList.remove('valid');
                return false;
            }
            
            if (!emailRegex.test(emailInput.value)) {
                emailError.textContent = 'Please enter a valid email address';
                emailInput.classList.add('invalid');
                emailInput.classList.remove('valid');
                return false;
            }
            
            emailError.textContent = '';
            emailInput.classList.add('valid');
            emailInput.classList.remove('invalid');
            return true;
        }

        function validateMessage() {
            const messageError = document.getElementById('messageError');
            if (!messageInput.value.trim().length < 10) {
                messageError.textContent = 'Message must be at least 10 characters.';
                messageInput.classList.add('invalid');
                messageInput.classList.remove('valid');
                return false;
            }
            messageError.textContent = '';
            messageInput.classList.add('valid');
            messageInput.classList.remove('invalid');
            return true;
            
        }

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const isNameValid = validateName();
            const isEmailValid = validateEmail();
            const isMessageValid = validateMessage();

                // Message

            
            if (isNameValid && isEmailValid && isMessageValid) {
                // Simulate form submission
                submitBtn.disabled = true;
                submitBtn.textContent = 'Sending...';
                
                setTimeout(() => {
                    successMessage.textContent = 'Thank you! Your message has been sent successfully.';
                    form.reset();
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Send Message';
                    
                    // Clear validation classes
                    nameInput.classList.remove('valid', 'invalid');
                    emailInput.classList.remove('valid', 'invalid');
                    messageInput.classList.remove('valid', 'invalid');
                    
                    // Hide success message after 5 seconds
                    setTimeout(() => {
                        successMessage.textContent = '';
                    }, 5000);
                }, 1500);
            }
        });
