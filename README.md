# Communication Channel
A library that allow communication between different apps

### Setup project
```
npm install
```

### NPM scripts

 - `npm t`: Run test suite
 - `npm start`: Runs `npm run build` in watch mode
 - `npm run test:watch`: Run test suite in [interactive watch mode](http://facebook.github.io/jest/docs/cli.html#watch)
 - `npm run test:prod`: Run linting and generate coverage
 - `npm run build`: Generage bundles and typings, create docs
 - `npm run lint`: Lints code
 - `npm run commit`: Commit using conventional commit style ([husky](https://github.com/typicode/husky) will tell you to use it if you haven't :wink:)

 ### Open the docs
 - `npm run build`
 - `live-server dist/docs`

 ### To create a local npm package to test with your library
 - npm pack
 - npm install ../communication-channel/communication-channel-0.0.1.tgz  (in your project)

# microfrontend-com-channel
