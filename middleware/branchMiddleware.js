function branchMiddleware(req, res, next){
    console.log('aqui se esta usando el middleware');
    const branchHeader = req.get('Branch-Selected');
    if(!branchHeader){
        res.status(412);
        res.json({
            error: 'Hace falta el encabezado de sucursal',
        });
    }
    next();
}

module.exports = branchMiddleware;