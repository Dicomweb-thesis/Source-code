module.exports = function (express, app) {
    const router = express.Router();
    const jsonParser = require('body-parser').json();
    const Patients = require("../services/patient-services");
    const Studies = require("../services/study-services");
    const Series=require('../services/series-services');
    var orthanc=require('orthanc-client');
    var client = new orthanc({
    url: this.url,
    auth: {
        username: '',
        password: ''
    }
});
    /*
    * Route for get request
    * */
    // Default - connect successfully
    router.get("/", function (request, response) {
        response.setHeader('Content-Type', 'text/html');
        response.status(200).send("Connected to server successfully!");
    })

    // Return list of patients
    router.get("/patients", function (request, response) {
        Patients.getList().then(function (value) {
            response.setHeader('Content-Type', 'application/json');
            response.status(200).json(value);
        }).catch(function (error) {
            response.send(error);
        })
    })

    // Return list of studies according to patientID
    router.get("/patients/:id/studies", function (request, response) {
        let patientID = request.params.id;
        Studies.getListByPatientID(patientID).then(function (value) {
            response.setHeader('Content-Type', 'application/json');
            response.status(200).json(value);
        }).catch(function (error) {
            response.send(error);
        })
    })
    //return list series
    router.get('/studies/:ID/series',function(request,response){
        let studiesID=request.params.ID;
        client.studies.getSeries(studiesID)
        .then(function(res){
            response.setHeader('Content-Type', 'application/json');
            response.status(200).json(res);
        })
    })

    
    // getImage given by instance ID
    router.get('/series/:id/instances',function(request,response) {
        let seriesID=request.params.id; 
        client.series.getInstances(seriesID)
        .then(function(res){
            response.setHeader('Content-Type', 'application/json');
            response.status(200).json(res);
        })
        .catch(function(error){
            response.send(error);
        })
        
    })

// thử đổi content type trong header để lấy  ảnh
   
    app.use('/', router);
    app.use('/patients', router);
    app.use('/patients/:id/studies', router);
    app.use('/studies/:ID/series', router);

}