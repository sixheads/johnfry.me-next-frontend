import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Nav.module.scss';

export default function Nav() {
  const router = useRouter();
  const currentRoute = router.pathname;

  console.log(currentRoute);

  return (
    <nav className={`${styles.nav} site-nav`} role="navigation">
      <ul>
        <li>
          <Link href="/">
            <a
              className={
                currentRoute === '/' ? 'active' : 'non-active'
              }
            >
              Work
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a
              className={
                currentRoute === '/about' ? 'active' : 'non-active'
              }
            >
              About
            </a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a
              className={
                currentRoute === '/contact' ? 'active' : 'non-active'
              }
            >
              Contact
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
