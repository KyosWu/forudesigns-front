/**
 * 管理本地存储
 */
import Cache from 'web-storage-cache'

const localStorageCache = new Cache()
const sessionCache = new Cache({storage: 'sessionStorage'})

const KEYS = {
  token: 'ak',
}

// 这里改为自己的nameSpace，比如项目名称
const nameSpace = 'KyosWu'

for (let i in KEYS) {
  if (KEYS.hasOwnProperty(i)) {
    KEYS[i] = `${nameSpace}:${i}`.toUpperCase()
  }
}

class LocalStorage {
  constructor (key, exp = null, type = 'localStorage') {
    this.key = key
    this.exp = exp
    this.storage = (type === 'localStorage') ? localStorageCache : sessionCache
  }

  save (value) {
    const options = this.exp ? { exp: this.exp } : null
    this.storage.set(this.key, value, options)
  }

  load () {
    return this.storage.get(this.key)
  }

  delete () {
    this.storage.delete(this.key)
  }
}

export function saveAccessToken (token, expiredIn) {
  localStorageCache.set(KEYS.token, token, { exp: expiredIn })
}

export function getAccessToken () {
  const token = localStorageCache.get(KEYS.token)
  return token
}

export function removeAccessToken () {
  sessionCache.delete(KEYS.token)
}
