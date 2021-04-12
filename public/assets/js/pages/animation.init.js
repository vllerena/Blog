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

/***/ "./resources/js/pages/animation.init.js":
/*!**********************************************!*\
  !*** ./resources/js/pages/animation.init.js ***!
  \**********************************************/
/***/ (() => {

eval("/*\r\nTemplate Name: Ubold - Responsive Bootstrap 4 Admin Dashboard\r\nAuthor: CoderThemes\r\nWebsite: https://coderthemes.com/\r\nContact: support@coderthemes.com\r\nFile: Animation demo only\r\n*/\nfunction testAnim(x) {\n  $('#animationSandbox').removeClass().addClass('animate__animated animate__' + x).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {\n    $(this).removeClass();\n  });\n}\n\n;\n$(document).ready(function () {\n  $('.js--triggerAnimation').click(function (e) {\n    e.preventDefault();\n    var anim = $('.js--animations').val();\n    testAnim(anim);\n  });\n  $('.js--animations').change(function () {\n    var anim = $(this).val();\n    testAnim(anim);\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvYW5pbWF0aW9uLmluaXQuanM/YmM1YSJdLCJuYW1lcyI6WyJ0ZXN0QW5pbSIsIngiLCIkIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsIm9uZSIsImRvY3VtZW50IiwicmVhZHkiLCJjbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImFuaW0iLCJ2YWwiLCJjaGFuZ2UiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsU0FBU0EsUUFBVCxDQUFrQkMsQ0FBbEIsRUFBcUI7QUFDakJDLEVBQUFBLENBQUMsQ0FBQyxtQkFBRCxDQUFELENBQXVCQyxXQUF2QixHQUFxQ0MsUUFBckMsQ0FBOEMsZ0NBQWdDSCxDQUE5RSxFQUFpRkksR0FBakYsQ0FBcUYsOEVBQXJGLEVBQXFLLFlBQVU7QUFDM0tILElBQUFBLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUMsV0FBUjtBQUNILEdBRkQ7QUFHSDs7QUFBQTtBQUVERCxDQUFDLENBQUNJLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFlBQVU7QUFDeEJMLEVBQUFBLENBQUMsQ0FBQyx1QkFBRCxDQUFELENBQTJCTSxLQUEzQixDQUFpQyxVQUFTQyxDQUFULEVBQVc7QUFDeENBLElBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUNBLFFBQUlDLElBQUksR0FBR1QsQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJVLEdBQXJCLEVBQVg7QUFDQVosSUFBQUEsUUFBUSxDQUFDVyxJQUFELENBQVI7QUFDSCxHQUpEO0FBTUFULEVBQUFBLENBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCVyxNQUFyQixDQUE0QixZQUFVO0FBQ2xDLFFBQUlGLElBQUksR0FBR1QsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRVSxHQUFSLEVBQVg7QUFDQVosSUFBQUEsUUFBUSxDQUFDVyxJQUFELENBQVI7QUFDSCxHQUhEO0FBSUgsQ0FYRCIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcblRlbXBsYXRlIE5hbWU6IFVib2xkIC0gUmVzcG9uc2l2ZSBCb290c3RyYXAgNCBBZG1pbiBEYXNoYm9hcmRcclxuQXV0aG9yOiBDb2RlclRoZW1lc1xyXG5XZWJzaXRlOiBodHRwczovL2NvZGVydGhlbWVzLmNvbS9cclxuQ29udGFjdDogc3VwcG9ydEBjb2RlcnRoZW1lcy5jb21cclxuRmlsZTogQW5pbWF0aW9uIGRlbW8gb25seVxyXG4qL1xyXG5cclxuZnVuY3Rpb24gdGVzdEFuaW0oeCkge1xyXG4gICAgJCgnI2FuaW1hdGlvblNhbmRib3gnKS5yZW1vdmVDbGFzcygpLmFkZENsYXNzKCdhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX18nICsgeCkub25lKCd3ZWJraXRBbmltYXRpb25FbmQgbW96QW5pbWF0aW9uRW5kIE1TQW5pbWF0aW9uRW5kIG9hbmltYXRpb25lbmQgYW5pbWF0aW9uZW5kJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgICAkKCcuanMtLXRyaWdnZXJBbmltYXRpb24nKS5jbGljayhmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyIGFuaW0gPSAkKCcuanMtLWFuaW1hdGlvbnMnKS52YWwoKTtcclxuICAgICAgICB0ZXN0QW5pbShhbmltKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5qcy0tYW5pbWF0aW9ucycpLmNoYW5nZShmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBhbmltID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0ZXN0QW5pbShhbmltKTtcclxuICAgIH0pO1xyXG59KTsgICAgIl0sImZpbGUiOiIuL3Jlc291cmNlcy9qcy9wYWdlcy9hbmltYXRpb24uaW5pdC5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/pages/animation.init.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/js/pages/animation.init.js"]();
/******/ 	
/******/ })()
;