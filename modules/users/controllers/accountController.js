const databaseControl = require('../../../database/awuiControl');

exports.login = async (req, res) => {
    try{
        const usuarios = await databaseControl.query('SELECT * FROM usuarios');
        res.json(usuarios);
    }catch(e){
        res.status(400);
        res.json({
            error:e
        });
    }
    
}