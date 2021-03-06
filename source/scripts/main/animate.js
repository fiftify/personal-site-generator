/**
 * @func animate
 * @desc animate an element with easing
 * @param {object} el - html element to animate
 * @param {function} deltaFn - function to apply delta of animation
 * @param {number} ms - total duration of animation
 * @param {object} easing - easing function
 * @param {function} [cb] - optional callback
 * @returns {object} stop method
 */
export function animate(el, deltaFn, ms, easing, cb) {
  // initial vars
  const start = Date.now()
  let keepRunning = true

  // convenience fn
  const apply = p => deltaFn(el, p)

  // main loop
  function loop() {
    if (keepRunning) {
      // percent elapsed time
      const pet = (Date.now() - start) / ms
      return pet >= 1 ? done() : cont(pet)
    }
  }

  // loop again
  function cont(p) {
    requestAnimationFrame(loop)
    apply(easing.get(p))
  }

  // finish animation
  function done() {
    apply(1)
    if (cb) return cb()
  }

  // start loop
  requestAnimationFrame(loop)

  // export stop method
  return {stop: () => keepRunning = false}
}

/**
 * @func mAnimate
 * @desc simultaneously animate multiple elements with easing
 * @param {array} els - array of html elements
 * @param {function} deltaFn - function to apply delta of animation
 * @param {number} ms - total duration of animation
 * @param {object} easing - easing function
 * @param {function} [cb] - optional callback
 * @returns {object} stop method
 */
export function mAnimate(els, deltaFn, ms, easing, cb) {
  const count = els.length
  let cbs = 0
  function metaCb() {
    cbs += 1
    if (cbs === count && cb) return cb()
  }
  const anims = els.map(el => animate(el, deltaFn, ms, easing, metaCb))
  return {stop: () => anims.map(anim => anim.stop())}
}
