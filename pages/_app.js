import "@/styles/globals.css";
import Link from "next/link";

export default function App({ Component, pageProps }) {
  return (
    <>
      <header className="top-nav">
        <div className="top-nav__brand">Get Post AI</div>
        <nav className="top-nav__links">
          <Link href="/" className="top-nav__button">
            Home
          </Link>
          <Link href="/privacy" className="top-nav__button">
            Privacy
          </Link>
          <Link href="/terms" className="top-nav__button">
            Terms
          </Link>
        </nav>
      </header>
      <Component {...pageProps} />
    </>
  );
}