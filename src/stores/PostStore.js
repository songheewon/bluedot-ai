import { defineStore } from 'pinia'
// import axios from 'axios'

const apiHost = 'https://api.bluedot.so'
const token = 'a5a642fb37ef8f4f4a6eb990558ccc8047a5ba79353e7b8519c6ac2425c3a4d3cb2c40fe1250fa4597cdcbd10683c02c90a6a648bd1f532580b06b9d01a80acbe5f2529bb320c05df9915b340d4f7e2dc81af5486894b696a1de19c759ee3aac3c43e52e4750d55782629d03ac91a09b9e50c7577ab5a6dd7b0193374f1321ab'

export const usePostStore = defineStore('PostStore', {
  id: 'post',
  state: () => ({
    posts: [],
    post: null,
    loading: false,
    error: null,
    pagination: {
      page: 1,
      postsPerPage: 5
    }
  }),
  getters: {
    getPostsPerPartner: (state) => {
      return (partnerId) => state.posts.filter((post) => post.partnerId === partnerId)
    },
    searchedPosts: (state) => (search) => {
      return state.posts.filter((post) => post.title.includes(search))
    }
  },
  actions: {
    async filterPosts (page, query) {
      this.loading = true
      try {
        // const results = await fetch(`https://api.tevot.xyz/api/posts?publicationState=live&populate=%2A&sort[0]=origin_published_at%3Adesc&pagination[page]=${page}&pagination[pageSize]=8&filters[title][$containsi]=${query}`, {
        //   headers: {
        //     Authorization: 'Bearer df986906e1c2f167bbb769f1a057636627c40f22f74cce52d3f5c3d8e94b1dd43da421df05620773b129865a5d4e29e81ee9c30d95c751f92476c7ad2f30872723a3f9f6971e7b47e3e01e733991dd552690a5c135e58914ba12148436cca8925152144f059b35664f2be414ddc341e1d78f73c41ef5aa999039f4b809b8edcc'
        //   }
        // })
        //   .then((response) => response.json())

        const results = await fetch(`${apiHost}/api/posts?publicationState=live&populate=%2A&sort[0]=origin_published_at%3Adesc&pagination[page]=${page}&pagination[pageSize]=8&filters[title][$containsi]=${query}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
          .then((response) => response.json())
        this.posts = results.data
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
    async moreLoad (page) {
      this.loading = true
      try {
        const results = await fetch(`${apiHost}/api/posts?publicationState=live&populate=%2A&sort[0]=origin_published_at%3Adesc&pagination[page]=${page}&pagination[pageSize]=8`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
          .then((response) => response.json())
        const d = []
        for (const ad of results.data) {
          d.push(ad)
        }
        this.posts = this.posts.concat(d)
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
    async moreLoadWithSearch (page, query) {
      this.loading = true
      try {
        const results = await fetch(`${apiHost}/api/posts?publicationState=live&populate=%2A&sort[0]=origin_published_at%3Adesc&pagination[page]=${page}&pagination[pageSize]=8&filters[title][$containsi]=${query}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
          .then((response) => response.json())
        const d = []
        for (const ad of results.data) {
          d.push(ad)
        }
        this.posts = this.posts.concat(d)
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
    async fetchPosts (page, postsPerPage = 8) {
      this.posts = []
      this.loading = true
      // function sleep (ms) {
      //   return new Promise(resolve => setTimeout(resolve, ms))
      // }
      try {
        // await sleep(1000)
        // const ss = await fetch('https://siluniv.github.io/play-bluedot/data/posts.json').then((response) => response.json())
        const results = await fetch(`${apiHost}/api/posts?publicationState=live&populate=%2A&sort[0]=origin_published_at%3Adesc&pagination[page]=${page}&pagination[pageSize]=${postsPerPage}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
          .then((response) => response.json())
        // console.log(results.data)
        const d = []
        for (const ad of results.data) {
          d.push(ad)
        }
        this.posts = d
        // this.posts = results.data
        // axios.get('http://localapiHost:1337/api/restaurants').then(response => {
        //   console.log(response);
        // });

        // console.log(this.posts)
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
    async fetchPost (id) {
      this.post = null
      this.loading = true
      try {
        this.post = await fetch('https://siluniv.github.io/play-bluedot/data/posts.json').then((response) => {
          const post = response.json().then((items) => {
            return items[id - 1]
          })
          return post
        })
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
    async sortByNewest () {
      try {
        this.posts.sort((a, b) => new Date(b.published_at) - new Date(a.published_at))
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
    async sortByPopular () {
      try {
        this.posts.sort((a, b) => a.id - b.id)
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    }
  }
})
