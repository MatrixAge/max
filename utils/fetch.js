import { createApolloFetch } from 'apollo-fetch'

function xget(url, data) {
      return fetch(url, {
            method: 'get',
            credentials: 'same-origin',
            mode: 'same-origin',
            data: data
      }).then(res => res.json())
}

function xpost(url, data) {
      return fetch(url, {
            method: 'post',
            credentials: 'same-origin',
            mode: 'same-origin',
            body: data
      }).then(res => res.json())
}

//自定义graphql连接
const uri = 'http://localhost:3000/graphql'
const xfetch = createApolloFetch({ uri })

export {
      xget,
      xpost,
      xfetch
}