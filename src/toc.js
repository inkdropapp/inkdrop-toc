import Toc from 'remark-toc'
import createRemarkAnchor from './remark-anchor'

module.exports = {
  origAComponent: null,

  activate() {
    const { MDEPreview } = inkdrop.components.classes
    if (MDEPreview) {
      MDEPreview.remarkPlugins.push(Toc)
      this.setTocLinkComponent()
    }
  },

  deactivate() {
    const { MDEPreview } = inkdrop.components.classes
    if (MDEPreview) {
      MDEPreview.remarkPlugins = MDEPreview.remarkPlugins.filter(
        plugin => plugin !== Toc
      )
      this.unsetTocComponent()
    }
  },

  setTocLinkComponent() {
    const { MDEPreview } = inkdrop.components.classes
    const OrigA = MDEPreview.remarkReactOptions.remarkReactComponents.a
    const RemarkAnchor = createRemarkAnchor(OrigA)
    MDEPreview.remarkReactOptions.remarkReactComponents.a = RemarkAnchor
    this.origAComponent = OrigA
  },

  unsetTocComponent() {
    const { MDEPreview } = inkdrop.components.classes
    MDEPreview.remarkReactOptions.remarkReactComponents.a = this.origAComponent
  }
}
