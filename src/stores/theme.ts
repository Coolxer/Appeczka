import { defineStore } from 'pinia'

export const useTheme = defineStore('themeStore', {
  state: () => {
    return {
      lightTheme: true
    }
  },

  getters: {
    themeClass: (state) => 
      state.lightTheme ? 'theme-light': 'theme-dark' 
  },

  actions: {
    changeTheme(): void {
      this.lightTheme = !this.lightTheme
    }
  }
});
