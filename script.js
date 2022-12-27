const pages = document.querySelectorAll('.page');
const prevButton = document.querySelector('#prev-page');
const nextButton = document.querySelector('#next-page');

let currentPage = 0;

prevButton.addEventListener('click', () => {
  if (currentPage > 0) {
    currentPage--;
  }
  updatePage();
});

nextButton.addEventListener('click', () => {
  if (currentPage < pages.length - 1) {
    currentPage++;
  }
  updatePage();
});

function updatePage() {
  pages.forEach((page, index) => {
    if (index === currentPage) {
      page.style.display = 'block';
    } else {
      page.style.display = 'none';
    }
  });
}

updatePage();
