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

/***/ "./resources/js/pages/foo-tables.init.js":
/*!***********************************************!*\
  !*** ./resources/js/pages/foo-tables.init.js ***!
  \***********************************************/
/***/ (() => {

eval("/*\nTemplate Name: Ubold - Responsive Bootstrap 4 Admin Dashboard\nAuthor: CoderThemes\nWebsite: https://coderthemes.com/\nContact: support@coderthemes.com\nFile: Foo tables init js\n*/\n$(window).on('load', function () {\n  // Row Toggler\n  // -----------------------------------------------------------------\n  $('#demo-foo-row-toggler').footable(); // Accordion\n  // -----------------------------------------------------------------\n\n  $('#demo-foo-accordion').footable().on('footable_row_expanded', function (e) {\n    $('#demo-foo-accordion tbody tr.footable-detail-show').not(e.row).each(function () {\n      $('#demo-foo-accordion').data('footable').toggleDetail(this);\n    });\n  }); // Pagination\n  // -----------------------------------------------------------------\n\n  $('#demo-foo-pagination').footable();\n  $('#demo-show-entries').change(function (e) {\n    e.preventDefault();\n    var pageSize = $(this).val();\n    $('#demo-foo-pagination').data('page-size', pageSize);\n    $('#demo-foo-pagination').trigger('footable_initialized');\n  }); // Filtering\n  // -----------------------------------------------------------------\n\n  var filtering = $('#demo-foo-filtering');\n  filtering.footable().on('footable_filtering', function (e) {\n    var selected = $('#demo-foo-filter-status').find(':selected').val();\n    e.filter += e.filter && e.filter.length > 0 ? ' ' + selected : selected;\n    e.clear = !e.filter;\n  }); // Filter status\n\n  $('#demo-foo-filter-status').change(function (e) {\n    e.preventDefault();\n    filtering.trigger('footable_filter', {\n      filter: $(this).val()\n    });\n  }); // Search input\n\n  $('#demo-foo-search').on('input', function (e) {\n    e.preventDefault();\n    filtering.trigger('footable_filter', {\n      filter: $(this).val()\n    });\n  }); // Add & Remove Row\n  // -----------------------------------------------------------------\n\n  var addrow = $('#demo-foo-addrow');\n  addrow.footable().on('click', '.demo-delete-row', function () {\n    //get the footable object\n    var footable = addrow.data('footable'); //get the row we are wanting to delete\n\n    var row = $(this).parents('tr:first'); //delete the row\n\n    footable.removeRow(row);\n  }); // Search input\n\n  $('#demo-input-search2').on('input', function (e) {\n    e.preventDefault();\n    addrow.trigger('footable_filter', {\n      filter: $(this).val()\n    });\n  }); // Add Row Button\n\n  $('#demo-btn-addrow').click(function () {\n    //get the footable object\n    var footable = addrow.data('footable'); //build up the row we are wanting to add\n\n    var newRow = '<tr><td style=\"text-align: center;\"><button class=\"demo-delete-row btn btn-danger btn-xs btn-icon\"><i class=\"fa fa-times\"></i></button></td><td>Adam</td><td>Doe</td><td>Traffic Court Referee</td><td>22 Jun 1972</td><td><span class=\"badge label-table badge-success   \">Active</span></td></tr>'; //add it\n\n    footable.appendRow(newRow);\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvZm9vLXRhYmxlcy5pbml0LmpzPzU3OTMiXSwibmFtZXMiOlsiJCIsIndpbmRvdyIsIm9uIiwiZm9vdGFibGUiLCJlIiwibm90Iiwicm93IiwiZWFjaCIsImRhdGEiLCJ0b2dnbGVEZXRhaWwiLCJjaGFuZ2UiLCJwcmV2ZW50RGVmYXVsdCIsInBhZ2VTaXplIiwidmFsIiwidHJpZ2dlciIsImZpbHRlcmluZyIsInNlbGVjdGVkIiwiZmluZCIsImZpbHRlciIsImxlbmd0aCIsImNsZWFyIiwiYWRkcm93IiwicGFyZW50cyIsInJlbW92ZVJvdyIsImNsaWNrIiwibmV3Um93IiwiYXBwZW5kUm93Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxDQUFDLENBQUNDLE1BQUQsQ0FBRCxDQUFVQyxFQUFWLENBQWEsTUFBYixFQUFxQixZQUFXO0FBRTVCO0FBQ0E7QUFDQUYsRUFBQUEsQ0FBQyxDQUFDLHVCQUFELENBQUQsQ0FBMkJHLFFBQTNCLEdBSjRCLENBTTVCO0FBQ0E7O0FBQ0FILEVBQUFBLENBQUMsQ0FBQyxxQkFBRCxDQUFELENBQXlCRyxRQUF6QixHQUFvQ0QsRUFBcEMsQ0FBdUMsdUJBQXZDLEVBQWdFLFVBQVNFLENBQVQsRUFBWTtBQUN4RUosSUFBQUEsQ0FBQyxDQUFDLG1EQUFELENBQUQsQ0FBdURLLEdBQXZELENBQTJERCxDQUFDLENBQUNFLEdBQTdELEVBQWtFQyxJQUFsRSxDQUF1RSxZQUFXO0FBQzlFUCxNQUFBQSxDQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5QlEsSUFBekIsQ0FBOEIsVUFBOUIsRUFBMENDLFlBQTFDLENBQXVELElBQXZEO0FBQ0gsS0FGRDtBQUdILEdBSkQsRUFSNEIsQ0FjNUI7QUFDQTs7QUFDQVQsRUFBQUEsQ0FBQyxDQUFDLHNCQUFELENBQUQsQ0FBMEJHLFFBQTFCO0FBQ0FILEVBQUFBLENBQUMsQ0FBQyxvQkFB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Q0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0J3QixLQUF0QixDQUE0QixZQUFXO0FBRW5DO0FBQ0EsUUFBSXJCLFFBQVEsR0FBR2tCLE1BQU0sQ0FBQ2IsSUFBUCxDQUFZLFVBQVosQ0FBZixDQUhtQyxDQUtuQzs7QUFDQSxRQUFJaUIsTUFBTSxHQUFHLHFTQUFiLENBTm1DLENBUW5DOztBQUNBdEIsSUFBQUEsUUFBUSxDQUFDdUIsU0FBVCxDQUFtQkQsTUFBbkI7QUFDSCxHQVZEO0FBV0gsQ0EvRUQiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuVGVtcGxhdGUgTmFtZTogVWJvbGQgLSBSZXNwb25zaXZlIEJvb3RzdHJhcCA0IEFkbWluIERhc2hib2FyZFxuQXV0aG9yOiBDb2RlclRoZW1lc1xuV2Vic2l0ZTogaHR0cHM6Ly9jb2RlcnRoZW1lcy5jb20vXG5Db250YWN0OiBzdXBwb3J0QGNvZGVydGhlbWVzLmNvbVxuRmlsZTogRm9vIHRhYmxlcyBpbml0IGpzXG4qL1xuXG4kKHdpbmRvdykub24oJ2xvYWQnLCBmdW5jdGlvbigpIHtcblxuICAgIC8vIFJvdyBUb2dnbGVyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAkKCcjZGVtby1mb28tcm93LXRvZ2dsZXInKS5mb290YWJsZSgpO1xuXG4gICAgLy8gQWNjb3JkaW9uXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAkKCcjZGVtby1mb28tYWNjb3JkaW9uJykuZm9vdGFibGUoKS5vbignZm9vdGFibGVfcm93X2V4cGFuZGVkJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAkKCcjZGVtby1mb28tYWNjb3JkaW9uIHRib2R5IHRyLmZvb3RhYmxlLWRldGFpbC1zaG93Jykubm90KGUucm93KS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCgnI2RlbW8tZm9vLWFjY29yZGlvbicpLmRhdGEoJ2Zvb3RhYmxlJykudG9nZ2xlRGV0YWlsKHRoaXMpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIFBhZ2luYXRpb25cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICQoJyNkZW1vLWZvby1wYWdpbmF0aW9uJykuZm9vdGFibGUoKTtcbiAgICAkKCcjZGVtby1zaG93LWVudHJpZXMnKS5jaGFuZ2UoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB2YXIgcGFnZVNpemUgPSAkKHRoaXMpLnZhbCgpO1xuICAgICAgICAkKCcjZGVtby1mb28tcGFnaW5hdGlvbicpLmRhdGEoJ3BhZ2Utc2l6ZScsIHBhZ2VTaXplKTtcbiAgICAgICAgJCgnI2RlbW8tZm9vLXBhZ2luYXRpb24nKS50cmlnZ2VyKCdmb290YWJsZV9pbml0aWFsaXplZCcpO1xuICAgIH0pO1xuXG4gICAgLy8gRmlsdGVyaW5nXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB2YXIgZmlsdGVyaW5nID0gJCgnI2RlbW8tZm9vLWZpbHRlcmluZycpO1xuICAgIGZpbHRlcmluZy5mb290YWJsZSgpLm9uKCdmb290YWJsZV9maWx0ZXJpbmcnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgc2VsZWN0ZWQgPSAkKCcjZGVtby1mb28tZmlsdGVyLXN0YXR1cycpLmZpbmQoJzpzZWxlY3RlZCcpLnZhbCgpO1xuICAgICAgICBlLmZpbHRlciArPSAoZS5maWx0ZXIgJiYgZS5maWx0ZXIubGVuZ3RoID4gMCkgPyAnICcgKyBzZWxlY3RlZCA6IHNlbGVjdGVkO1xuICAgICAgICBlLmNsZWFyID0gIWUuZmlsdGVyO1xuICAgIH0pO1xuXG4gICAgLy8gRmlsdGVyIHN0YXR1c1xuICAgICQoJyNkZW1vLWZvby1maWx0ZXItc3RhdHVzJykuY2hhbmdlKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZmlsdGVyaW5nLnRyaWdnZXIoJ2Zvb3RhYmxlX2ZpbHRlcicsIHtmaWx0ZXI6ICQodGhpcykudmFsKCl9KTtcbiAgICB9KTtcblxuICAgIC8vIFNlYXJjaCBpbnB1dFxuICAgICQoJyNkZW1vLWZvby1zZWFyY2gnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGZpbHRlcmluZy50cmlnZ2VyKCdmb290YWJsZV9maWx0ZXInLCB7ZmlsdGVyOiAkKHRoaXMpLnZhbCgpfSk7XG4gICAgfSk7XG5cblxuICAgIC8vIEFkZCAmIFJlbW92ZSBSb3dcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHZhciBhZGRyb3cgPSAkKCcjZGVtby1mb28tYWRkcm93Jyk7XG4gICAgYWRkcm93LmZvb3RhYmxlKCkub24oJ2NsaWNrJywgJy5kZW1vLWRlbGV0ZS1yb3cnLCBmdW5jdGlvbigpIHtcblxuICAgICAgICAvL2dldCB0aGUgZm9vdGFibGUgb2JqZWN0XG4gICAgICAgIHZhciBmb290YWJsZSA9IGFkZHJvdy5kYXRhKCdmb290YWJsZScpO1xuXG4gICAgICAgIC8vZ2V0IHRoZSByb3cgd2UgYXJlIHdhbnRpbmcgdG8gZGVsZXRlXG4gICAgICAgIHZhciByb3cgPSAkKHRoaXMpLnBhcmVudHMoJ3RyOmZpcnN0Jyk7XG5cbiAgICAgICAgLy9kZWxldGUgdGhlIHJvd1xuICAgICAgICBmb290YWJsZS5yZW1vdmVSb3cocm93KTtcbiAgICB9KTtcblxuICAgIC8vIFNlYXJjaCBpbnB1dFxuICAgICQoJyNkZW1vLWlucHV0LXNlYXJjaDInKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGFkZHJvdy50cmlnZ2VyKCdmb290YWJsZV9maWx0ZXInLCB7ZmlsdGVyOiAkKHRoaXMpLnZhbCgpfSk7XG4gICAgfSk7XG5cbiAgICAvLyBBZGQgUm93IEJ1dHRvblxuICAgICQoJyNkZW1vLWJ0bi1hZGRyb3cnKS5jbGljayhmdW5jdGlvbigpIHtcblxuICAgICAgICAvL2dldCB0aGUgZm9vdGFibGUgb2JqZWN0XG4gICAgICAgIHZhciBmb290YWJsZSA9IGFkZHJvdy5kYXRhKCdmb290YWJsZScpO1xuXG4gICAgICAgIC8vYnVpbGQgdXAgdGhlIHJvdyB3ZSBhcmUgd2FudGluZyB0byBhZGRcbiAgICAgICAgdmFyIG5ld1JvdyA9ICc8dHI+PHRkIHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyO1wiPjxidXR0b24gY2xhc3M9XCJkZW1vLWRlbGV0ZS1yb3cgYnRuIGJ0bi1kYW5nZXIgYnRuLXhzIGJ0bi1pY29uXCI+PGkgY2xhc3M9XCJmYSBmYS10aW1lc1wiPjwvaT48L2J1dHRvbj48L3RkPjx0ZD5BZGFtPC90ZD48dGQ+RG9lPC90ZD48dGQ+VHJhZmZpYyBDb3VydCBSZWZlcmVlPC90ZD48dGQ+MjIgSnVuIDE5NzI8L3RkPjx0ZD48c3BhbiBjbGFzcz1cImJhZGdlIGxhYmVsLXRhYmxlIGJhZGdlLXN1Y2Nlc3MgICBcIj5BY3RpdmU8L3NwYW4+PC90ZD48L3RyPic7XG5cbiAgICAgICAgLy9hZGQgaXRcbiAgICAgICAgZm9vdGFibGUuYXBwZW5kUm93KG5ld1Jvdyk7XG4gICAgfSk7XG59KTsiXSwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL3BhZ2VzL2Zvby10YWJsZXMuaW5pdC5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/pages/foo-tables.init.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/js/pages/foo-tables.init.js"]();
/******/ 	
/******/ })()
;