const request = require('request');

module.exports = (accessKey, repoName, user, path, contents) => new Promise((reject, resolve) => {

  request({
    method: 'POST',
    uri: `https://api.github.com/repos/${user}/${repo}/contents/${path}?access_token=` + accessKey,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/vnd.github.v3+json',
      'User-Agent': 'sofa stack'
    },
    body: JSON.stringify({
      path,
      message: 'init commit by Sofa Stack',
      contents: new Buffer(contents).toString('base64')
    })
  }, (err, gitResponse, body) => {
    if (err){
      return reject(err);
    }
    return resolve(body);
  });

});
