"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
require("./TextTyped.css");
var TextTyped = (function (_super) {
    __extends(TextTyped, _super);
    function TextTyped() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.counter = 0;
        _this.currentTextsIndex = 0;
        _this.typeText = function () {
            _this.currentText = _this.props.texts[_this.currentTextsIndex];
            if (_this.counter < _this.currentText.length && _this.ref !== null && _this.ref.innerText !== null) {
                _this.ref.innerText += _this.currentText.charAt(_this.counter);
                _this.counter++;
                _this.timer = setTimeout(function () { return _this.typeText(); }, 30);
            }
            else {
                clearTimeout(_this.timer);
                setTimeout(function () {
                    if (_this.ref !== null && _this.ref.innerText !== null) {
                        _this.counter = _this.ref.innerText.length;
                        _this.removeText();
                    }
                }, 2000);
            }
        };
        _this.removeText = function () {
            if (_this.counter > 0) {
                if (_this.ref !== null && _this.ref.innerText !== null) {
                    _this.ref.innerText = _this.ref.innerText.slice(0, -1);
                    _this.counter--;
                    _this.timer = setTimeout(function () { return _this.removeText(); }, 50);
                }
            }
            else {
                clearTimeout(_this.timer);
                _this.counter = 0;
                if (_this.props.texts.length > _this.currentTextsIndex + 1) {
                    _this.currentTextsIndex++;
                }
                else {
                    _this.currentTextsIndex = 0;
                }
                _this.typeText();
            }
        };
        return _this;
    }
    TextTyped.prototype.componentDidMount = function () {
        if (this.props.texts.length > 0 && this.ref.innerText !== null) {
            this.typeText();
        }
    };
    TextTyped.prototype.render = function () {
        var _this = this;
        return React.createElement("div", null,
            React.createElement("span", { ref: function (div) { return _this.ref = div; } }),
            React.createElement("span", { className: 'cursor' }));
    };
    return TextTyped;
}(React.Component));
exports.default = TextTyped;
//# sourceMappingURL=TextTyped.js.map