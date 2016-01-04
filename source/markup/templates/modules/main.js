'use strict'

//----------------------------------------------------------
// modules
//----------------------------------------------------------
// npm
const m = require('mithril')

//----------------------------------------------------------
// logic
//----------------------------------------------------------
const main = content =>
  m('main'
    , { id: 'scroll-down-target'
      , role: 'main'
      }
    , content)

//----------------------------------------------------------
// exports
//----------------------------------------------------------
module.exports = main
