import type { Metadata } from "next";
import "./globals.css";
import "../css/contact.css"
import "../css/contents.css"
import "../css/doubleLineBtn.css"
import "../css/header.css"
import "../css/main.css"
import "../css/company.css"
import "../css/topAbout.css"
import "../css/InstagramContents.css"


export const metadata: Metadata = {
    title: {
        template: "%s | 女性の為の不動産ACE HOME",
        default: "女性の為の不動産ACE HOME",
    },
    description: "兵庫県で女性が運営する女性の為の不動産会社",
    openGraph: {
        title: "女性の為の不動産ACE HOME",
        description: "兵庫県で女性が運営する女性の為の不動産会社",
        url: "https://ace-home-kobe.com",
        siteName: "ACE HOMEのホームページ",
        locale: "jp",
        type: "website"
    }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="ja">
            <body className="antialiased">{children}</body>
        </html>
    );
}
