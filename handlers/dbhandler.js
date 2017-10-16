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
    userLogin: function (username, password) {
        return new Promise(function (resolve, reject) {
          return  models.users.findOne({userName: username, password: password}, {password: 0},function (err, user) {

                    if (!err) {
                        if(user){
                            var code = jwt.generateAuthToken(user);
                            user = Object.assign({access_token:code},JSON.parse(JSON.stringify(user)))
                        }
                       return resolve(user)
                    }
                   return reject(err);
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
                    phone: admin.phone,
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
    appRegister: function (user) {
        return new Promise(function (resolve, reject) {
            return models.users.findOne({userName: user.username}).then(function (existedUser, err) {
                if (existedUser) {
                   return reject("UserName Already Exists")
                }

                if (err) {
                   return reject(err);
                }
                return models.users.findOne({phone:user.phone}).then(function (existedUser,err) {
                    if(existedUser){
                       return reject("Phone Number Already Exists")
                    }
                    if (err) {
                       return reject(err);
                    }

                    return models.users.findOne({email:user.email}).then(function (existedUser,err) {
                        if (existedUser) {
                           return reject("Email Already Exists")
                        }
                        if (err) {
                           return reject(err);
                        }
                        return models.users.create({
                            name:user.name,
                            userName: user.username,
                            email: user.email,
                            password: user.password,
                            phone: user.phone,
                            school: user.school,
                            address: user.address
                        }).then(function (user, err) {
                            if (!err) {
                               return resolve(user);
                            }
                        }).catch(function (error) {
                            reject(error)
                        })

                    })
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

console.log(admin,config.superAdmin)

        if(admin.role != config.superAdmin){andQuery.push(query)}
        if(filters.subject && filters.subject.length)andQuery.push({subject :{$in:filters.subject}})
        if(filters.standard && filters.standard.length)andQuery.push({standard :{$in:filters.standard}})
        if(admin.role == config.superAdmin && filters.school && filters.school.length)andQuery.push({school :{$in:filters.school}})
        if(admin.role == config.superAdmin && filters.admin && filters.admin.length)andQuery.push({admin :{$in:filters.admin}})
        var finalQuery = andQuery.length ? {$and:andQuery}:{}

        console.log(finalQuery)
        return new Promise(function (resolve, reject) {
            return models.videos.aggregate([{$match:finalQuery},
                {$lookup:{from:"schools",localField:"school",foreignField:"_id",as:"school"}},
                {$lookup:{from:"standards",localField:"standard",foreignField:"_id",as:"standard"}},
                {$lookup:{from:"subjects",localField:"subject",foreignField:"_id",as:"subject"}},
                {$addFields:{school:{$arrayElemAt:["$school",0]},standard:{$arrayElemAt:["$standard",0]},
                    subject:{$arrayElemAt:["$subject",0]}}},{$sort:{createdAt:-1}}
            ]).then(function (videos, err) {
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
    getUserDetails: function (admin) {
        return new Promise(function (resolve, reject) {
            return models.admins.findOne({email:admin}).then(function (admin, err) {
                if (!err) {
                        resolve(admin);
                    }
                }).catch(function (error) {
                    reject(error)
                })

        });
    },
    getAppUserDetails: function (userId) {
        return new Promise(function (resolve, reject) {
            return models.users.findOne({_id:userId},{password:0}).then(function (user, err) {
                if (!err) {
                        resolve(user);
                    }
                }).catch(function (error) {
                    reject(error)
                })

        });
    },
    getAdmins: function () {
        return new Promise(function (resolve, reject) {
            return models.admins.find({}).then(function (admins, err) {
                if (!err) {
                        resolve(admins);
                    }
                }).catch(function (error) {
                    reject(error)
                })

        });
    },
    getAppUsers: function () {
        return new Promise(function (resolve, reject) {
            return models.users.find({},{password:0}).sort({createdAt:-1}).then(function (users, err) {
                if (!err) {
                    resolve(users);
                }
            }).catch(function (error) {
                reject(error)
            })

        });
    },
    deleteAdmin: function (adminId) {
        return new Promise(function (resolve, reject) {
            return models.admins.remove({_id:adminId}).then(function (data, err) {
                if (!err) {
                    resolve({title:"Deleted Successfully"});
                }
            }).catch(function (error) {
                reject(error)
            })
        });
    },
    deleteAppUser: function (userId) {
        return new Promise(function (resolve, reject) {
            return models.users.remove({_id:userId}).then(function (data, err) {
                if (!err) {
                    resolve({title:"Deleted Successfully"});
                }
            }).catch(function (error) {
                reject(error)
            })
        });
    },
    editAdmin : function (adminId,updateData) {
        return new Promise(function (resolve, reject) {
            return models.admins.update({email:adminId},updateData).then(function (admin, err) {
                if (err) {
                    reject(err);
                }
                resolve(admin)
            }).catch(function (error) {
                reject(error)
            })

        });
    },
    editAppUser : function (userId,updateData) {
        return new Promise(function (resolve, reject) {
            return models.users.update({_id:userId},updateData).then(function (user, err) {
                if (err) {
                    reject(err);
                }
                resolve(user)
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







