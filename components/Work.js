import Image from 'next/image';
import styles from '../styles/Work.module.scss';

export default function Work({ project }) {
  const { title, projectLink } = project.attributes;
  const { studioName, studioLink } =
    project.attributes.studio.data.attributes;
  const { url } =
    project.attributes.featuredImage.data.attributes.formats.medium;
  // console.log(project);
  return (
    <li className="grid__item work">
      <a href={projectLink}>
        <div className="work__image">
          <Image
            src={url ? url : 'fallback.jpg'}
            alt={title}
            width="1000px"
            height="600px"
            layout="responsive"
          />
        </div>
        <h2 className="work__title">{title}</h2>
      </a>
      <p className="work__studio">
        <a href={studioLink}>Designed by {studioName}</a>
      </p>
    </li>
  );
}
