"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createRemarkAnchor;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function createRemarkAnchor(OrigA) {
  return class RemarkAnchor extends React.Component {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "handleClickLink", e => {
        const {
          props
        } = this;
        const mdePreview = document.querySelector('.mde-preview');
        const sectionId = decodeURIComponent(props.href);
        const section = document.querySelector(sectionId);

        if (mdePreview && section) {
          mdePreview.scrollTop = section.offsetTop - mdePreview.offsetTop;
        }

        e.preventDefault();
      });
    }

    render() {
      const {
        props
      } = this;

      if (props.href && props.href.startsWith('#')) {
        return /*#__PURE__*/React.createElement("a", _extends({}, props, {
          onClick: this.handleClickLink
        }), props.children);
      } else if (OrigA) {
        return /*#__PURE__*/React.createElement(OrigA, props, props.children);
      } else {
        return /*#__PURE__*/React.createElement("a", props, props.children);
      }
    }

  };
}