'use strict';
// Intersection Observer
// 구현계획
//1. 모든섹션요소들과 메뉴아이템들을 가져온다
//2. IntersectionObserver를 사용해서 모든섹션을 관찰
//3. 보여지는 섹션에 해당하는 메뉴아이템만 활성화시킨다
// 보여지는 섹션
// - 다수의 섹션이 동시에 보인다면, 가장 첫번째 섹션 선택
// - 마지막 contact 섹션이 보인다면, 가장 마지막 섹션을 선택

const sectionIds = [
  '#home',
  '#about',
  '#skills',
  '#growth',
  '#family',
  '#birthday',
];
const navItems = document.querySelectorAll('.header__menu__item');
const sections = sectionIds.map((id) => document.querySelector(id));
const visibleItems = sectionIds.map(() => false); // 보이는 섹션 선별을 위한 설정
let activeNavItem = navItems[0];
const options = { rootMargin: '-20% 0px 0px 0px', threshold: [0, 0.98] };
// 루트마진을 아래로 내리면 상단에 거의 안 보이는 부분을 active상태로 인식 안 할수 있게됨
// threshold 콜백을 0,0.98일때 두번 받게 설정
const observer = new IntersectionObserver(callback, options);
sections.forEach((section) => observer.observe(section));
function callback(entries) {
  // flag변수(불리언)
  let selectLastOne;
  entries.forEach((entry) => {
    const index = sectionIds.indexOf(`#${entry.target.id}`);
    visibleItems[index] = entry.isIntersecting; // 보이는 셀 정보를 배열로 만들어줌
    // 마지막것은 인덱스가 마지막이면서, 진입한상태여야 하고, 95%가 보여야 함
    selectLastOne =
      index === sectionIds.length - 1 &&
      entry.isIntersecting &&
      entry.intersectionRatio >= 0.95;
    // intersectionObserver는 들어올 때, 빠져나갈때만 호출
    // option을 설정 안 해주면, 세번째 조건을 충족 못시킴
    // 따라서, 계속 화면 끝까지 내려도 계속 false값이 나옴
  });
  console.log('보이는것들', visibleItems);
  console.log('마지막것', selectLastOne);
  const navIndex = selectLastOne
    ? sectionIds.length - 1
    : findFirstIntersecting(visibleItems);
  console.log('true인 녀석은', sectionIds[navIndex]);

  selectNavItem(navIndex);
}
function findFirstIntersecting(sections) {
  const index = sections.indexOf(true);
  return index >= 0 ? index : 0;
}

// 최종 엑티브시킬 메뉴를 찾는 함수
function selectNavItem(index) {
  const navItem = navItems[index]; // active하게 만들 메뉴
  if (!navItem) {
    return;
  } // 배열navitem을 못 찾으면 함수를 빠르게 종료
  activeNavItem.classList.remove('active'); // 현재 active한 메뉴 제거
  activeNavItem = navItem; // 새로 active되는 메뉴로 덮어씌움
  activeNavItem.classList.add('active');
}
