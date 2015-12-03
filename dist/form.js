'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _submit = require('./submit');

var _submit2 = _interopRequireDefault(_submit);

var _field = require('./field');

var _field2 = _interopRequireDefault(_field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @class Form
 * @description The main public component that holds the
 * fields in a form.
 */

var Form = (function (_Component) {
  _inherits(Form, _Component);

  function Form(props) {
    _classCallCheck(this, Form);

    // Initialize with an empty state to prevent errors

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Form).call(this, props));

    _this.state = {};

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  /**
   * If a field as a default value, then immediately update
   * the state with the value of that field.
   */

  _createClass(Form, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      this.props.fields.filter(function (field) {
        return field.defaultValue;
      }).forEach(function (field) {
        return _this2.setState(_defineProperty({}, field.name.toLowerCase(), field.defaultValue));
      });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();

      this.props.onSubmit(this.state);
    }
  }, {
    key: 'handleChange',
    value: function handleChange(name, value) {
      var _this3 = this;

      return this.setState(_defineProperty({}, name, value), function () {
        if (_this3.props.onChange) _this3.props.onChange(_this3.state);
      });
    }
  }, {
    key: 'getClassName',
    value: function getClassName(props) {
      var className = props.className || 'form-container';

      if (props.isPending) {
        className += ' is-pending';
      } else if (props.isFulfilled) {
        className += ' is-fulfilled';
      } else if (props.isRejected) {
        className += ' is-rejected';
      } else if (props.error) {
        className += ' is-rejected';
      }

      return className;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      return _react2.default.createElement(
        'form',
        {
          onSubmit: this.handleSubmit,
          className: this.getClassName(this.props)
        },
        this.props.error ? _react2.default.createElement(
          'div',
          { className: 'form-container-error' },
          this.props.error
        ) : null,
        this.props.fields.map(function (field) {
          var caseSafeFieldName = field.name.toLowerCase();

          return _react2.default.createElement(_field2.default, _extends({
            key: caseSafeFieldName
          }, field, {
            value: _this4.state[caseSafeFieldName],
            onChange: function onChange(value) {
              _this4.handleChange(caseSafeFieldName, value);

              if (field.onChange) field.onChange(value);
            }
          }));
        }),
        _react2.default.createElement(_submit2.default, null)
      );
    }
  }]);

  return Form;
})(_react.Component);

Form.propTypes = {
  onChange: _react.PropTypes.func,
  onSubmit: _react.PropTypes.func.isRequired
};

Form.defaultProps = {
  fields: null,
  isPending: null,
  isRejected: null,
  isFulfilled: null
};

exports.default = Form;
