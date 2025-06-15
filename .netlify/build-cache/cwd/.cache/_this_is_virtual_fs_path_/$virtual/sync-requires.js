
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/mnt/persist/workspace/src/pages/404.js")),
  "component---src-pages-blog-index-js": preferDefault(require("/mnt/persist/workspace/src/pages/blog/index.js")),
  "component---src-pages-index-js": preferDefault(require("/mnt/persist/workspace/src/pages/index.js")),
  "component---src-pages-using-typescript-tsx": preferDefault(require("/mnt/persist/workspace/src/pages/using-typescript.tsx"))
}

