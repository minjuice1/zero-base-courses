;(function () {
  'use strict'

  const get = (target) => {
    return document.querySelector(target)
  }

  const $posts = get('.posts')
  const $loader = get('.loader')

  const end = 100
  const limit = 10
  let total = 10
  let page = 1

  const hideLoader = () => {
    $loader.classList.remove('show')
  }

  const showLoader = () => {
    $loader.classList.add('show')
  }

  const getPosts = async (page, limit) => {
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

  const loadPost = async (page, limit) => {
    showLoader()
    try {
      const res = await getPosts(page, limit)
      showPosts(res)
    } catch (error) {
      console.error(error.message)
    } finally {
      hideLoader()
    }
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
      loadPost(page, limit)
      return
    }
  }

  const init = () => {
    window.addEventListener('DOMContentLoaded', () => {
      loadPost(page, limit)
    })
    window.addEventListener('scroll', onScroll)
  }
  init()
})()
