chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.url && tab.url.includes("steampowered.com/app/")) {
    const codeANDname = tab.url.split("app/")[1];
    const parts = codeANDname.split("/")
    const name = decodeURIComponent(parts[1])
    const code = parts[0]

    chrome.tabs.sendMessage(tabId, {
      type: "NEW",
      gameName: name,
      gameCode: code
    });
  }
});
