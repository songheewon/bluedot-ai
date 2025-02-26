import { defineStore } from 'pinia'
// import { usePostStore } from './PostStore'
import $ from 'jquery'

const host = 'https://api.bluedot.so'
const token = 'a5a642fb37ef8f4f4a6eb990558ccc8047a5ba79353e7b8519c6ac2425c3a4d3cb2c40fe1250fa4597cdcbd10683c02c90a6a648bd1f532580b06b9d01a80acbe5f2529bb320c05df9915b340d4f7e2dc81af5486894b696a1de19c759ee3aac3c43e52e4750d55782629d03ac91a09b9e50c7577ab5a6dd7b0193374f1321ab'

export const usePartnerStore = defineStore('PartnerStore', {
  id: 'partner',
  state: () => ({
    partners: [],
    partner: null,
    loading: false,
    error: null
  }),
  getters: {
    getPartner: (state) => (id) => {
      return state.partners.find((partner) => partner.id === id)
    },
    getPostPartner: (state) => (id) => {
      // const postStore = usePostStore()
      return state.partners.find((partner) => partner.id === id)
    }

  },
  actions: {
    async partnerFromJson () {
      this.partners = []
      try {
        const results = await $.getJSON('https://accounts.withbluedot.site/bluedot/docker/sites', {
          headers: {
            'Access-Control-Allow-Credentials': true,
            'Access-Control-Allow-Origin': '*'
          }
        }).then((data) => data)
        this.partners = results
      } catch (err) {
        this.error = err
      } finally {
        this.loading = false
      }
    },
    async fetchPartnersFromAdmin () {
      this.partners = []
      this.loading = true
      console.log('HI')
      try {
        // this.partners = await fetch('https://siluniv.github.io/play-bluedot/data/partners.json').then((response) => response.json())
        // const results = await fetch('https://api.tevot.xyz/api/sites?publicationState=live&populate[0]=tags', {
        //   headers: {
        //     Authorization: 'Bearer df986906e1c2f167bbb769f1a057636627c40f22f74cce52d3f5c3d8e94b1dd43da421df05620773b129865a5d4e29e81ee9c30d95c751f92476c7ad2f30872723a3f9f6971e7b47e3e01e733991dd552690a5c135e58914ba12148436cca8925152144f059b35664f2be414ddc341e1d78f73c41ef5aa999039f4b809b8edcc'
        //   }
        // })
        //   .then((response) => response.json())

        const endPoint2 = 'https://admin.bluedot.so/docker/sites'
        const results = await fetch(endPoint2, {
          method: 'GET',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Access-Control-Allow-Origin': '*'
          }
        })
          .then((response) => response.json())
        this.partners = results.data
        console.log(this.partners)
      } catch (error) {
        this.error = error
        console.log(error)
      } finally {
        this.loading = false
      }
    },
    async fetchPartners (query) {
      this.partners = []
      this.loading = true
      try {
        // this.partners = await fetch('https://siluniv.github.io/play-bluedot/data/partners.json').then((response) => response.json())
        // const results = await fetch('https://api.tevot.xyz/api/sites?publicationState=live&populate[0]=tags', {
        //   headers: {
        //     Authorization: 'Bearer df986906e1c2f167bbb769f1a057636627c40f22f74cce52d3f5c3d8e94b1dd43da421df05620773b129865a5d4e29e81ee9c30d95c751f92476c7ad2f30872723a3f9f6971e7b47e3e01e733991dd552690a5c135e58914ba12148436cca8925152144f059b35664f2be414ddc341e1d78f73c41ef5aa999039f4b809b8edcc'
        //   }
        // })
        //   .then((response) => response.json())

        let endPoint = `${host}/api/sites?sort=updatedAt%3Adesc&publicationState=live&populate[0]=tags&populate[1]=logo&pagination[pageSize]=100`
        if (query) {
          endPoint += `&filters[name][$containsi]=${query}`
        }

        const results = await fetch(endPoint, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
          .then((response) => response.json())
        this.partners = results.data
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
    async fetchPartner (id) {
      this.partner = null
      this.loading = true
      try {
        this.partner = await fetch('https://siluniv.github.io/play-bluedot/data/partners.json').then((response) => {
          const partner = response.json().then((items) => {
            return items[id - 1]
          })
          return partner
        })
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
    async filterByKeyword (keyword) {
      this.partners = []
      this.loading = true
      try {
        let endPoint = `${host}/api/sites?sort=updatedAt%3Adesc&publicationState=live&populate[0]=tags&populate[1]=logo&pagination[pageSize]=100`
        if (keyword !== '') {
          endPoint += `&filters[name][$containsi]=${keyword}`
        }

        const results = await fetch(endPoint, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
          .then((response) => response.json())
        this.partners = results.data
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
    async filterByTag (tag) {
      this.partners = []
      this.loading = true
      try {
        const partnerTags = ['출판사', '뉴스미디어', '인플루언서', '블로거', '기업브랜드']

        let endPoint = `${host}/api/sites?sort=updatedAt%3Adesc&publicationState=live&populate[0]=tags&populate[1]=logo&pagination[pageSize]=100`
        if (tag === '기타') {
          partnerTags.map(function (item) {
            endPoint += `&filters[tags][name][$notContainsi]=${item}`
            return item
          })
        } else if (tag !== '전체') {
          endPoint += `&filters[tags][name][$containsi]=${tag}`
        }

        const results = await fetch(endPoint, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
          .then((response) => response.json())
        this.partners = results.data
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    }
  }
})
