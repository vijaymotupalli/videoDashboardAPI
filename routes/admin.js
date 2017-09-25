var auth = require('../models/admin/authentication');
var videos = require('../models/admin/videos');




module.exports = function (app) {

    app.post('/api/login',auth.login);
    app.post('/api/register',auth.register);
    app.post('/api/uploadvideo',videos.uploadVideo);
    app.get('/api/videos',videos.getVideos);
    app.post('/api/videos/applyfilter',videos.getVideos);
    app.post('/api/videos',videos.postVideo);
    app.put('/api/videos/:videoId',videos.editVideo);
    app.delete('/api/videos/:videoId',videos.deleteVideo);
    app.get('/api/myprofile',auth.getAdminDetails);







}




