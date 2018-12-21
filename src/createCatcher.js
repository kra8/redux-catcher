const createCatcher = callback => {
  return store => next => action => {
    if (action.error) {
      callback(action, store.dispatch)
    }

    next(action)
  }
}

module.exports = createCatcher
