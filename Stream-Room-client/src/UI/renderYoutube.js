
document.body.innerHTML = `<webview src="https://youtube.com" preload="file://${__dirname}/injectJSCode.js" style="width: 1000px; height: 800px;"></webview>`
const webview = document.querySelector("webview");
webview.addEventListener("dom-ready", () => {
    //development purpose
    webview.openDevTools();
});