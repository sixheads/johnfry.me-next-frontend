import { getMarkdownText } from '../lib';
import { API_URL } from '../config';
import Head from 'next/head';
import SiteIntro from '../components/SiteIntro';
import TextSection from '../components/TextSection';

export default function AboutPage({ page }) {
  console.log(page);
  const { title, body, section } = page.data.attributes;

  return (
    <>
      <Head>
        <title>About | johnfry.me</title>
        <meta name="description" content="All about me, John Fry" />
      </Head>

      <SiteIntro intro={page} />

      <main className="site-main grid">
        <h1 className="page-title">{title}</h1>
        <div
          className="body-content"
          dangerouslySetInnerHTML={getMarkdownText(body)}
        />

        {section.map((singleSection, index) => {
          return <TextSection key={index} section={singleSection} />;
        })}
      </main>
    </>
  );
}

export async function getStaticProps() {
  const pageRes = await fetch(`${API_URL}/api/about-page?populate=*`);
  const page = await pageRes.json();

  return {
    props: {
      page,
    },
  };
}
