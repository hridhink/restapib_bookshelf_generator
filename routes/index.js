var express = require('express');
const products = require('../models/products');
var router = express.Router();
let { oneOf, check, buildCheckFunction } = require('express-validator');
let checkBodyAndQuery = buildCheckFunction(['body', 'query'])
let indexcontro = require('./controllers/indexcontroller')
let getsecond = require('./controllers/indexcontroller')
let postrecord = require('./controllers/indexcontroller')
let getthird = require('./controllers/indexcontroller')
let patchrecord = require('./controllers/indexcontroller')
let deleterecord = require('./controllers/indexcontroller')



router.get('/', indexcontro.gettable); //to get all table items


router.get('/add', getsecond.gettable2); //to display form fields to input data for creating new record

router.post('/add/submit', oneOf([
  [check('product').exists(), check('price').exists()],
  check('brand').exists(), check('model').exists()
]), postrecord.posttable);              //to save details of new record to the database filling the form fields and clicking submit


router.get('/:id', getthird.gettable3)  //to fetch details from the table by specifying id in the url


router.patch('/edit', checkBodyAndQuery('id').isUUID()
  , patchrecord.patchtable)            // to update record in a table by passing values as raw json format


router.delete('/delete/:id', deleterecord.deletetable) // to delete a specific record from a table by refering id in the url


module.exports = router;
