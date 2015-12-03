"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @function Label
 * @description A label for fields.
 */
var Label = function Label(props) {
  return _react2.default.createElement(
    "label",
    {
      htmlFor: props.name,
      className: "form-field-label"
    },
    props.name
  );
};

exports.default = Label;
