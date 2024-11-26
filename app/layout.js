export const metadata = {
  title: "Espressivo Concerts",
  description: "Espressivo website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
