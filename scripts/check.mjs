import { access, readdir, readFile, stat } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../dist/", import.meta.url));
const failures = [];
let htmlCount = 0;

async function walk(dir) {
  for (const name of await readdir(dir)) {
    const path = join(dir, name);
    const info = await stat(path);
    if (info.isDirectory()) await walk(path);
    else if (name.endsWith(".html")) {
      htmlCount++;
      const html = await readFile(path, "utf8");
      for (const required of ["<title>", 'name="description"', '<main id="main">', 'rel="canonical"', 'application/ld+json']) {
        if (!html.includes(required)) failures.push(`${path} missing ${required}`);
      }
      const h1s = (html.match(/<h1[ >]/g) || []).length;
      if (h1s !== 1) failures.push(`${path} has ${h1s} h1 elements`);
      const refs = [...html.matchAll(/(?:href|src)="([^"]+)"/g)].map(match => match[1]);
      for (const ref of refs) {
        if (!ref.startsWith("/") || ref.startsWith("//")) continue;
        const clean = decodeURIComponent(ref.split(/[?#]/)[0]).replace(/^\/+/, "");
        if (!clean) continue;
        const target = join(root, clean.endsWith("/") ? clean + "index.html" : clean);
        try { await access(target); } catch { failures.push(`${path} has unresolved local reference ${ref}`); }
      }
    }
  }
}

await walk(root);
if (htmlCount < 15) failures.push(`Expected at least 15 HTML pages, found ${htmlCount}`);
if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}
console.log(`Checked ${htmlCount} HTML pages: metadata, landmarks, structured data, h1 hierarchy, and local references passed.`);
