import {
    defineDocs,
    defineConfig,
    metaSchema,
    frontmatterSchema,
} from "fumadocs-mdx/config";
import { z } from "zod";

const docs = {
    schema: frontmatterSchema.extend({
        author: z.string(),
        contributors: z.array(z.string()).optional(),
    }),
};

const meta = {
    schema: metaSchema.extend({}),
};

export const theme = defineDocs({
    dir: "content/theme",
    docs,
    meta,
});

export const forumactif = defineDocs({
    dir: "content/forumactif",
    docs,
    meta,
});

export const plugins = defineDocs({
    dir: "content/plugins",
    docs,
    meta,
});

export const tutoriaux = defineDocs({
    dir: "content/tutoriaux",
    docs,
    meta,
});

export const ressources = defineDocs({
    dir: "content/ressources",
    docs,
    meta,
});

export default defineConfig({ lastModifiedTime: "git" });
