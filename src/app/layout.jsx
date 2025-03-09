import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "ES Analysis",
  description: "Data Analyst / Research Analyst / Analytics Consultant",
  message:
    " Collect, process, analyse and present data from supporting every day business decisions to fueling global change. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta
        name="google-adsense-account"
        content="ca-pub-1126149056959231"
      ></meta>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1126149056959231"
          crossOrigin="anonymous"
        ></Script>

        {children}
      </body>
    </html>
  );
}
