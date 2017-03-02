'use strict';

const path = require('path');

exports.trimArray = function trimArray(array) {
  return array.reduce((trimmed, item) => {
    item && trimmed.push(item);

    return trimmed;
  }, []);
};

exports.resolveRelativePath = function(file) {
  return file.substr(0,1) === '.' ?
    path.join(process.cwd(), file):
    file;
}
