
function run() {
  var htmlCode = document.getElementById("html-code").value;
  var cssCode = document.getElementById("css-code").value;
  var jsCode = document.getElementById("js-code").value;
  var output = document.getElementById("output");

  var iframeDocument = output.contentDocument;
  iframeDocument.open();
  iframeDocument.write(htmlCode);

  var styleTag = document.createElement("style");
  styleTag.innerHTML = cssCode;
  iframeDocument.head.appendChild(styleTag);

  var scriptTag = document.createElement("script");
  scriptTag.innerHTML = jsCode;
  iframeDocument.body.appendChild(scriptTag);

  iframeDocument.close();
}