
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/iker/Documents/Pepita/web-psicologia/web-psicologo.worktrees/fix/deployment-styling-issues/src/pages/404.js")),
  "component---src-pages-admin-index-js": preferDefault(require("/Users/iker/Documents/Pepita/web-psicologia/web-psicologo.worktrees/fix/deployment-styling-issues/src/pages/admin/index.js")),
  "component---src-pages-blog-index-js": preferDefault(require("/Users/iker/Documents/Pepita/web-psicologia/web-psicologo.worktrees/fix/deployment-styling-issues/src/pages/blog/index.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/iker/Documents/Pepita/web-psicologia/web-psicologo.worktrees/fix/deployment-styling-issues/src/pages/index.js")),
  "component---src-pages-using-typescript-tsx": preferDefault(require("/Users/iker/Documents/Pepita/web-psicologia/web-psicologo.worktrees/fix/deployment-styling-issues/src/pages/using-typescript.tsx"))
}

