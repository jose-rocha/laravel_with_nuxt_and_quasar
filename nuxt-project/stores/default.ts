import { defineStore } from 'pinia';

export const useDefaultStore = defineStore('default', {
  state: () => ({
    leftDrawerOpen: false,
  }),
  persist: false,
});
