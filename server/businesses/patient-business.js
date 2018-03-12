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

var Patients = {

    /*
    * Get the patient with the given id
    * */
    getByID: function (id) {
        var deferred = q.defer();
        source.patients.get(id)
            .then(function (response) {
                var patientJSON = {
                    "PatientID": response.MainDicomTags.PatientID,
                    "PatientName": response.MainDicomTags.PatientName,
                    "PatientBirthDate": response.MainDicomTags.PatientBirthDate,
                    "PatientSex": response.MainDicomTags.PatientSex,
                    "NumberOfStudies": response.Studies.length
                }
                deferred.resolve(JSON.stringify(patientJSON));
            });
        return deferred.promise;
    }
};

module.exports = Patients;

