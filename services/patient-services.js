var orthanc = require("orthanc-client");
const orthancUrl = 'http://localhost:8042';

var client = new orthanc({
    url: this.orthancUrl,
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
            let idList = await client.patients.getAll();
            for (i in idList) {
                var patient = await client.patients.get(idList[i]);
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
        let ids = await client.patients.getAll();
        let patient;
        for (id of ids) {
            let temp = await client.patients.get(id);
            if (temp.MainDicomTags.PatientID.toString() === patientID.toString()) {
                patient = temp;
            }
        }
        return patient;
    }


};

module.exports = Patients;

