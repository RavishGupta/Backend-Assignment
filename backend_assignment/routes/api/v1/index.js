const express = require('express');
const router = express.Router();




router.use('/create_new_storage', require('./create_storage_token'));
router.use('/file_upload', require('./file_upload'));
router.use('/create_audio', require('./create_video'));
router.use('/merge_image_audio', require('./merge_image_audio'));
router.use('/merge_audio_video', require('./merge_audio_video'));
router.use('/my_upload_file', require('./listall'));
module.exports=router;