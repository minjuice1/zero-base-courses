;(function () {
  'use strict'

  const get = (target) => {
    return document.querySelector(target)
  }

  const $posts = get('.posts')

  const getPost = async () => {
    const API_URL = 'https://jsonplaceholder.typicode.com/posts'
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

  const init = () => {
    window.addEventListener('DOMContentLoaded', () => {
      loadPost()
    })
  }
  init()
})()
