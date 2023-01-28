export default function removeTodoElement(ev) {
  const target = ev.target;

  target.removeEventListener('click', removeTodoElement);
  target.parentElement.remove();
}
