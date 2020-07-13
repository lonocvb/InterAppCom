// Implement a inter-communication between tabs by localStorage

'use strict';

class Attender {

  constructor(isOnce) {
    
  }

}

class MessageCenter {
  
  constructor() {
    
  }

  addAttender(attender) {

  }

  removeAttender(attender) {
    
  }

  on(eventName, callback) {

  }

  emit(eventName, args) {
    
  }

  static getInstance() {
    if (!MessageCenter.instance) {
      MessageCenter.instance = new MessageCenter();
    }
    return MessageCenter.instance;
  }

}

export default MessageCenter;
