chrome.runtime.onInstalled.addListener((launchData) => {
	chrome.app.window.create(
		'index.html',
		{ id: 'fileWin', innerBounds: { width: 800, height: 500 } },
		(win) => {
			win.contentWindow.launchData = launchData;
		}
	);
});
