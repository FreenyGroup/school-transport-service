import './globals.css';

export const metadata = {
  title: 'School Transport Services',
  description: 'School Transport Services',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <form
          name="contact"
          netlify
          netlify-honeypot="bot-field"
          hidden
        >
          <input type="text" name="first-name" />
          <input type="text" name="last-name" />
          <input type="email" name="email" />
          <input type="tel" name="phone" />
        </form>
        {children}
      </body>
    </html>
  );
}
