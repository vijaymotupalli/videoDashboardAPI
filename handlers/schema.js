var mongoose = require('mongoose'),
materializedPathPlugin = require('mongoose-materialized'),
    customId = require('mongoose-hook-custom-id');

// Creating  Schemas

var adminSchema = new mongoose.Schema({
    name:{ type: String},
    email:{ type: String ,required: true},
    password:{ type: String ,required: true},
    phone:{ type: String },
    school:{ type: String },
    address:{ type: String },
},{ versionKey: false , timestamps: true});

var videoSchema = new mongoose.Schema({
    title:{ type: String,required: true},
    url:{ type: String,required: true},
    standard:{ type: String ,required: true},
    subject:{ type: String ,required: true},
    description:{ type: String },
    admin:{ type: String,required: true },
    school:{type: String}
},{ versionKey: false , timestamps: true});

var schoolSchema = new mongoose.Schema({
    name:{type: String,required: true}
})


//plugins
adminSchema.plugin(customId, {mongoose: mongoose});
videoSchema.plugin(customId, {mongoose: mongoose});
schoolSchema.plugin(customId, {mongoose: mongoose});

//models

var admins = mongoose.model('admins',adminSchema,'admins');
var videos = mongoose.model('videos',videoSchema,'videos');
var schools = mongoose.model('schools',schoolSchema,'schools');


//exports

exports.admins = admins;
exports.videos = videos;
exports.schools = schools;


