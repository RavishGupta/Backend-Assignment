const express = require('express');
const router = express.Router();



const create_storage_tokenAPI = require('../../../controllers/api/v1/create_storage_token');


router.get('/', create_storage_tokenAPI.index);
module.exports = router;