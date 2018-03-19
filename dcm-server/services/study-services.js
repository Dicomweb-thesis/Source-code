var orthanc = require("orthanc-client");
var q = require("q");
var orthancUrl = 'http://localhost:8042';
var patientServices = require('../services/patient-services');


var source = new orthanc({
    url: this.orthancUrl,
    auth: {
        username: '',
        password: ''
    }
});

var Studies = {
    /*
    * Get study list of the patient by PatientID
    * */
    getListByPatientID: async function (patientID) {
        let patient = await patientServices.getByPatientID(patientID);
        let ids = patient.Studies;
        let studies = [];
        for (id of ids) {
            let study = await source.studies.get(id);
            studies.push(study);
        }
        return studies;
    }


};

module.exports = Studies;

