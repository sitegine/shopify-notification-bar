document.addEventListener("DOMContentLoaded", function () {
  const settings = window.notificationBarSettings;

  if (!settings || !settings.message || isDismissed(settings.dismiss_rule)) {
    return;
  }

  const bar = document.createElement("div");
  bar.innerHTML = settings.message;
  bar.style.cssText = `
    background-color: ${settings.background_color} !important;
    color: ${settings.text_color} !important;
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    width: 100% !important;
    z-index: 99999 !important;
    text-align: center !important;
    padding: 12px 40px !important;
    font-weight: bold !important;
    box-shadow: 0 2px 8px rgba(0,0,0,0.2) !important;
    box-sizing: border-box !important;
    display: block !important;
    line-height: 1.4 !important;
    min-height: auto !important;
  `;

  function removeBarAndPadding() {
    bar.remove();
    document.body.style.paddingTop = null;
    setDismissed(settings.dismiss_rule);
  }

  if (settings.enable_close) {
    const closeBtn = document.createElement("span");
    closeBtn.textContent = "×";
    closeBtn.setAttribute("aria-label", "Close notification");
    closeBtn.onclick = removeBarAndPadding;
    closeBtn.style.cssText = `
      position: absolute !important;
      top: 8px !important;
      right: 12px !important;
      cursor: pointer !important;
      font-size: 18px !important;
      line-height: 1 !important;
      font-weight: bold !important;
      color: ${settings.close_icon_color || settings.text_color} !important;
    `;
    bar.appendChild(closeBtn);
  }

  
  // Remove default bottom margin from headings and paragraphs inside bar
  requestAnimationFrame(() => {
    const tags = bar.querySelectorAll('h1,h2,h3,h4,h5,h6,h7,p');
    tags.forEach(el => {
      el.style.margin = '0';
    });
    document.body.style.paddingTop = bar.offsetHeight + "px";
  });

  document.body.prepend(bar);


  requestAnimationFrame(() => {
    document.body.style.paddingTop = bar.offsetHeight + "px";
  });

  function isDismissed(rule) {
    if (rule === "every") return false;

    const key = "notifBarDismissed";
    const stored = localStorage.getItem(key);
    if (!stored) return false;

    const data = JSON.parse(stored);
    const now = new Date();

    if (rule === "forever") return true;
    if (rule === "day" && now - new Date(data.timestamp) < 86400000) return true;
    if (rule === "month" && now - new Date(data.timestamp) < 2628000000) return true;

    return false;
  }

  function setDismissed(rule) {
    localStorage.setItem("notifBarDismissed", JSON.stringify({
      rule: rule,
      timestamp: new Date().toISOString()
    }));
  }
});