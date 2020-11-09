function qs(elem, all=false) {
  if (all) {
    return document.querySelectorAll(elem);
  }
  return document.querySelector(elem);
}

qs('#center').onclick = () => {
  qs('.circle', true).forEach(el => {
    el.classList.add('active')
  });

  setTimeout(() => {
    qs('.circle', true).forEach(el => {
      el.classList.remove('active')
    });
  }, 500);
}

// qs('#center').onclick = () => {
//   qs('#before_top').classList.add('active');
//   qs('#top').classList.add('active');
//   qs('#center').classList.add('active');
//   qs('#bottom').classList.add('active');

//   setTimeout(() => {
//     qs('#before_top').classList.remove('active');
//     qs('#top').classList.remove('active');
//     qs('#center').classList.remove('active');
//     qs('#bottom').classList.remove('active');
//   }, 500);
// }
