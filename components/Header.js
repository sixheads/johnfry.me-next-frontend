import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/johnfryme-logo.svg'
import styles from '../styles/Header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
          <Image className={styles.logo} src={logo} alt="johnfry.me - logo" width={145} height={30} />
        </a>
      </Link>
    </header>
  )
}
