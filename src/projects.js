'use strict';
const photos = document.querySelectorAll('.growth__photo');
const categories = document.querySelector('.categories');
const categoryBtns = document.querySelectorAll('button.category');
/*나의 방식*/
// categories.addEventListener('click', (e) => {
//   if (e.target.dataset.photoName == '*') {
//     photos.forEach((photo) => {
//       photo.classList.remove('hide');
//     });
//     return;
//   }
//   photos.forEach((photo) => {
//     if (photo.dataset.photoName != e.target.dataset.photoName) {
//       photo.classList.add('hide');
//     } else {
//       photo.classList.remove('hide');
//     }
//   });
// });

// categories.addEventListener('click', (e) => {
//   console.log('타겟', e.target);
//   console.log('부모타겟', e.target.parentNode);

//   if (e.target.nodeName === 'BUTTON') {
//     categoryBtns.forEach((btn) => {
//       btn.classList.remove('category--selected');
//     });
//     e.target.classList.add('category--selected');
//   } else if (e.target.nodeName == 'SPAN') {
//     categoryBtns.forEach((btn) => {
//       btn.classList.remove('category--selected');
//     });
//     e.target.parentNode.classList.add('category--selected');
//   }
// });

/*엘리 강의*/
categories.addEventListener('click', (e) => {
  const filter = e.target.dataset.photoName;
  if (filter == null) {
    return;
  } /*카테고리 빈공간 클릭시 undefined가 나오는데 이를 무시함*/
  handleActiveSelection(e.target);
  filterPhotos(filter);
  makeAnimation();
});

// 함수로 아래와 같이 기능코드들을 분리시킴, 위에는 함수만 실행하므로
// 심플하게 보이는 리펙토링 가능

// active 메뉴를 재설정
function handleActiveSelection(target) {
  const current = document.querySelector('.category--selected');
  if (current == target) {
    return;
  } else if (target.nodeName == 'SPAN') {
    target.parentNode.classList.add('category--selected');
    current.classList.remove('category--selected');
  } else {
    current.classList.remove('category--selected');
    target.classList.add('category--selected');
  }
}
//포토 필터링
function filterPhotos(filter) {
  photos.forEach((photo) => {
    if (filter == '*' || filter == photo.dataset.photoName) {
      photo.style.display = 'block';
    } else {
      photo.style.display = 'none';
    }
  });
}

// 애니메이션 효과 주기
function makeAnimation() {
  const photoContainer = document.querySelector('.growth__photos');
  photoContainer.classList.add('anim-out');
  setTimeout(() => {
    photoContainer.classList.remove('anim-out');
  }, 250);
}
