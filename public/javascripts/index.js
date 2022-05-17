(() => {
  const button = document.getElementById('toggle-add-item');
  const form = document.getElementById('add-item');
  let hiddenState = true;

  button.addEventListener('click', () => {
    hiddenState = !hiddenState;
    button.innerText = (hiddenState) ? 'Add Item' : 'Cancel';
    form.hidden = hiddenState;
    form.reset();
  });
})();