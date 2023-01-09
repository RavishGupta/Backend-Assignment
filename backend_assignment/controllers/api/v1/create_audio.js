const gTTS = require('gtts');
const uploads = require('../../../uploads');

      
let speech = uploads;
var gtts = new gTTS(speech, 'en');
  
gtts.save('Voice.mp3', function (err, result){
    if(err) { throw new Error(err); }
    console.log("Text to speech converted!");
});