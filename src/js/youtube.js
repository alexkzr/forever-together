var i, c, y, v, s, n;
v = document.getElementsByClassName("youtube");
if (v.length > 0) {
  s = document.createElement("style");
  s.type = "text/css";
  s.innerHTML = '.youtube{background-color:#000;max-width:100%;overflow:hidden;position:relative;cursor:pointer}.youtube .thumb{bottom:0;display:block;left:0;margin:auto;max-width:655px;position:absolute;right:0;top:0;width:655px;height:403px}.youtube .play{filter:alpha(opacity=80);opacity:1;height:49px;left:50%;margin-left:-13px;margin-top:-25px;position:absolute;top:50%;width:26px;background:url("img/video/play.png") no-repeat}';
  document.body.appendChild(s)
}
for (n = 0; n < v.length; n++) {
  y = v[n];
  i = document.createElement("img");
  i.setAttribute("src", "img/video/video.png");
  i.setAttribute("class", "thumb");
  c = document.createElement("div");
  c.setAttribute("class", "play");
  y.appendChild(i);
  y.appendChild(c);
  y.onclick = function () {
    var a = document.createElement("iframe");
    a.setAttribute("src", "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1&border=0&wmode=opaque&enablejsapi=1");
    a.style.width = this.style.width;
    a.style.height = this.style.height;
    this.parentNode.replaceChild(a, this)
  }
};