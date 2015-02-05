var lodash = require('lodash');

var verbs = [
    'run',
    'jump',
    'code',
    'love',
    'eat',
];

module.exports = {};
module.exports.get = function(){
    return lodash.sample(verbs);
};