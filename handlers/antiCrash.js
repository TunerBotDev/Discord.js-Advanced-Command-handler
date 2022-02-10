module.exports = client => {
    process.on('unhandledRejection', (reason, p) => {
         console.log(' [antiCrash] :: Unhandled Rejection/Catch'.bgRed);
         console.log(reason, p);
         console.log(' [antiCrash] :: Unhandled Rejection/Catch'.bgRed);
     });
     process.on("uncaughtException", (err, origin) => {
        console.log(' [antiCrash] :: UnCaught Rejection/Catch'.bgRed);
         console.log(err, origin);
         console.log(' [antiCrash] :: UnCaught Rejection/Catch'.bgRed);
     }) 
     process.on('uncaughtExceptionMonitor', (err, origin) => {
         console.log(' [antiCrash] :: Uncaught Exception/Catch (MONITOR)'.bgRed);
         console.log(err, origin);
         console.log(' [antiCrash] :: Uncaught Exception/Catch (MONITOR)'.bgRed);
     });
     process.on('multipleResolves', (type, promise, reason) => {
         console.log(' [antiCrash] :: Multiple Resolves'.bgRed);
         console.log(type, promise, reason);
         console.log(' [antiCrash] :: Multiple Resolves'.bgRed);
     });
 }