import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Systema: Анатомический Атлас",
  description: "Интерактивный 3D атлас для изучения анатомии",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="yandex-verification" content="2cfb5ab8631c4be6" />
        <meta name="google-site-verification" content="oVuY9RI6JmXkghyJH_jBE5i2a0DHgjniwJi0krE_3CA" />

        <link type="image/x-icon" rel="shortcut icon" href="./icons/favicon.ico" />

        <Script
          id="yandex-metrika-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

              ym(93398876, "init", {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true
              });
            `,
          }}
        />

        <link type="image/png" sizes="16x16" rel="icon" href="./icons/favicon-16x16.png" />
        <link type="image/png" sizes="32x32" rel="icon" href="./icons/favicon-32x32.png" />
        <link type="image/png" sizes="96x96" rel="icon" href="./icons/favicon-96x96.png" />
        <link type="image/png" sizes="120x120" rel="icon" href="./icons/favicon-120x120.png" />

        <link type="image/png" sizes="72x72" rel="icon" href="./icons/android-icon-72x72.png" />
        <link type="image/png" sizes="96x96" rel="icon" href="./icons/android-icon-96x96.png" />
        <link type="image/png" sizes="144x144" rel="icon" href="./icons/android-icon-144x144.png" />
        <link type="image/png" sizes="192x192" rel="icon" href="./icons/android-icon-192x192.png" />
        <link type="image/png" sizes="512x512" rel="icon" href="./icons/android-icon-512x512.png" />
        <link rel="manifest" href="./manifest.json" />

        <link sizes="57x57" rel="apple-touch-icon" href="./icons/apple-touch-icon-57x57.png" />
        <link sizes="60x60" rel="apple-touch-icon" href="./icons/apple-touch-icon-60x60.png" />
        <link sizes="72x72" rel="apple-touch-icon" href="./icons/apple-touch-icon-72x72.png" />
        <link sizes="76x76" rel="apple-touch-icon" href="./icons/apple-touch-icon-76x76.png" />
        <link sizes="114x114" rel="apple-touch-icon" href="./icons/apple-touch-icon-114x114.png" />
        <link sizes="120x120" rel="apple-touch-icon" href="./icons/apple-touch-icon-120x120.png" />
        <link sizes="144x144" rel="apple-touch-icon" href="./icons/apple-touch-icon-144x144.png" />
        <link sizes="152x152" rel="apple-touch-icon" href="./icons/apple-touch-icon-152x152.png" />
        <link sizes="180x180" rel="apple-touch-icon" href="./icons/apple-touch-icon-180x180.png" />

        <link color="#e52037" rel="mask-icon" href="./icons/safari-pinned-tab.svg" />

        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="msapplication-TileImage" content="./icons/mstile-144x144.png" />
        <meta name="msapplication-square70x70logo" content="./icons/mstile-70x70.png" />
        <meta name="msapplication-square150x150logo" content="./icons/mstile-150x150.png" />
        <meta name="msapplication-wide310x150logo" content="./icons/mstile-310x310.png" />
        <meta name="msapplication-square310x310logo" content="./icons/mstile-310x150.png" />
        <meta name="application-name" content="Systema: Анатомический Атлас" />
        <meta name="msapplication-config" content="./browserconfig.xml" />
      </head>
      <body>
        <Header />
        <div id="root" className={inter.className}>{children}</div>
        <Footer />
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/93398876" style={{ position: 'absolute', left: '-9999px' }} alt="" />
          </div>
        </noscript>
      </body>
    </html>
  );
}
