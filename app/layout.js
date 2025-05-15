// app/layout.js
export const metadata = {
  title: 'Secret Reveal App',
  description: 'Svela il luogo nascosto con la combinazione corretta',
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <head />
      <body>{children}</body>
    </html>
  );
}
