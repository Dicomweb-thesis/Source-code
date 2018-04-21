var orthanc = require("orthanc-client");
var q = require("q");
var config = require("../config");

var source = new orthanc({
    url: config.orthancUrl,
    auth: {
        username: '',
        password: ''
    }
});

var Series = {

    /**
     *	get series list given by Study ID
     **/
    getListByStudyID:async function (studyID) {
        let series = await client.studies.get(id);
        return series;
    },

};

module.exports = Series;

