import { theme } from "@/lib/source";
import { createFromSource } from "fumadocs-core/search/server";

export const { GET } = createFromSource(theme, {
    // https://docs.orama.com/docs/orama-js/supported-languages
    language: "french",
});
