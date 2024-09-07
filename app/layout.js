import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { Providers } from "./providers"


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Providers>{children}</Providers>
      </body>
    </html>
  );
}
