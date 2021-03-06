const source      = 'abegilost'.split('') // eslint-disable-line no-multi-spaces
const translation = '483611057'.split('')

const replacers = source.map((char, index) => {
  return {
    regex: new RegExp(char, 'ig'),
    replacement: translation[index]
  }
})

module.exports.translate = function (src) {
  return replacers.reduce((str, r) => str.replace(r.regex, r.replacement), src)
}

