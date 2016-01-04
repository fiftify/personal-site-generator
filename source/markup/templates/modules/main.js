'use strict'

//----------------------------------------------------------
// modules
//----------------------------------------------------------
// npm
const m = require('mithril')

//----------------------------------------------------------
// logic
//----------------------------------------------------------
const main = content => data =>
  m('main'
    , { id: 'scroll-down-target'
      , role: 'main'
      }
    , new Array()
        .concat(content)
        .reduce((a, b) => a.concat(b), []))
        .map(el => el(data))

//----------------------------------------------------------
// exports
//----------------------------------------------------------
module.exports = main
