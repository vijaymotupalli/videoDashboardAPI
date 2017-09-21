var dbhandler = require('../../handlers/dbhandler');
var config = require('../../config/index');
var utils = require('../../utils/jwt');

var user = {

    checkUser: function (req, res) {
        //TODO: Clean Up , checkUser params (ideally should be wriiten in dbhandler)
        var id = req.params.id
        var query = {"services.facebook.id": id}
        var filter = {profileData: 1, profile: 1, _id: 1}
        var options = {}
        dbhandler.checkUser(query, filter, options).then(function (user) {
            if (!user) {
                res.status(200);
                return res.json({status: 200, title: "User Not Found", userexist: false})
            }
            var userData = {
                _id: user._id,
                profile: user.profile
            }

            var userToken = utils.generateAuthToken(userData)

            res.status(200).json({
                userexist: true,
                user: user,
                userToken: userToken
            })

        }, function (errMsg) {
            res.status(400);
            return res.json({
                status: 400,
                title: 'Unable To Find User',
                msg: errMsg
            });
        }).catch(function (err) {
            res.status(400);
            return res.json({
                title: 'Failed To Check User',
                msg: err
            });
        });
    },
    createUser: function (req, res) {
        var data = req.body.userData
        if (!data) {
            return res.json({
                status: 400,
                title: 'Failed To Create User',
                msg: "Userdata cant be empty"
            });
        }

        dbhandler.createUser(data).then(function (user) {
            try {
                var userTokenData = {
                    _id: user._id,
                    profile: user.profile
                }
                var userToken = utils.generateAuthToken(userTokenData)

                return res.status(200).json({
                    user: {_id: user._id, profile: user.profile, profileData: user.profileData},
                    userToken: userToken
                })
            } catch (err) {
                return res.json({
                    status: 400,
                    title: 'Failed To Create User',
                    msg: err
                });
            }
        }, function (errMsg) {
            res.status(400);
            return res.json({
                status: 400,
                title: 'Failed To Create User',
                msg: errMsg.message
            });
        });


    },
    getUserProfile:function (req,res) {

        var userId = req.params.userId
        if(!userId){
            return res.status(400).json({
                status: 400,
                title: 'User Id Cant Be Empty',
                msg: "Please Enter User Id"
            });
        }
        var data ={"userId":userId}
        dbhandler.getUserProfile(data).then(function (user) {
            if (!user) {
                return res.status(200).json({status: 200, title: "User Not Found", msg: "User Not Found"})
            }
            res.status(200).json(user)
        }, function (errMsg) {
            res.status(400);
            return res.json({
                status: 400,
                title: 'Unable To Find User',
                msg: errMsg
            });
        });
    },
    logout: function (req, res) {

        try {
            var userToken = req.headers['usertoken'];
            var userData = utils.decodeToken(userToken);
            var userId = userData.user._id
        } catch (err) {
            return res.status(400).json({
                title: 'Unable To Logout',
                msg: "Invalid Token"
            });
        }

        var data = {"userId": userId}
        dbhandler.logout(data).then(function (user) {
            res.status(200).json(user)
        }, function (errMsg) {
            res.status(400);
            return res.json({
                status: 400,
                title: 'Unable To Logout',
                msg: errMsg
            });
        });

    }
}

module.exports = user;