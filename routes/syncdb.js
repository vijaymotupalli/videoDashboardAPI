
var populatedbdata = require('../models/database/syncdb');

module.exports = function (app) {

    app.post('/addroles',populatedbdata.addRoles);
    app.post('/addprivileges',populatedbdata.addPrivileges);
    app.post('/addfacets',populatedbdata.addFacets);
    app.post('/addfacetsgroups',populatedbdata.addFacetGroups);
    app.post('/addcats',populatedbdata.addCategories);

}




