"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NiceLookingSelect;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _jsxRuntime = require("react/jsx-runtime");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/** Style **/

/* Arrow */
var ARROW = _styledComponents.default.span(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    border: solid ", ";\n    border-width: 0 3px 3px 0;\n    display: inline-block;\n    padding: 5px;\n    &:hover {\n        border-color: ", ";\n        cursor: pointer;\n    }\n    &.arrow-up {\n        transform: rotate(-135deg);\n    }\n    &.arrow-down {\n        transform: rotate(45deg);\n    }\n"])), function (props) {
  return props.styledProps.chevronsColor;
}, function (props) {
  return props.styledProps.hoverColor;
});
/* Button */


var BUTTON = _styledComponents.default.button(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    align-items: center;\n    background-color: ", ";\n    border-color: transparent;\n    border-radius: ", ";\n    color: ", ";\n    display: flex;\n    font-size: 18px;\n    gap: 0 30px;\n    justify-content: ", ";\n    min-height: 50px;\n    padding: 5px 10px;\n    width: 100%;\n    &:hover {\n        color: ", ";\n        cursor: pointer;\n    }\n"])), function (props) {
  return props.styledProps.backgroundColor;
}, function (props) {
  return props.styledProps.borderRadius;
}, function (props) {
  return props.styledProps.fontColor;
}, function (props) {
  return props.styledProps.centerTitle ? "center" : "space-between";
}, function (props) {
  return props.styledProps.hoverColor;
});
/* List */


var LIST = _styledComponents.default.ul(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    columns: ", ";\n    list-style: none;\n    margin: auto;\n    padding: 2.5px 10px 5px 10px;\n    ", "\n"])), function (props) {
  return props.styledProps.columnsNumber;
}, function (props) {
  return props.styledProps.centerOptions ? "text-align: center;" : "";
});

var LIST_ITEM = _styledComponents.default.li(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    color: ", ";\n    margin-bottom: 15px;\n    &:hover {\n        color: ", ";\n        cursor: pointer;\n    }\n"])), function (props) {
  return props.styledProps.fontColor;
}, function (props) {
  return props.styledProps.hoverColor;
});
/* Select */


var OPENED_SELECT = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    background-color: ", ";\n"])), function (props) {
  return props.styledProps.backgroundColor;
});

function NiceLookingSelect(_ref) {
  var options = _ref.options,
      parameter = _ref.parameter;

  /* State */
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      showNiceLookingSelect = _useState2[0],
      setShowNiceLookingSelect = _useState2[1];
  /* Select */


  var handleSelected = function handleSelected(event) {
    document.querySelectorAll(".list-item--".concat(parameter.id)).forEach(function (listItem) {
      listItem.classList.remove("selected-item--".concat(parameter.id));
    });
    event.currentTarget.classList.add("selected-item--".concat(parameter.id));
  };
  /** RETURN **/


  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "nice-looking-select",
    id: parameter.id,
    children: [showNiceLookingSelect === false && /*#__PURE__*/(0, _jsxRuntime.jsxs)(BUTTON, {
      id: "btn-open-select--".concat(parameter.id),
      onClick: function onClick() {
        return setShowNiceLookingSelect(true);
      },
      styledProps: parameter,
      children: [parameter.title, " ", parameter.showChevrons === true && /*#__PURE__*/(0, _jsxRuntime.jsx)(ARROW, {
        className: "arrow-down",
        styledProps: parameter
      })]
    }), showNiceLookingSelect === true && /*#__PURE__*/(0, _jsxRuntime.jsxs)(OPENED_SELECT, {
      id: "opened-select--".concat(parameter.id),
      styledProps: parameter,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(BUTTON, {
        id: "btn-close-select--".concat(parameter.id),
        onClick: function onClick() {
          return setShowNiceLookingSelect(false);
        },
        styledProps: parameter,
        children: [parameter.title, " ", parameter.showChevrons === true && /*#__PURE__*/(0, _jsxRuntime.jsx)(ARROW, {
          className: "arrow-up",
          styledProps: parameter
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(LIST, {
        id: "list-select--".concat(parameter.id),
        styledProps: parameter,
        children: options.map(function (option, index) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(LIST_ITEM, {
            className: "list-item--".concat(parameter.id),
            onClick: handleSelected,
            styledProps: parameter,
            children: option
          }, index);
        })
      })]
    })]
  });
}