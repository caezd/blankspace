import "./globals.css";
import { Inclusive_Sans, Nunito } from "next/font/google";

const headings = Inclusive_Sans({ subsets: ["latin"] });
const body = Nunito({ subsets: ["latin"], weight: ["400", "700"] });

export default function Layout({ children }) {
    return (
        <html lang="fr" suppressHydrationWarning>
            <body suppressHydrationWarning className={`${body.className}`}>
                {children}
            </body>
        </html>
    );
}
