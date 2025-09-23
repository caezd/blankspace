import "./globals.css";

export default function Layout({ children }) {
    return (
        <html lang="fr" suppressHydrationWarning>
            <body>{children}</body>
        </html>
    );
}
