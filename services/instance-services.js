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

var Instance = {

    getFile: async function () {
        let file = await source.instances.getFile('d7687eda-ca4054dc-09a6bc9c-d0e59364-2f71f804');
        return file;

    }
};


module.exports = Instance;

