import { defineStore } from 'pinia';

export const piniaStore = defineStore('store', {
  state: () => ({
    isLogin: false,
  }),
  persist: true,
});