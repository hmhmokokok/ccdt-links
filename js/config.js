const ICONS = {
  instagram: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5zm5.25-3.25a1.1 1.1 0 1 1-1.1 1.1 1.1 1.1 0 0 1 1.1-1.1z"/></svg>`,
  whatsapp: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83a9.7 9.7 0 0 0 1.4 5.05L2 22l5.3-1.5a10 10 0 0 0 4.74 1.2h.01c5.46 0 9.89-4.4 9.89-9.84A9.8 9.8 0 0 0 12.04 2zm0 17.9h-.01a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.15.89.9-3.07-.2-.31a8 8 0 0 1-1.25-4.27c0-4.43 3.64-8.03 8.13-8.03a8.05 8.05 0 0 1 8.12 8.04c0 4.43-3.64 8.06-8.11 8.06zm4.46-6.02c-.24-.12-1.43-.7-1.65-.78s-.38-.12-.54.12-.62.78-.76.94-.28.18-.52.06a6.6 6.6 0 0 1-1.94-1.2 7.3 7.3 0 0 1-1.35-1.68c-.14-.24 0-.37.11-.49.11-.11.24-.28.36-.42s.16-.24.24-.4.04-.3-.02-.42-.54-1.28-.74-1.76c-.2-.47-.39-.4-.54-.4h-.46c-.16 0-.42.06-.64.3s-.84.82-.84 2 0 1.16.18 1.4.86 2.08 2.08 2.86c1.46.94 2.06.98 2.36 1.1s.72.1.98-.06.86-.95 1.09-1.28.44-.28.72-.18 1.4.65 1.64.77.4.18.46.28v.84c-.06.34-.36.52-.76.34z"/></svg>`,
  x: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.835L1.882 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
  youtube: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.75 15.5v-7l6.2 3.5-6.2 3.5z"/></svg>`,
  globe: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm7.9 9h-3.2a15.5 15.5 0 0 0-1.3-5 8 8 0 0 1 4.5 5zM12 4c.9 0 2.4 2.2 3.2 7H8.8C9.6 6.2 11.1 4 12 4zM4.1 13h3.2a15.5 15.5 0 0 0 1.3 5 8 8 0 0 1-4.5-5zm3.2-2H4.1a8 8 0 0 1 4.5-5 15.5 15.5 0 0 0-1.3 5zm.5 2h8.4c-.8 4.8-2.3 7-4.2 7s-3.4-2.2-4.2-7zm9.2 5a15.5 15.5 0 0 0 1.3-5h3.2a8 8 0 0 1-4.5 5z"/></svg>`,
  facebook: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H7v3h3v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1z"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3.5A1.88 1.88 0 1 0 5.26 7.25 1.88 1.88 0 0 0 5.25 3.5zM20.44 20h-3.37v-5.6c0-1.34-.02-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.95V20H9.7V8.5h3.23v1.57h.05c.45-.85 1.55-1.75 3.19-1.75 3.41 0 4.04 2.25 4.04 5.17V20z"/></svg>`,
  link: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10.6 13.4a4 4 0 0 1 0-5.7l2.1-2.1a4 4 0 0 1 5.7 5.7l-1 1a1 1 0 0 1-1.4-1.4l1-1a2 2 0 0 0-2.9-2.9l-2.1 2.1a2 2 0 0 0 0 2.9 1 1 0 1 1-1.4 1.4zm2.8-2.8a4 4 0 0 1 0 5.7l-2.1 2.1a4 4 0 1 1-5.7-5.7l1-1a1 1 0 0 1 1.4 1.4l-1 1a2 2 0 1 0 2.9 2.9l2.1-2.1a2 2 0 0 0 0-2.9 1 1 0 0 1 1.4-1.4z"/></svg>`,
};

export async function loadConfig() {
  const response = await fetch("./config/site.json", { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`Could not load config (${response.status})`);
  }
  return response.json();
}

export function applyTheme(theme = {}) {
  const root = document.documentElement;
  if (theme.accent) root.style.setProperty("--accent", theme.accent);
  if (theme.accentSoft) root.style.setProperty("--accent-soft", theme.accentSoft);
  if (theme.background) root.style.setProperty("--bg", theme.background);
  if (theme.surface) root.style.setProperty("--surface", theme.surface);
  if (theme.text) root.style.setProperty("--text", theme.text);
  if (theme.muted) root.style.setProperty("--muted", theme.muted);
}

export function createLinkElement(link) {
  const a = document.createElement("a");
  a.className = "link";
  a.href = link.url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.dataset.id = link.id || "";

  const icon = document.createElement("span");
  icon.className = "link-icon";
  icon.innerHTML = ICONS[link.icon] || ICONS.link;

  const label = document.createElement("span");
  label.className = "link-label";
  label.textContent = link.label;

  a.append(icon, label);
  return a;
}

export function isPlaceholderSiteUrl(url) {
  return !url || /YOUR-DEPLOYMENT-URL/i.test(url);
}
