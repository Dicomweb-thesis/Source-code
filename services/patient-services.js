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

var Patients = {
    /*
    * Get list of patients
    * */
    getList: async function () {
        let patientList = [];
        try {
            let idList = await source.patients.getAll();
            for (i in idList) {
                var patient = await source.patients.get(idList[i]);
                patientList.push(patient);
            }
        }
        catch (error) {
            patientList = [];
        }
        return patientList;
    },

    /*
    * Get a patient details by PatientID
    * */
    getByPatientID: async function (patientID) {
        let ids = await source.patients.getAll();
        let patient;
        for (id of ids) {
            let temp = await source.patients.get(id);
            if (temp.MainDicomTags.PatientID.toString() === patientID.toString()) {
                patient = temp;
            }
        }
        return patient;
    }


};

module.exports = Patients;

