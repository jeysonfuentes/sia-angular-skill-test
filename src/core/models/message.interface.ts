import { ISeen } from './seen.interface';
export interface IMessage {
  id: number
  sendToOption: number
  sendToName: string
  workerId?: number
  organizationLevelId?: number
  sendDate: string
  title: string
  content: string
  sendBy: string
  seen: ISeen[]
  image: string

}
