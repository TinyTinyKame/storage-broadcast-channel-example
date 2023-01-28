function storageChangeTabState(state) {
  sessionStorage.tabState = state;
}

function storageGetTabState() {
  return sessionStorage.tabState;
}
