// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Dark Mode Toggle Functionality
    const themeToggleButton = document.getElementById('theme-toggle');
    const darkModeClass = 'dark-mode';
    const storedTheme = localStorage.getItem('theme') || 'light'; // Default to 'light' if no theme is saved

    // Apply previously saved theme on load
    if (storedTheme === darkModeClass) {
        document.body.classList.add(darkModeClass);
        themeToggleButton.innerHTML = '<i class="fas fa-sun"></i> <span id="theme-text">Light Mode</span>';
        themeToggleButton.setAttribute('aria-label', 'Switch to light mode');
    }

    // Toggle dark mode on button click
    themeToggleButton.addEventListener('click', () => {
        document.body.classList.toggle(darkModeClass);

        if (document.body.classList.contains(darkModeClass)) {
            // Switch to dark mode: Show the sun icon and "Light Mode" text
            themeToggleButton.innerHTML = '<i class="fas fa-sun"></i> <span id="theme-text">Light Mode</span>';
            localStorage.setItem('theme', darkModeClass); // Save dark mode preference
            themeToggleButton.setAttribute('aria-label', 'Switch to light mode');
        } else {
            // Switch to light mode: Show the moon icon and "Dark Mode" text
            themeToggleButton.innerHTML = '<i class="fas fa-moon"></i> <span id="theme-text">Dark Mode</span>';
            localStorage.setItem('theme', 'light'); // Save light mode preference
            themeToggleButton.setAttribute('aria-label', 'Switch to dark mode');
        }
    });

    // Skill Bar Animation on Scroll
    const skillBars = document.querySelectorAll('.skill-bar');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.getAttribute('data-width');
                bar.querySelector('.skill-bar-fill').style.width = `${width}%`;
            }
        });
    }, {
        threshold: 0.5 // Start animation when half in view
    });

    skillBars.forEach(bar => observer.observe(bar));

    // Modal Functionality for Contact Email
    const modal = document.getElementById('email-modal');
    const getInTouchButton = document.getElementById('get-in-touch');
    const closeButton = document.querySelector('.close-button');

    if (modal && getInTouchButton && closeButton) {
        // Show the modal when "Get in Touch" is clicked
        getInTouchButton.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior
            modal.classList.add('show'); // Add the "show" class to display the modal
        });

        // Close the modal when the "x" button is clicked
        closeButton.addEventListener('click', () => {
            modal.classList.remove('show'); // Remove the "show" class to hide the modal
        });

        // Close the modal if the user clicks outside of it
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.classList.remove('show'); // Hide the modal
            }
        });
    }

    // Back to Top Button Functionality
    const backToTopButton = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    // Modal functionality for "Get in Touch"
    const modal = document.getElementById('email-modal');
    const getInTouchButton = document.getElementById('get-in-touch');
    const closeButton = document.querySelector('.close-button');

    if (modal && getInTouchButton && closeButton) {
        // Show the modal when "Get in Touch" is clicked
        getInTouchButton.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default behavior
            modal.classList.add('show'); // Show the modal
        });

        // Close the modal when the "x" button is clicked
        closeButton.addEventListener('click', () => {
            modal.classList.remove('show'); // Hide the modal
        });

        // Close the modal if the user clicks outside of it
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.classList.remove('show'); // Hide the modal
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const reviews = document.querySelectorAll('.review-card');
    
    setInterval(() => {
        // Randomly select a review to highlight
        const randomIndex = Math.floor(Math.random() * reviews.length);
        reviews.forEach((review, index) => {
            if (index === randomIndex) {
                review.style.transform = 'scale(1.05)';
                review.style.transition = 'transform 0.5s ease';
            } else {
                review.style.transform = 'scale(1)';
            }
        });
    }, 3000); // Highlight a new review every 3 seconds
});
