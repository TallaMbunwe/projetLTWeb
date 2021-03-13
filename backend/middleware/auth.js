// Ceci est le fichier de verification des token lié aux utilisateurs 
// pour s'assurer qu'ils ont le droit de faire les requettes. 
// Ça permet de vérifie et protège les routes de création, modification et suppression des frais de mission

const jwt = require('jsonwebtoken');

module.exports = (req,res, next ) => {
    try{
        const token = req.headers.authorization.split('')[1];
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
        const salarieId = decodedToken.salarieId;
        if (req.body.salarieId && req.body.salarieId !==salarieId) {
            throw 'Salarie ID non valable !';
        }else{
            next();
        }
    }catch (error) {
        res.status(401).json({ error:error | 'Requête non authentifiée '});
    }
};