import {
    defineDocs,
    defineConfig,
    metaSchema,
    frontmatterSchema,
} from "fumadocs-mdx/config";
import { visit as visit3 } from "unist-util-visit";

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

function flattenNode(node) {
    if ("children" in node)
        return node.children.map((child) => flattenNode(child)).join("");
    if ("value" in node) return node.value;
    return "";
}

function Callout({
    className,
    children,
    title,
    type = "info",
    icon,
    ...props
}) {}

function remarkAdmonition(options = {}) {
    const tag = options.tag ?? ":::";
    const typeMap = options.typeMap ?? {
        info: "info",
        warn: "warn",
        note: "note",
        important: "important",
        caution: "caution",
        example: "example",
        tip: "tip",
        question: "question",
        danger: "error",
    };
    function replaceNodes(nodes) {
        if (nodes.length === 0) return;
        let open = -1;
        let attributes = [];
        let hasIntercept = false;
        for (let i = 0; i < nodes.length; i++) {
            if (nodes[i].type !== "paragraph") continue;
            const text = flattenNode(nodes[i]);
            const typeName = Object.keys(typeMap).find((type) =>
                text.startsWith(`${tag}${type}`)
            );
            if (typeName) {
                if (open !== -1) {
                    hasIntercept = true;
                    continue;
                }
                open = i;
                attributes.push({
                    type: "mdxJsxAttribute",
                    name: "type",
                    value: typeMap[typeName],
                });
                const meta = text.slice(`${tag}${typeName}`.length);
                if (meta.startsWith("[") && meta.endsWith("]")) {
                    attributes.push({
                        type: "mdxJsxAttribute",
                        name: "title",
                        value: meta.slice(1, -1),
                    });
                }
            }
            if (open !== -1 && text === tag) {
                const children = nodes.slice(open + 1, i);
                nodes.splice(open, i - open + 1, {
                    type: "mdxJsxFlowElement",
                    name: "Callout",
                    attributes,
                    children: hasIntercept ? replaceNodes(children) : children,
                });
                open = -1;
                hasIntercept = false;
                attributes = [];
                i = open;
            }
        }
    }
    return (tree) => {
        visit3(tree, (node) => {
            if (!("children" in node)) return;
            replaceNodes(node.children);
        });
    };
}

export default defineConfig({
    lastModifiedTime: "git",
    mdxOptions: {
        remarkPlugins: [remarkAdmonition],
        rehypeCodeOptions: {
            lazy: true,
            langs: ["ts", "js", "html", "tsx", "mdx", "css"],
            experimentalJSEngine: true,
            themes: {
                light: "houston",
                dark: "houston",
            },
        },
    },
});
