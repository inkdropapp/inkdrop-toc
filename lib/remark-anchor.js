'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = createRemarkAnchor;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createRemarkAnchor(OrigA) {
  return class RemarkAnchor extends _react2.default.Component {
    constructor(...args) {
      var _temp;

      return _temp = super(...args), this.handleClickLink = e => {
        const { props } = this;
        const mdePreview = document.querySelector('.mde-preview');
        const section = document.querySelector(props.href);
        mdePreview.scrollTop = section.offsetTop;
        e.preventDefault();
      }, _temp;
    }

    render() {
      const { props } = this;
      if (props.href && props.href.startsWith('#')) {
        return _react2.default.createElement(
          'a',
          _extends({}, props, { onClick: this.handleClickLink }),
          props.children
        );
      } else if (OrigA) {
        return _react2.default.createElement(
          OrigA,
          props,
          props.children
        );
      } else {
        return _react2.default.createElement(
          'a',
          props,
          props.children
        );
      }
    }

  };
}