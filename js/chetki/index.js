let countLocal = localStorage.getItem('count')
let count = qs('#count')
let i = 0;
console.log(countLocal);

if (countLocal > 0) {
  i = countLocal
  count.innerHTML = i;
}


qs('#center').onclick = () => {
  qs('.circle', true).forEach(el => {
    el.classList.add('active')
  });
    i++;
    count.innerHTML = i;
    localStorage.setItem('count', i)


  setTimeout(() => {
    qs('.circle', true).forEach(el => {
      el.classList.remove('active')
    });
  }, 500);
}

qs('#reset').onclick = () => {
  i = 0;
  count.innerHTML = i;
  localStorage.setItem('count', i)
}


function qs(elem, all=false) {
  if (all) {
    return document.querySelectorAll(elem);
  }
  return document.querySelector(elem);
}
