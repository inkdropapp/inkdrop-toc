import remarkToc from 'remark-toc'
import { markdownRenderer } from 'inkdrop'

module.exports = {
  activate() {
    if (markdownRenderer) {
      markdownRenderer.remarkPlugins.push(remarkToc)
    }
  },

  deactivate() {
    if (markdownRenderer) {
      markdownRenderer.remarkPlugins = markdownRenderer.remarkPlugins.filter(
        plugin => plugin !== remarkToc
      )
    }
  }
}
