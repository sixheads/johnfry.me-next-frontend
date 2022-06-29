import Link from 'next/link'
import styles from '../styles/Nav.module.scss'

export default function Nav() {
  return (
    <nav className={`${styles.nav} site-nav`}>
      <ul>
        <li>
          <Link href="/" >
            <a>
              Work
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about" >
            <a>
              About
            </a>
          </Link>
        </li>
        <li>
          <Link href="/contact" >
            <a>
              Contact
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
