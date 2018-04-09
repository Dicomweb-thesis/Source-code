// import * as cornerstone from 'cornerstone-core/dist/cornerstone.js';
// import * as cornerstoneWADOImageLoader from 'cornerstone-wado-image-loader/dist/cornerstoneWADOImageLoader.js';
// import * as cornerstoneWADOImageLoaderWebWorker from 'cornerstone-wado-image-loader/dist/cornerstoneWADOImageLoaderWebWorker.js';
// import * as cornerstoneWADOImageLoaderCodecs from 'cornerstone-wado-image-loader/dist/cornerstoneWADOImageLoaderCodecs.js';

// var cornerstone=require("cornerstone-core/dist/cornerstone");
// var cornerstoneWADOImageLoader =require("cornerstone-wado-image-loader");
// var cornerstoneWADOImageLoaderCodecs =require("cornerstone-wado-image-loader/dist/cornerstoneWADOImageLoaderCodecs");
//
// cornerstoneWADOImageLoader.external.cornerstone = cornerstone;
// cornerstoneWADOImageLoader.webWorkerManager.initialize({
//     webWorkerPath: './libs/cornerstone/webworkers/cornerstoneWADOImageLoaderWebWorker.js',
//
//     taskConfiguration: {
//         'decodeTask': {
//             codecsPath: 'cornerstoneWADOImageLoaderCodecs.js'
//         }
//     }
// });
//
//
var url = 'http://localhost:8042/instances/d7687eda-ca4054dc-09a6bc9c-d0e59364-2f71f804/file';

var Cornerstone = {
    getFile: async function () {
        return await cornerstone.loadImage(`wadouri:${url}`);
    },

//
//
//     this.csS.fetchDicomImage('http://localhost:8042/instances/d7687eda-ca4054dc-09a6bc9c-d0e59364-2f71f804/file')
//       .subscribe(res => {
//         console.log(res);
//         this.imageData = res;
//         console.log(res);
//       });
//
}

module.exports = Cornerstone;



