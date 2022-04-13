import { IMessage } from "src/core/models/message.interface";

export interface MessageStore {
  messages: IMessage[],
  messageSeleted: IMessage
}

export enum MessageStoreActions {
  sendMessage = 'SEND_MESSAGE',
  getMessages = 'GET_MESSAGES',
  editMessage = 'EDIT_MESSAGE',
  setMessageSelected = 'SET_MESSAGE_SELECTED'
}
