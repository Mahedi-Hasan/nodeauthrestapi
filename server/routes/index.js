const apiRoute = require('./apis');

const init = (server)=>{
    server.get('*', function(req, res, next){
        console.log('request was mad to : ' + req.originUrl);
        return next();
    });

    server.use('/api', apiRoute);
}

module.exports = {
    init: init
};