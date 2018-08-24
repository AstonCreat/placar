const { app, BrowserWindow,ipcMain } = require('electron');


app.on('ready', () => {
    console.log("aplicacao iniciada");
    let mainWindows = new BrowserWindow({
               fullscreen:true,
            // width:1366,
            // height:768,
             frame:false
    });
    mainWindows.loadURL(`file://${__dirname}/app/index.html`);
   });

app.on('window-all-closed', () =>{
    app.quit();
    console.log('Aplicacao fechada');
    console.log(app.getLocale());
});

let sobreWindow = null;
ipcMain.on('abrir-janela-sobre', () =>{
    if(sobreWindow == null){
        sobreWindow = new BrowserWindow({
            width:300,
            height:300,
            alwaysOnTop:true,
           
        });
        sobreWindow.on('closed',() =>{
            sobreWindow = null;
        });
    }
    sobreWindow.loadURL(`file://${__dirname}/app/sobre.html`);
});

ipcMain.on('fechar-janela-sobre', () =>{
    sobreWindow.close();
});