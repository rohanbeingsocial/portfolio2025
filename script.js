// Add JavaScript for interactivity here
// Example: Mobile menu toggle

/*
const menuIcon = document.querySelector('#menu-icon'); // You'll need to add an icon with this ID to index.html
const navbar = document.querySelector('nav ul');

if (menuIcon && navbar) {
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x'); // If using boxicons for the menu icon
        navbar.classList.toggle('active');
    };
}
*/

// Typing animation for hero section
document.addEventListener('DOMContentLoaded', () => {
    const typedText = document.getElementById('typed-text');
    const typedArticle = document.getElementById('typed-article');
    const roles = [
        'Software Developer',
        'AI/ML Specialist',
        'Adventurer',
        'Photographer'
    ];
    const useAn = [false, true, true, false];
    let roleIndex = 0;
    let charIndex = 0;
    let typing = true;

    function setArticle() {
        if (!typedArticle) return;
        typedArticle.textContent = useAn[roleIndex] ? 'an' : 'a';
    }

    function typeRole() {
        if (!typedText) return;
        setArticle();
        const currentRole = roles[roleIndex];
        if (typing) {
            if (charIndex < currentRole.length) {
                typedText.textContent += currentRole.charAt(charIndex);
                charIndex++;
                setTimeout(typeRole, 80);
            } else {
                typing = false;
                setTimeout(typeRole, 1000);
            }
        } else {
            if (charIndex > 0) {
                typedText.textContent = currentRole.substring(0, charIndex - 1);
                charIndex--;
                setTimeout(typeRole, 40);
            } else {
                typing = true;
                roleIndex = (roleIndex + 1) % roles.length;
                setTimeout(typeRole, 400);
            }
        }
    }
    if (typedText) { // Check if element exists before starting
        typeRole();
    }

    // --- React Gallery Display Logic (Side-by-Side) --- 
    const photoCards = document.querySelectorAll('#mywork-photo .service-card');
    // Target the new container where the gallery will be displayed
    const galleryDisplayContainer = document.getElementById('photo-gallery-display'); 

    // Check if the essential elements exist
    if (!galleryDisplayContainer) {
        console.error('CRITICAL ERROR: Element with ID "photo-gallery-display" not found! Photo gallery cannot be displayed.');
    }

    // Add global variable to track if lightbox exists
    let photoLightbox = null;

    // Create the lightbox elements
    function createLightbox() {
        if (document.querySelector('.photo-lightbox')) return;
        
        const lightbox = document.createElement('div');
        lightbox.className = 'photo-lightbox';
        
        const closeBtn = document.createElement('div');
        closeBtn.className = 'lightbox-close';
        closeBtn.innerHTML = '&times;';
        closeBtn.addEventListener('click', closeLightbox);
        
        const image = document.createElement('img');
        image.className = 'lightbox-image';
        
        lightbox.appendChild(closeBtn);
        lightbox.appendChild(image);
        document.body.appendChild(lightbox);
        
        // Close on ESC key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeLightbox();
            }
        });
        
        // Close on click outside image
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
        
        photoLightbox = lightbox;
    }

    // Function to open the lightbox with a specific image
    function openLightbox(imageSrc) {
        if (!photoLightbox) createLightbox();
        
        const imgEl = photoLightbox.querySelector('.lightbox-image');
        imgEl.src = imageSrc;
        
        photoLightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }

    // Function to close the lightbox
    function closeLightbox() {
        if (photoLightbox) {
            photoLightbox.classList.remove('active');
            document.body.style.overflow = ''; // Re-enable scrolling
        }
    }

    // Add this function near the top or after displayGallery
    function adjustGalleryForOverflow() {
        const gallery = document.getElementById('photo-gallery-display');
        const cardsContainer = document.querySelector('.photography-cards-container');
        if (!gallery || !cardsContainer) return;

        // Reset gap and margin first
        cardsContainer.style.gap = "2rem";
        gallery.style.marginLeft = "";

        // Get bounding rectangles
        const galleryRect = gallery.getBoundingClientRect();
        const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

        // If gallery is cut off on the right, shift it left
        if (galleryRect.right > viewportWidth) {
            // Reduce the gap first
            cardsContainer.style.gap = "0.5rem";
            // Calculate how much to shift left
            const overflow = galleryRect.right - viewportWidth;
            // Only shift left if overflow is positive
            if (overflow > 0) {
                gallery.style.marginLeft = `-${overflow + 8}px`; // +8 for a little buffer
            }
        }
    }

    // Function to display the gallery in the container
    const displayGallery = (folder) => {
        if (!galleryDisplayContainer) return; // Guard clause

        console.log(`Displaying gallery for folder: ${folder}`);

        // Check dependencies before rendering
        if (typeof React === 'undefined' || typeof ReactDOM === 'undefined') {
            console.error('Cannot display gallery: React or ReactDOM is not loaded.');
            return;
        }
        if (typeof PhotoGallery === 'undefined') {
            console.error('Cannot display gallery: PhotoGallery component is not defined. Check PhotoGallery.js script tag (needs type="text/babel"), ensure Babel is loaded, and check console for JS errors.');
            return;
        }

        try {
            // Render the PhotoGallery component directly into the display container
            // We only pass the folderName now
            ReactDOM.render(
                React.createElement(PhotoGallery, { folderName: folder }),
                galleryDisplayContainer
            );
            // Make the container visible
            galleryDisplayContainer.classList.add('visible');
            galleryDisplayContainer.style.display = 'block';

            // Adjust for overflow
            adjustGalleryForOverflow();

            // Scroll the gallery container into view
            galleryDisplayContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            
            // Initialize lightbox functionality
            setTimeout(() => {
                // Comment out these lines to let the React component handle clicks
                /*
                // Add click event listeners to all gallery images
                document.querySelectorAll('.gallery-image-wrapper img').forEach(img => {
                    img.addEventListener('click', function(e) {
                        e.preventDefault();
                        e.stopPropagation();
                        openLightbox(this.src);
                    });
                });
                */
            }, 300);

        } catch (error) {
            console.error("Error rendering React component into gallery display:", error);
            // Hide container on error?
            galleryDisplayContainer.classList.remove('visible');
            galleryDisplayContainer.style.display = 'none';
        }
    };

    // Add click listeners to photo cards
    if (photoCards.length > 0 && galleryDisplayContainer) {
        photoCards.forEach(card => {
            card.style.cursor = 'pointer'; // Indicate interactivity
            card.addEventListener('click', () => {
                const folder = card.getAttribute('data-folder');
                if (folder) {
                    if (typeof PhotoGallery !== 'undefined') {
                        displayGallery(folder);
                    } else {
                        console.error('Cannot display gallery: PhotoGallery component is undefined at click time. Check script loading order, Babel setup, and PhotoGallery.js for errors.');
                    }
                } else {
                    console.error('Card is missing the data-folder attribute.');
                }
            });
        });
    } else if (!galleryDisplayContainer) {
         // Error already logged
    } else {
        console.warn('No photo cards found with selector "#mywork-photo .service-card". Gallery trigger clicks will not work.');
    }
    
    console.log("Portfolio script loaded and side-by-side gallery logic added.");
}); // End of DOMContentLoaded
