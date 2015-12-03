'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @function Input
 * @description An input in a field.
 */
var Input = function Input(props) {
  var handleChange = function handleChange(e) {
    return props.onChange(e.target.value);
  };

  return _react2.default.createElement(
    'span',
    { className: 'form-field-input' },
    props.type === 'textarea' ? _react2.default.createElement('textarea', _extends({}, props, {
      role: 'textbox',
      className: 'input',
      onChange: handleChange
    })) : _react2.default.createElement('input', _extends({}, props, {
      className: 'input',
      onChange: handleChange
    })),
    props.error ? _react2.default.createElement(
      'span',
      { className: 'input-error' },
      props.error
    ) : null
  );
};

Input.propTypes = {
  onChange: _react.PropTypes.func.isRequired
};

exports.default = Input;
