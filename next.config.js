const withPlugins = require('next-compose-plugins');
const withAntdLess = require('next-plugin-antd-less');
const lessToJS = require('less-vars-to-js');
const fs = require('fs');
const path = require('path');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

const themeVariables = lessToJS(
    fs.readFileSync(
        path.resolve(__dirname, './src/styles/variables.less'),
        'utf8',
    ),
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
