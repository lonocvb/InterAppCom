// Implement a inter-communication between tabs by localStorage

'use strict';

class InterComm {
  
  constructor() {

  }

  on(eventName, callback) {

  }

  emit(eventName, args) {
    
  }

  static getInstance() {
    if (!InterComm.instance) {
      InterComm.instance = new InterComm(options);
    }
    return InterComm.instance;
  }
}

export default InterComm;
