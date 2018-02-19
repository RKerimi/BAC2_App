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
├── /app                      # App directory
|   ├── /components           # App components
|   |   ├── /home             # App core component folder
|   |       ├── /home.jsx     # App core component file
|   ├── app.container.jsx     # App container
|   ├── app.module.jsx        # App module
|   └── app.routes.jsx        # App routes
|   └── index.html            # App index template file
├── /config
|   └── webpack.js            # Webpack config file
|   └── webpack.production.js # Webpack config file production env
└── package.json
```
