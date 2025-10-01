// source.config.ts
import {
  defineDocs,
  defineConfig,
  metaSchema,
  frontmatterSchema
} from "fumadocs-mdx/config";
import { z } from "zod";
var docs = {
  schema: frontmatterSchema.extend({
    author: z.string(),
    contributors: z.array(z.string()).optional()
  })
};
var meta = {
  schema: metaSchema.extend({})
};
var theme = defineDocs({
  dir: "content/theme",
  docs,
  meta
});
var forumactif = defineDocs({
  dir: "content/forumactif",
  docs,
  meta
});
var plugins = defineDocs({
  dir: "content/plugins",
  docs,
  meta
});
var tutoriaux = defineDocs({
  dir: "content/tutoriaux",
  docs,
  meta
});
var ressources = defineDocs({
  dir: "content/ressources",
  docs,
  meta
});
var source_config_default = defineConfig({ lastModifiedTime: "git" });
export {
  source_config_default as default,
  forumactif,
  plugins,
  ressources,
  theme,
  tutoriaux
};
