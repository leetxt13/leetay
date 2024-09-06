'use strict';

// Header를 스크롤시 다크 스타일링 적용
const header = document.querySelector('.header');
const headerMenu = document.querySelector('.header__menu');
// console.dir(header);

const headerHeight = header.offsetHeight;
document.addEventListener('scroll', () => {
  // console.log(headerHeight);
  // console.log(window.scrollY);
if(document.querySelector(".header--dark")){
  return;
}
  if (headerHeight < window.scrollY /2) {
    header.classList.add('header--dark');
  } else if (headerHeight > window.scrollY/2 ) {
    header.classList.remove('header--dark');
    headerMenu.classList.remove('open')
  }
  
});
// 스크롤을 최상단으로 하면 다크모드 없애고, 토글 닫기
document.addEventListener('scroll',()=>{
  if(window.scrollY == 0){
    header.classList.remove('header--dark');
    headerMenu.classList.remove('open')
  }
})

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

// 모바일 헤더 toggle버튼을 누르면 메뉴바 나타나고 사리지게하고 + 헤더 배경색도 같이 바꿈

const toggleBtn = document.querySelector('.header__toggleBtn');
const headerNav = document.querySelector(".header__nav")
toggleBtn.addEventListener('click', (e) => {
  console.log(e.target.nodeName);
  if (e.target.nodeName == 'I' || e.target.nodeName == 'DIV') {
  headerMenu.classList.toggle('open');
  header.classList.add('header--dark')
  }
});
headerMenu.addEventListener('click', (e) => {
  console.log(e.target.nodeName);
  if (e.target.nodeName == 'LI' || e.target.nodeName == 'A') {
  headerMenu.classList.remove('open');
  header.classList.remove('header--dark')
  }

});

