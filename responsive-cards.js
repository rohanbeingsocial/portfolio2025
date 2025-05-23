// Function to make AI/ML project cards responsive
function makeAIProjectCardsResponsive() {
  // Get the current viewport width
  const viewportWidth = window.innerWidth;
  
  // Get all project cards in the AI/ML section
  const projectCards = document.querySelectorAll('#mywork-ai .project-card');
  const projectCardsContainers = document.querySelectorAll('#mywork-ai .projects-cards');
  
  // Adjust project card containers layout based on viewport width
  projectCardsContainers.forEach(container => {
    // Add padding and fix overflow issues
    container.style.paddingTop = "20px";
    container.style.marginTop = "10px";
    container.style.overflow = "visible";
    
    if (viewportWidth <= 768) {
      container.style.flexDirection = "column";
      container.style.alignItems = "flex-start";
    } else {
      container.style.flexDirection = "row";
      container.style.justifyContent = "flex-start";
    }
  });
  
  // Adjust project card sizes based on viewport width
  projectCards.forEach(card => {
    // Fix the shadow/border cut-off issue
    card.style.marginTop = "10px";
    card.style.overflow = "visible";
    card.style.boxShadow = "none"; // No default shadow
    card.style.transition = "transform 0.3s, box-shadow 0.3s";
    
    // Add hover effect dynamically
    card.onmouseenter = function() {
      this.style.boxShadow = "0 0 2.5rem var(--main-color), 0 0 4rem var(--main-color)";
      this.style.transform = "scale(1.05)";
    };
    
    card.onmouseleave = function() {
      this.style.boxShadow = "none";
      this.style.transform = "scale(1)";
    };
    
    // Rest of the size adjustments
    if (viewportWidth > 1400) {
      card.style.flex = "0 0 380px";
      card.style.maxWidth = "380px";
      card.style.fontSize = "2.1rem";
    } else if (viewportWidth > 1200) {
      card.style.flex = "0 0 340px";
      card.style.maxWidth = "340px";
      card.style.fontSize = "2rem";
    } else if (viewportWidth > 1100) {
      card.style.flex = "0 0 300px";
      card.style.maxWidth = "300px";
      card.style.fontSize = "1.9rem";
    } else if (viewportWidth > 991) {
      card.style.flex = "0 0 280px";
      card.style.maxWidth = "280px";
      card.style.fontSize = "1.8rem";
    } else if (viewportWidth > 768) {
      card.style.flex = "0 0 240px";
      card.style.maxWidth = "240px";
      card.style.fontSize = "1.7rem";
    } else if (viewportWidth > 600) {
      card.style.width = "90%";
      card.style.maxWidth = "360px";
    } else if (viewportWidth > 480) {
      card.style.width = "90%";
      card.style.maxWidth = "320px";
    } else {
      card.style.width = "95%";
      card.style.maxWidth = "300px";
    }
  });
}

// Make cards responsive on page load
document.addEventListener('DOMContentLoaded', makeAIProjectCardsResponsive);

// Make cards responsive when window is resized
window.addEventListener('resize', makeAIProjectCardsResponsive); 