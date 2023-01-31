export function storageChangeTabState(state) {
  sessionStorage.tabState = state;
}

export function storageGetTabState() {
  return sessionStorage.tabState;
}
