export const metadata = {
  title: 'Secret Combination App',
  description: 'Scopri il luogo nascosto inserendo la combinazione corretta',
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <head />
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
