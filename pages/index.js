import Head from 'next/head';
import SiteIntro from '../components/SiteIntro';
import WorkList from '../components/WorkList';
import { API_URL } from '../config';

export default function WorkPage({ projects, page }) {
  return (
    <>
      <Head>
        <title>johnfry.me</title>
        <meta
          name="description"
          content="Online portfolio of John Fry, a full-stack developer."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SiteIntro intro={page} />

      <main className="site-main grid">
        <h1 className="page-title">{page.data.attributes.title}</h1>
        <WorkList projects={projects} />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const projectRes = await fetch(
    `${API_URL}/api/projects?populate=*&sort=dateCompleted:desc`
  );
  const projects = await projectRes.json();

  const pageRes = await fetch(`${API_URL}/api/work-page?populate=*`);
  const page = await pageRes.json();

  return {
    props: {
      projects,
      page,
    },
  };
}
