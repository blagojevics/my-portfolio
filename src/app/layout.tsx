import type { Metadata } from "next";
import "./globals.css";
import Provider from "./provider";
import ThemeWrapper from "./themeWrapper";

export const metadata: Metadata = {
  title: "Stefan Blagojević",
  description: "...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <ThemeWrapper>{children}</ThemeWrapper>
        </Provider>
      </body>
    </html>
  );
}
