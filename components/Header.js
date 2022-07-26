import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/johnfryme-logo.svg'

export default function Header() {
  return (
    <header className="site-branding">
      <Link href="/">
        <a style={{marginTop: '3px', display: 'block'}}>
          <Image src={logo} alt="johnfry.me - logo" width={145} height={30} />
        </a>
      </Link>
    </header>
  )
}
