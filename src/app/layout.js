import './globals.css';

export const metadata = {
  title: 'School Transport Services',
  description: 'School Transport Services',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body>{children}</body>
    </html>
  );
}
