import { loadConfig, applyTheme, isPlaceholderSiteUrl } from "./config.js";

async function renderQr() {
  const config = await loadConfig();
  applyTheme(config.theme);

  const siteUrl = (config.siteUrl || "").trim();
  const urlEl = document.getElementById("qr-url");
  const hint = document.getElementById("qr-hint");
  const openSite = document.getElementById("open-site");
  const qrImage = document.getElementById("qr-image");

  if (isPlaceholderSiteUrl(siteUrl)) {
    hint.innerHTML =
      "Set <code>siteUrl</code> in <code>config/site.json</code>, run <code>npm run qr</code>, then redeploy.";
    urlEl.textContent = "No production URL configured yet.";
    openSite.setAttribute("aria-disabled", "true");
    openSite.href = "#";
    return;
  }

  urlEl.textContent = siteUrl;
  openSite.href = siteUrl;
  hint.textContent = "Scan this code to open the CCDT links page.";
  qrImage.alt = `QR code linking to ${siteUrl}`;
  // Bust cache after regenerating assets/qr-code.png
  qrImage.src = `assets/qr-code.png?v=${encodeURIComponent(siteUrl)}`;
}

renderQr().catch((error) => {
  console.error(error);
  document.getElementById("qr-hint").textContent =
    "Unable to load QR details. Check config/site.json.";
});
