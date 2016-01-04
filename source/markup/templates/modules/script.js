'use strict'

//----------------------------------------------------------
// modules
//----------------------------------------------------------
// npm
const m = require('mithril')

//----------------------------------------------------------
// logic
//----------------------------------------------------------
const script =
  m('script'
    , { src: '/code/bundle.js'
      , async: true
      })

//----------------------------------------------------------
// exports
//----------------------------------------------------------
module.exports = script