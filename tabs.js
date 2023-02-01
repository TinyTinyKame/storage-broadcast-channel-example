export function storageChangeTabState(state) {
  sessionStorage.setTime('tabState', state);
}

export function storageGetTabState() {
  return sessionStorage.getItem('tabState');
}
