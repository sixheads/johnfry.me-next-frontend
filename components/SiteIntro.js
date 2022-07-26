import Link from 'next/link'
import styles from '../styles/SiteIntro.module.scss'

export default function SiteIntro({intro}) {

  const { introText , ctaText, ctaLink } = intro.data.attributes.intro;

  return (
    <div className={`${styles.intro} site-intro`}>
      <p>{introText}</p>
      <p>
        <Link href={ctaLink}>
          <a>{ctaText}</a>
        </Link>
      </p>
    </div>
  )
}
