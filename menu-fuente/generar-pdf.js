// Genera assets/menu-gorditas-becerras-ranch.pdf a partir de menu.html
// Uso: node menu-fuente/generar-pdf.js   (requiere playwright)
const path = require("path");
const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 720, height: 1280 }, deviceScaleFactor: 2 });
  await page.goto("file://" + path.join(__dirname, "menu.html"));
  await page.evaluate(() => document.fonts.ready);
  await page.pdf({ path: path.join(__dirname, "..", "menu-gorditas-becerras-ranch.pdf"), width: "720px", height: "1280px", printBackground: true });
  await page.screenshot({ path: path.join(__dirname, "..", "assets", "img", "menu.jpg"), type: "jpeg", quality: 82 });
  await browser.close();
})();
