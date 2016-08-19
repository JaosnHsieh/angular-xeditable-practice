var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/api', router);
};

router.get('/papers', function (req, res, next) {
  db.Paper.findAll().then(function (papers) {
    res.json(papers);
  });
});

router.post('/papers',function(req,res,next){
   
      db.Paper.upsert(
              {}
            ).then(function(paper){
                db.Paper.findAll().then(function (papers) {
                    res.json(papers);
                    });
              });
});

router.delete('/papers/:id', function (req, res, next) {
    var deleteId = req.params.id;
      db.Paper.destroy({
          where: {
            id: deleteId
          }
        }).then(function(todo) {
          res.json('delete successfully!!');
        });


    });