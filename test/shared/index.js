describe('Shared Code', () => {
  describe('Code Gens', () => {
    require('./attrTypes.test');
    require('./sequelizeGenrator.test');
    require('./routerGenrator.test');
    require('./packageJsonGenerator.test');
    require('./dbIndexGenerator.test');
    require('./apiRouteIndexGenerator.test');
  });
  describe('Build', () => {
    require('./folder.test');
  });

});
