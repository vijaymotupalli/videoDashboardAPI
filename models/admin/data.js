/**
 * Created by Vijay on 27-Jun-17.
 */
var dbhandler = require('../../handlers/dbhandler');
var config = require('../../config/index');


var data = {


    addSchool:function (req,res) {
        var schoolData = {name:req.body.name}
        dbhandler.addData(schoolData,"schools").then(function (school) {
            return res.status(200).json(school)

        },function (errMsg) {
            return res.status(400).json({
                status: 400,
                title: 'Failed to Add School',
                msg: errMsg
            });
        });

    },
    getSchools:function (req,res) {

        return dbhandler.getData("schools").then(function (schools) {
            return res.status(200).json(schools)

        },function (errMsg) {
            return res.status(400).json({
                status: 400,
                title: 'Failed to Get Schools',
                msg: errMsg
            });
        });

    },
    addSubject:function (req,res) {
        var subjectData = {name:req.body.name}
        dbhandler.addData(subjectData,"subjects").then(function (subject) {
            return res.status(200).json(subject)

        },function (errMsg) {
            return res.status(400).json({
                status: 400,
                title: 'Failed to Add subject',
                msg: errMsg
            });
        });

    },
    getSubjects:function (req,res) {

        return dbhandler.getData("subjects").then(function (subjects) {
            return res.status(200).json(subjects)

        },function (errMsg) {
            return res.status(400).json({
                status: 400,
                title: 'Failed to Get subjects',
                msg: errMsg
            });
        });

    },
    addStandard:function (req,res) {
        var standardData = {name:req.body.name}
        dbhandler.addData(standardData,"standards").then(function (standard) {
            return res.status(200).json(standard)

        },function (errMsg) {
            return res.status(400).json({
                status: 400,
                title: 'Failed to Add standard',
                msg: errMsg
            });
        });

    },
    getStandards:function (req,res) {

        return dbhandler.getData("standards").then(function (standards) {
            return res.status(200).json(standards)
        },function (errMsg) {
            return res.status(400).json({
                status: 400,
                title: 'Failed to Get standards',
                msg: errMsg
            });
        });

    },



}


module.exports = data

