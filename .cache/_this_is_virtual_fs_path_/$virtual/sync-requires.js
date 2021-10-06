
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/nicolafontebasso/Desktop/Projects/2mwood-gatsby/2mwood-gatsby-tailwind/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/nicolafontebasso/Desktop/Projects/2mwood-gatsby/2mwood-gatsby-tailwind/src/pages/index.js"))
}

