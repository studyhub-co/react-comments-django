import { createBrowserHistory } from 'history'

let ROOT_URL = ''

const conf = window.REACT_COMMENTS_DJANGO_CONFIG
if (conf) {
  ;({ ROOT_URL } = conf)
}

const history = createBrowserHistory({ basename: ROOT_URL })
export default history
