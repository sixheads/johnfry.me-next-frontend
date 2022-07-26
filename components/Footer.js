import styles from '../styles/Footer.module.scss'

export default function Footer() {
  return (
    <footer className={`${styles.footer} site-footer`}>
      <p className='copyright small'>&copy; John Fry. All Rights Reserved {new Date().getFullYear()}. </p>
      <p className='email small'>
        <a href="mailto:hello@johnfry.me">hello@johnfry.me</a>
      </p>
    </footer>
  )
}
