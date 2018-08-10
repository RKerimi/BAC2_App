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
├── /app                                                # App directory
|   ├── /components                                     # App components
|   ├── ├── /_core                                       # App core component folder
|   |   |   ├── /footer                                 # App core component folder
|   |   |   |   └──footer.jsx                           # App core component file
|   |   |   ├── /header                                 # App core component folder
|   |   |   |   └──header.jsx                           # App core component file
|   |   |   └── /navigation                             # App core component folder
|   |   |   |   └──header.jsx                           # App core component file
|   |   ├── /_helper                                    # App core component folder
|   |   |   ├── /divider                                # App core component folder
|   |   |      └── /divider.jsx                         # App core component file
|   |   ├── /garage                                     # App core component folder
|   |   |   ├── /garage.jsx                             # App core component file
|   |   |   ├── /garageButton.jsx                       # App core component file
|   |   |   └── /garageMaps.jsx                         # App core component file
|   |   ├── /home                                       # App core component folder
|   |   |   ├── /btnPushNotification.jsx                # App core component file
|   |   |   ├── /header.jsx                             # App core component file
|   |   |   ├── /home.jsx                               # App core component file
|   |   |   └── /homeImage.jsx                          # App core component file
|   |   |── /img                                        # App core component folder
|   |   |   └── /imgSmartHome.jsx                       # App core component file
|   |   |── /light                                      # App core component folder
|   |   |   ├── /light.jsx                              # App core component file
|   |   |   ├── /lightButton.jsx                        # App core component file
|   |   |   └── /lightImage.jsx                         # App core component file
|   |   |── /logout                                     # App core component folder
|   |   |   ├── /loginButton.jsx                        # App core component file
|   |   |   ├── /logout.jsx                             # App core component file
|   |   |   └── /logoutHeader.jsx                       # App core component file
|   |   |── /notification                               # App core component folder
|   |   |   └── /notification.jsx                       # App core component file
|   |   |── /radiator                                   # App core component folder
|   |   |   ├── /buttonSetTemp.jsx                      # App core component file
|   |   |   ├── /radiator.jsx                           # App core component file
|   |   |   ├── /radiatorGraph.jsx                      # App core component file
|   |   |   └── /tempRoom.jsx                           # App core component file
|   |   |── /settings                                   # App core component folder
|   |   |   ├── /settings.jsx                           # App core component file
|   |   |   └── /settingsHeader.jsx                     # App core component file
|   |   |── /src                                        # App core component folder
|   |   |   ├── /data                                   # App core component file
|   |   |       ├── /notification.json                  # PWA App File
|   |   |       └── /weather.json                       # PWA App File
|   |   |   └── /js                                     # App core component file
|   |   |       ├── /app.js                             # PWA App File
|   |   |       ├── /feed.js                            # PWA App File
|   |   |       └── /promise.js                         # PWA App File
|   |   └── /static                                     # App core component folder
|   |       ├── /font                                   # App core font file
|   |       └── /img                                    # App core image file
|   ├── app.container.jsx                               # App container
|   ├── app.module.jsx                                  # App module
|   ├── app.routes.jsx                                  # App routes
|   ├── index.html                                      # App index template file
|   ├── Manifest.json                                   # PWA config File
|   └── sw.js                                           # PWA Service Worker
├── /config                                             # Webpack config folder
|   └── webpack.js                                      # Webpack config file
|   └── webpack.production.js                           # Webpack config file production env
└── package.json
```
