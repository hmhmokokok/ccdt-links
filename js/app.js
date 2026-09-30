import { loadConfig, applyTheme, createLinkElement } from "./config.js";

async function render() {
  const config = await loadConfig();
  applyTheme(config.theme);

  const profile = config.profile || {};
  const brand = document.getElementById("brand");
  const bio = document.getElementById("bio");
  const avatar = document.getElementById("avatar");
  const footer = document.getElementById("footer");
  const linksNav = document.getElementById("links");

  document.title = profile.title || profile.name || "Links";
  brand.textContent = profile.name || "CCDT";
  bio.textContent = profile.bio || "";
  footer.textContent = config.footer || "";

  if (profile.avatar) {
    avatar.src = profile.avatar;
    avatar.alt = profile.avatarAlt || profile.name || "Profile";
  }

  const links = (config.links || []).filter((link) => link.enabled !== false && link.url && link.label);
  linksNav.replaceChildren(...links.map(createLinkElement));
}

render().catch((error) => {
  console.error(error);
  document.getElementById("bio").textContent =
    "Unable to load links. Check config/site.json.";
});
