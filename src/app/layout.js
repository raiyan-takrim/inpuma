import "./globals.css";
import { Roboto_Condensed } from "next/font/google"
const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  display: "swap",
})

export const metadata = {
  title: "International Institute of Public Policy and Management (INPUMA)",
  description: "International Institute of Public Policy and Management (INPUMA)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${robotoCondensed.className}}`}
      >
        {children}
      </body>
    </html>
  );
}
