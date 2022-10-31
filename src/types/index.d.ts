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

type FormEventDataTypes = {
  sendData: (country: string,
             street: string,
             subject: string,
             ) => Promise<void>
}

declare global {
  interface Window {
    Telegram: {
      WebApp: {
        ready: () => void
        close: () => void
        sendData: (data: string) => any
        onEvent: (eventName: string, data: () => void) => Promise<void>
        offEvent: (eventName: string, data: () => void) => Promise<void>
        MainButton: TgMainButtonTypes
        initDataUnsafe: TgInitDataUnsafeTypes
      }
    }
  }
}