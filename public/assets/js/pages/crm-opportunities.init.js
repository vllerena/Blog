/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/pages/crm-opportunities.init.js":
/*!******************************************************!*\
  !*** ./resources/js/pages/crm-opportunities.init.js ***!
  \******************************************************/
/***/ (() => {

eval("/*\r\nTemplate Name: Ubold - Responsive Bootstrap 4 Admin Dashboard\r\nAuthor: CoderThemes\r\nWebsite: https://coderthemes.com/\r\nContact: support@coderthemes.com\r\nFile: CRM Opportunities init\r\n*/\n$(document).ready(function () {\n  var colors = ['#4fc6e1', '#6658dd', '#f7b84b', '#f1556c', '#1abc9c'];\n  var dataColors = $(\"#status-chart\").data('colors');\n\n  if (dataColors) {\n    colors = dataColors.split(\",\");\n  }\n\n  var DrawSparkline = function DrawSparkline() {\n    $('#status-chart').sparkline([20, 40, 30, 10, 28], {\n      type: 'pie',\n      width: '220',\n      height: '220',\n      sliceColors: colors\n    });\n  };\n\n  DrawSparkline();\n  var resizeChart;\n  $(window).resize(function (e) {\n    clearTimeout(resizeChart);\n    resizeChart = setTimeout(function () {\n      DrawSparkline();\n    }, 300);\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvY3JtLW9wcG9ydHVuaXRpZXMuaW5pdC5qcz8wMTU5Il0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiY29sb3JzIiwiZGF0YUNvbG9ycyIsImRhdGEiLCJzcGxpdCIsIkRyYXdTcGFya2xpbmUiLCJzcGFya2xpbmUiLCJ0eXBlIiwid2lkdGgiLCJoZWlnaHQiLCJzbGljZUNvbG9ycyIsInJlc2l6ZUNoYXJ0Iiwid2luZG93IiwicmVzaXplIiwiZSIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLENBQUMsQ0FBRUMsUUFBRixDQUFELENBQWNDLEtBQWQsQ0FBb0IsWUFBVztBQUMzQixNQUFJQyxNQUFNLEdBQUcsQ0FBQyxTQUFELEVBQVcsU0FBWCxFQUFxQixTQUFyQixFQUErQixTQUEvQixFQUF5QyxTQUF6QyxDQUFiO0FBQ0EsTUFBSUMsVUFBVSxHQUFHSixDQUFDLENBQUMsZUFBRCxDQUFELENBQW1CSyxJQUFuQixDQUF3QixRQUF4QixDQUFqQjs7QUFDQSxNQUFJRCxVQUFKLEVBQWdCO0FBQ1pELElBQUFBLE1BQU0sR0FBR0MsVUFBVSxDQUFDRSxLQUFYLENBQWlCLEdBQWpCLENBQVQ7QUFDSDs7QUFDRCxNQUFJQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQVc7QUFDM0JQLElBQUFBLENBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJRLFNBQW5CLENBQTZCLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsRUFBYixFQUFpQixFQUFqQixDQUE3QixFQUFtRDtBQUMvQ0MsTUFBQUEsSUFBSSxFQUFFLEtBRHlDO0FBRS9DQyxNQUFBQSxLQUFLLEVBQUUsS0FGd0M7QUFHL0NDLE1BQUFBLE1BQU0sRUFBRSxLQUh1QztBQUkvQ0MsTUFBQUEsV0FBVyxFQUFFVDtBQUprQyxLQUFuRDtBQU1ILEdBUEQ7O0FBU0FJLEVBQUFBLGFBQWE7QUFFYixNQUFJTSxXQUFKO0FBRUFiLEVBQUFBLENBQUMsQ0FBQ2MsTUFBRCxDQUFELENBQVVDLE1BQVYsQ0FBaUIsVUFBU0MsQ0FBVCxFQUFZO0FBQ3pCQyxJQUFBQSxZQUFZLENBQUNKLFdBQUQsQ0FBWjtBQUNBQSxJQUFBQSxXQUFXLEdBQUdLLFVBQVUsQ0FBQyxZQUFXO0FBQ2hDWCxNQUFBQSxhQUFhO0FBQ2hCLEtBRnVCLEVBRXJCLEdBRnFCLENBQXhCO0FBR0gsR0FMRDtBQU1ILENBekJEIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuVGVtcGxhdGUgTmFtZTogVWJvbGQgLSBSZXNwb25zaXZlIEJvb3RzdHJhcCA0IEFkbWluIERhc2hib2FyZFxyXG5BdXRob3I6IENvZGVyVGhlbWVzXHJcbldlYnNpdGU6IGh0dHBzOi8vY29kZXJ0aGVtZXMuY29tL1xyXG5Db250YWN0OiBzdXBwb3J0QGNvZGVydGhlbWVzLmNvbVxyXG5GaWxlOiBDUk0gT3Bwb3J0dW5pdGllcyBpbml0XHJcbiovXHJcblxyXG4kKCBkb2N1bWVudCApLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGNvbG9ycyA9IFsnIzRmYzZlMScsJyM2NjU4ZGQnLCcjZjdiODRiJywnI2YxNTU2YycsJyMxYWJjOWMnXTtcclxuICAgIHZhciBkYXRhQ29sb3JzID0gJChcIiNzdGF0dXMtY2hhcnRcIikuZGF0YSgnY29sb3JzJyk7XHJcbiAgICBpZiAoZGF0YUNvbG9ycykge1xyXG4gICAgICAgIGNvbG9ycyA9IGRhdGFDb2xvcnMuc3BsaXQoXCIsXCIpO1xyXG4gICAgfVxyXG4gICAgdmFyIERyYXdTcGFya2xpbmUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAkKCcjc3RhdHVzLWNoYXJ0Jykuc3BhcmtsaW5lKFsyMCwgNDAsIDMwLCAxMCwgMjhdLCB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwaWUnLFxyXG4gICAgICAgICAgICB3aWR0aDogJzIyMCcsXHJcbiAgICAgICAgICAgIGhlaWdodDogJzIyMCcsXHJcbiAgICAgICAgICAgIHNsaWNlQ29sb3JzOiBjb2xvcnNcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIERyYXdTcGFya2xpbmUoKTtcclxuICAgIFxyXG4gICAgdmFyIHJlc2l6ZUNoYXJ0O1xyXG5cclxuICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGNsZWFyVGltZW91dChyZXNpemVDaGFydCk7XHJcbiAgICAgICAgcmVzaXplQ2hhcnQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBEcmF3U3BhcmtsaW5lKCk7XHJcbiAgICAgICAgfSwgMzAwKTtcclxuICAgIH0pO1xyXG59KTsiXSwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL3BhZ2VzL2NybS1vcHBvcnR1bml0aWVzLmluaXQuanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/pages/crm-opportunities.init.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/js/pages/crm-opportunities.init.js"]();
/******/ 	
/******/ })()
;