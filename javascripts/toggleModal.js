export default function toggleModal() {
  const modal = document.getElementsByClassName('modal')[0];
  const isHidden = modal.classList.contains('hidden');

  if (isHidden) {
    modal.classList.remove('behind');
    modal.classList.remove('hidden');
  } else {
    modal.classList.add('hidden');
    setTimeout(() => modal.classList.add('behind'), 100);
  }
}
