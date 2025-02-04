import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CodingQuizHub",
  description: "Generated by Coding Quiz Hub",
  keywords: "HTML,CSS,JavaScript,React.js,Next.js,Node.js,Php,MySQL,Angular,Python,java,dotnet,mongodb,coding,programing language,coding quiz",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
    ],
  },
  other: {
    "google-adsense-account": "ca-pub-2530221297315413",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        {/* Google Adsense Script */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2530221297315413"
          crossOrigin="anonymous"
        ></script>

        {/* Google Analytics Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-HZXCR9YV9R');
            `,
          }}
        />

        {/* External Scripts */}
        <script
          type="text/javascript"
          src="//pl25748443.profitablecpmrate.com/98/09/fc/9809fc1c07e49792d271d009f521c87c.js"
        ></script>
        <script
          type="text/javascript"
          src="//pl25747768.profitablecpmrate.com/fe/b2/3c/feb23c23606b1f21baabeb52d82aa42f.js"
        ></script>
        <script
          async="async"
          data-cfasync="false"
          src="//pl25748529.profitablecpmrate.com/973da03438430a67f8d94d103c0bff91/invoke.js"
        ></script>
        <div id="container-973da03438430a67f8d94d103c0bff91"></div>
      </body>
    </html>
  );
}