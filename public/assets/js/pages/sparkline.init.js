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

/***/ "./resources/js/pages/sparkline.init.js":
/*!**********************************************!*\
  !*** ./resources/js/pages/sparkline.init.js ***!
  \**********************************************/
/***/ (() => {

eval("/*\nTemplate Name: Ubold - Responsive Bootstrap 4 Admin Dashboard\nAuthor: CoderThemes\nWebsite: https://coderthemes.com/\nContact: support@coderthemes.com\nFile: Sparkline charts init js\n*/\n$(document).ready(function () {\n  var DrawSparkline = function DrawSparkline() {\n    // Line Chart\n    var colors = ['#6658dd', '#1abc9c'];\n    var dataColors = $(\"#sparkline1\").data('colors');\n\n    if (dataColors) {\n      colors = dataColors.split(\",\");\n    }\n\n    $('#sparkline1').sparkline([0, 23, 43, 35, 44, 45, 56, 37, 40], {\n      type: 'line',\n      width: \"100%\",\n      height: '165',\n      chartRangeMax: 50,\n      lineColor: colors[0],\n      fillColor: hexToRGB(colors[0], 0.3),\n      highlightLineColor: 'rgba(0,0,0,.1)',\n      highlightSpotColor: 'rgba(0,0,0,.2)',\n      maxSpotColor: false,\n      minSpotColor: false,\n      spotColor: false,\n      lineWidth: 1\n    });\n    $('#sparkline1').sparkline([25, 23, 26, 24, 25, 32, 30, 24, 19], {\n      type: 'line',\n      width: \"100%\",\n      height: '165',\n      chartRangeMax: 40,\n      lineColor: colors[1],\n      fillColor: hexToRGB(colors[1], 0.3),\n      composite: true,\n      highlightLineColor: 'rgba(0,0,0,.1)',\n      highlightSpotColor: 'rgba(0,0,0,.2)',\n      maxSpotColor: false,\n      minSpotColor: false,\n      spotColor: false,\n      lineWidth: 1\n    }); // Bar Chart\n\n    var colors = ['#4a81d4'];\n    var dataColors = $(\"#sparkline2\").data('colors');\n\n    if (dataColors) {\n      colors = dataColors.split(\",\");\n    }\n\n    $('#sparkline2').sparkline([3, 6, 7, 8, 6, 4, 7, 10, 12, 7, 4, 9, 12, 13, 11, 12], {\n      type: 'bar',\n      height: '165',\n      barWidth: '10',\n      barSpacing: '3',\n      barColor: colors\n    }); // Pie Chart\n\n    var colors = ['#4fc6e1', '#f7b84b', '#e3eaef', '#f1556c'];\n    var dataColors = $(\"#sparkline3\").data('colors');\n\n    if (dataColors) {\n      colors = dataColors.split(\",\");\n    }\n\n    $('#sparkline3').sparkline([20, 40, 30, 10], {\n      type: 'pie',\n      width: '165',\n      height: '165',\n      sliceColors: colors\n    }); // Combine Line Chart\n\n    var colors = ['#2d7bf4', '#4eb7eb'];\n    var dataColors = $(\"#sparkline4\").data('colors');\n\n    if (dataColors) {\n      colors = dataColors.split(\",\");\n    }\n\n    $('#sparkline4').sparkline([0, 23, 43, 35, 44, 45, 56, 37, 40], {\n      type: 'line',\n      width: \"100%\",\n      height: '165',\n      chartRangeMax: 50,\n      lineColor: colors[0],\n      fillColor: 'transparent',\n      lineWidth: 2,\n      highlightLineColor: 'rgba(0,0,0,.1)',\n      highlightSpotColor: 'rgba(0,0,0,.2)',\n      maxSpotColor: false,\n      minSpotColor: false,\n      spotColor: false\n    });\n    $('#sparkline4').sparkline([25, 23, 26, 24, 25, 32, 30, 24, 19], {\n      type: 'line',\n      width: \"100%\",\n      height: '165',\n      chartRangeMax: 40,\n      lineColor: colors[1],\n      fillColor: 'transparent',\n      composite: true,\n      lineWidth: 2,\n      maxSpotColor: false,\n      minSpotColor: false,\n      spotColor: false,\n      highlightLineColor: 'rgba(0,0,0,1)',\n      highlightSpotColor: 'rgba(0,0,0,1)'\n    }); // Composite bar Chart\n\n    var colors = ['#e3eaef', '#6c757d'];\n    var dataColors = $(\"#sparkline6\").data('colors');\n\n    if (dataColors) {\n      colors = dataColors.split(\",\");\n    }\n\n    $('#sparkline6').sparkline([3, 6, 7, 8, 6, 4, 7, 10, 12, 7, 4, 9, 12, 13, 11, 12], {\n      type: 'line',\n      width: \"100%\",\n      height: '165',\n      lineColor: colors[0],\n      lineWidth: 2,\n      fillColor: 'rgba(227,234,239,0.3)',\n      highlightLineColor: 'rgba(0,0,0,.1)',\n      highlightSpotColor: 'rgba(0,0,0,.2)'\n    });\n    $('#sparkline6').sparkline([3, 6, 7, 8, 6, 4, 7, 10, 12, 7, 4, 9, 12, 13, 11, 12], {\n      type: 'bar',\n      height: '165',\n      barWidth: '10',\n      barSpacing: '5',\n      composite: true,\n      barColor: colors[1]\n    }); // Discrete Chart\n\n    var colors = ['#36404c'];\n    var dataColors = $(\"#sparkline7\").data('colors');\n\n    if (dataColors) {\n      colors = dataColors.split(\",\");\n    }\n\n    $(\"#sparkline7\").sparkline([4, 6, 7, 7, 4, 3, 2, 1, 4, 4, 5, 6, 3, 4, 5, 8, 7, 6, 9, 3, 2, 4, 1, 5, 6, 4, 3, 7], {\n      type: 'discrete',\n      width: '280',\n      height: '165',\n      lineColor: colors\n    }); // Bullet Chart\n\n    var colors = ['#64c5b1', '#5553ce'];\n    var dataColors = $(\"#sparkline8\").data('colors');\n\n    if (dataColors) {\n      colors = dataColors.split(\",\");\n    }\n\n    $('#sparkline8').sparkline([10, 12, 12, 9, 7], {\n      type: 'bullet',\n      width: '280',\n      height: '80',\n      targetColor: colors[0],\n      performanceColor: colors[1]\n    }); // Box Plot Chart\n\n    var colors = ['#6658dd', '#1abc9c'];\n    var dataColors = $(\"#sparkline9\").data('colors');\n\n    if (dataColors) {\n      colors = dataColors.split(\",\");\n    }\n\n    $('#sparkline9').sparkline([4, 27, 34, 52, 54, 59, 61, 68, 78, 82, 85, 87, 91, 93, 100], {\n      type: 'box',\n      width: '280',\n      height: '80',\n      boxLineColor: colors[0],\n      boxFillColor: 'transparent',\n      whiskerColor: colors[1],\n      medianColor: colors[1],\n      targetColor: colors[1]\n    }); // Tristate Charts\n\n    var colors = ['#0acf97', '#e3eaef', '#ff679b'];\n    var dataColors = $(\"#sparkline10\").data('colors');\n\n    if (dataColors) {\n      colors = dataColors.split(\",\");\n    }\n\n    $('#sparkline10').sparkline([1, 1, 0, 1, -1, -1, 1, -1, 0, 0, 1, 1], {\n      height: '80',\n      width: '100%',\n      type: 'tristate',\n      posBarColor: colors[0],\n      negBarColor: colors[1],\n      zeroBarColor: colors[2],\n      barWidth: 8,\n      barSpacing: 3,\n      zeroAxis: false\n    });\n  },\n      DrawMouseSpeed = function DrawMouseSpeed() {\n    var mrefreshinterval = 500; // update display every 500ms\n\n    var lastmousex = -1;\n    var lastmousey = -1;\n    var lastmousetime;\n    var mousetravel = 0;\n    var mpoints = [];\n    var mpoints_max = 30;\n    $('html').mousemove(function (e) {\n      var mousex = e.pageX;\n      var mousey = e.pageY;\n\n      if (lastmousex > -1) {\n        mousetravel += Math.max(Math.abs(mousex - lastmousex), Math.abs(mousey - lastmousey));\n      }\n\n      lastmousex = mousex;\n      lastmousey = mousey;\n    });\n\n    var mdraw = function mdraw() {\n      var md = new Date();\n      var timenow = md.getTime();\n\n      if (lastmousetime && lastmousetime != timenow) {\n        var pps = Math.round(mousetravel / (timenow - lastmousetime) * 1000);\n        mpoints.push(pps);\n        if (mpoints.length > mpoints_max) mpoints.splice(0, 1);\n        mousetravel = 0;\n        var colors = ['#f1556c'];\n        var dataColors = $(\"#sparkline5\").data('colors');\n\n        if (dataColors) {\n          colors = dataColors.split(\",\");\n        }\n\n        $('#sparkline5').sparkline(mpoints, {\n          tooltipSuffix: ' pixels per second',\n          type: 'line',\n          width: \"100%\",\n          height: '165',\n          chartRangeMax: 77,\n          maxSpotColor: false,\n          minSpotColor: false,\n          spotColor: false,\n          lineWidth: 1,\n          lineColor: colors,\n          fillColor: hexToRGB(colors[0], 0.3),\n          highlightLineColor: 'rgba(24,147,126,.1)',\n          highlightSpotColor: 'rgba(24,147,126,.2)'\n        });\n      }\n\n      lastmousetime = timenow;\n      setTimeout(mdraw, mrefreshinterval);\n    }; // We could use setInterval instead, but I prefer to do it this way\n\n\n    setTimeout(mdraw, mrefreshinterval);\n  };\n\n  DrawSparkline();\n  DrawMouseSpeed();\n  var resizeChart;\n  $(window).resize(function (e) {\n    clearTimeout(resizeChart);\n    resizeChart = setTimeout(function () {\n      DrawSparkline();\n      DrawMouseSpeed();\n    }, 300);\n  });\n});\n/* utility function */\n\nfunction hexToRGB(hex, alpha) {\n  var r = parseInt(hex.slice(1, 3), 16),\n      g = parseInt(hex.slice(3, 5), 16),\n      b = parseInt(hex.slice(5, 7), 16);\n\n  if (alpha) {\n    return \"rgba(\" + r + \", \" + g + \", \" + b + \", \" + alpha + \")\";\n  } else {\n    return \"rgb(\" + r + \", \" + g + \", \" + b + \")\";\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvc3BhcmtsaW5lLmluaXQuanM/ZjgwYyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIkRyYXdTcGFya2xpbmUiLCJjb2xvcnMiLCJkYXRhQ29sb3JzIiwiZGF0YSIsInNwbGl0Iiwic3BhcmtsaW5lIiwidHlwZSIsIndpZHRoIiwiaGVpZ2h0IiwiY2hhcnRSYW5nZU1heCIsImxpbmVDb2xvciIsImZpbGxDb2xvciIsImhleFRvUkdCIiwiaGlnaGxpZ2h0TGluZUNvbG9yIiwiaGlnaGxpZ2h0U3BvdENvbG9yIiwibWF4U3BvdENvbG9yIiwibWluU3BvdENvbG9yIiwic3BvdENvbG9yIiwibGluZVdpZHRoIiwiY29tcG9zaXRlIiwiYmFyV2lkdGgiLCJiYXJTcGFjaW5nIiwiYmFyQ29sb3IiLCJzbGljZUNvbG9ycyIsInRhcmdldENvbG9yIiwicGVyZm9ybWFuY2VDb2xvciIsImJveExpbmVDb2xvciIsImJveEZpbGxDb2xvciIsIndoaXNrZXJDb2xvciIsIm1lZGlhbkNvbG9yIiwicG9zQmFyQ29sb3IiLCJuZWdCYXJDb2xvciIsInplcm9CYXJDb2xvciIsInplcm9BeGlzIiwiRHJhd01vdXNlU3BlZWQiLCJtcmVmcmVzaGludGVydmFsIiwibGFzdG1vdXNleCIsImxhc3Rtb3VzZXkiLCJsYXN0bW91c2V0aW1lIiwibW91c2V0cmF2ZWwiLCJtcG9pbnRzIiwibXBvaW50c19tYXgiLCJtb3VzZW1vdmUiLCJlIiwibW91c2V4IiwicGFnZVgiLCJtb3VzZXkiLCJwYWdlWSIsIk1hdGgiLCJtYXgiLCJhYnMiLCJtZHJhdyIsIm1kIiwiRGF0ZSIsInRpbWVub3ciLCJnZXRUaW1lIiwicHBzIiwicm91bmQiLCJwdXNoIiwibGVuZ3RoIiwic3BsaWNlIiwidG9vbHRpcFN1ZmZpeCIsInNldFRpbWVvdXQiLCJyZXNpemVDaGFydCIsIndpbmRvdyIsInJlc2l6ZSIsImNsZWFyVGltZW91dCIsImhl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RWQsTUFBSTZCLFdBQUo7QUFFQWxFLEVBQUFBLENBQUMsQ0FBQ21FLE1BQUQsQ0FBRCxDQUFVQyxNQUFWLENBQWlCLFVBQVV0QixDQUFWLEVBQWE7QUFDMUJ1QixJQUFBQSxZQUFZLENBQUNILFdBQUQsQ0FBWjtBQUNBQSxJQUFBQSxXQUFXLEdBQUdELFVBQVUsQ0FBQyxZQUFZO0FBQ2pDOUQsTUFBQUEsYUFBYTtBQUNia0MsTUFBQUEsY0FBYztBQUNqQixLQUh1QixFQUdyQixHQUhxQixDQUF4QjtBQUlILEdBTkQ7QUFPSCxDQWpRRDtBQW1RQTs7QUFFQSxTQUFTdEIsUUFBVCxDQUFrQnVELEdBQWxCLEVBQXVCQyxLQUF2QixFQUE4QjtBQUMxQixNQUFJQyxDQUFDLEdBQUdDLFFBQVEsQ0FBQ0gsR0FBRyxDQUFDSSxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsQ0FBRCxFQUFrQixFQUFsQixDQUFoQjtBQUFBLE1BQ0lDLENBQUMsR0FBR0YsUUFBUSxDQUFDSCxHQUFHLENBQUNJLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixDQUFELEVBQWtCLEVBQWxCLENBRGhCO0FBQUEsTUFFSUUsQ0FBQyxHQUFHSCxRQUFRLENBQUNILEdBQUcsQ0FBQ0ksS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLENBQUQsRUFBa0IsRUFBbEIsQ0FGaEI7O0FBSUEsTUFBSUgsS0FBSixFQUFXO0FBQ1AsV0FBTyxVQUFVQyxDQUFWLEdBQWMsSUFBZCxHQUFxQkcsQ0FBckIsR0FBeUIsSUFBekIsR0FBZ0NDLENBQWhDLEdBQW9DLElBQXBDLEdBQTJDTCxLQUEzQyxHQUFtRCxHQUExRDtBQUNILEdBRkQsTUFFTztBQUNILFdBQU8sU0FBU0MsQ0FBVCxHQUFhLElBQWIsR0FBb0JHLENBQXBCLEdBQXdCLElBQXhCLEdBQStCQyxDQUEvQixHQUFtQyxHQUExQztBQUNIO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuVGVtcGxhdGUgTmFtZTogVWJvbGQgLSBSZXNwb25zaXZlIEJvb3RzdHJhcCA0IEFkbWluIERhc2hib2FyZFxuQXV0aG9yOiBDb2RlclRoZW1lc1xuV2Vic2l0ZTogaHR0cHM6Ly9jb2RlcnRoZW1lcy5jb20vXG5Db250YWN0OiBzdXBwb3J0QGNvZGVydGhlbWVzLmNvbVxuRmlsZTogU3BhcmtsaW5lIGNoYXJ0cyBpbml0IGpzXG4qL1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG5cbiAgICB2YXIgRHJhd1NwYXJrbGluZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gTGluZSBDaGFydFxuICAgICAgICB2YXIgY29sb3JzID0gWycjNjY1OGRkJywgJyMxYWJjOWMnXTtcbiAgICAgICAgdmFyIGRhdGFDb2xvcnMgPSAkKFwiI3NwYXJrbGluZTFcIikuZGF0YSgnY29sb3JzJyk7XG4gICAgICAgIGlmIChkYXRhQ29sb3JzKSB7XG4gICAgICAgICAgICBjb2xvcnMgPSBkYXRhQ29sb3JzLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgfVxuICAgICAgICAkKCcjc3BhcmtsaW5lMScpLnNwYXJrbGluZShbMCwgMjMsIDQzLCAzNSwgNDQsIDQ1LCA1NiwgMzcsIDQwXSwge1xuICAgICAgICAgICAgdHlwZTogJ2xpbmUnLFxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgaGVpZ2h0OiAnMTY1JyxcbiAgICAgICAgICAgIGNoYXJ0UmFuZ2VNYXg6IDUwLFxuICAgICAgICAgICAgbGluZUNvbG9yOiBjb2xvcnNbMF0sXG4gICAgICAgICAgICBmaWxsQ29sb3I6IGhleFRvUkdCKGNvbG9yc1swXSwgMC4zKSxcbiAgICAgICAgICAgIGhpZ2hsaWdodExpbmVDb2xvcjogJ3JnYmEoMCwwLDAsLjEpJyxcbiAgICAgICAgICAgIGhpZ2hsaWdodFNwb3RDb2xvcjogJ3JnYmEoMCwwLDAsLjIpJyxcbiAgICAgICAgICAgIG1heFNwb3RDb2xvcjogZmFsc2UsXG4gICAgICAgICAgICBtaW5TcG90Q29sb3I6IGZhbHNlLFxuICAgICAgICAgICAgc3BvdENvbG9yOiBmYWxzZSxcbiAgICAgICAgICAgIGxpbmVXaWR0aDogMVxuICAgICAgICB9KTtcblxuICAgICAgICAkKCcjc3BhcmtsaW5lMScpLnNwYXJrbGluZShbMjUsIDIzLCAyNiwgMjQsIDI1LCAzMiwgMzAsIDI0LCAxOV0sIHtcbiAgICAgICAgICAgIHR5cGU6ICdsaW5lJyxcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgIGhlaWdodDogJzE2NScsXG4gICAgICAgICAgICBjaGFydFJhbmdlTWF4OiA0MCxcbiAgICAgICAgICAgIGxpbmVDb2xvcjogY29sb3JzWzFdLFxuICAgICAgICAgICAgZmlsbENvbG9yOiBoZXhUb1JHQihjb2xvcnNbMV0sIDAuMyksXG4gICAgICAgICAgICBjb21wb3NpdGU6IHRydWUsXG4gICAgICAgICAgICBoaWdobGlnaHRMaW5lQ29sb3I6ICdyZ2JhKDAsMCwwLC4xKScsXG4gICAgICAgICAgICBoaWdobGlnaHRTcG90Q29sb3I6ICdyZ2JhKDAsMCwwLC4yKScsXG4gICAgICAgICAgICBtYXhTcG90Q29sb3I6IGZhbHNlLFxuICAgICAgICAgICAgbWluU3BvdENvbG9yOiBmYWxzZSxcbiAgICAgICAgICAgIHNwb3RDb2xvcjogZmFsc2UsXG4gICAgICAgICAgICBsaW5lV2lkdGg6IDFcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQmFyIENoYXJ0XG4gICAgICAgIHZhciBjb2xvcnMgPSBbJyM0YTgxZDQnXTtcbiAgICAgICAgdmFyIGRhdGFDb2xvcnMgPSAkKFwiI3NwYXJrbGluZTJcIikuZGF0YSgnY29sb3JzJyk7XG4gICAgICAgIGlmIChkYXRhQ29sb3JzKSB7XG4gICAgICAgICAgICBjb2xvcnMgPSBkYXRhQ29sb3JzLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgfVxuICAgICAgICAkKCcjc3BhcmtsaW5lMicpLnNwYXJrbGluZShbMywgNiwgNywgOCwgNiwgNCwgNywgMTAsIDEyLCA3LCA0LCA5LCAxMiwgMTMsIDExLCAxMl0sIHtcbiAgICAgICAgICAgIHR5cGU6ICdiYXInLFxuICAgICAgICAgICAgaGVpZ2h0OiAnMTY1JyxcbiAgICAgICAgICAgIGJhcldpZHRoOiAnMTAnLFxuICAgICAgICAgICAgYmFyU3BhY2luZzogJzMnLFxuICAgICAgICAgICAgYmFyQ29sb3I6IGNvbG9yc1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBQaWUgQ2hhcnRcbiAgICAgICAgdmFyIGNvbG9ycyA9IFsnIzRmYzZlMScsICcjZjdiODRiJywgJyNlM2VhZWYnLCAnI2YxNTU2YyddO1xuICAgICAgICB2YXIgZGF0YUNvbG9ycyA9ICQoXCIjc3BhcmtsaW5lM1wiKS5kYXRhKCdjb2xvcnMnKTtcbiAgICAgICAgaWYgKGRhdGFDb2xvcnMpIHtcbiAgICAgICAgICAgIGNvbG9ycyA9IGRhdGFDb2xvcnMuc3BsaXQoXCIsXCIpO1xuICAgICAgICB9XG4gICAgICAgICQoJyNzcGFya2xpbmUzJykuc3BhcmtsaW5lKFsyMCwgNDAsIDMwLCAxMF0sIHtcbiAgICAgICAgICAgIHR5cGU6ICdwaWUnLFxuICAgICAgICAgICAgd2lkdGg6ICcxNjUnLFxuICAgICAgICAgICAgaGVpZ2h0OiAnMTY1JyxcbiAgICAgICAgICAgIHNsaWNlQ29sb3JzOiBjb2xvcnNcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQ29tYmluZSBMaW5lIENoYXJ0XG4gICAgICAgIHZhciBjb2xvcnMgPSBbJyMyZDdiZjQnLCAnIzRlYjdlYiddO1xuICAgICAgICB2YXIgZGF0YUNvbG9ycyA9ICQoXCIjc3BhcmtsaW5lNFwiKS5kYXRhKCdjb2xvcnMnKTtcbiAgICAgICAgaWYgKGRhdGFDb2xvcnMpIHtcbiAgICAgICAgICAgIGNvbG9ycyA9IGRhdGFDb2xvcnMuc3BsaXQoXCIsXCIpO1xuICAgICAgICB9XG4gICAgICAgICQoJyNzcGFya2xpbmU0Jykuc3BhcmtsaW5lKFswLCAyMywgNDMsIDM1LCA0NCwgNDUsIDU2LCAzNywgNDBdLCB7XG4gICAgICAgICAgICB0eXBlOiAnbGluZScsXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICBoZWlnaHQ6ICcxNjUnLFxuICAgICAgICAgICAgY2hhcnRSYW5nZU1heDogNTAsXG4gICAgICAgICAgICBsaW5lQ29sb3I6IGNvbG9yc1swXSxcbiAgICAgICAgICAgIGZpbGxDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgIGxpbmVXaWR0aDogMixcbiAgICAgICAgICAgIGhpZ2hsaWdodExpbmVDb2xvcjogJ3JnYmEoMCwwLDAsLjEpJyxcbiAgICAgICAgICAgIGhpZ2hsaWdodFNwb3RDb2xvcjogJ3JnYmEoMCwwLDAsLjIpJyxcbiAgICAgICAgICAgIG1heFNwb3RDb2xvcjogZmFsc2UsXG4gICAgICAgICAgICBtaW5TcG90Q29sb3I6IGZhbHNlLFxuICAgICAgICAgICAgc3BvdENvbG9yOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgICAgJCgnI3NwYXJrbGluZTQnKS5zcGFya2xpbmUoWzI1LCAyMywgMjYsIDI0LCAyNSwgMzIsIDMwLCAyNCwgMTldLCB7XG4gICAgICAgICAgICB0eXBlOiAnbGluZScsXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICBoZWlnaHQ6ICcxNjUnLFxuICAgICAgICAgICAgY2hhcnRSYW5nZU1heDogNDAsXG4gICAgICAgICAgICBsaW5lQ29sb3I6IGNvbG9yc1sxXSxcbiAgICAgICAgICAgIGZpbGxDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgIGNvbXBvc2l0ZTogdHJ1ZSxcbiAgICAgICAgICAgIGxpbmVXaWR0aDogMixcbiAgICAgICAgICAgIG1heFNwb3RDb2xvcjogZmFsc2UsXG4gICAgICAgICAgICBtaW5TcG90Q29sb3I6IGZhbHNlLFxuICAgICAgICAgICAgc3BvdENvbG9yOiBmYWxzZSxcbiAgICAgICAgICAgIGhpZ2hsaWdodExpbmVDb2xvcjogJ3JnYmEoMCwwLDAsMSknLFxuICAgICAgICAgICAgaGlnaGxpZ2h0U3BvdENvbG9yOiAncmdiYSgwLDAsMCwxKSdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQ29tcG9zaXRlIGJhciBDaGFydFxuICAgICAgICB2YXIgY29sb3JzID0gWycjZTNlYWVmJywgJyM2Yzc1N2QnXTtcbiAgICAgICAgdmFyIGRhdGFDb2xvcnMgPSAkKFwiI3NwYXJrbGluZTZcIikuZGF0YSgnY29sb3JzJyk7XG4gICAgICAgIGlmIChkYXRhQ29sb3JzKSB7XG4gICAgICAgICAgICBjb2xvcnMgPSBkYXRhQ29sb3JzLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgfVxuICAgICAgICAkKCcjc3BhcmtsaW5lNicpLnNwYXJrbGluZShbMywgNiwgNywgOCwgNiwgNCwgNywgMTAsIDEyLCA3LCA0LCA5LCAxMiwgMTMsIDExLCAxMl0sIHtcbiAgICAgICAgICAgIHR5cGU6ICdsaW5lJyxcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgIGhlaWdodDogJzE2NScsXG4gICAgICAgICAgICBsaW5lQ29sb3I6IGNvbG9yc1swXSxcbiAgICAgICAgICAgIGxpbmVXaWR0aDogMixcbiAgICAgICAgICAgIGZpbGxDb2xvcjogJ3JnYmEoMjI3LDIzNCwyMzksMC4zKScsXG4gICAgICAgICAgICBoaWdobGlnaHRMaW5lQ29sb3I6ICdyZ2JhKDAsMCwwLC4xKScsXG4gICAgICAgICAgICBoaWdobGlnaHRTcG90Q29sb3I6ICdyZ2JhKDAsMCwwLC4yKSdcbiAgICAgICAgfSk7XG4gICAgICAgICQoJyNzcGFya2xpbmU2Jykuc3BhcmtsaW5lKFszLCA2LCA3LCA4LCA2LCA0LCA3LCAxMCwgMTIsIDcsIDQsIDksIDEyLCAxMywgMTEsIDEyXSwge1xuICAgICAgICAgICAgdHlwZTogJ2JhcicsXG4gICAgICAgICAgICBoZWlnaHQ6ICcxNjUnLFxuICAgICAgICAgICAgYmFyV2lkdGg6ICcxMCcsXG4gICAgICAgICAgICBiYXJTcGFjaW5nOiAnNScsXG4gICAgICAgICAgICBjb21wb3NpdGU6IHRydWUsXG4gICAgICAgICAgICBiYXJDb2xvcjogY29sb3JzWzFdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIERpc2NyZXRlIENoYXJ0XG4gICAgICAgIHZhciBjb2xvcnMgPSBbJyMzNjQwNGMnXTtcbiAgICAgICAgdmFyIGRhdGFDb2xvcnMgPSAkKFwiI3NwYXJrbGluZTdcIikuZGF0YSgnY29sb3JzJyk7XG4gICAgICAgIGlmIChkYXRhQ29sb3JzKSB7XG4gICAgICAgICAgICBjb2xvcnMgPSBkYXRhQ29sb3JzLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgfVxuICAgICAgICAkKFwiI3NwYXJrbGluZTdcIikuc3BhcmtsaW5lKFs0LCA2LCA3LCA3LCA0LCAzLCAyLCAxLCA0LCA0LCA1LCA2LCAzLCA0LCA1LCA4LCA3LCA2LCA5LCAzLCAyLCA0LCAxLCA1LCA2LCA0LCAzLCA3XSwge1xuICAgICAgICAgICAgdHlwZTogJ2Rpc2NyZXRlJyxcbiAgICAgICAgICAgIHdpZHRoOiAnMjgwJyxcbiAgICAgICAgICAgIGhlaWdodDogJzE2NScsXG4gICAgICAgICAgICBsaW5lQ29sb3I6IGNvbG9yc1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBCdWxsZXQgQ2hhcnRcbiAgICAgICAgdmFyIGNvbG9ycyA9IFsnIzY0YzViMScsICcjNTU1M2NlJ107XG4gICAgICAgIHZhciBkYXRhQ29sb3JzID0gJChcIiNzcGFya2xpbmU4XCIpLmRhdGEoJ2NvbG9ycycpO1xuICAgICAgICBpZiAoZGF0YUNvbG9ycykge1xuICAgICAgICAgICAgY29sb3JzID0gZGF0YUNvbG9ycy5zcGxpdChcIixcIik7XG4gICAgICAgIH1cbiAgICAgICAgJCgnI3NwYXJrbGluZTgnKS5zcGFya2xpbmUoWzEwLCAxMiwgMTIsIDksIDddLCB7XG4gICAgICAgICAgICB0eXBlOiAnYnVsbGV0JyxcbiAgICAgICAgICAgIHdpZHRoOiAnMjgwJyxcbiAgICAgICAgICAgIGhlaWdodDogJzgwJyxcbiAgICAgICAgICAgIHRhcmdldENvbG9yOiBjb2xvcnNbMF0sXG4gICAgICAgICAgICBwZXJmb3JtYW5jZUNvbG9yOiBjb2xvcnNbMV1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQm94IFBsb3QgQ2hhcnRcbiAgICAgICAgdmFyIGNvbG9ycyA9IFsnIzY2NThkZCcsICcjMWFiYzljJ107XG4gICAgICAgIHZhciBkYXRhQ29sb3JzID0gJChcIiNzcGFya2xpbmU5XCIpLmRhdGEoJ2NvbG9ycycpO1xuICAgICAgICBpZiAoZGF0YUNvbG9ycykge1xuICAgICAgICAgICAgY29sb3JzID0gZGF0YUNvbG9ycy5zcGxpdChcIixcIik7XG4gICAgICAgIH1cbiAgICAgICAgJCgnI3NwYXJrbGluZTknKS5zcGFya2xpbmUoWzQsIDI3LCAzNCwgNTIsIDU0LCA1OSwgNjEsIDY4LCA3OCwgODIsIDg1LCA4NywgOTEsIDkzLCAxMDBdLCB7XG4gICAgICAgICAgICB0eXBlOiAnYm94JyxcbiAgICAgICAgICAgIHdpZHRoOiAnMjgwJyxcbiAgICAgICAgICAgIGhlaWdodDogJzgwJyxcbiAgICAgICAgICAgIGJveExpbmVDb2xvcjogY29sb3JzWzBdLFxuICAgICAgICAgICAgYm94RmlsbENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgICAgd2hpc2tlckNvbG9yOiBjb2xvcnNbMV0sXG4gICAgICAgICAgICBtZWRpYW5Db2xvcjogY29sb3JzWzFdLFxuICAgICAgICAgICAgdGFyZ2V0Q29sb3I6IGNvbG9yc1sxXVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBUcmlzdGF0ZSBDaGFydHNcbiAgICAgICAgdmFyIGNvbG9ycyA9IFsnIzBhY2Y5NycsICcjZTNlYWVmJywgJyNmZjY3OWInXTtcbiAgICAgICAgdmFyIGRhdGFDb2xvcnMgPSAkKFwiI3NwYXJrbGluZTEwXCIpLmRhdGEoJ2NvbG9ycycpO1xuICAgICAgICBpZiAoZGF0YUNvbG9ycykge1xuICAgICAgICAgICAgY29sb3JzID0gZGF0YUNvbG9ycy5zcGxpdChcIixcIik7XG4gICAgICAgIH1cbiAgICAgICAgJCgnI3NwYXJrbGluZTEwJykuc3BhcmtsaW5lKFsxLCAxLCAwLCAxLCAtMSwgLTEsIDEsIC0xLCAwLCAwLCAxLCAxXSwge1xuICAgICAgICAgICAgaGVpZ2h0OiAnODAnLFxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgIHR5cGU6ICd0cmlzdGF0ZScsXG4gICAgICAgICAgICBwb3NCYXJDb2xvcjogY29sb3JzWzBdLFxuICAgICAgICAgICAgbmVnQmFyQ29sb3I6IGNvbG9yc1sxXSxcbiAgICAgICAgICAgIHplcm9CYXJDb2xvcjogY29sb3JzWzJdLFxuICAgICAgICAgICAgYmFyV2lkdGg6IDgsXG4gICAgICAgICAgICBiYXJTcGFjaW5nOiAzLFxuICAgICAgICAgICAgemVyb0F4aXM6IGZhbHNlXG4gICAgICAgIH0pO1xuXG4gICAgfSxcbiAgICAgICAgRHJhd01vdXNlU3BlZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbXJlZnJlc2hpbnRlcnZhbCA9IDUwMDsgLy8gdXBkYXRlIGRpc3BsYXkgZXZlcnkgNTAwbXNcbiAgICAgICAgICAgIHZhciBsYXN0bW91c2V4ID0gLTE7XG4gICAgICAgICAgICB2YXIgbGFzdG1vdXNleSA9IC0xO1xuICAgICAgICAgICAgdmFyIGxhc3Rtb3VzZXRpbWU7XG4gICAgICAgICAgICB2YXIgbW91c2V0cmF2ZWwgPSAwO1xuICAgICAgICAgICAgdmFyIG1wb2ludHMgPSBbXTtcbiAgICAgICAgICAgIHZhciBtcG9pbnRzX21heCA9IDMwO1xuICAgICAgICAgICAgJCgnaHRtbCcpLm1vdXNlbW92ZShmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHZhciBtb3VzZXggPSBlLnBhZ2VYO1xuICAgICAgICAgICAgICAgIHZhciBtb3VzZXkgPSBlLnBhZ2VZO1xuICAgICAgICAgICAgICAgIGlmIChsYXN0bW91c2V4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgbW91c2V0cmF2ZWwgKz0gTWF0aC5tYXgoTWF0aC5hYnMobW91c2V4IC0gbGFzdG1vdXNleCksIE1hdGguYWJzKG1vdXNleSAtIGxhc3Rtb3VzZXkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGFzdG1vdXNleCA9IG1vdXNleDtcbiAgICAgICAgICAgICAgICBsYXN0bW91c2V5ID0gbW91c2V5O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgbWRyYXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1kID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICB2YXIgdGltZW5vdyA9IG1kLmdldFRpbWUoKTtcbiAgICAgICAgICAgICAgICBpZiAobGFzdG1vdXNldGltZSAmJiBsYXN0bW91c2V0aW1lICE9IHRpbWVub3cpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBwcyA9IE1hdGgucm91bmQobW91c2V0cmF2ZWwgLyAodGltZW5vdyAtIGxhc3Rtb3VzZXRpbWUpICogMTAwMCk7XG4gICAgICAgICAgICAgICAgICAgIG1wb2ludHMucHVzaChwcHMpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobXBvaW50cy5sZW5ndGggPiBtcG9pbnRzX21heClcbiAgICAgICAgICAgICAgICAgICAgICAgIG1wb2ludHMuc3BsaWNlKDAsIDEpO1xuICAgICAgICAgICAgICAgICAgICBtb3VzZXRyYXZlbCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb2xvcnMgPSBbJyNmMTU1NmMnXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGFDb2xvcnMgPSAkKFwiI3NwYXJrbGluZTVcIikuZGF0YSgnY29sb3JzJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhQ29sb3JzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMgPSBkYXRhQ29sb3JzLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAkKCcjc3BhcmtsaW5lNScpLnNwYXJrbGluZShtcG9pbnRzLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwU3VmZml4OiAnIHBpeGVscyBwZXIgc2Vjb25kJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdsaW5lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzE2NScsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFydFJhbmdlTWF4OiA3NyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heFNwb3RDb2xvcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5TcG90Q29sb3I6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3BvdENvbG9yOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVXaWR0aDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVDb2xvcjogY29sb3JzLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbENvbG9yOiBoZXhUb1JHQihjb2xvcnNbMF0sIDAuMyksXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWdobGlnaHRMaW5lQ29sb3I6ICdyZ2JhKDI0LDE0NywxMjYsLjEpJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodFNwb3RDb2xvcjogJ3JnYmEoMjQsMTQ3LDEyNiwuMiknXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsYXN0bW91c2V0aW1lID0gdGltZW5vdztcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KG1kcmF3LCBtcmVmcmVzaGludGVydmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFdlIGNvdWxkIHVzZSBzZXRJbnRlcnZhbCBpbnN0ZWFkLCBidXQgSSBwcmVmZXIgdG8gZG8gaXQgdGhpcyB3YXlcbiAgICAgICAgICAgIHNldFRpbWVvdXQobWRyYXcsIG1yZWZyZXNoaW50ZXJ2YWwpO1xuICAgICAgICB9O1xuXG4gICAgRHJhd1NwYXJrbGluZSgpO1xuICAgIERyYXdNb3VzZVNwZWVkKCk7XG5cbiAgICB2YXIgcmVzaXplQ2hhcnQ7XG5cbiAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChyZXNpemVDaGFydCk7XG4gICAgICAgIHJlc2l6ZUNoYXJ0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBEcmF3U3BhcmtsaW5lKCk7XG4gICAgICAgICAgICBEcmF3TW91c2VTcGVlZCgpO1xuICAgICAgICB9LCAzMDApO1xuICAgIH0pO1xufSk7XG5cbi8qIHV0aWxpdHkgZnVuY3Rpb24gKi9cblxuZnVuY3Rpb24gaGV4VG9SR0IoaGV4LCBhbHBoYSkge1xuICAgIHZhciByID0gcGFyc2VJbnQoaGV4LnNsaWNlKDEsIDMpLCAxNiksXG4gICAgICAgIGcgPSBwYXJzZUludChoZXguc2xpY2UoMywgNSksIDE2KSxcbiAgICAgICAgYiA9IHBhcnNlSW50KGhleC5zbGljZSg1LCA3KSwgMTYpO1xuXG4gICAgaWYgKGFscGhhKSB7XG4gICAgICAgIHJldHVybiBcInJnYmEoXCIgKyByICsgXCIsIFwiICsgZyArIFwiLCBcIiArIGIgKyBcIiwgXCIgKyBhbHBoYSArIFwiKVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBcInJnYihcIiArIHIgKyBcIiwgXCIgKyBnICsgXCIsIFwiICsgYiArIFwiKVwiO1xuICAgIH1cbn0iXSwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL3BhZ2VzL3NwYXJrbGluZS5pbml0LmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/pages/sparkline.init.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/js/pages/sparkline.init.js"]();
/******/ 	
/******/ })()
;