var orthanc = require("orthanc-client");
var q = require("q");
var url = 'http://localhost:8042';
var Studies=require('./study-services')
var client = new orthanc({
    url: this.url,
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

