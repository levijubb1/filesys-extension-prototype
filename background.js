chrome.runtime.onInstalled.addListener((launchData) => {
	chrome.app.window.create(
		'index.html',
		{ id: 'fileWin', innerBounds: { width: 1400, height: 1000 } },
		(win) => {
			win.contentWindow.launchData = launchData;
		}
	);
});