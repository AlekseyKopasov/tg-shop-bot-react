export type ProductType = {
  id: number
  title: string
  description: string
  price: number
}

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
  },
  query_id: string
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
        sendData: (data: string) => void
        onEvent: (eventType: string, eventHandler: sendData) => void
        offEvent: (eventType: string, eventHandler: sendData) => void
        MainButton: TgMainButtonTypes
        initDataUnsafe: TgInitDataUnsafeTypes
      }
    }
  }
}