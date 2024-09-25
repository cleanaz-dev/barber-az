import { Inter } from "next/font/google";
import 'rsuite/dist/rsuite-no-reset.min.css';
import { CustomProvider } from 'rsuite';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Clean AZ Cutz",
  description: "AI Powered Barber Shop Booking and AI Voice  Assistant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CustomProvider>{children}</CustomProvider>
        </body>
    </html>
  );
}
