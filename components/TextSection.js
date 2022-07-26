import { getMarkdownText } from '../lib'

export default function TextSection({section}) {

  return (
    <>
      <h2 className="section-title">{section.sectionTitle}</h2>
      <div className='body-content' dangerouslySetInnerHTML={getMarkdownText(section.sectionText)} />
    </>
  )
}
