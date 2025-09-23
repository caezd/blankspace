import { source } from "@/lib/source";
import { DocsLayout } from "@/components/layout/docs";
import { baseOptions } from "@/lib/layout.shared";
import { RootProvider } from "fumadocs-ui/provider";

export default function Layout({ children }) {
    return (
        <RootProvider>
            <DocsLayout tree={source.pageTree} {...baseOptions()}>
                {children}
            </DocsLayout>
        </RootProvider>
    );
}
