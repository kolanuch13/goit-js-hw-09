!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var u=r("iU1Pc"),i=document.querySelector('[name="delay"]'),c=document.querySelector('[name="step"]'),a=document.querySelector('[name="amount"]');function l(e,n){return new Promise((function(t,o){var r=Math.random()>.3;setTimeout((function(){setTimeout((function(){r?t("Fulfilled promise ".concat(e," in ").concat(n+Number(i.value),"ms")):o("Rejected promise ".concat(e," in ").concat(n+Number(i.value),"ms"))}),n)}),i.value)}))}document.querySelector("form").addEventListener("submit",(function(n){n.preventDefault();for(var t=1;t<=a.value;t++)l(t,Number(c.value)*t).then((function(n){e(u).Notify.success(n)})).catch((function(n){e(u).Notify.failure(n)}))}))}();
//# sourceMappingURL=03-promises.ac579018.js.map
