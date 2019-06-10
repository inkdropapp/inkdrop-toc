"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createRemarkAnchor;

var React = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function createRemarkAnchor(OrigA) {
  var _temp;

  return _temp = class RemarkAnchor extends React.Component {
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
        return React.createElement("a", _extends({}, props, {
          onClick: this.handleClickLink
        }), props.children);
      } else if (OrigA) {
        return React.createElement(OrigA, props, props.children);
      } else {
        return React.createElement("a", props, props.children);
      }
    }

  }, _temp;
}