'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Slider = function (_React$Component) {
  _inherits(Slider, _React$Component);

  function Slider() {
    _classCallCheck(this, Slider);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this));

    _this.state = { value: 0 };
    _this.changeValue = _this.changeValue.bind(_this);
    return _this;
  }

  Slider.prototype.changeValue = function changeValue() {
    this.setState({ value: this.refs.input.value * this.props.max });
  };

  Slider.prototype.render = function render() {
    var sliderStyle = {
      position: 'relative',
      width: '284px',
      height: '28px'
    };

    var rangeStyle = {
      webkitAppearance: 'none',
      appearance: 'none',
      touchAction: 'pan-y',
      position: 'absolute',
      margin: '0',
      padding: '0',
      width: '284px',
      backgroundColor: 'transparent'
    };

    var progressBarStyle = {
      webkitAppearance: 'none',
      appearance: 'none',
      position: 'absolute',
      display: 'block',
      margin: '0',
      top: '13px',
      left: '13px',
      width: '256px',
      height: '3px',
      zIndex: '-1',
      backgroundColor: '#D7D7D7'
    };

    return React.createElement(
      'div',
      { style: sliderStyle, 'aria-valuemin': this.props.min, 'aria-valuemax': this.props.max, 'aria-valuenow': this.state.value, 'aria-valuetext': this.state.value },
      React.createElement('input', { ref: 'input', type: 'range', onChange: this.changeValue, defaultValue: this.props.min, min: this.props.min, max: this.props.max, step: this.props.max / 100, style: rangeStyle }),
      React.createElement('progress', { value: this.state.value, min: this.props.min, max: this.props.max, style: progressBarStyle })
    );
  };

  return Slider;
}(React.Component);

ReactDOM.render(React.createElement(Slider, { min: 0, max: 1 }), document.querySelector('#root'));