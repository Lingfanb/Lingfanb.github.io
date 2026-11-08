// Click-to-load YouTube player for publication thumbnails.
// Pages only show YouTube's cover image; the player itself is loaded when a
// visitor clicks. Without JavaScript the thumbnail is a normal link to YouTube.
(function () {
  'use strict';

  document.addEventListener('click', function (event) {
    // Let Cmd/Ctrl/Shift-click and middle-click open YouTube as a normal link.
    if (event.defaultPrevented || event.button !== 0 ||
        event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }
    var link = event.target.closest ? event.target.closest('a[data-youtube]') : null;
    if (!link) return;

    var id = link.getAttribute('data-youtube');
    if (!/^[A-Za-z0-9_-]{11}$/.test(id)) return;
    event.preventDefault();

    var frame = document.createElement('iframe');
    frame.src = 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0';
    frame.title = link.getAttribute('aria-label') || 'YouTube video';
    frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    frame.allowFullscreen = true;
    // YouTube refuses to play embeds that arrive without a referrer.
    frame.referrerPolicy = 'strict-origin-when-cross-origin';

    var box = document.createElement('div');
    box.className = link.className; // keeps the 16:9 box
    box.appendChild(frame);
    link.parentNode.replaceChild(box, link);
    frame.focus();
  });
})();
