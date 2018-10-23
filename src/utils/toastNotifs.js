import { toast } from 'react-toastify'

const TOP_CENTER_POSITION = {
  position: toast.POSITION.TOP_CENTER,
}

export const notify = msg => toast(msg, TOP_CENTER_POSITION)
export const notifySuccess = msg => toast.success(msg, TOP_CENTER_POSITION)
export const notifyError = msg => toast.error(msg, TOP_CENTER_POSITION)
export const notifyInfo = msg => toast.info(msg, TOP_CENTER_POSITION)
export const notifyWarn = msg => toast.warn(msg, TOP_CENTER_POSITION)
