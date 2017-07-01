const createStaticAsserts = __PRODUCTION__ ? require('./prod') : require('./dev');

export default createStaticAsserts;