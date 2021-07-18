const stripComments = require('strip-json-comments');

const varRgx = /^--/;
const followVar = (value, cssVars, dictionary) => {
    if (varRgx.test(value)) {
        // value is a variable
        return followVar(
            cssVars[value] || dictionary[value.replace(varRgx, '')],
        );
    }
    return value;
};

const convertToJs = (sheet, options = {}) => {
    const {
        dictionary = {},
        resolveVariables = false,
        replacePrefix = false,
    } = options;
    let cssVars = {};
    const matches = stripComments(sheet).match(/[\-\-$](.*:[^;]*)/g) || [];

    matches.forEach((variable) => {
        const definition = variable.split(/:\s*/);
        let value = definition.splice(1).join(':');
        value = value.trim().replace(/^["'](.*)["']$/, '$1');
        cssVars[definition[0].replace(/['"]+/g, '').trim()] = value;
    });

    if (resolveVariables) {
        Object.keys(cssVars).forEach((key) => {
            const value = cssVars[key];
            cssVars[key] = followVar(value, cssVars, dictionary);
        });
    }

    if (replacePrefix && typeof replacePrefix === 'string') {
        const transformKey = (key) => key.replace(varRgx, replacePrefix);

        cssVars = Object.keys(cssVars).reduce((prev, key) => {
            prev[transformKey(key)] = cssVars[key];
            return prev;
        }, {});
    }

    return cssVars;
};

module.exports = convertToJs;
