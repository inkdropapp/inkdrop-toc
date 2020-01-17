"use strict";

var _remarkToc = _interopRequireDefault(require("remark-toc"));

var _remarkAnchor = _interopRequireDefault(require("./remark-anchor"));

var _inkdrop = require("inkdrop");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  origAComponent: null,

  activate() {
    if (_inkdrop.markdownRenderer) {
      _inkdrop.markdownRenderer.remarkPlugins.push(_remarkToc.default);

      !inkdrop.isMobile && this.setTocLinkComponent();
    }
  },

  deactivate() {
    if (_inkdrop.markdownRenderer) {
      _inkdrop.markdownRenderer.remarkPlugins = _inkdrop.markdownRenderer.remarkPlugins.filter(plugin => plugin !== _remarkToc.default);
      !inkdrop.isMobile && this.unsetTocComponent();
    }
  },

  setTocLinkComponent() {
    const OrigA = _inkdrop.markdownRenderer.remarkReactComponents.a;
    const RemarkAnchor = (0, _remarkAnchor.default)(OrigA);
    _inkdrop.markdownRenderer.remarkReactComponents.a = RemarkAnchor;
    this.origAComponent = OrigA;
  },

  unsetTocComponent() {
    _inkdrop.markdownRenderer.remarkReactComponents.a = this.origAComponent;
  }

};