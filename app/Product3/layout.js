export const metadata = {
  title: "Get Data",
  //description: 'Generated by create next app'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
      {/* <myContext>{children}</myContext> */}
    </html>
  );
}
