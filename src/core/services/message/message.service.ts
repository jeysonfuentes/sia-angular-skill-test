import { Injectable } from '@angular/core';
import { ObservableStore } from '@codewithdan/observable-store';
import { of } from 'rxjs';
import { MessagesMock } from 'src/core/data/data';
import { IMessage } from 'src/core/models/message.interface';
import { MessageStore, MessageStoreActions } from './message.store';

@Injectable({
  providedIn: 'root',
})
export class MessageService extends ObservableStore<MessageStore> {
  constructor() {
    super({ trackStateHistory: true });
    const initalState: MessageStore = {
      messages: MessagesMock,
      messageSeleted: {
        id: 0,
        sendToOption: 1,
        sendToName: '',
        title: '',
        content: '',
        sendBy: '',
        sendDate: '',
        seen: [],
        image: ''
      },
    };
    this.setState(initalState, 'INIT_STATE');
  }

  getMessages() {
    const { messages } = this.getState();
    return of(messages);
  }

  sendMessage(message: IMessage) {
    let state = this.getState();
    const lastMessageId = Math.max(... state.messages.map(msg => msg.id))
    message.id = lastMessageId + 1
    state.messages.push(message);
    this.setState(
      { messages: state.messages },
      MessageStoreActions.sendMessage
    );
  }

  editMessage(message: IMessage) {
    let state = this.getState();
    let editMessageIndex = state.messages.findIndex((msg) => msg.id === message.id);
    state.messages.splice(editMessageIndex, 1, message );
    this.setState(
      { messages: state.messages },
      MessageStoreActions.editMessage
    );
  }

  setMessageSelected(id: number) {
    let state = this.getState();
    let editMessage = state.messages.find((msg) => msg.id === id);
    return this.setState(
      { messageSeleted: editMessage },
      MessageStoreActions.setMessageSelected
    );
  }
}
