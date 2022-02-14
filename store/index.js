import axios from 'axios'
export const state = () => ({
  all_restaurants: [],
})

export const mutations = {
  SET_STORE(state, value) {
    state.all_restaurants = value
  },
}

export const getters = {}

export const actions = {
  GetDiscover(_, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'GET',
        url: `https://api.themoviedb.org/3/discover/tv?api_key=2681d69e1ec92b403f125850e542d11e&with_networks=213`,
        data: payload,
        contentType: 'application/json',
      })
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },

  GetTrending(_, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'GET',
        url: `https://api.themoviedb.org/3/trending/all/week?api_key=2681d69e1ec92b403f125850e542d11e&language=en-US`,
        data: payload,
        contentType: 'application/json',
      })
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },

  TopMovies(_, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/top_rated?api_key=2681d69e1ec92b403f125850e542d11e&language=en-US`,
        data: payload,
        contentType: 'application/json',
      })
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },

  ComedyMovies(_, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'GET',
        url: `https://api.themoviedb.org/3/discover/movie?api_key=2681d69e1ec92b403f125850e542d11e&with_genres=35`,
        data: payload,
        contentType: 'application/json',
      })
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },

  HorrorMovies(_, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'GET',
        url: `https://api.themoviedb.org/3/discover/movie?api_key=2681d69e1ec92b403f125850e542d11e&with_genres=27`,
        data: payload,
        contentType: 'application/json',
      })
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },

  ActionMovies(_, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'GET',
        url: `https://api.themoviedb.org/3/discover/movie?api_key=2681d69e1ec92b403f125850e542d11e&with_genres=28`,
        data: payload,
        contentType: 'application/json',
      })
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
}
