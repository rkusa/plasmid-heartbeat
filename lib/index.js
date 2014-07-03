module.exports = function(opts) {
  var interval = opts && opts.interval || 15000

  return function(host) {
    host.state.opts.ns['❤'] = {
      history: false
    }

    var timeout

    function resetTimeout() {
      clearTimeout(timeout)
      timeout = setTimeout(heartbeat, interval)
    }

    function heartbeat() {
      host.set('❤', '❤', '❤')
    }

    host.on('set', resetTimeout)
    resetTimeout()
  }
}