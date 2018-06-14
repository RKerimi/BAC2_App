# <projectname>



## Requirements
- [Node.js](https://nodejs.org)
- [yarn](https://yarnpkg.com)

## Get started
- run `yarn` to install dependencies from [package.json](package.json)
- run `yarn start` to fire up default dev server
- run `yarn production` to build the production app

### JavaScript
- written in ES6 bundled to ES5 with Babel
- [React](https://facebook.github.io/react/) for UI with JSX
- [Semantic UI React] (https://react.semantic-ui.com) as UI framework



## Directory Structure

```
.
├── /app                            # App directory
|   ├── /components                 # App components
|   ├── ├── /_core                  # App core component folder
|   |   |   ├── /footer             # App core component file
|   |   |   ├── /header             # App core component file
|   |   |   └── /navigation         # App core component file
|   |   ├── /home                   # App core component folder
|   |   |   ├── /header.jsx         # App core component file
|   |   |   └── /home.jsx           # App core component file
|   |   |── /img                    # App core component folder
|   |   |   └── /imgSmartHome.jsx   # App core component file
|   |   |── /light                  # App core component folder
|   |   |   ├── /light.jsx          # App core component file
|   |   |   └── /lightButton.jsx    # App core component file
|   |   |── /radiator               # App core component folder
|   |   |   ├── /radiator.jsx       # App core component file
|   |   |   └── /--------.jsx       # App core component file
|   |   |── /src                    # App core component folder
|   |   |   └── /js                 # App core component file
|   |   |       ├── /app.js         # App core component file
|   |   |       ├── /feed.js        # App core component file
|   |   |       └── /promise.js     # App core component file
|   |   └── /static                 # App core component folder
|   |       ├── /font               # App core font file
|   |       └── /img                # App core image file
|   ├── app.container.jsx           # App container
|   ├── app.module.jsx              # App module
|   ├── app.routes.jsx              # App routes
|   ├── index.html                  # App index template file
|   ├── Manifest.json               # PWA config File
|   └── sw.js                       # PWA Service Worker
├── /config
|   └── webpack.js                  # Webpack config file
|   └── webpack.production.js       # Webpack config file production env
└── package.json
```
