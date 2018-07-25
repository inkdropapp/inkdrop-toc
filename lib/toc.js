'use strict';

var _remarkToc = require('remark-toc');

var _remarkToc2 = _interopRequireDefault(_remarkToc);

var _remarkAnchor = require('./remark-anchor');

var _remarkAnchor2 = _interopRequireDefault(_remarkAnchor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  origAComponent: null,

  activate() {
    const { MDEPreview } = inkdrop.components.classes;
    if (MDEPreview) {
      MDEPreview.remarkPlugins.push(_remarkToc2.default);
      this.setTocLinkComponent();
    }
  },

  deactivate() {
    const { MDEPreview } = inkdrop.components.classes;
    if (MDEPreview) {
      MDEPreview.remarkPlugins = MDEPreview.remarkPlugins.filter(plugin => plugin !== _remarkToc2.default);
      this.unsetTocComponent();
    }
  },

  setTocLinkComponent() {
    const { MDEPreview } = inkdrop.components.classes;
    const OrigA = MDEPreview.remarkReactOptions.remarkReactComponents.a;
    const RemarkAnchor = (0, _remarkAnchor2.default)(OrigA);
    MDEPreview.remarkReactOptions.remarkReactComponents.a = RemarkAnchor;
    this.origAComponent = OrigA;
  },

  unsetTocComponent() {
    const { MDEPreview } = inkdrop.components.classes;
    MDEPreview.remarkReactOptions.remarkReactComponents.a = this.origAComponent;
  }
};