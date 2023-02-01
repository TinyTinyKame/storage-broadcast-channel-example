export function storageChangeTabState(state) {
  sessionStorage.setItem('tabState', state);
}

export function storageGetTabState() {
  return sessionStorage.getItem('tabState');
}
