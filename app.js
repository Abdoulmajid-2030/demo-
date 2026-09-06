const modal = document.querySelector('#modal');
document.querySelector('#showDetails').addEventListener('click', () => modal.classList.add('open'));
document.querySelector('.modal-close').addEventListener('click', () => modal.classList.remove('open'));
modal.addEventListener('click', event => { if (event.target === modal) modal.classList.remove('open'); });
document.querySelectorAll('.quick-actions button').forEach(button => button.addEventListener('click', () => {
  document.querySelector('.chat-input input').value = button.textContent;
  document.querySelector('.chat-input input').focus();
}));
