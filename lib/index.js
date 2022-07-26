import { marked } from 'marked'

export const getMarkdownText = (text) => {
  const formattedText = marked(text);
  return { __html: formattedText };
}
