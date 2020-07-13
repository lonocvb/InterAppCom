
class FrameSocket {

  constructor(iframe) {
    this.peer = iframe ? iframe.contentWindow : window.parent;
    this.mIsIframe = FrameSocket.IsInIframe();

    this.onmessage = () => {};
    window.onmessage = e => this.onmessage(e.data);
  }

  send(msg) {
    return this.peer.postMessage(msg, '*');
  }

  close() {
    // do nothing
  }

  static IsInIframe() {
    return window.parent !== window;
  }

  static GetParentUrl() {
    let parentUrl = null;

    if (FrameSocket.IsInIframe()) {
        parentUrl = document.referrer;
    }

    return parentUrl;
  }
}

export default FrameSocket;
