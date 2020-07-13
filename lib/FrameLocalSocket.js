
import LocalSocket from "./LocalSocket.js";
import FrameSocket from "./FrameSocket.js";

class FrameLocalSocket {

  constructor(iframe) {
    if (iframe) {
      this.peer = new FrameSocket(iframe);
      this.peer.onmessage = msg => this.onmessage(msg);
    } else {
      this.peer = new FrameSocket();
      this.peer.onmessage = msg => this.peerInternal.send(msg);
      this.peerInternal = new LocalSocket();
      this.peerInternal.onmessage = msg => this.peer.send(msg);
    }
  }

  send(msg) {
    return this.peer.send(msg);
  }

  close() {
    if (this.peer) {
      this.peer.close();
    }
    if (this.peerInternal) {
      this.peerInternal.close();
    }
  }

}

export default FrameLocalSocket;
