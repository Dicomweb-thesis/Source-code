var orthanc = require("orthanc-client");
var q = require("q");
var orthancUrl = 'http://localhost:8042';
var Patient = require('../services/patient-services');


var client = new orthanc({
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
        let patient = await Patient.getByPatientID(patientID);
        let ids = patient.Studies;
        let studies = [];
        for (id of ids) {
            let study = await client.studies.get(id);
            studies.push(study);
        }
        return studies;
    },

    
    










    // duyệt tất cả các series của study sau đó duyệt instance của series mỗi instances
      // là một buffer ảnh 
      /*
    * Get study list of the patient by PatientID
    
    getInstancebyID: async function (instanceID){
        client.instances.getFile(instanceID)
        .then(function (res) {
            console.log('res');
            return res;
        })
        .catch(function (err) {
            
        })
    }
    * */



};

module.exports = Studies;

