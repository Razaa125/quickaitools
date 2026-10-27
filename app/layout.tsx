import "./globals.css";
export const metadata = { title: "QuickAITools - Free AI Tools Pack", description: "6 Free AI Tools" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body>{children}</body></html>);
}
