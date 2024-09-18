// Simple script to handle navigation between pages
document.querySelectorAll('a[data-page]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetPage = e.target.getAttribute('data-page');
      document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
      });
      document.getElementById(targetPage).classList.add('active');
    });
  });
  