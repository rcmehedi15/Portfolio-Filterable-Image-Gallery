const filterButtons = document.querySelectorAll('.filter-button');
const images = document.querySelectorAll('.image');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((button) => {
      button.classList.remove('active');
    });
    button.classList.add('active');
    const filter = button.dataset.filter;
    images.forEach((image) => {
      if (filter === 'all') {
        image.style.display = 'block';
      } else {
        if (image.classList.contains(filter)) {
          image.style.display = 'block';
        } else {
          image.style.display = 'none';
        }
      }
    });
  });
});
