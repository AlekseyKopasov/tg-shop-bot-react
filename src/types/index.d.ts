export {}
type TgMainButtonSetParamsTypes = {
  text?: string
  color?: string
  text_color?: string
  is_active?: boolean
  is_visible?: boolean
}

type TgMainButtonTypes = {
  isVisible: boolean
  show: () => void
  hide: () => void
  setParams: ({}: TgMainButtonSetParamsTypes) => void
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