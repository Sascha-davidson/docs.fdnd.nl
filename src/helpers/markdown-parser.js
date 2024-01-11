import document from '../../docs.conf.js'
import fdndDiscussions from './fdnd-discussions.js'
import fdndWrapper from './fdnd-wrapper.js'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeRaw from 'rehype-raw'
import rehypeSectionHeadings from 'rehype-section-headings'
import rehypeShiftHeading from 'rehype-shift-heading'
import rehypeSlug from 'rehype-slug'
import rehypeStringify from 'rehype-stringify'
import rehypeToc from '@jsdevtools/rehype-toc'
import rehypeWrap from 'rehype-wrap'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import shiki from 'rehype-shiki'
import { unified } from 'unified'

export default unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkRehype, { allowDangerousHtml: true, footnoteLabel: 'Noten en citaties' })
  .use(rehypeRaw)
  .use(rehypeShiftHeading, { shift: 1 })
  .use(rehypeSlug)
  .use(fdndDiscussions)
  .use(rehypeWrap, { wrapper: 'article' })
  .use(rehypeToc)
  .use(rehypeAutolinkHeadings, { properties: { class: 'auto-link', 'aria-hidden': 'true' } })
  .use(rehypeSectionHeadings, { sectionDataAttribute: 'data-heading-id' })
  .use(shiki, { theme: 'monokai' })
  .use(fdndWrapper)
  .use(rehypeDocument, document)
  .use(rehypeFormat)
  .use(rehypeStringify)
