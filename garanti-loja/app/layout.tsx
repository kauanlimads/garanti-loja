import { inter } from "@/app/ui/font";
import "@/app/ui/globals.css";
import Header from "@/app/ui/header";
import Footer from "@/app/ui/footer";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}