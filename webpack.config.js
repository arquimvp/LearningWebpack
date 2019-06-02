const path = require('path')

const config = {
    mode: 'development',
    entry: path.join(__dirname, './index.js'),
    output: {
        path: path.resolve(__dirname, 'cupra'),
        filename: './bundle.js'
    }
}

module.exports = config;