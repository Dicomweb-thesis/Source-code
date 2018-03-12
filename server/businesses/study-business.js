var orthanc = require("orthanc-client");
var q = require("q");
var url = 'http://localhost:8042';

var source = new orthanc({
    url: this.url,
    auth: {
        username: '',
        password: ''
    }
});

var Studies = {
    
    /*
    * Get the study with the given id
    * */
    getByID: function (id) {
        var deferred = q.defer();
        source.studies.get(id)
            .then(function (response) {
                var studyJSON = {
                    "StudyID": response.MainDicomTags.StudyID,
                    "StudyDate": response.MainDicomTags.StudyDate,
                    "StudyTime": response.MainDicomTags.StudyTime,
                    "StudyDescription": response.MainDicomTags.StudyDescription,
                    "NumberOfSeries": response.Series.length
                }
                deferred.resolve(JSON.stringify(studyJSON));
            });
        return deferred.promise;
    }
};

module.exports = Studies;

