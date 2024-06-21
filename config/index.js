const args = require('yargs/yargs')(process.argv.slice(2)).parse();
console.log(args);
module.exports = {
    apps: {
        'log-reader': {
            port: 8200,
            logLocation: args['log-location'] || 'C:\everquest\everquest.log',
        }
    }
};