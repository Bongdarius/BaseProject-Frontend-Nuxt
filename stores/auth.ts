import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    jwtToken: null as string | null,
  }),
  getters: {
    isAuthenticated(): boolean {
      return !!this.jwtToken;
    },
  },
  actions: {
    setJwtToken(token: string): void {
      this.jwtToken = token;
    },
    clearJwtToken(): void {
      this.jwtToken = null;
    },
  },
});
