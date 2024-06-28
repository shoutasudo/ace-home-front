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
        template: "%s | 女性スタッフの不動産・リフォーム屋さんACE HOME",
        default: "女性スタッフの不動産・リフォーム屋さんACE HOME",
    },
    description: "ACE HOMEは、兵庫県神戸市で女性が運営する女性スタッフによる不動産・リフォーム屋さんです。一人暮らしの女性、学生さん、ファミリーの方、もちろん男性の方も安心して相談出来るように宅地建物取引士・行政書士・２級管理施工技師などのプロフェッショナルがサポートいたします。",
    openGraph: {
        title: "女性スタッフの不動産・リフォーム屋さんACE HOME",
        description: "ACE HOMEは、兵庫県神戸市で女性が運営する女性スタッフによる不動産・リフォーム屋さんです。一人暮らしの女性、学生さん、ファミリーの方、もちろん男性の方も安心して相談出来るように宅地建物取引士・行政書士・２級管理施工技師などのプロフェッショナルがサポートいたします。",
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
