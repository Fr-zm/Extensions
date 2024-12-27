(() => {

    chrome.runtime.onMessage.addListener((obj, sender, response) => {
        const { type, gameName, gameCode } = obj;

        if (type === "NEW") {
            gName = gameName;
            gCode = gameCode;
            newTabLoaded();
        }
    });

    const newTabLoaded = () => {
        pass
    }
})