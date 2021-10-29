const { NotFoundError } = require('../../../common/errors');
const userControlService = require('../services/userControlService');
const userBranchService = require('../services/userBranchService');
const databaseBranch = require('../../../database/awuiBranch');
const { ResponseContent, ResponseError } = require('../../../common/res');


exports.login = async (req, res) => {
    try {
        const {username, password, chashRegister, macAddress} = req.body;
        const userExist = await userControlService.existUser(username, password);
        if(!userExist) throw new NotFoundError("No existe el usuario");
        
        const userControl = await userControlService.getUserByName(username,password);

        const connectionBranch = databaseBranch.createBranchConnecion(userControl.DB); 
        const userExistInBranch = await userBranchService.existUser(connectionBranch,userControl.usuario);

        if(!userExistInBranch)  throw new NotFoundError("No existe el usuario");
        const userBranch = await userBranchService.getUserByName(connectionBranch,userControl.usuario);

        
        const isCasher = await userBranchService.isCasher(connectionBranch, userBranch.usuarioid);
        if(!isCasher) throw new Error("Perfil no admitido");

        const branch = await userBranchService.brachAssigned(connectionBranch,'');

        const folio = await userBranchService.createLoginFolio(connectionBranch);

        const session = {
            user: userBranch, 
            branch: {
                branch
            },
            database: userControl.DB,
            folio: folio
        };

        const response = new ResponseContent(session);
        res.json(response);
    } catch (e) {
        res.status(e.status || 400);
        const response = new ResponseError(e.message);
        res.json(response);
    }
}