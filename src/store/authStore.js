import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useAuthStore = create(persist(
    (set) => ({
        headers: {
            client: '',
            uid: '',
            'access-token': '',
        },

        updateHeaders: (newHeaders) => set(() => ({ headers: newHeaders})),

        userData: {},
        updateUserData: (data) => set(() => ({ userData: data})),

        isLoggedIn: () => {
            const { headers } = useAuthStore.getState();

            return Boolean(headers['access-token'] !== '');
        }
    }),
    {
        name: 'authStore',
        storage: createJSONStorage(() => localStorage),
    }
));