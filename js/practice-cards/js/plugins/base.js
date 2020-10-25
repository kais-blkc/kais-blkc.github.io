$ = {};

const qs = (element) => {
  return document.querySelector(element)
};

// Close form modal
qs('.add-btn').onclick = formClose;
qs('.form-overlay').onclick = e => {
  if (e.target == qs('.form-overlay')) {
    formClose();
  }
};

function formClose(params) {
    qs('.add-btn').classList.toggle('active');
    qs('.form-overlay').classList.toggle('active');
    qs('.form').classList.toggle('active');
}
