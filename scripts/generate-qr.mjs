import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import QRCode from "qrcode";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const configPath = join(root, "config", "site.json");
const outDir = join(root, "assets");
const outFile = join(outDir, "qr-code.png");

const config = JSON.parse(readFileSync(configPath, "utf8"));
const siteUrl = (config.siteUrl || "").trim();

if (!siteUrl || /YOUR-DEPLOYMENT-URL/i.test(siteUrl)) {
  console.error(
    "Set config/site.json → siteUrl to your live URL before generating a QR code."
  );
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });

// Black on white for reliable phone-camera scanning
await QRCode.toFile(outFile, siteUrl, {
  type: "png",
  width: 1024,
  margin: 4,
  color: {
    dark: "#000000",
    light: "#ffffff",
  },
  errorCorrectionLevel: "H",
});

console.log(`QR code written to assets/qr-code.png`);
console.log(`Points to: ${siteUrl}`);
