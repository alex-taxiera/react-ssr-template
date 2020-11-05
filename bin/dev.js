const nodemon = require('nodemon')

nodemon({
  script: 'src/index.js',
  ext: 'js json png gif',
  watch: [
    'src',
    'dist',
  ],
})

nodemon.on('start', function () {
  // eslint-disable-next-line no-console
  console.log('App has started')
}).on('quit', function () {
  // eslint-disable-next-line no-console
  console.log('App has quit')
  process.exit()
}).on('restart', function (files) {
  // eslint-disable-next-line no-console
  console.log('App restarted due to: ', files)
})
