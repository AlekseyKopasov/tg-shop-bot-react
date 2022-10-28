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
  onClick: (cb: any) => void
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
        sendData: (data: string) => void
        onEvent: (eventName: string, data: () => void) => void
        offEvent: (eventName: string, data: () => void) => void
        MainButton: TgMainButtonTypes
        initDataUnsafe: TgInitDataUnsafeTypes
      }
    }
  }
}