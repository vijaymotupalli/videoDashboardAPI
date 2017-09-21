var syncdb = require('../../handlers/syncdb');
var populateData = require('../../handlers/data')

var populateDb = {

    addRoles:function (req,res) {

        var roles = populateData.roles

        syncdb.addData(roles,'roles').then(function () {

            res.status(200);
            return res.json({
                title:"Database populated with roles and rights",
                msg:"successfull"
            })


        },function (msg) {
            res.status(400);
            res.json({
                title:"Database fail to populate",
                msg:"database population fail",
                err:msg
            })
        });

    },
    addPrivileges:function (req,res) {

        var privileges = populateData.privileges

        syncdb.addData(privileges,'privileges').then(function () {

            res.status(200);
            return res.json({
                title:"Database populated with privileges",
                msg:"successfull"
            })


        },function (err) {
            res.status(400);
            res.json({
                title:"Database fail to populate",
                msg:"database population fail",
                err:err
            })
        });

    },
    addFacets:function (req,res) {
        var facets = populateData.facets;

        syncdb.addData(facets,'facets').then(function () {

            res.status(200);
            return res.json({
                title:"Database populated with privileges",
                msg:"successfull"
            })


        },function (err) {
            res.status(400);
            res.json({
                title:"Database fail to populate",
                msg:"database population fail",
                err:err
            })
        });
    },
    addFacetGroups:function(req,res){

        var facet_groups = populateData.facet_groups;

        syncdb.addData(facet_groups,'facets_groups').then(function () {
            res.status(200);
            return res.json({
                title:"Database populated with privileges",
                msg:"successfull"
            });

        },function (err) {
            res.status(400);
            res.json({
                title:"Database fail to populate",
                msg:"database population fail",
                err:err
            })
        });

    },

    addCategories : function (req,res) {

        syncdb.addCategories().then(function () {
            res.status(200);
            return res.json({
                title:"Database populated with privileges",
                msg:"successfull"
            });
        })
    }

}

module.exports = populateDb