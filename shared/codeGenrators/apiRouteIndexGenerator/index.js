const req = ({name}) => `const ${name}Routes = require('./${name}s');`;
const routerUse = ({name}) => `router.use('/', ${name}Routes);`;

module.exports = (models) => {
  const reqStrs = models.map(model => req(model)).join('\n');
  const routers = models.map(model => routerUse(model)).join('\n');
  return `const router = require('express').Router();
${reqStrs}

${routers}

module.exports = router;`;};
