export default function generateRandomId() {
  return (Math.random() + 1).toString(36).substring(7);
}
