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

/***/ "./resources/js/pages/kanban.init.js":
/*!*******************************************!*\
  !*** ./resources/js/pages/kanban.init.js ***!
  \*******************************************/
/***/ (() => {

eval("/*\r\nTemplate Name: Ubold - Responsive Bootstrap 4 Admin Dashboard\r\nAuthor: CoderThemes\r\nWebsite: https://coderthemes.com/\r\nContact: support@coderthemes.com\r\nFile: Kanban Board init js\r\n*/\n!function ($) {\n  \"use strict\";\n\n  var KanbanBoard = function KanbanBoard() {\n    this.$body = $(\"body\");\n  }; //initializing various charts and components\n\n\n  KanbanBoard.prototype.init = function () {\n    $('.tasklist').each(function () {\n      Sortable.create($(this)[0], {\n        group: 'shared',\n        animation: 150,\n        ghostClass: 'bg-ghost'\n      });\n    });\n  }, //init KanbanBoard\n  $.KanbanBoard = new KanbanBoard(), $.KanbanBoard.Constructor = KanbanBoard;\n}(window.jQuery), //initializing KanbanBoard\nfunction ($) {\n  \"use strict\";\n\n  $.KanbanBoard.init();\n}(window.jQuery);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMva2FuYmFuLmluaXQuanM/MzkwMiJdLCJuYW1lcyI6WyIkIiwiS2FuYmFuQm9hcmQiLCIkYm9keSIsInByb3RvdHlwZSIsImluaXQiLCJlYWNoIiwiU29ydGFibGUiLCJjcmVhdGUiLCJncm91cCIsImFuaW1hdGlvbiIsImdob3N0Q2xhc3MiLCJDb25zdHJ1Y3RvciIsIndpbmRvdyIsImpRdWVyeSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxDQUFFLFVBQVNBLENBQVQsRUFBWTtBQUNiOztBQUVBLE1BQUlDLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQVc7QUFDNUIsU0FBS0MsS0FBTCxHQUFhRixDQUFDLENBQUMsTUFBRCxDQUFkO0FBQ0EsR0FGRCxDQUhhLENBT2I7OztBQUNBQyxFQUFBQSxXQUFXLENBQUNFLFNBQVosQ0FBc0JDLElBQXRCLEdBQTZCLFlBQVc7QUFDdkNKLElBQUFBLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZUssSUFBZixDQUFvQixZQUFZO0FBQy9CQyxNQUFBQSxRQUFRLENBQUNDLE1BQVQsQ0FBZ0JQLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUSxDQUFSLENBQWhCLEVBQTRCO0FBQzNCUSxRQUFBQSxLQUFLLEVBQUUsUUFEb0I7QUFFM0JDLFFBQUFBLFNBQVMsRUFBRSxHQUZnQjtBQUczQkMsUUFBQUEsVUFBVSxFQUFFO0FBSGUsT0FBNUI7QUFNQSxLQVBEO0FBUUEsR0FURCxFQVdBO0FBQ0FWLEVBQUFBLENBQUMsQ0FBQ0MsV0FBRixHQUFnQixJQUFJQSxXQUFKLEVBWmhCLEVBWWlDRCxDQUFDLENBQUNDLFdBQUYsQ0FBY1UsV0FBZCxHQUNqQ1YsV0FiQTtBQWVBLENBdkJDLENBdUJBVyxNQUFNLENBQUNDLE1BdkJQLENBQUYsRUF5QkE7QUFDQSxVQUFTYixDQUFULEVBQVk7QUFDWDs7QUFDQUEsRUFBQUEsQ0FBQyxDQUFDQyxXQUFGLENBQWNHLElBQWQ7QUFDQSxDQUhELENBR0VRLE1BQU0sQ0FBQ0MsTUFIVCxDQTFCQSIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcblRlbXBsYXRlIE5hbWU6IFVib2xkIC0gUmVzcG9uc2l2ZSBCb290c3RyYXAgNCBBZG1pbiBEYXNoYm9hcmRcclxuQXV0aG9yOiBDb2RlclRoZW1lc1xyXG5XZWJzaXRlOiBodHRwczovL2NvZGVydGhlbWVzLmNvbS9cclxuQ29udGFjdDogc3VwcG9ydEBjb2RlcnRoZW1lcy5jb21cclxuRmlsZTogS2FuYmFuIEJvYXJkIGluaXQganNcclxuKi9cclxuXHJcbiEgZnVuY3Rpb24oJCkge1xyXG5cdFwidXNlIHN0cmljdFwiO1xyXG5cclxuXHR2YXIgS2FuYmFuQm9hcmQgPSBmdW5jdGlvbigpIHtcclxuXHRcdHRoaXMuJGJvZHkgPSAkKFwiYm9keVwiKVxyXG5cdH07XHJcblxyXG5cdC8vaW5pdGlhbGl6aW5nIHZhcmlvdXMgY2hhcnRzIGFuZCBjb21wb25lbnRzXHJcblx0S2FuYmFuQm9hcmQucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpIHtcclxuXHRcdCQoJy50YXNrbGlzdCcpLmVhY2goZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRTb3J0YWJsZS5jcmVhdGUoJCh0aGlzKVswXSwge1xyXG5cdFx0XHRcdGdyb3VwOiAnc2hhcmVkJyxcclxuXHRcdFx0XHRhbmltYXRpb246IDE1MCxcclxuXHRcdFx0XHRnaG9zdENsYXNzOiAnYmctZ2hvc3QnXHJcblx0XHRcdH0pO1xyXG5cdFx0XHRcclxuXHRcdH0pO1x0XHJcblx0fSxcclxuXHJcblx0Ly9pbml0IEthbmJhbkJvYXJkXHJcblx0JC5LYW5iYW5Cb2FyZCA9IG5ldyBLYW5iYW5Cb2FyZCwgJC5LYW5iYW5Cb2FyZC5Db25zdHJ1Y3RvciA9XHJcblx0S2FuYmFuQm9hcmRcclxuXHJcbn0od2luZG93LmpRdWVyeSksXHJcblxyXG4vL2luaXRpYWxpemluZyBLYW5iYW5Cb2FyZFxyXG5mdW5jdGlvbigkKSB7XHJcblx0XCJ1c2Ugc3RyaWN0XCI7XHJcblx0JC5LYW5iYW5Cb2FyZC5pbml0KClcclxufSh3aW5kb3cualF1ZXJ5KTsiXSwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL3BhZ2VzL2thbmJhbi5pbml0LmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/pages/kanban.init.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/js/pages/kanban.init.js"]();
/******/ 	
/******/ })()
;