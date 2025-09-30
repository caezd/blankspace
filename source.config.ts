import { defineDocs, defineConfig } from "fumadocs-mdx/config";

export const theme = defineDocs({
    dir: "content/theme",
    lastModifiedTime: "git",
});

export const forumactif = defineDocs({
    dir: "content/forumactif",
    lastModifiedTime: "git",
});

export const plugins = defineDocs({
    dir: "content/plugins",
    lastModifiedTime: "git",
});

export const tutoriaux = defineDocs({
    dir: "content/tutoriaux",
    lastModifiedTime: "git",
});

export const ressources = defineDocs({
    dir: "content/ressources",
    lastModifiedTime: "git",
});

export default defineConfig();
