// Function to show the selected section and hide others
function showSection(sectionId) {
    // Get all sections
    const sections = document.querySelectorAll('.content-section');
    
    // Hide all sections
    sections.forEach(section => {
      section.style.display = 'none';
    });
  
    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
  }
  
  // Initially show the home section
  document.addEventListener('DOMContentLoaded', () => {
    showSection('home');
  });
  

  