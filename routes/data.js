var data = require('../models/admin/data');

module.exports = function (app) {

    app.get('/data/schools',data.getSchools);
    app.get('/data/subjects',data.getSubjects);
    app.get('/data/standards',data.getStandards);

    app.post('/data/schools',data.addSchool);
    app.post('/data/subjects',data.addSubject);
    app.post('/data/standards',data.addStandard);

}




