import '@/styles/globals.css'
import Link from "next/link";

export default function App({ Component, pageProps }) {
  return (
    <>
      <header className="top-menu">
        <nav className="top-menu__inner">
          <Link href="/" className="top-menu__logo">
            Get Post AI
          </Link>
          <div className="top-menu__links">
            <Link href="/#please" className="top-menu__link">
              Please
            </Link>
            <Link href="/#next" className="top-menu__link">
              Next
            </Link>
            <Link href="/#news" className="top-menu__link">
              News
            </Link>
          </div>
        </nav>
      </header>
      <main className="page-content">
        <Component {...pageProps} />
      </main>
    </>
  )
}