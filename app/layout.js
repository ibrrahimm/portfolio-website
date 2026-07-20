import { Cairo, DM_Sans, Noto_Kufi_Arabic, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-arabic-body",
});

const notoKufiArabic = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic-display",
});

export const metadata = {
  title: "Ibrahim Yehia | Strategic Solution Architect",
  description:
    "Premium bilingual portfolio for Ibrahim Yehia, Strategic Solution Architect & Presales Consultant.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body
        className={`${dmSans.variable} ${plusJakartaSans.variable} ${cairo.variable} ${notoKufiArabic.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
