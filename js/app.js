import { loadConfig, applyTheme, createLinkElement } from "./config.js";

function showToast(message) {
  const toast = document.getElementById("share-toast");
  if (!toast) return;
  toast.textContent = message;
  toast.hidden = false;
  window.clearTimeout(showToast._timer);
  showToast._timer = window.setTimeout(() => {
    toast.hidden = true;
  }, 2000);
}

async function copyLink(url) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(url);
    return;
  }
  const input = document.createElement("input");
  input.value = url;
  input.setAttribute("readonly", "");
  input.style.position = "fixed";
  input.style.opacity = "0";
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  input.remove();
}

async function sharePage(config) {
  const url = config.siteUrl || window.location.href;
  const title = config.share?.title || config.profile?.title || "CCDT";
  const text = config.share?.text || "Check out CCDT's official links";

  try {
    if (navigator.share) {
      await navigator.share({ title, text, url });
      return;
    }
  } catch (error) {
    if (error?.name === "AbortError") return;
  }

  try {
    await copyLink(url);
    showToast("Link copied");
  } catch {
    showToast("Could not copy link");
  }
}

async function render() {
  const config = await loadConfig();
  applyTheme(config.theme);

  const profile = config.profile || {};
  const brand = document.getElementById("brand");
  const bio = document.getElementById("bio");
  const avatar = document.getElementById("avatar");
  const footer = document.getElementById("footer");
  const linksNav = document.getElementById("links");
  const shareBtn = document.getElementById("share-btn");

  document.title = profile.title || profile.name || "Links";
  brand.textContent = profile.name || "CCDT";
  bio.textContent = profile.bio || "";
  footer.textContent = config.footer || "";

  if (profile.avatar) {
    avatar.src = profile.avatar;
    avatar.alt = profile.avatarAlt || profile.name || "Profile";
  }

  const links = (config.links || []).filter(
    (link) => link.enabled !== false && link.url && link.label
  );
  linksNav.replaceChildren(...links.map(createLinkElement));

  shareBtn?.addEventListener("click", () => sharePage(config));
}

render().catch((error) => {
  console.error(error);
  document.getElementById("bio").textContent =
    "Unable to load links. Check config/site.json.";
});
