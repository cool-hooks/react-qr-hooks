"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var react=require("react"),QrCode=_interopDefault(require("qrcode")),QrcodeDecoder=_interopDefault(require("qrcode-decoder")),useQrEncode=function(e,r){void 0===r&&(r={});var t=react.useState(null),o=t[0],c=t[1];return react.useEffect((function(){if(e){var t=document.createElement("canvas");t.width=1024,t.height=1024,QrCode.toDataURL(t,e,r,(function(e,r){e||r&&c(r)}))}}),[e,r]),o},useQrDecode=function(e){var r=react.useState(null),t=r[0],o=r[1];return react.useEffect((function(){(new QrcodeDecoder).decodeFromImage(e).then((function(e){o(e.data)}))}),[e]),t};exports.useQrDecode=useQrDecode,exports.useQrEncode=useQrEncode;
//# sourceMappingURL=react-qr-hooks.cjs.js.map