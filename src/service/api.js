import axios from 'axios'

export const api = axios.create({
  baseUrl: 'url_api_here',
  headers: {
    Authorization: 'token_here'
  }
})
