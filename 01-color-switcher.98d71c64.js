!function(){var t=document.querySelector("body"),e=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]"),o=(e.getAttribute("disabled"),null);e.addEventListener("click",(function(){o=setInterval((function(){t.style.backgroundColor="".concat("#".concat(Math.floor(16777215*Math.random()).toString(16)))}),1e3),e.setAttribute("disabled","disabled")})),n.addEventListener("click",(function(){clearInterval(o),e.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.98d71c64.js.map
