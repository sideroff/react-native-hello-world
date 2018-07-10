import { NavigationActions } from 'react-navigation';

let _navigator

function init(navigatorRef) {
  _navigator = navigatorRef
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  )
}

export default {
  init,
  navigate,
}