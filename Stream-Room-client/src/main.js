// Modules to control application life and create native browser window
const {app, Menu, BrowserWindow, ipcMain, session} = require('electron')
const path = require('path')
const Store = require('electron-store')
const isMac = process.platform === 'darwin'
const menu = require('./menu-template')
const ottPlatformList = require('./ott-platform')
//initializations and definition
const store = new Store();
let mainWindow;

/*
TODO Load Widevine Only On Mac
-->in mac always it return darwin for the platform
-->this is used for the issues: Widevine supports the use of standards-based royalty-free solutions for encryption,
                                adaptive streaming,
 */
// if (isMac) {
//   require('electron-widevinecdm').load(app);
// }

function createWindow () {
  // Create the browser window.
 // BrowserWindow.addExtension()
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      webviewTag: true    }
  })

  //ott-services loading
  let ottServices=store.get('ottservices') || []
  console.log(ottServices)
  global.ott_services = ottServices;
  ottPlatformList.forEach(eachService=>{
    global.ott_services.push(eachService);
  })


  //Menu Builder
  Menu.setApplicationMenu(menu(store,app,mainWindow,global.ott_services))
  console.log('loading the main content menu');
  mainWindow.loadFile('src/UI/index.html');

  // Open the DevTools.
   mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()
  
  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (isMac) app.quit()
})

ipcMain.on('open-url', (e, service) => {
  console.log('-->>Openning Service ' + service.name);
 // mainWindow.webContents.userAgent = service.userAgent ? service.userAgent : defaultUserAgent;
  //mainWindow.loadURL(service.url);
  console.log(service.name)
  if(service.name==='YouTube'){
    mainWindow.loadFile('src/UI/youtube.html')
  }else{
    mainWindow.loadURL(service.url);
  }

});


// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
