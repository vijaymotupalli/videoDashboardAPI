//Write All Mongo Queries Here
var config = require('../config/index');
var mongoose = require('mongoose');
var models = require('../handlers/schema');
var moment = require('moment');
var async = require("async");
var jwt = require('../utils/jwt');
var crypto = require('crypto');



mongoose.connect(config.db.host, {
    user: config.db.username, pass: config.db.password, auth: {
        authdb: 'admin'
    }
}, function (err) {
    if (err) {
        console.log("----DATABASE CONNECTION FAILED----", err);
    } else {
        console.log("connected to database" + " " + config.db.database + " ");
    }
});

var db = mongoose.connection.db;

var dbHandler = {

    //admin
    login: function (email, password) {
        console.log(email,password)
        return new Promise(function (resolve, reject) {
            models.admins.findOne({email: email, password: password}, {password: 0},function (err, admin) {
                    if (!err) {
                        if(admin){
                            var code = jwt.generateAuthToken(admin);
                            admin = Object.assign({access_token:code},JSON.parse(JSON.stringify(admin)))
                        }
                        resolve(admin)
                    }
                })
        });
    },
    register: function (admin) {
        return new Promise(function (resolve, reject) {
            return models.admins.findOne({email: admin.email}).then(function (existedAdmin, err) {
                if (existedAdmin) {
                    reject("Email Already Exists")
                }
                if (err) {
                    reject(err);
                }
                return models.admins.create({
                    name: admin.name,
                    email: admin.email,
                    password: admin.password,
                    phone: admin.roles,
                    school: admin.school,
                    address: admin.address
                }).then(function (admin, err) {
                    if (!err) {
                        resolve(admin);
                    }
                }).catch(function (error) {
                    reject(error)
                })
            })

        });
    },
    postVideo: function (video) {
        return new Promise(function (resolve, reject) {
            return models.videos.create({
                    title: video.title,
                    url : video.url,
                    standard: video.standard,
                    subject:video.subject,
                    description:video.description,
                    school:video.school,
                    admin:video.admin

                }).then(function (video, err) {
                    if (!err) {
                        resolve(video);
                    }
                }).catch(function (error) {
                    reject(error)
                })


        });
    },
    getVideos: function (admin,filters) {
        var andQuery = []
        var query = {admin:admin._id}
        if(admin.role != config.superAdmin){andQuery.push(query)}
        if(filters.subject && filters.subject.length)andQuery.push({subject :{$in:filters.subject}})
        if(filters.standard && filters.standard.length)andQuery.push({standard :{$in:filters.standard}})
        if(admin.role == config.superAdmin && filters.school && filters.school.length)andQuery.push({school :{$in:filters.school}})
        if(admin.role == config.superAdmin && filters.admin && filters.admin.length)andQuery.push({admin :{$in:filters.admin}})

        return new Promise(function (resolve, reject) {
            return models.videos.find({$and:andQuery}).then(function (videos, err) {
                    if (!err) {
                        resolve(videos);
                    }
                }).catch(function (error) {
                    reject(error)
                })


        });
    },
    getAdminDetails: function (admin) {
        return new Promise(function (resolve, reject) {
            return models.admins.findOne({_id:admin}).then(function (admin, err) {
                if (!err) {
                        resolve(admin);
                    }
                }).catch(function (error) {
                    reject(error)
                })

        });
    },
    editAdmin : function (adminId,updateData) {
        return new Promise(function (resolve, reject) {
            return models.admins.update({_id:adminId},updateData).then(function (admin, err) {
                if (err) {
                    reject(err);
                }
                resolve(admin)
            }).catch(function (error) {
                reject(error)
            })

        });
    },
    editVideo : function (videoId,updateData) {
        return new Promise(function (resolve, reject) {
            return models.videos.update({_id:videoId},updateData).then(function (video, err) {
                if (err) {
                    reject(err);
                }
                resolve(video)
            }).catch(function (error) {
                reject(error)
            })

        });
    },
    deleteVideo : function (videoId,admin) {

       var query = ""
        query = {_id:videoId,admin:admin._id}

        if(admin.role == config.superAdmin){
            query = {_id:videoId}
        }

        return new Promise(function (resolve, reject) {
            return models.videos.remove(query).then(function (video, err) {
                if (err) {
                    reject(err);
                }
                if(!video.result.n){
                    reject("Video Not Found")
                }
                resolve("Video Deleted Successfully")

            }).catch(function (error) {
                reject(error)
            })

        });
    },
    addData: function (data,collection) {
        return new Promise(function (resolve, reject) {
            return models[collection].create(data).then(function (data, err) {
                if (!err) {
                    resolve(data);
                }
            }).catch(function (error) {
                reject(error)
            })
        });
    },
    editData: function (id,data,collection) {
        return new Promise(function (resolve, reject) {
            return models[collection].update({_id:id},{name:data.name}).then(function (data, err) {
                if (!err) {
                    resolve(data);
                }
            }).catch(function (error) {
                reject(error)
            })
        });
    },
    deleteData: function (id,collection) {
        return new Promise(function (resolve, reject) {
            return models[collection].remove({_id:id}).then(function (data, err) {
                if (!err) {
                    resolve({title:"Deleted Successfully"});
                }
            }).catch(function (error) {
                reject(error)
            })
        });
    },
    getData: function (collection) {
        return new Promise(function (resolve, reject) {
            return models[collection].find().then(function (data, err) {
                if (!err) {
                    resolve(data);
                }
            }).catch(function (error) {
                reject(error)
            })
        });
    },

}


module.exports = dbHandler







