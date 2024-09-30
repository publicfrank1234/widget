// iframe-loader.js
(function () {
  var iframe = document.createElement("iframe");
  iframe.src =
    "https://ac50-2601-645-d83-59e0-d1c5-e1-151a-553a.ngrok-free.app/widget.html";
  iframe.style.width = "300px";
  iframe.style.height = "400px";
  iframe.style.position = "fixed";
  iframe.style.bottom = "20px";
  iframe.style.right = "20px";
  iframe.style.border = "none";
  iframe.style.zIndex = "9999";
  document.body.appendChild(iframe);
})();
