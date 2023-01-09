const videoshow = require('videoshow');

var images = [
    // demo paths 
    {
        path : './images/image1.png'
    },
    {
        path : './images/image2.png'
    }
]

var videoOptions = {
    fps: 25,
    loop: 5, // seconds
    transition: true,
    transitionDuration: 1, // seconds
    videoBitrate: 1024,
    videoCodec: 'libx264',
    size: '640x?',
    audioBitrate: '128k',
    audioChannels: 2,
    format: 'mp4',
    pixelFormat: 'yuv420p'
  }

  videoshow([{
    path: 'image1.jpg',
    caption: 'first video'
  }, {
    path: 'image2.jpg',
    caption: 'sample',
    loop: 10 // long caption
  }])
  .save('video.mp4')
  .on('start' , function(command){
    console.log("some conversation started" , commands);
  })
  .on('error', function (err , stdout , stderr) {
    console.log("some error occured" , error);
  })
  .on('end', function (output) {
    console.log("converstion completed", output);
  })