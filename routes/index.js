var express = require('express');
var router = express.Router();
var path = require('path');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.get('/list', function(req, res) {
  let sql = `SELECT * FROM cards`;
  db.query(sql, function(err, data, fields) {
    if (err) throw err;
    res.json({
      data
    })
  })
});



router.post('/add', function(req, res) {
  if (req.body.en.length < 1 || req.body.kr.length < 1) {
    res.send('Both fields must have data.');
  } else {
   let sql = `INSERT INTO cards(en, kr) VALUES (?)`;
   let values = [
     req.body.en,
     req.body.kr
   ];
   db.query(sql, [values], function(err, data, fields) {
     if (err) throw err;
     res.sendFile(path.join(__dirname, '../public', 'new.html'));
   }) 
  }
});

module.exports = router;
