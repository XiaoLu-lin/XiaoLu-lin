import { defineStore } from 'pinia'
export const useDialogStore = defineStore('dialog', {
  state() {
    return { comp: {} }
  },
  actions: {
    getDialogUuid() {},
  },
})
