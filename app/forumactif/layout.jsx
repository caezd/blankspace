import { forumactif as source } from "@/lib/source";
import { DocsLayout } from "@/components/layout/docs";
import { baseOptions } from "@/lib/layout.shared";
import { RootProvider } from "fumadocs-ui/provider";

export default function Layout({ children }) {
    const { nav, tabs } = baseOptions();
    return (
        <RootProvider>
            <DocsLayout
                tree={source.pageTree}
                sidebar={{ tabs }}
                tabMode="navbar"
                nav={{ ...nav, mode: "top" }}
                /* nav={{
                    mode: "top",

                    title: (
                        <>
                            
                        </>
                    ),
                }} */
            >
                {children}
            </DocsLayout>
        </RootProvider>
    );
}
