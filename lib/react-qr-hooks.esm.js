import{useState as t,useEffect as r}from"react";import o from"qrcode";var n=function(n,e){void 0===e&&(e={});var a=t(null),i=a[0],c=a[1];return r((function(){if(n){var t=document.createElement("canvas");t.width=1024,t.height=1024,o.toDataURL(t,n,e,(function(t,r){t||r&&c(r)}))}}),[n,e]),i};export{n as useQrEncode};
//# sourceMappingURL=react-qr-hooks.esm.js.map
