import { create } from 'zustand'

interface iStoreDom {
  showAside: boolean
  setShowAside: ({ showAside }: { showAside: boolean }) => void
}

export const useStorDom = create<iStoreDom>()(set => ({
  showAside: false,
  setShowAside: ({ showAside }: { showAside: boolean }) => set({ showAside }),
}))
