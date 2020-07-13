
function Log(msg) {
  log.appendChild(document.createTextNode(msg));
  log.appendChild(document.createElement('br'));
}

function getParentUrl() {
  var isInIframe = (parent !== window),
      parentUrl = null;

  if (isInIframe) {
      parentUrl = document.referrer;
  }

  return parentUrl;
}

function main() {
  Log(location.href);
  Log('parent:' + getParentUrl);
}

main();

/*
var pc = new RTCPeerConnection(), dc, enterPressed = e => e.keyCode == 13;

var connect = () => init(dc = pc.createDataChannel("chat"));
pc.ondatachannel = e => init(dc = e.channel);

var init = dc => {
  dc.onopen = e => (dc.send("Hi!"), chat.select());
  dc.onclose = e => log("Bye!");
  dc.onmessage = e => log(e.data);
};

chat.onkeypress = e => {
  if (!enterPressed(e)) return;
  dc.send(chat.value);
  log("> " + chat.value);
  chat.value = "";
};

pc.oniceconnectionstatechange = e => log(pc.iceConnectionState);
pc.onicecandidate = e => send({ candidate: e.candidate });
pc.onnegotiationneeded = e => pc.createOffer()
  .then(offer => pc.setLocalDescription(offer))
  .then(() => send({ sdp: pc.localDescription }))
  .catch(log);

var sc = new localSocket(), send = obj => sc.send(JSON.stringify(obj));
var incoming = msg => msg.sdp &&
  pc.setRemoteDescription(new RTCSessionDescription(msg.sdp))
  .then(() => pc.signalingState == "stable" || pc.createAnswer()
    .then(answer => pc.setLocalDescription(answer))
    .then(() => send({ sdp: pc.localDescription })))
  .catch(log) || msg.candidate &&
  pc.addIceCandidate(new RTCIceCandidate(msg.candidate)).catch(log);
sc.onmessage = e => incoming(JSON.parse(e.data));

var log = msg => div.innerHTML += "<br>" + msg;
*/