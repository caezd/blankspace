import defaultMdxComponents from "fumadocs-ui/mdx";
import { Pre, CodeBlock } from "fumadocs-ui/components/codeblock";
import GithubCodeBlock from "@/components/mdx/GithubCodeBlock";
import Callout from "@/components/mdx/Callout";

export function getMDXComponents(components) {
    return {
        ...defaultMdxComponents,
        ...components,
        GithubCodeBlock,
        Callout,
        pre: ({ ref: _ref, ...props }) => (
            <CodeBlock {...props} keepBackground>
                <Pre>{props.children}</Pre>
            </CodeBlock>
        ),
    };
}
