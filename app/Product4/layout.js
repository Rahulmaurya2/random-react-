//import { Children } from 'react';
//import myContext from './Helper/Context';

export const metadata = {
  title: "Currency converter",
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
