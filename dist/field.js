'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _label = require('./label');

var _label2 = _interopRequireDefault(_label);

var _input = require('./input');

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @class Field
 * @description A field in the form.
 */
var Field = function Field(props) {
  return _react2.default.createElement(
    'div',
    { className: 'form-field', style: props.style },
    props.label ? _react2.default.createElement(_label2.default, {
      name: props.name
    }) : null,
    props.input ? _react2.default.createElement(_input2.default, props) : null
  );
};

Field.propTypes = {
  className: _react.PropTypes.string,
  type: _react.PropTypes.string,
  placeholder: _react.PropTypes.string,
  required: _react.PropTypes.bool,
  disabled: _react.PropTypes.bool,
  label: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.bool]).isRequired,
  name: _react.PropTypes.string.isRequired,
  style: _react.PropTypes.object,
  onChange: _react.PropTypes.func.isRequired,
  value: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.string])
};

Field.defaultProps = {
  className: 'form-field', // What is the field className?
  type: 'text', // What type of input field is it?
  placeholder: null, // What is the input field placholder?
  required: true, // Is the input field required?
  disabled: false, // Is the field disabled?
  label: true, // Is there a label for the field?
  input: true, // Is there an input?
  name: null, // What is the name of the field?
  style: null // What is the style of the field?
};

exports.default = Field;
