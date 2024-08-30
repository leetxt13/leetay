// Header를 스크롤시 다크 스타일링 적용
const header = document.querySelector('.header');
console.dir(header);

const headerHeight = header.offsetHeight;
document.addEventListener('scroll', () => {
  // console.log(headerHeight);
  // console.log(window.scrollY);

  if (headerHeight < window.scrollY / 2) {
    header.classList.add('header--dark');
  } else if (headerHeight > window.scrollY / 2) {
    header.classList.remove('header--dark');
  }
});

// home섹션을 투명하게 처리

const home = document.querySelector('.home-container');
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});
// arrow버튼 스크롤하면서 나타나도록 설정
const arrow = document.querySelector('.arrowup_link');
document.addEventListener('scroll', () => {
  if (homeHeight / 2 < window.scrollY) {
    arrow.style.opacity = 1;
    arrow.classList.add('arrowup_link--movingEvent');
  } else if (homeHeight / 2 > window.scrollY) {
    arrow.style.opacity = 0;
    arrow.classList.remove('arrowup_link--movingEvent');
  }
});
