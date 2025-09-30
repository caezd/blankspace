import {
    theme as themeSource,
    forumactif as forumactifSource,
    plugins as pluginsSource,
    tutoriaux as tutoriauxSource,
    ressources as ressourcesSource,
} from "@/.source";
import { loader } from "fumadocs-core/source";
import { icons } from "lucide-react";
import { createElement } from "react";

export const theme = loader({
    baseUrl: "/theme",
    icon(icon) {
        if (!icon) {
            // You may set a default icon
            return;
        }
        if (icon in icons) return createElement(icons[icon]);
    },
    source: themeSource.toFumadocsSource(),
});

export const forumactif = loader({
    baseUrl: "/forumactif",
    icon(icon) {
        if (!icon) {
            // You may set a default icon
            return;
        }
        if (icon in icons) return createElement(icons[icon]);
    },
    source: forumactifSource.toFumadocsSource(),
});

export const plugins = loader({
    baseUrl: "/plugins",
    icon(icon) {
        if (!icon) {
            // You may set a default icon
            return;
        }
        if (icon in icons) return createElement(icons[icon]);
    },
    source: pluginsSource.toFumadocsSource(),
});

export const tutoriaux = loader({
    baseUrl: "/tutoriaux",
    icon(icon) {
        if (!icon) {
            // You may set a default icon
            return;
        }
        if (icon in icons) return createElement(icons[icon]);
    },
    source: tutoriauxSource.toFumadocsSource(),
});

export const ressources = loader({
    baseUrl: "/ressources",
    icon(icon) {
        if (!icon) {
            // You may set a default icon
            return;
        }
        if (icon in icons) return createElement(icons[icon]);
    },
    source: ressourcesSource.toFumadocsSource(),
});
