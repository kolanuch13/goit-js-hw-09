function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o);var u=o("eWCmQ");const l=document.querySelector('[name="delay"]'),i=document.querySelector('[name="step"]'),a=document.querySelector('[name="amount"]');function d(e,t){return new Promise(((r,n)=>{const o=Math.random()>.3;setTimeout((()=>{setTimeout((()=>{o?r(`Fulfilled promise ${e} in ${t+Number(l.value)}ms`):n(`Rejected promise ${e} in ${t+Number(l.value)}ms`)}),t)}),l.value)}))}document.querySelector("form").addEventListener("submit",(t=>{t.preventDefault();for(let t=1;t<=a.value;t++)d(t,Number(i.value)*t).then((t=>{e(u).Notify.success(t)})).catch((t=>{e(u).Notify.failure(t)}))}));
//# sourceMappingURL=03-promises.7f3adeff.js.map
