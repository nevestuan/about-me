const withPlugins = require('next-compose-plugins');
const withAntdLess = require('next-plugin-antd-less');
const fs = require('fs');
const path = require('path');
const cssVarsToJs = require('./server/utils/cssVarsToJs');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

const themeVariables = cssVarsToJs(
    fs.readFileSync(
        path.resolve(__dirname, './src/styles/variables.css'),
        'utf8',
    ),
    { replacePrefix: '@' },
);

const config = {
    devServer: {
        proxy: {
            '/api': 'http://localhost:3000',
        },
    },
};

module.exports = withPlugins(
    [[withBundleAnalyzer], [withAntdLess, { modifyVars: themeVariables }]],
    config,
);
