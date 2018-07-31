import React, { Component } from 'react'
import { } from 'semantic-ui-react'

export default class TempRoom extends Component {



    render() {
        const  event= this.props.event;

        return (
            <div>{event.key}</div>
        )
    }
}

module.exports = {
    entry: './app/assets/frontend/main.jsx',
    output: {
        path: __dirname + '/app/assets/javascripts',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
}