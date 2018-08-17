'use strict';
module.exports = function (Categoria) {
  Categoria.enviaEmail = function (req, cb) {
    var send = require('gmail-send')({
      user: 'portalgrandecoloradodf@gmail.com',
      //user: 'cema.mpdft@gmail.com',
      pass: 'pr3gu30b3m',
    });
    send({
      from: req.address,
      to: 'portalgrandecoloradodf@gmail.com',
      bcc: [req.address],
      subject: req.subject,
      html:
        '<table align="center">' +
        '<tr><td  align="center">Nome: ' + req.name + '"></td></tr>' +
        '<tr><td  align="center">Telefone: ' + req.phone + '"></td></tr>' +
        '<tr><td  align="center">Assunto: ' + req.subject + '"></td></tr>' +
        '<tr><td  align="center">Mensagem: ' + req.msg + '"></td></tr>' +
        '</table>'
    }, function (err, res) {
      console.log('* [example 1.1] send() callback returned: err:', err, '; res:', res);
    });
  };

  Categoria.remoteMethod(
    'enviaEmail', {
      accepts: {
        arg: 'req',
        type: 'object',
        'http': {
          source: 'body'
        }
      },
      returns: {
        arg: 'status',
        type: 'string'
      }
    }
  );


};
