var express = require('express');
var router = express.Router();

var ip    = require('ip');
var moment = require('moment');
var os    = require('os');

var ModelAccess = require('../model/ModelAccess');

/* GET users listing. */
router.get('/', function(req, res, next) {

  var timestamp = moment().format('YYYY-MM-DD HH:mm:ss');
  var hostname  = os.hostname();
  var ipv4      = ip.address('private', 'ipv4');

  console.log('Dados para inserir no banco: ' + timestamp + ' ' + hostname + ' ' + ipv4);


  // Método para fazer o insert no banco a partir de um post
  // new ModelAccess().postAccess(timestamp, hostname, ipv4)
  //   .then(res.send(200)
  //   .catch(err => console.error(err));
  // new ModelAccess().postAccess(timestamp, hostname, ipv4)
  //   .then(res.send(200))
  //   .catch(err => console.error(err));


  // Método para enviar uma query ao banco
  new ModelAccess().getAccess()
    .then(resultsJSON => {
      console.log(resultsJSON);
      res.send(resultsJSON);
    })
    .catch(err => console.error(err));


});

module.exports = router;
