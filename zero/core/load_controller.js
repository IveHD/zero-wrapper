const glob = require('glob');

module.exports = controller_path => {
    const obj = {};
    glob.sync(controller_path + '/**/*.js').forEach(e => {
        const controller = require(e);
        const ins = new controller();
        obj[ins.constructor.name.toLowerCase()] = ins;
    });
    return obj;
}