if (process.env.NODE_ENV === 'production') {
    module.exports = require('./dist/dylan-template.min.js');
}else {
    module.exports = require('./dist/dylan-template.js');
}
