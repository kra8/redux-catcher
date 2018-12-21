# Redux Catcher
Error handling for redux.  

Support Flux Standard Action.  
Example action for a rejected Promise:   
``` js
{
  type: 'FAILURE_ADD_TODO',
  payload: new Error(),
  error: true
}
```

# Apply middleware
``` js
const handler = action => {
  console.log(action)
}

import { createCatcher } from 'redux-catcher'

applyMiddleware(
  createCatcher(handler)
)
```

# TODOs
- [x] Create createCatcher
- [ ] Create test

# LICENCE
MIT
