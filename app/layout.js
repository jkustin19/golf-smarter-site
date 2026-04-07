import Link from 'next/link';
import styles from './layout.module.css';
import './globals.css';

export const metadata = {
  title: 'Golf Smarter - Quick Tips & Gear Reviews for Weekend Golfers',
  description: 'Golf tips and honest gear reviews for weekend golfers who want to play smarter, not harder.',
  openGraph: {
    title: 'Golf Smarter',
    description: 'Quick tips and honest gear reviews for weekend golfers',
    url: 'https://golfsmarter.org',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <nav className={styles.navbar}>
          <div className={styles.navContainer}>
            <Link href="/" className={styles.logo}>
              Golf Smarter
            </Link>
            <ul className={styles.navLinks}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/#articles">Articles</Link></li>
              <li><Link href="/about">About</Link></li>
            </ul>
          </div>
        </nav>

        <main>
          {children}
        </main>

        <footer className={styles.footer}>
          <p>&copy; 2026 Golf Smarter | golfsmarter.org</p>
        </footer>
      </body>
    </html>
  );
}
