import Toc from 'remark-toc'
import createRemarkAnchor from './remark-anchor'
import { markdownRenderer } from 'inkdrop'

module.exports = {
  origAComponent: null,

  activate() {
    if (markdownRenderer) {
      markdownRenderer.remarkPlugins.push(Toc)
      !inkdrop.isMobile && this.setTocLinkComponent()
    }
  },

  deactivate() {
    if (markdownRenderer) {
      markdownRenderer.remarkPlugins = markdownRenderer.remarkPlugins.filter(
        plugin => plugin !== Toc
      )
      !inkdrop.isMobile && this.unsetTocComponent()
    }
  },

  setTocLinkComponent() {
    const OrigA = markdownRenderer.remarkReactComponents.a
    const RemarkAnchor = createRemarkAnchor(OrigA)
    markdownRenderer.remarkReactComponents.a = RemarkAnchor
    this.origAComponent = OrigA
  },

  unsetTocComponent() {
    if (this.origAComponent !== undefined) {
      markdownRenderer.remarkReactComponents.a = this.origAComponent
    } else {
      delete markdownRenderer.remarkReactComponents.a
    }
  }
}
