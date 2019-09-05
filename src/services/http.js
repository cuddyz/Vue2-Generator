import axios from 'axios'
import store from '@/store/index'

let loadingCounter = 0

function increment() {
  if (loadingCounter === 0) {
    store.commit('setLoading')
  }
  loadingCounter++
}

function decrement() {
  loadingCounter--
  if (loadingCounter === 0) {
    store.commit('clearLoading')
  }
}

function http() {
  const instance = axios.create({
    baseURL: ''
  })
  instance.interceptors.request.use(function(config) {
    increment()
    return config
  }, function(error) {
    decrement()
    store.commit('setAlert', error)
    return Promise.reject(error)
  })
  instance.interceptors.response.use(function (response) {
    decrement()
    return response
  }, function (error) {
    decrement()
    if (!error || !error.response || !error.response.config || !error.response.config.willHandleErrors) {
      store.commit('setAlert', error)
    }
    return Promise.reject(error)
  })
  return instance
}

export default http
