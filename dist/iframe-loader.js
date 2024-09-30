// iframe-loader.js
(function () {
  var iframe = document.createElement("iframe");
  iframe.src = "https://publicfrank1234.github.io/widget/dist/iframe-loader.js";
  iframe.style.width = "300px";
  iframe.style.height = "400px";
  iframe.style.position = "fixed";
  iframe.style.bottom = "20px";
  iframe.style.right = "20px";
  iframe.style.border = "none";
  iframe.style.zIndex = "9999";
  document.body.appendChild(iframe);
})();
