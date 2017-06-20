const request = require('request');

module.exports = (accessKey, name, path, content) => {
  return new Promise((resolve, reject) => {

    console.log(`https://api.github.com/repos/${name}/contents/${path}?access_token=` + accessKey);
    request({
      method: 'PUT',
      uri: `https://api.github.com/repos/${name}/contents/${path}?access_token=` + accessKey,
      headers: {
      'Content-Type': 'application/json',
      Accept: 'application/vnd.github.v3+json',
      'User-Agent': 'sofa stack'
    },
      body: JSON.stringify({
      message: 'init commit by Sofa Stack',
      content: new Buffer(content).toString('base64')
    })
    }, (err, gitResponse, body) => {
      if (err){
      return reject(err);
    }
      return resolve(JSON.parse(body));
    });

  });
};
