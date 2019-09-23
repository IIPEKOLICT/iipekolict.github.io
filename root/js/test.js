//function changeItem() {
//  document.getElementById('custom')
// .style.cssText = "bottom: 0px;left: 0px;width: 300px;height: 300px;background: #474747";
//}
//function rechangeItem() {
//  document.getElementById('custom')
// .style.cssText = "bottom: 15px;left: 100px;width: 97px;height: 19px;background: #FFF;border-radius: 12px;transition: ease-out 0.4s";
//}

function changeItem() {
  document.getElementById('custom')
 .style.cssText = "bottom: 0px;left: 0px;width: 300px;height: 300px;background: #474747";
}
function rechangeItem() {
  document.getElementById('custom')
 .style.cssText = "bottom: 15px;left: 100px;width: 97px;height: 19px;background: #FFF;border-radius: 12px;transition: ease-out 0.4s";
}

if (!document.getElementById) document.write('<link rel="stylesheet" type="text/css" href="/css/versions4.css">');

function changeCSS(cssFile, cssLinkIndex) {

    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);

    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}

function enableStylesheet (node) {
  node.rel = 'stylesheet';
}
function disableStylesheet (node) {
  node.rel = 'alternate stylesheet';
}

function enableStylesheet (node) {
  node.disabled = false;
}

function disableStylesheet (node) {
  node.disabled = true;
}
document
  .querySelectorAll('link[rel=stylesheet].alternate')
  .forEach(disableStylesheet);

function enableStylesheet (node) {
  node.media = '';
}
function disableStylesheet (node) {
  node.media = 'none';
}
