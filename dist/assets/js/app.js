(()=>{"use strict";var e=function(e){return document.querySelector(e)},t=function(e){return document.createElement(e)},n=function(e){console.log(e);var t=e.currentTarget.parentNode.parentNode.parentNode;t.classList.add("deleted"),setTimeout((function(){t.remove()}),700)};function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var i=function(){("form > div",document.querySelectorAll("form > div")).forEach((function(e){e.classList.add("invisible")}))},o=function(t){window.clearInterval(t),i(),e(".payment-success").classList.remove("invisible")},a=function(t){t.preventDefault(),e(".adding").classList.remove("invisible"),e(".info").classList.add("invisible")},l=function(i){i.preventDefault();var o,a=e(".product-list .form-body"),l=e("input[type='radio'][name='item']:checked").value,d=e(".product-list"),s=function(e){for(var r,i,o,a,l,d,s,c,u,p,v,m,f=[],y=0;y<e;y++)f.push((r=y+1,i=void 0,o=void 0,a=void 0,l=void 0,d=void 0,s=void 0,c=void 0,u=void 0,p=void 0,v=void 0,m=void 0,i=t("div"),o=t("h2"),a=t("span"),l=document.createElementNS("http://www.w3.org/2000/svg","svg"),d=document.createElementNS("http://www.w3.org/2000/svg","use"),s=t("div"),c=t("div"),u=t("label"),p=t("input"),v=t("label"),m=t("input"),d.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","#x-mark"),l.addEventListener("click",n),a.setAttribute("class","delete"),l.appendChild(d),a.appendChild(l),o.innerText="Product ".concat(r),o.appendChild(a),i.appendChild(o),u.innerText="Enter main keyword for the product",p.setAttribute("placeholder","or example, sylicon wine cup"),s.setAttribute("class","keyword-wrapper"),s.appendChild(u),s.appendChild(p),i.appendChild(s),v.innerText="Enter link to the similar product as a referencet",m.setAttribute("placeholder","https://..."),c.setAttribute("class","link-wrapper"),c.appendChild(v),c.appendChild(m),i.appendChild(c),i.setAttribute("class","form-row"),i));return f}(l);d.classList.remove("invisible"),e(".adding").classList.add("invisible"),a.append.apply(a,function(e){if(Array.isArray(e))return r(e)}(o=s)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(o)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(o)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())},d=function(e){e.preventDefault();var t=e.currentTarget.querySelector("i");t.style.display="inline-block";var n=setInterval((function(){t.style.display="none",history.pushState("","","paymentsuccess"),o(n)}),2e3)};!function(){e(".add-more").addEventListener("click",a),e(".adding .btn").addEventListener("click",l),e(".product-list .btn").addEventListener("click",d),console.log(window.location.pathname);var t=window.location.pathname;"/paymentsuccess"==t?o():"/paymenterror"==t&&(i(),e(".payment-failed").classList.remove("invisible"))}()})();