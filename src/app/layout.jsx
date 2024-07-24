import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen grid place-items-center">{children}</body>
    </html>
  );
}
