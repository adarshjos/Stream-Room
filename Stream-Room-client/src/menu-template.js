const {Menu, shell} =require('electron')

module.exports=(store, app, mainWindow, services)=>{



    return Menu.buildFromTemplate([
        {
            label : 'Stream Room',
            submenu : [
                {
                    label: 'Home',
                    click() {
                        console.log('Switching to the main Menu');
                        mainWindow.loadFile('src/UI/index.html');
                    }
                },
                {
                    label : 'Quit Stream Room',
                    click() {
                        app.quit();
                    }
                }
            ]
        },
        {
            label : 'Platform',
            submenu : [
                {
                    label: 'Host Video',
                    click() {
                        console.log('hosting video and url Generation');
                        //TODO : call function for url generation of socket communication
                    }
                },

            ]
        },
        {
            role: 'About',
            submenu: [
                {
                    label: 'more info',
                    click() {
                        shell.openExternal(
                            'https://github.com/adarshjos/Stream-Room'
                        );
                    }
                },
                {
                    label: 'developer',
                    click() {
                        shell.openExternal(
                             'https://www.linkedin.com/in/adarsh-joseph-752041132/'
                        );
                    }
                }
            ]
        }

    ]);
};