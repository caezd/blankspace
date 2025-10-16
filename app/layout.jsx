import "./globals.css";
import { Lexend, Nunito, Inconsolata } from "next/font/google";
import { NextProvider } from "fumadocs-core/framework/next";

const headings = Lexend({ subsets: ["latin"] });
const body = Nunito({ subsets: ["latin"], weight: ["400", "700"] });

import TinyLogo from "./tiny-logo";
import { ChevronUp } from "lucide-react";

const links = [
    { title: "Thème", href: "/theme", childrens: [{}] },
    { title: "Forumactif", href: "/forumactif", childrens: [{}] },
    { title: "Plugins", href: "/plugins" },
    { title: "Tutoriaux", href: "/tutoriaux" },
    { title: "Ressources", href: "/ressources", childrens: [{}] },
];

export default function Layout({ children }) {
    return (
        <html lang="fr" suppressHydrationWarning>
            <body
                suppressHydrationWarning
                className={`${body.className}`}
                style={{ colorScheme: "dark" }}
            >
                <NextProvider>{children}</NextProvider>
            </body>
        </html>
    );
}
