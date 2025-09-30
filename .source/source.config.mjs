// source.config.ts
import { defineDocs, defineConfig } from "fumadocs-mdx/config";
var theme = defineDocs({
  dir: "content/theme",
  lastModifiedTime: "git"
});
var forumactif = defineDocs({
  dir: "content/forumactif",
  lastModifiedTime: "git"
});
var plugins = defineDocs({
  dir: "content/plugins",
  lastModifiedTime: "git"
});
var tutoriaux = defineDocs({
  dir: "content/tutoriaux",
  lastModifiedTime: "git"
});
var ressources = defineDocs({
  dir: "content/ressources",
  lastModifiedTime: "git"
});
var source_config_default = defineConfig();
export {
  source_config_default as default,
  forumactif,
  plugins,
  ressources,
  theme,
  tutoriaux
};
