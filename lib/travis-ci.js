var request = require('request');

var remoteHost = exports.remoteHost = 'http://travis-ci.org';

exports.repositories = function (callback) {
  request({
    url: remoteHost + '/repositories.json',
    json: true
  }, callback);
};

