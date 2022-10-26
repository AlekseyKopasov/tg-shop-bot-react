export {};
type TgMainButtonTypes = {
  isVisible: boolean
  show: () => void
  hide: () => void
}

type TgInitDataUnsafeTypes = {
  user: {
    username: string
    id: number
  }
}

declare global {
  interface Window {
    Telegram: {
      WebApp: {
        ready: () => void
        close: () => void
        MainButton: TgMainButtonTypes
        initDataUnsafe: TgInitDataUnsafeTypes
      }
    }
  }
}