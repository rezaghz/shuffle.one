const {app, BrowserWindow} = require('electron');
const path = require('path');
require('electron-reload')(__dirname);


app.on('ready', function () {
    let mainWin = new BrowserWindow({
        width: 900,
        height: 700,
        maximizable : false,
        center: true,
        title : "Shuffle.one | Created By Rezaghz.com",
        icon : path.join(__dirname,"asset","icon","icon.ico")
    });
    mainWin.loadURL("http://shuffle.one");
    app.on('close', function () {
        mainWin = null;
    });

});