import { AxiosError } from 'axios'

export default interface IError {
  type: 'HTTP' | 'INTERNAL'
  name: string
  reloadPage?: boolean
  message?: string
  httpError?: AxiosError<any>
  refreshCallback?: () => void | Promise<void>
}
