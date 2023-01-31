import { storageGetTabState } from "../tabs.js";

export default function setSelectedTab() {
  const tabState = storageGetTabState();
  const tabButtons = document.getElementsByClassName('tab-button');

  for (const tabButton of tabButtons) {
    if (tabButton.id === tabState || (!tabState && tabButton.id === 'ALL')) {
      tabButton.classList.add('selected');
    } else {
      tabButton.classList.remove('selected');
    }
  }
}
