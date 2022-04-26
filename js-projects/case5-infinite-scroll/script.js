;(function () {
  'use strict'

  const get = (target) => {
    return document.querySelector(target)
  }

  const $posts = get('.posts')

  const end = 100
  const limit = 10
  let total = 10
  let page = 1

  const getPost = async () => {
    const API_URL = `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
    const res = await fetch(API_URL)
    if (!res.ok) {
      throw new Error('에러')
    }
    return await res.json()
  }

  const showPosts = (posts) => {
    posts.forEach((post) => {
      const $post = document.createElement('div')
      $post.classList.add('post')
      $post.innerHTML = `
    <div class="header">
      <div class="id">${post.id}</div>
      <div class="title">${post.title}</div>
    </div>
    <div class="body">
      ${post.body}
    </div>
    `
      $posts.appendChild($post)
    })
  }

  const loadPost = async () => {
    const res = await getPost()
    showPosts(res)
  }

  const onScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement
    if (total === end) {
      window.removeEventListener('scroll', onScroll)
      return
    }
    if (scrollTop + clientHeight >= scrollHeight - 5) {
      page++
      total += 10
      loadPost()
    }
  }

  const init = () => {
    window.addEventListener('DOMContentLoaded', () => {
      loadPost()
    })
    window.addEventListener('scroll', onScroll)
  }
  init()
})()
