const request = require('request');

module.exports = (accessKey, name) => new Promise((reject, resolve) => {

  request({
    method: 'POST',
    uri: 'https://api.github.com/user/repos?access_token=' + accessKey,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/vnd.github.v3+json',
      'User-Agent': 'sofa stack'
    },
    body: JSON.stringify({
      name,
      description: 'CRUD API made by Sofa Stack'
    })
  }, (err, gitResponse, body) => {
    if (err){
      return reject(err);
    }
    return resolve(body);
  });

});
