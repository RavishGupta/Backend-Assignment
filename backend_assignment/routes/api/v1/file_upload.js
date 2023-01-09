const express = require('express');
const router = express.Router();
const file_uploadAPI = require('../../../controllers/api/v1/file_upload');


router.post('/',file_uploadAPI.upload);
module.exports = router;