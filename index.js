const es = require('event-stream')

const source      = 'abegilost'.split('')
const translation = '483611057'.split('')

const replacers = source.map((char, index) => {
  return {
    regex: new RegExp(char, 'ig'),
    replacement: translation[index]
  }
})

function translate(src) {
  return replacers.reduce((str, r) => str.replace(r.regex, r.replacement), src)
}

process.stdin
  .pipe(es.split())
  .pipe(es.through(function (str) {
    this.emit('data', translate(str))
  }))
  .pipe(process.stdout)
    
