var users = require('../models/app/user');
var items = require('../models/app/items');
var dashboard = require('../models/app/homeDashboard');
var fileHandler = require('../utils/uploadFiles');
var facets = require('../models/app/facets');
var sos = require('../models/app/sos');

module.exports = function (app) {

    app.get('/app/sos/',sos.getPosts);
    app.get('/app/sos/posts/replies/:postId',sos.getPostReplies);
    app.get('/app/sos/items/',sos.getItemsTotag);
    app.post('/app/sos/',sos.createPost);
    app.post('/app/sos/:postId',sos.replyPost);
    app.put('/app/sos/liketoggle/:postId',sos.togglePostLike);
    app.post('/app/sos/flag/:postId',sos.flagPost);
    app.post('/app/sos/flag/replies/:replyId',sos.flagReply);
    app.get('/app/sos/posts/:pageLimit?/:pageNumber?',sos.searchSosPosts);
    app.post('/app/users',users.createUser);
    app.get('/app/users/:id',users.checkUser);
    app.post('/app/logout/',users.logout);
    app.get('/app/userprofile/:userId',users.getUserProfile);
    app.get('/app/items/favourites/:pageLimit?/:pageNumber?',items.getUserFavouriteItems);
    app.get('/app/items/comments/:itemId/:pageLimit?/:pageNumber?',items.getItemComments);
    app.delete('/app/items/comments/:itemId/:commentId',items.deleteCommentFromItem);
    app.post('/app/items/comments/:itemId',items.addCommentToItem);
    app.get('/app/items/:itemId',items.getItemDetails);
    app.get('/app/items/:type/:id/:pageLimit?/:pageNumber?',items.getItems);
    app.post('/app/items/applyfilter/:pageLimit?/:pageNumber?',items.applyFilter);
    app.get('/app/search/items/:categoryId?/:pageLimit?/:pageNumber?',items.searchItems);
    app.put('/app/items/liketoggle/:itemId',items.toggleItemLike);
    app.put('/app/items/favouritetoggle/:itemId',items.toggleItemFavourite);
    app.get('/app/dashboard',dashboard.getDashboard);
    app.post('/app/upload', fileHandler.uploadFile);
    app.post('/app/uploadmultiplefiles', fileHandler.uploadMultipleFiles);
    app.get('/getFacets/:facet_group/:category?', facets.getFacets);
    app.post('/app/items', items.uploadItem);

}




