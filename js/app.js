/* =========================================================
   🟦 #APP_OVERVIEW — MOSAIC POWERSTICK MODERN
   This small script only copies the gateway address.
   The MOSAIC file browser has intentionally been removed:
   real storage access is not yet confirmed.
   ========================================================= */

const gatewayButton = document.getElementById("gatewayButton");
const gatewayCopyStatus = document.getElementById("gatewayCopyStatus");

/* 🟦 #GATEWAY_SHORTCUT — Copy the number-only address when opening the local admin page.
   The browser handles its own HTTP sign-in prompt; this page cannot fill it. */
gatewayButton.addEventListener("click", () => {
  if (!navigator.clipboard || !navigator.clipboard.writeText) {
    gatewayCopyStatus.textContent = "Gateway opening. If needed, copy the address shown above.";
    return;
  }

  navigator.clipboard.writeText("192.168.10.1")
    .then(() => {
      gatewayCopyStatus.textContent = "Copied 192.168.10.1. The gateway is opening in a new tab.";
    })
    .catch(() => {
      gatewayCopyStatus.textContent = "Gateway opening. Clipboard access was unavailable; the address is shown above.";
    });
});
