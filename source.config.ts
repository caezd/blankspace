import { defineDocs, defineConfig } from "fumadocs-mdx/config";
export const docs = defineDocs({
    dir: "content/docs",
    lastModifiedTime: "git",
});
export default defineConfig();
