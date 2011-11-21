var request = require('request');

var remoteHost = exports.remoteHost = 'http://travis-ci.org';

exports.repositories = function (callback) {
  request({
    url: remoteHost + '/repositories.json',
    json: true
  }, callback);
};

exports.show = function (owner, repo, callback) {
  request({
    url: remoteHost + '/' + owner + '/' + repo + '.json',
    json: true
  }, callback);
};

exports.builds = function (owner, repo, callback) {
  request({
    url: remoteHost + '/' + owner + '/' + repo + '/builds.json',
    json: true
  }, callback);
};

exports.getBuild = function (owner, repo, id, callback) {
  request({
    url: remoteHost + '/' + owner + '/' + repo + '/builds/' + id + '.json',
    json: true
  }, callback);
};

