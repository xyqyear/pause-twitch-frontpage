// ==UserScript==
// @name         Pause Twitch Front Page Stream
// @version      0.1
// @description  pause twitch's front page stream
// @match        https://www.twitch.tv/
// @icon         https://www.google.com/s2/favicons?domain=twitch.tv
// @author       xyqyear
// @updateURL    https://cdn.jsdelivr.net/gh/xyqyear/pause-twitch-frontpage@main/userscript.js
// @downloadURL  https://cdn.jsdelivr.net/gh/xyqyear/pause-twitch-frontpage@main/userscript.js
// @homepage     https://github.com/xyqyear
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
  "use strict";

  let MutationObserver =
    window.MutationObserver ||
    window.WebKitMutationObserver ||
    window.MozMutationObserver;
  let observer = new MutationObserver((_, me) => {
    let video = document.querySelector("video");
    if (video) {
      video.muted = true;
      console.log("muted steam");
      if (video.readyState > 0) {
        video.pause();
        console.log("paused steam");
        me.disconnect();
        return;
      }
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
})();
