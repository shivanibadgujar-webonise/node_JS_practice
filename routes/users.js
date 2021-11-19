var express = require("express");
const{ query } = require("../services/db");

var router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try{
  const rows =  await query("select * from employees");
 
  res.json(rows);
  }catch(err){
    next(err);
  }
});

module.exports = router;
