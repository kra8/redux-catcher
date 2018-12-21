# Redux Catcher
Error handling for redux.  

Support [Flux Standard Action](https://github.com/redux-utilities/flux-standard-action).  
Example action for a rejected Promise:   
``` js
{
  type: 'FAILURE_ADD_TODO',
  payload: new Error(),
  error: true
}
```

# Install
```
yarn add redux-catcher
```
or
```
npm i redux-catcher
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
