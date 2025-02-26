import { defineStore } from 'pinia'

const apiHost = 'https://api.bluedot.so'
const token = 'a5a642fb37ef8f4f4a6eb990558ccc8047a5ba79353e7b8519c6ac2425c3a4d3cb2c40fe1250fa4597cdcbd10683c02c90a6a648bd1f532580b06b9d01a80acbe5f2529bb320c05df9915b340d4f7e2dc81af5486894b696a1de19c759ee3aac3c43e52e4750d55782629d03ac91a09b9e50c7577ab5a6dd7b0193374f1321ab'

export const useTosStore = defineStore('TosStore', {
  state: () => ({
    termsOfService: '',
    loading: false,
    error: null
  }),
  actions: {
    async fetchTos () {
      try {
        const results = await fetch(`${apiHost}/api/terms-of-service`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
          .then((response) => response.json())
        this.termsOfService = results.data.attributes.contents
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    }
  }
})
