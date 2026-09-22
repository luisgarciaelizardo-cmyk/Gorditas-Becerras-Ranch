// Genera menu.pdf (y una vista previa PNG) a partir de menu.html.
// Uso: node menu-src/render.mjs   (requiere playwright)
import { chromium } from "playwright";
import { fileURLToPath } from "node:url";
import path from "node:path";

const dir = path.dirname(fileURLToPath(import.meta.url));
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
const page = await browser.newPage({ viewport: { width: 720, height: 1280 }, deviceScaleFactor: 2 });
await page.goto("file://" + path.join(dir, "menu.html"), { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);
await page.pdf({ path: path.join(dir, "..", "menu.pdf"), width: "720px", height: "1280px", printBackground: true, pageRanges: "1" });
await page.screenshot({ path: path.join(dir, "preview.png") });
await browser.close();
