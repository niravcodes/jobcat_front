/* eslint-disable prettier/prettier */
module.exports = {
    pages: {
        index: {
            // entry for the page
            entry: "src/main.js",
            // the source template
            template: "public/index.html",
            // output as dist/index.html
            filename: "index.html",
            // chunks to include on this page, by default includes
            // extracted common chunks and vendor chunks.
            chunks: ["chunk-vendors", "chunk-common", "index"]
        },
        // when using the entry-only string format,
        // template is inferred to be `public/subpage.html`
        // and falls back to `public/index.html` if not found.
        // Output filename is inferred to be `subpage.html`.
        login: {
            entry: "src/login/main.js",
            template: "public/login.html",
            filename: "greeting.html"
        }
    },
    devServer: {
        historyApiFallback: {
            rewrites: [
                { from: /\/index/, to: '/index.html' },
                { from: /\/greeting/, to: '/greeting.html' }
            ]
        }
    }
};
