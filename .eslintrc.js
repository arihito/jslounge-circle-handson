const ALLOW = 0
const WARN = 1
const ERROR = 2
module.exports = {
    "extends": "airbnb-base",
    "globals": {
        ga: true,
        '$': true
    },
    "rules": {
        "no-console": ERROR
    }
};