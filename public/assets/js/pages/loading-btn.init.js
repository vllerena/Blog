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

/***/ "./resources/js/pages/loading-btn.init.js":
/*!************************************************!*\
  !*** ./resources/js/pages/loading-btn.init.js ***!
  \************************************************/
/***/ (() => {

eval("/*\r\nTemplate Name: Ubold - Responsive Bootstrap 4 Admin Dashboard\r\nAuthor: CoderThemes\r\nWebsite: https://coderthemes.com/\r\nContact: support@coderthemes.com\r\nFile: Loading Button init js\r\n*/\n// Bind normal buttons\nLadda.bind('.ladda-button', {\n  timeout: 2000\n}); // Bind progress buttons and simulate loading progress\n\nLadda.bind('.progress-demo .ladda-button', {\n  callback: function callback(instance) {\n    var progress = 0;\n    var interval = setInterval(function () {\n      progress = Math.min(progress + Math.random() * 0.1, 1);\n      instance.setProgress(progress);\n\n      if (progress === 1) {\n        instance.stop();\n        clearInterval(interval);\n      }\n    }, 200);\n  }\n}); // You can control loading explicitly using the JavaScript API\n// as outlined below:\n// var l = Ladda.create( document.querySelector( 'button' ) );\n// l.start();\n// l.stop();\n// l.toggle();\n// l.isLoading();\n// l.setProgress( 0-1 );//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvbG9hZGluZy1idG4uaW5pdC5qcz9lMDQ5Il0sIm5hbWVzIjpbIkxhZGRhIiwiYmluZCIsInRpbWVvdXQiLCJjYWxsYmFjayIsImluc3RhbmNlIiwicHJvZ3Jlc3MiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiTWF0aCIsIm1pbiIsInJhbmRvbSIsInNldFByb2dyZXNzIiwic3RvcCIsImNsZWFySW50ZXJ2YWwiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUM7QUFDQUEsS0FBSyxDQUFDQyxJQUFOLENBQVksZUFBWixFQUE2QjtBQUFFQyxFQUFBQSxPQUFPLEVBQUU7QUFBWCxDQUE3QixFLENBRUE7O0FBQ0FGLEtBQUssQ0FBQ0MsSUFBTixDQUFZLDhCQUFaLEVBQTRDO0FBQ3hDRSxFQUFBQSxRQUFRLEVBQUUsa0JBQVVDLFFBQVYsRUFBcUI7QUFDM0IsUUFBSUMsUUFBUSxHQUFHLENBQWY7QUFDQSxRQUFJQyxRQUFRLEdBQUdDLFdBQVcsQ0FBRSxZQUFXO0FBQ25DRixNQUFBQSxRQUFRLEdBQUdHLElBQUksQ0FBQ0MsR0FBTCxDQUFVSixRQUFRLEdBQUdHLElBQUksQ0FBQ0UsTUFBTCxLQUFnQixHQUFyQyxFQUEwQyxDQUExQyxDQUFYO0FBQ0FOLE1BQUFBLFFBQVEsQ0FBQ08sV0FBVCxDQUFzQk4sUUFBdEI7O0FBRUEsVUFBSUEsUUFBUSxLQUFLLENBQWpCLEVBQXFCO0FBQ2pCRCxRQUFBQSxRQUFRLENBQUNRLElBQVQ7QUFDQUMsUUFBQUEsYUFBYSxDQUFFUCxRQUFGLENBQWI7QUFDSDtBQUNKLEtBUnlCLEVBUXZCLEdBUnVCLENBQTFCO0FBU0g7QUFadUMsQ0FBNUMsRSxDQWVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG5UZW1wbGF0ZSBOYW1lOiBVYm9sZCAtIFJlc3BvbnNpdmUgQm9vdHN0cmFwIDQgQWRtaW4gRGFzaGJvYXJkXHJcbkF1dGhvcjogQ29kZXJUaGVtZXNcclxuV2Vic2l0ZTogaHR0cHM6Ly9jb2RlcnRoZW1lcy5jb20vXHJcbkNvbnRhY3Q6IHN1cHBvcnRAY29kZXJ0aGVtZXMuY29tXHJcbkZpbGU6IExvYWRpbmcgQnV0dG9uIGluaXQganNcclxuKi9cclxuXHJcbiAvLyBCaW5kIG5vcm1hbCBidXR0b25zXHJcbiBMYWRkYS5iaW5kKCAnLmxhZGRhLWJ1dHRvbicsIHsgdGltZW91dDogMjAwMCB9ICk7XHJcblxyXG4gLy8gQmluZCBwcm9ncmVzcyBidXR0b25zIGFuZCBzaW11bGF0ZSBsb2FkaW5nIHByb2dyZXNzXHJcbiBMYWRkYS5iaW5kKCAnLnByb2dyZXNzLWRlbW8gLmxhZGRhLWJ1dHRvbicsIHtcclxuICAgICBjYWxsYmFjazogZnVuY3Rpb24oIGluc3RhbmNlICkge1xyXG4gICAgICAgICB2YXIgcHJvZ3Jlc3MgPSAwO1xyXG4gICAgICAgICB2YXIgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCggZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICBwcm9ncmVzcyA9IE1hdGgubWluKCBwcm9ncmVzcyArIE1hdGgucmFuZG9tKCkgKiAwLjEsIDEgKTtcclxuICAgICAgICAgICAgIGluc3RhbmNlLnNldFByb2dyZXNzKCBwcm9ncmVzcyApO1xyXG5cclxuICAgICAgICAgICAgIGlmKCBwcm9ncmVzcyA9PT0gMSApIHtcclxuICAgICAgICAgICAgICAgICBpbnN0YW5jZS5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCggaW50ZXJ2YWwgKTtcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgfSwgMjAwICk7XHJcbiAgICAgfVxyXG4gfSApO1xyXG5cclxuIC8vIFlvdSBjYW4gY29udHJvbCBsb2FkaW5nIGV4cGxpY2l0bHkgdXNpbmcgdGhlIEphdmFTY3JpcHQgQVBJXHJcbiAvLyBhcyBvdXRsaW5lZCBiZWxvdzpcclxuXHJcbiAvLyB2YXIgbCA9IExhZGRhLmNyZWF0ZSggZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJ2J1dHRvbicgKSApO1xyXG4gLy8gbC5zdGFydCgpO1xyXG4gLy8gbC5zdG9wKCk7XHJcbiAvLyBsLnRvZ2dsZSgpO1xyXG4gLy8gbC5pc0xvYWRpbmcoKTtcclxuIC8vIGwuc2V0UHJvZ3Jlc3MoIDAtMSApO1xyXG4iXSwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL3BhZ2VzL2xvYWRpbmctYnRuLmluaXQuanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/pages/loading-btn.init.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/js/pages/loading-btn.init.js"]();
/******/ 	
/******/ })()
;