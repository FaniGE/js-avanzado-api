import app from "./app.js"

const main=()=>{
    app.listen(app.get('port')); //equivale al puerto 4000
    console.log(`Server on port ${app.get('port')}`);
};
main();