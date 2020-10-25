function _createModal(obj) {
  $modal = document.createElement('div');
  $modal.classList.add('nmodal');
  $modal.setAttribute('data-close', 'true')
  $modal.innerHTML = `
    <p class="modal-close" data-close="true">&times;</p>
    <div class="card card-modal">
      <img src="${obj.img}" class="card-img-top" alt="${obj.img}">
      <div class="card-body">
        <h5 class="card-title">${obj.title}</h5>
        <p class="card-text">${obj.content}</p>
      </div>
    </div>
  `
  document.body.appendChild($modal);
  return $modal;
}

$.modal = (obj) => {
  $modal = _createModal(obj)
  const ANIMATE_SPEED = 550;
  const cardModal = $modal.querySelector('.card-modal');
  let closing = false;

  methods = {

    open() {
      if (!closing) {
        setTimeout(() => {
          cardModal.classList.remove('hide');
          document.body.classList.add('over')
          $modal.classList.add('active');
          cardModal.classList.add('active');
        }, 100);
      }
    },

    close() {
      $modal.addEventListener('click', e => {
        if (e.target.dataset.close) {
          closing = true;
          $modal.classList.remove('active');
          cardModal.classList.remove('active');
          cardModal.classList.add('hide');
          document.body.classList.remove('over');

          setTimeout(() => {
            $modal.remove();
          }, ANIMATE_SPEED);
        }
      });
    }
  }

  return methods;
};

