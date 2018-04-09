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

var Instance = {

    getFile: async function () {
        let file = await source.instances.getFile('d7687eda-ca4054dc-09a6bc9c-d0e59364-2f71f804');
        return file;

    }
};


module.exports = Instance;

