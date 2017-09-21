var auth = require('../models/admin/authentication');
var videos = require('../models/admin/videos');




module.exports = function (app) {

    app.post('/api/login',auth.login);
    app.post('/api/register',auth.register);
    app.post('/api/uploadvideo',videos.uploadVideo);
    app.get('/api/getvideos',videos.getVideos);
    app.get('/api/myprofile',auth.getAdminDetails);
    app.post('/api/postvideo',videos.postVideo);







}




