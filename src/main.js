// Header를 스크롤시 다크 스타일링 적용
const header = document.querySelector('.header');
console.dir(header);

const headerHeight = header.offsetHeight;
document.addEventListener('scroll', () => {
  console.log(headerHeight);
  console.log(window.scrollY);

  if (headerHeight < window.scrollY / 2) {
    header.classList.add('header--dark');
  } else if (headerHeight > window.scrollY / 2) {
    header.classList.remove('header--dark');
  }
});
