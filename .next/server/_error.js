"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "/_error";
exports.ids = ["/_error"];
exports.modules = {

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Layout)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _barrel_optimize_names_AppBar_Button_Container_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=AppBar,Button,Container,Toolbar,Typography!=!@mui/material */ \"__barrel_optimize__?names=AppBar,Button,Container,Toolbar,Typography!=!./node_modules/@mui/material/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _LoginPopup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LoginPopup */ \"./components/LoginPopup.js\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/auth */ \"./lib/auth.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_LoginPopup__WEBPACK_IMPORTED_MODULE_3__, _barrel_optimize_names_AppBar_Button_Container_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__]);\n([_LoginPopup__WEBPACK_IMPORTED_MODULE_3__, _barrel_optimize_names_AppBar_Button_Container_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// components/Layout.js\n\n\n\n\n\n // Assuming auth context is in lib/auth.js\nfunction Layout({ children }) {\n    const [loginOpen, setLoginOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const handleLoginOpen = ()=>{\n        setLoginOpen(true);\n    };\n    const handleLoginClose = ()=>{\n        setLoginOpen(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Button_Container_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.AppBar, {\n                position: \"static\",\n                color: \"primary\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Button_Container_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.Toolbar, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Button_Container_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                            variant: \"h6\",\n                            sx: {\n                                flexGrow: 1\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/\",\n                                style: {\n                                    textDecoration: \"none\",\n                                    color: \"white\"\n                                },\n                                children: \"The Brewery\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\my-threejs-project\\\\components\\\\Layout.js\",\n                                lineNumber: 23,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\my-threejs-project\\\\components\\\\Layout.js\",\n                            lineNumber: 22,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Button_Container_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                            color: \"inherit\",\n                            component: (next_link__WEBPACK_IMPORTED_MODULE_1___default()),\n                            href: \"/scene\",\n                            children: \"3D Scene\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\my-threejs-project\\\\components\\\\Layout.js\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Button_Container_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                            color: \"inherit\",\n                            component: (next_link__WEBPACK_IMPORTED_MODULE_1___default()),\n                            href: \"/dashboard\",\n                            children: \"Dashboard\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\my-threejs-project\\\\components\\\\Layout.js\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Button_Container_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                            color: \"inherit\",\n                            onClick: handleLoginOpen,\n                            children: \"Login\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\my-threejs-project\\\\components\\\\Layout.js\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, this),\n                        (0,_lib_auth__WEBPACK_IMPORTED_MODULE_4__.useAuth)().user?.role === \"ADMIN\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Button_Container_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                            color: \"inherit\",\n                            component: (next_link__WEBPACK_IMPORTED_MODULE_1___default()),\n                            href: \"/inventory\",\n                            children: \"Inventory\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\my-threejs-project\\\\components\\\\Layout.js\",\n                            lineNumber: 38,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LoginPopup__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            open: loginOpen,\n                            onClose: handleLoginClose\n                        }, void 0, false, {\n                            fileName: \"E:\\\\my-threejs-project\\\\components\\\\Layout.js\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\my-threejs-project\\\\components\\\\Layout.js\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\my-threejs-project\\\\components\\\\Layout.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Button_Container_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.Container, {\n                sx: {\n                    mt: 4\n                },\n                children: children\n            }, void 0, false, {\n                fileName: \"E:\\\\my-threejs-project\\\\components\\\\Layout.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUJBQXVCOztBQUN3RDtBQUNsRDtBQUNlO0FBQ047QUFDQSxDQUFDLDBDQUEwQztBQUVsRSxTQUFTVSxPQUFPLEVBQUVDLFFBQVEsRUFBRTtJQUN6QyxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1AsK0NBQVFBLENBQUM7SUFFM0MsTUFBTVEsa0JBQWtCO1FBQ3RCRCxhQUFhO0lBQ2Y7SUFFQSxNQUFNRSxtQkFBbUI7UUFDdkJGLGFBQWE7SUFDZjtJQUNBLHFCQUNFOzswQkFDRSw4REFBQ2Isa0hBQU1BO2dCQUFDZ0IsVUFBUztnQkFBU0MsT0FBTTswQkFDOUIsNEVBQUNoQixtSEFBT0E7O3NDQUNOLDhEQUFDQyxzSEFBVUE7NEJBQUNnQixTQUFROzRCQUFLQyxJQUFJO2dDQUFFQyxVQUFVOzRCQUFFO3NDQUN6Qyw0RUFBQ2Ysa0RBQUlBO2dDQUFDZ0IsTUFBSztnQ0FBSUMsT0FBTztvQ0FBRUMsZ0JBQWdCO29DQUFRTixPQUFPO2dDQUFROzBDQUFHOzs7Ozs7Ozs7OztzQ0FJcEUsOERBQUNkLGtIQUFNQTs0QkFBQ2MsT0FBTTs0QkFBVU8sV0FBV25CLGtEQUFJQTs0QkFBRWdCLE1BQUs7c0NBQVM7Ozs7OztzQ0FHdkQsOERBQUNsQixrSEFBTUE7NEJBQUNjLE9BQU07NEJBQVVPLFdBQVduQixrREFBSUE7NEJBQUVnQixNQUFLO3NDQUFhOzs7Ozs7c0NBRzNELDhEQUFDbEIsa0hBQU1BOzRCQUFDYyxPQUFNOzRCQUFVUSxTQUFTWDtzQ0FBaUI7Ozs7Ozt3QkFJakRMLGtEQUFPQSxHQUFHaUIsSUFBSSxFQUFFQyxTQUFTLHlCQUN4Qiw4REFBQ3hCLGtIQUFNQTs0QkFBQ2MsT0FBTTs0QkFBVU8sV0FBV25CLGtEQUFJQTs0QkFBRWdCLE1BQUs7c0NBQWE7Ozs7OztzQ0FJN0QsOERBQUNiLG1EQUFVQTs0QkFBQ29CLE1BQU1oQjs0QkFBV2lCLFNBQVNkOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFJMUMsOERBQUNYLHFIQUFTQTtnQkFBQ2UsSUFBSTtvQkFBRVcsSUFBSTtnQkFBRTswQkFBSW5COzs7Ozs7OztBQUdqQyIsInNvdXJjZXMiOlsiRTpcXG15LXRocmVlanMtcHJvamVjdFxcY29tcG9uZW50c1xcTGF5b3V0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBvbmVudHMvTGF5b3V0LmpzXHJcbmltcG9ydCB7IEFwcEJhciwgVG9vbGJhciwgVHlwb2dyYXBoeSwgQnV0dG9uLCBDb250YWluZXIgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExvZ2luUG9wdXAgZnJvbSBcIi4vTG9naW5Qb3B1cFwiO1xyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSBcIi4uL2xpYi9hdXRoXCI7IC8vIEFzc3VtaW5nIGF1dGggY29udGV4dCBpcyBpbiBsaWIvYXV0aC5qc1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IFtsb2dpbk9wZW4sIHNldExvZ2luT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvZ2luT3BlbiA9ICgpID0+IHtcclxuICAgIHNldExvZ2luT3Blbih0cnVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVMb2dpbkNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0TG9naW5PcGVuKGZhbHNlKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCIgY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgPFRvb2xiYXI+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBzeD17eyBmbGV4R3JvdzogMSB9fT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsIGNvbG9yOiBcIndoaXRlXCIgfX0+XHJcbiAgICAgICAgICAgICAgVGhlIEJyZXdlcnlcclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIiBjb21wb25lbnQ9e0xpbmt9IGhyZWY9XCIvc2NlbmVcIj5cclxuICAgICAgICAgICAgM0QgU2NlbmVcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIiBjb21wb25lbnQ9e0xpbmt9IGhyZWY9XCIvZGFzaGJvYXJkXCI+XHJcbiAgICAgICAgICAgIERhc2hib2FyZFxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiIG9uQ2xpY2s9e2hhbmRsZUxvZ2luT3Blbn0+XHJcbiAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIHsvKiBJbnZlbnRvcnkgQnV0dG9uIChBZG1pbiBPbmx5KSAqL31cclxuICAgICAgICAgIHt1c2VBdXRoKCkudXNlcj8ucm9sZSA9PT0gXCJBRE1JTlwiICYmIChcclxuICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIiBjb21wb25lbnQ9e0xpbmt9IGhyZWY9XCIvaW52ZW50b3J5XCI+XHJcbiAgICAgICAgICAgICAgSW52ZW50b3J5XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIDxMb2dpblBvcHVwIG9wZW49e2xvZ2luT3Blbn0gb25DbG9zZT17aGFuZGxlTG9naW5DbG9zZX0gLz5cclxuICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgIDwvQXBwQmFyPlxyXG5cclxuICAgICAgPENvbnRhaW5lciBzeD17eyBtdDogNCB9fT57Y2hpbGRyZW59PC9Db250YWluZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJBcHBCYXIiLCJUb29sYmFyIiwiVHlwb2dyYXBoeSIsIkJ1dHRvbiIsIkNvbnRhaW5lciIsIkxpbmsiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkxvZ2luUG9wdXAiLCJ1c2VBdXRoIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJsb2dpbk9wZW4iLCJzZXRMb2dpbk9wZW4iLCJoYW5kbGVMb2dpbk9wZW4iLCJoYW5kbGVMb2dpbkNsb3NlIiwicG9zaXRpb24iLCJjb2xvciIsInZhcmlhbnQiLCJzeCIsImZsZXhHcm93IiwiaHJlZiIsInN0eWxlIiwidGV4dERlY29yYXRpb24iLCJjb21wb25lbnQiLCJvbkNsaWNrIiwidXNlciIsInJvbGUiLCJvcGVuIiwib25DbG9zZSIsIm10Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ }),

/***/ "./components/LoginPopup.js":
/*!**********************************!*\
  !*** ./components/LoginPopup.js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LoginPopup)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Alert_Box_Button_CircularProgress_Dialog_DialogActions_DialogContent_DialogTitle_FormControl_InputLabel_MenuItem_Select_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Alert,Box,Button,CircularProgress,Dialog,DialogActions,DialogContent,DialogTitle,FormControl,InputLabel,MenuItem,Select,TextField,Typography!=!@mui/material */ \"__barrel_optimize__?names=Alert,Box,Button,CircularProgress,Dialog,DialogActions,DialogContent,DialogTitle,FormControl,InputLabel,MenuItem,Select,TextField,Typography!=!./node_modules/@mui/material/esm/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/auth */ \"./lib/auth.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_barrel_optimize_names_Alert_Box_Button_CircularProgress_Dialog_DialogActions_DialogContent_DialogTitle_FormControl_InputLabel_MenuItem_Select_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__]);\n_barrel_optimize_names_Alert_Box_Button_CircularProgress_Dialog_DialogActions_DialogContent_DialogTitle_FormControl_InputLabel_MenuItem_Select_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// components/LoginPopup.js\n\n\n\n\n\nfunction LoginPopup({ open, onClose }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { login } = (0,_lib_auth__WEBPACK_IMPORTED_MODULE_3__.useAuth)();\n    const [isLogin, setIsLogin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [success, setSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // Form states\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        email: \"\",\n        password: \"\",\n        confirmPassword: \"\",\n        role: \"BARISTA\"\n    });\n    const handleInputChange = (e)=>{\n        const { name, value } = e.target;\n        setFormData({\n            ...formData,\n            [name]: value\n        });\n    };\n    const toggleMode = ()=>{\n        setIsLogin(!isLogin);\n        setError(\"\");\n        setSuccess(\"\");\n    };\n    const validateForm = ()=>{\n        if (!formData.email || !formData.password) {\n            setError(\"Email and password are required\");\n            return false;\n        }\n        if (!isLogin) {\n            if (!formData.name) {\n                setError(\"Name is required\");\n                return false;\n            }\n            if (formData.password !== formData.confirmPassword) {\n                setError(\"Passwords do not match\");\n                return false;\n            }\n            if (formData.password.length < 6) {\n                setError(\"Password must be at least 6 characters\");\n                return false;\n            }\n        }\n        return true;\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        setError(\"\");\n        setSuccess(\"\");\n        if (!validateForm()) return;\n        setLoading(true);\n        try {\n            if (isLogin) {\n                // Login logic\n                try {\n                    await login(formData.email, formData.password);\n                    setSuccess(\"Login successful!\");\n                    setTimeout(()=>{\n                        onClose();\n                    }, 1500);\n                } catch (err) {\n                    setError(err.message || \"An error occurred\");\n                }\n            } else {\n                // Signup logic\n                const response = await fetch(\"/api/auth\", {\n                    method: \"POST\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify({\n                        action: \"register\",\n                        email: formData.email,\n                        password: formData.password,\n                        role: formData.role\n                    })\n                });\n                if (!response.ok) {\n                    const errorData = await response.json();\n                    throw new Error(errorData.error || \"Failed to create account\");\n                }\n                const data = await response.json();\n                setSuccess(\"Account created successfully! You can now login.\");\n                setIsLogin(true);\n                setFormData({\n                    ...formData,\n                    password: \"\",\n                    confirmPassword: \"\"\n                });\n            }\n        } catch (err) {\n            setError(err.message || \"An error occurred\");\n        } finally{\n            setLoading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Alert_Box_Button_CircularProgress_Dialog_DialogActions_DialogContent_DialogTitle_FormControl_InputLabel_MenuItem_Select_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__.Dialog, {\n        open: open,\n        onClose: onClose,\n        maxWidth: \"sm\",\n        fullWidth: true,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Alert_Box_Button_CircularProgress_Dialog_DialogActions_DialogContent_DialogTitle_FormControl_InputLabel_MenuItem_Select_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__.DialogTitle, {\n                children: isLogin ? \"Login to Your Account\" : \"Create a New Account\"\n            }, void 0, false, {\n                fileName: \"E:\\\\my-threejs-project\\\\components\\\\LoginPopup.js\",\n                lineNumber: 138,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Alert_Box_Button_CircularProgress_Dialog_DialogActions_DialogContent_DialogTitle_FormControl_InputLabel_MenuItem_Select_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__.DialogContent, {\n                        children: [\n                            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Alert_Box_Button_CircularProgress_Dialog_DialogActions_DialogContent_DialogTitle_FormControl_InputLabel_MenuItem_Select_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__.Alert, {\n                                severity: \"error\",\n                                sx: {\n                                    mb: 2\n                                },\n                                children: error\n                            }, void 0, false, {\n                                fileName: \"E:\\\\my-threejs-project\\\\components\\\\LoginPopup.js\",\n                                lineNumber: 145,\n                                columnNumber: 13\n                            }, this),\n                            success && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Alert_Box_Button_CircularProgress_Dialog_DialogActions_DialogContent_DialogTitle_FormControl_InputLabel_MenuItem_Select_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__.Alert, {\n                                severity: \"success\",\n                                sx: {\n                                    mb: 2\n                                },\n                                children: success\n                            }, void 0, false, {\n                                fileName: \"E:\\\\my-threejs-project\\\\components\\\\LoginPopup.js\",\n                                lineNumber: 150,\n                                columnNumber: 13\n                            }, this),\n                            !isLogin && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Alert_Box_Button_CircularProgress_Dialog_DialogActions_DialogContent_DialogTitle_FormControl_InputLabel_MenuItem_Select_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__.TextField, {\n                                margin: \"dense\",\n                                label: \"Name\",\n                                type: \"text\",\n                                fullWidth: true,\n                                name: \"name\",\n                                value: formData.name,\n                                onChange: handleInputChange,\n                                required: true,\n                                variant: \"outlined\",\n                                sx: {\n                                    mb: 2\n                                }\n                            }, void 0, false, {\n                                fileName: \"E:\\\\my-threejs-project\\\\components\\\\LoginPopup.js\",\n                                lineNumber: 156,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Alert_Box_Button_CircularProgress_Dialog_DialogActions_DialogContent_DialogTitle_FormControl_InputLabel_MenuItem_Select_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__.TextField, {\n                                margin: \"dense\",\n                                label: \"Email Address\",\n                                type: \"email\",\n                                fullWidth: true,\n                                name: \"email\",\n                                value: formData.email,\n                                onChange: handleInputChange,\n                                required: true,\n                                variant: \"outlined\",\n                                sx: {\n                                    mb: 2\n                                }\n                            }, void 0, false, {\n                                fileName: \"E:\\\\my-threejs-project\\\\components\\\\LoginPopup.js\",\n                                lineNumber: 170,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Alert_Box_Button_CircularProgress_Dialog_DialogActions_DialogContent_DialogTitle_FormControl_InputLabel_MenuItem_Select_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__.TextField, {\n                                margin: \"dense\",\n                                label: \"Password\",\n                                type: \"password\",\n                                fullWidth: true,\n                                name: \"password\",\n                                value: formData.password,\n                                onChange: handleInputChange,\n                                required: true,\n                                variant: \"outlined\",\n                                sx: {\n                                    mb: 2\n                                }\n                            }, void 0, false, {\n                                fileName: \"E:\\\\my-threejs-project\\\\components\\\\LoginPopup.js\",\n                                lineNumber: 183,\n                                columnNumber: 11\n                            }, this),\n                            !isLogin && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Alert_Box_Button_CircularProgress_Dialog_DialogActions_DialogContent_DialogTitle_FormControl_InputLabel_MenuItem_Select_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__.TextField, {\n                                        margin: \"dense\",\n                                        label: \"Confirm Password\",\n                                        type: \"password\",\n                                        fullWidth: true,\n                                        name: \"confirmPassword\",\n                                        value: formData.confirmPassword,\n                                        onChange: handleInputChange,\n                                        required: true,\n                                        variant: \"outlined\",\n                                        sx: {\n                                            mb: 2\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\my-threejs-project\\\\components\\\\LoginPopup.js\",\n                                        lineNumber: 198,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Alert_Box_Button_CircularProgress_Dialog_DialogActions_DialogContent_DialogTitle_FormControl_InputLabel_MenuItem_Select_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__.FormControl, {\n                                        fullWidth: true,\n                                        sx: {\n                                            mb: 2\n                                        },\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Alert_Box_Button_CircularProgress_Dialog_DialogActions_DialogContent_DialogTitle_FormControl_InputLabel_MenuItem_Select_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__.InputLabel, {\n                                                id: \"role-select-label\",\n                                                children: \"Role\"\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\my-threejs-project\\\\components\\\\LoginPopup.js\",\n                                                lineNumber: 212,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Alert_Box_Button_CircularProgress_Dialog_DialogActions_DialogContent_DialogTitle_FormControl_InputLabel_MenuItem_Select_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__.Select, {\n                                                labelId: \"role-select-label\",\n                                                id: \"role-select\",\n                                                name: \"role\",\n                                                value: formData.role,\n                                                label: \"Role\",\n                                                onChange: handleInputChange,\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Alert_Box_Button_CircularProgress_Dialog_DialogActions_DialogContent_DialogTitle_FormControl_InputLabel_MenuItem_Select_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {\n                                                        value: \"BARISTA\",\n                                                        children: \"Barista\"\n                                                    }, void 0, false, {\n                                                        fileName: \"E:\\\\my-threejs-project\\\\components\\\\LoginPopup.js\",\n                                                        lineNumber: 221,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Alert_Box_Button_CircularProgress_Dialog_DialogActions_DialogContent_DialogTitle_FormControl_InputLabel_MenuItem_Select_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {\n                                                        value: \"MANAGER\",\n                                                        children: \"Manager\"\n                                                    }, void 0, false, {\n                                                        fileName: \"E:\\\\my-threejs-project\\\\components\\\\LoginPopup.js\",\n                                                        lineNumber: 222,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Alert_Box_Button_CircularProgress_Dialog_DialogActions_DialogContent_DialogTitle_FormControl_InputLabel_MenuItem_Select_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {\n                                                        value: \"ADMIN\",\n                                                        children: \"Admin\"\n                                                    }, void 0, false, {\n                                                        fileName: \"E:\\\\my-threejs-project\\\\components\\\\LoginPopup.js\",\n                                                        lineNumber: 223,\n                                                        columnNumber: 19\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"E:\\\\my-threejs-project\\\\components\\\\LoginPopup.js\",\n                                                lineNumber: 213,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"E:\\\\my-threejs-project\\\\components\\\\LoginPopup.js\",\n                                        lineNumber: 211,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Alert_Box_Button_CircularProgress_Dialog_DialogActions_DialogContent_DialogTitle_FormControl_InputLabel_MenuItem_Select_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                                sx: {\n                                    mt: 2,\n                                    textAlign: \"center\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Alert_Box_Button_CircularProgress_Dialog_DialogActions_DialogContent_DialogTitle_FormControl_InputLabel_MenuItem_Select_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                                    variant: \"body2\",\n                                    children: [\n                                        isLogin ? \"Don't have an account?\" : \"Already have an account?\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Alert_Box_Button_CircularProgress_Dialog_DialogActions_DialogContent_DialogTitle_FormControl_InputLabel_MenuItem_Select_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                            onClick: toggleMode,\n                                            color: \"primary\",\n                                            sx: {\n                                                ml: 1\n                                            },\n                                            children: isLogin ? \"Sign Up\" : \"Login\"\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\my-threejs-project\\\\components\\\\LoginPopup.js\",\n                                            lineNumber: 232,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"E:\\\\my-threejs-project\\\\components\\\\LoginPopup.js\",\n                                    lineNumber: 230,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\my-threejs-project\\\\components\\\\LoginPopup.js\",\n                                lineNumber: 229,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\my-threejs-project\\\\components\\\\LoginPopup.js\",\n                        lineNumber: 143,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Alert_Box_Button_CircularProgress_Dialog_DialogActions_DialogContent_DialogTitle_FormControl_InputLabel_MenuItem_Select_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__.DialogActions, {\n                        sx: {\n                            px: 3,\n                            pb: 3\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Alert_Box_Button_CircularProgress_Dialog_DialogActions_DialogContent_DialogTitle_FormControl_InputLabel_MenuItem_Select_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                onClick: onClose,\n                                color: \"primary\",\n                                disabled: loading,\n                                children: \"Cancel\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\my-threejs-project\\\\components\\\\LoginPopup.js\",\n                                lineNumber: 240,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Alert_Box_Button_CircularProgress_Dialog_DialogActions_DialogContent_DialogTitle_FormControl_InputLabel_MenuItem_Select_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                type: \"submit\",\n                                variant: \"contained\",\n                                color: \"primary\",\n                                disabled: loading,\n                                startIcon: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Alert_Box_Button_CircularProgress_Dialog_DialogActions_DialogContent_DialogTitle_FormControl_InputLabel_MenuItem_Select_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__.CircularProgress, {\n                                    size: 20\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\my-threejs-project\\\\components\\\\LoginPopup.js\",\n                                    lineNumber: 248,\n                                    columnNumber: 34\n                                }, void 0) : null,\n                                children: isLogin ? \"Login\" : \"Sign Up\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\my-threejs-project\\\\components\\\\LoginPopup.js\",\n                                lineNumber: 243,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\my-threejs-project\\\\components\\\\LoginPopup.js\",\n                        lineNumber: 239,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\my-threejs-project\\\\components\\\\LoginPopup.js\",\n                lineNumber: 142,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\my-threejs-project\\\\components\\\\LoginPopup.js\",\n        lineNumber: 137,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVYixJQUFJO2dEQUFFYyxJQUFJOzRDQUFFO3NEQUN0RDNELFVBQVUsWUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBTS9CLDhEQUFDbEIsMk5BQWFBO3dCQUFDK0QsSUFBSTs0QkFBRWUsSUFBSTs0QkFBR0MsSUFBSTt3QkFBRTs7MENBQ2hDLDhEQUFDOUUsb05BQU1BO2dDQUFDMEUsU0FBUzVEO2dDQUFTNkQsT0FBTTtnQ0FBVUksVUFBVTVEOzBDQUFTOzs7Ozs7MENBRzdELDhEQUFDbkIsb05BQU1BO2dDQUNMa0UsTUFBSztnQ0FDTEcsU0FBUTtnQ0FDUk0sT0FBTTtnQ0FDTkksVUFBVTVEO2dDQUNWNkQsV0FBVzdELHdCQUFVLDhEQUFDZiw4TkFBZ0JBO29DQUFDNkUsTUFBTTs7Ozs7NkNBQVM7MENBRXJEaEUsVUFBVSxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNakMiLCJzb3VyY2VzIjpbIkU6XFxteS10aHJlZWpzLXByb2plY3RcXGNvbXBvbmVudHNcXExvZ2luUG9wdXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG9uZW50cy9Mb2dpblBvcHVwLmpzXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgRGlhbG9nLFxyXG4gIERpYWxvZ1RpdGxlLFxyXG4gIERpYWxvZ0NvbnRlbnQsXHJcbiAgRGlhbG9nQWN0aW9ucyxcclxuICBCdXR0b24sXHJcbiAgVGV4dEZpZWxkLFxyXG4gIFR5cG9ncmFwaHksXHJcbiAgQm94LFxyXG4gIENpcmN1bGFyUHJvZ3Jlc3MsXHJcbiAgQWxlcnQsXHJcbiAgRm9ybUNvbnRyb2wsXHJcbiAgSW5wdXRMYWJlbCxcclxuICBTZWxlY3QsXHJcbiAgTWVudUl0ZW0sXHJcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tIFwiLi4vbGliL2F1dGhcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luUG9wdXAoeyBvcGVuLCBvbkNsb3NlIH0pIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGxvZ2luIH0gPSB1c2VBdXRoKCk7XHJcbiAgY29uc3QgW2lzTG9naW4sIHNldElzTG9naW5dID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3N1Y2Nlc3MsIHNldFN1Y2Nlc3NdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIC8vIEZvcm0gc3RhdGVzXHJcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBuYW1lOiBcIlwiLFxyXG4gICAgZW1haWw6IFwiXCIsXHJcbiAgICBwYXNzd29yZDogXCJcIixcclxuICAgIGNvbmZpcm1QYXNzd29yZDogXCJcIixcclxuICAgIHJvbGU6IFwiQkFSSVNUQVwiLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcclxuICAgIHNldEZvcm1EYXRhKHtcclxuICAgICAgLi4uZm9ybURhdGEsXHJcbiAgICAgIFtuYW1lXTogdmFsdWUsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCB0b2dnbGVNb2RlID0gKCkgPT4ge1xyXG4gICAgc2V0SXNMb2dpbighaXNMb2dpbik7XHJcbiAgICBzZXRFcnJvcihcIlwiKTtcclxuICAgIHNldFN1Y2Nlc3MoXCJcIik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdmFsaWRhdGVGb3JtID0gKCkgPT4ge1xyXG4gICAgaWYgKCFmb3JtRGF0YS5lbWFpbCB8fCAhZm9ybURhdGEucGFzc3dvcmQpIHtcclxuICAgICAgc2V0RXJyb3IoXCJFbWFpbCBhbmQgcGFzc3dvcmQgYXJlIHJlcXVpcmVkXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFpc0xvZ2luKSB7XHJcbiAgICAgIGlmICghZm9ybURhdGEubmFtZSkge1xyXG4gICAgICAgIHNldEVycm9yKFwiTmFtZSBpcyByZXF1aXJlZFwiKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChmb3JtRGF0YS5wYXNzd29yZCAhPT0gZm9ybURhdGEuY29uZmlybVBhc3N3b3JkKSB7XHJcbiAgICAgICAgc2V0RXJyb3IoXCJQYXNzd29yZHMgZG8gbm90IG1hdGNoXCIpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGZvcm1EYXRhLnBhc3N3b3JkLmxlbmd0aCA8IDYpIHtcclxuICAgICAgICBzZXRFcnJvcihcIlBhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXJzXCIpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRFcnJvcihcIlwiKTtcclxuICAgIHNldFN1Y2Nlc3MoXCJcIik7XHJcblxyXG4gICAgaWYgKCF2YWxpZGF0ZUZvcm0oKSkgcmV0dXJuO1xyXG5cclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKGlzTG9naW4pIHtcclxuICAgICAgICAvLyBMb2dpbiBsb2dpY1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBhd2FpdCBsb2dpbihmb3JtRGF0YS5lbWFpbCwgZm9ybURhdGEucGFzc3dvcmQpO1xyXG4gICAgICAgICAgc2V0U3VjY2VzcyhcIkxvZ2luIHN1Y2Nlc3NmdWwhXCIpO1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIG9uQ2xvc2UoKTtcclxuICAgICAgICAgIH0sIDE1MDApO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgc2V0RXJyb3IoZXJyLm1lc3NhZ2UgfHwgXCJBbiBlcnJvciBvY2N1cnJlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gU2lnbnVwIGxvZ2ljXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvYXV0aFwiLCB7XHJcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIGFjdGlvbjogXCJyZWdpc3RlclwiLFxyXG4gICAgICAgICAgICBlbWFpbDogZm9ybURhdGEuZW1haWwsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBmb3JtRGF0YS5wYXNzd29yZCwgLy8gSW4gYSByZWFsIGFwcCwgcGFzc3dvcmQgd291bGQgYmUgaGFzaGVkIG9uIHRoZSBzZXJ2ZXJcclxuICAgICAgICAgICAgcm9sZTogZm9ybURhdGEucm9sZSxcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICBjb25zdCBlcnJvckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JEYXRhLmVycm9yIHx8IFwiRmFpbGVkIHRvIGNyZWF0ZSBhY2NvdW50XCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBzZXRTdWNjZXNzKFwiQWNjb3VudCBjcmVhdGVkIHN1Y2Nlc3NmdWxseSEgWW91IGNhbiBub3cgbG9naW4uXCIpO1xyXG4gICAgICAgIHNldElzTG9naW4odHJ1ZSk7XHJcbiAgICAgICAgc2V0Rm9ybURhdGEoe1xyXG4gICAgICAgICAgLi4uZm9ybURhdGEsXHJcbiAgICAgICAgICBwYXNzd29yZDogXCJcIixcclxuICAgICAgICAgIGNvbmZpcm1QYXNzd29yZDogXCJcIixcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHNldEVycm9yKGVyci5tZXNzYWdlIHx8IFwiQW4gZXJyb3Igb2NjdXJyZWRcIik7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPERpYWxvZyBvcGVuPXtvcGVufSBvbkNsb3NlPXtvbkNsb3NlfSBtYXhXaWR0aD1cInNtXCIgZnVsbFdpZHRoPlxyXG4gICAgICA8RGlhbG9nVGl0bGU+XHJcbiAgICAgICAge2lzTG9naW4gPyBcIkxvZ2luIHRvIFlvdXIgQWNjb3VudFwiIDogXCJDcmVhdGUgYSBOZXcgQWNjb3VudFwifVxyXG4gICAgICA8L0RpYWxvZ1RpdGxlPlxyXG5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgPERpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgICB7ZXJyb3IgJiYgKFxyXG4gICAgICAgICAgICA8QWxlcnQgc2V2ZXJpdHk9XCJlcnJvclwiIHN4PXt7IG1iOiAyIH19PlxyXG4gICAgICAgICAgICAgIHtlcnJvcn1cclxuICAgICAgICAgICAgPC9BbGVydD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7c3VjY2VzcyAmJiAoXHJcbiAgICAgICAgICAgIDxBbGVydCBzZXZlcml0eT1cInN1Y2Nlc3NcIiBzeD17eyBtYjogMiB9fT5cclxuICAgICAgICAgICAgICB7c3VjY2Vzc31cclxuICAgICAgICAgICAgPC9BbGVydD5cclxuICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgeyFpc0xvZ2luICYmIChcclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgIG1hcmdpbj1cImRlbnNlXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIk5hbWVcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLm5hbWV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICBzeD17eyBtYjogMiB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIG1hcmdpbj1cImRlbnNlXCJcclxuICAgICAgICAgICAgbGFiZWw9XCJFbWFpbCBBZGRyZXNzXCJcclxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5lbWFpbH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICBzeD17eyBtYjogMiB9fVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIG1hcmdpbj1cImRlbnNlXCJcclxuICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEucGFzc3dvcmR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgc3g9e3sgbWI6IDIgfX1cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgeyFpc0xvZ2luICYmIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJkZW5zZVwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkNvbmZpcm0gUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImNvbmZpcm1QYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuY29uZmlybVBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICBzeD17eyBtYjogMiB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBmdWxsV2lkdGggc3g9e3sgbWI6IDIgfX0+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cInJvbGUtc2VsZWN0LWxhYmVsXCI+Um9sZTwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgbGFiZWxJZD1cInJvbGUtc2VsZWN0LWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJyb2xlLXNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJyb2xlXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLnJvbGV9XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUm9sZVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiQkFSSVNUQVwiPkJhcmlzdGE8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJNQU5BR0VSXCI+TWFuYWdlcjwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIkFETUlOXCI+QWRtaW48L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgIDxCb3ggc3g9e3sgbXQ6IDIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCI+XHJcbiAgICAgICAgICAgICAge2lzTG9naW4gPyBcIkRvbid0IGhhdmUgYW4gYWNjb3VudD9cIiA6IFwiQWxyZWFkeSBoYXZlIGFuIGFjY291bnQ/XCJ9XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVNb2RlfSBjb2xvcj1cInByaW1hcnlcIiBzeD17eyBtbDogMSB9fT5cclxuICAgICAgICAgICAgICAgIHtpc0xvZ2luID8gXCJTaWduIFVwXCIgOiBcIkxvZ2luXCJ9XHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvRGlhbG9nQ29udGVudD5cclxuXHJcbiAgICAgICAgPERpYWxvZ0FjdGlvbnMgc3g9e3sgcHg6IDMsIHBiOiAzIH19PlxyXG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkNsb3NlfSBjb2xvcj1cInByaW1hcnlcIiBkaXNhYmxlZD17bG9hZGluZ30+XHJcbiAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XHJcbiAgICAgICAgICAgIHN0YXJ0SWNvbj17bG9hZGluZyA/IDxDaXJjdWxhclByb2dyZXNzIHNpemU9ezIwfSAvPiA6IG51bGx9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtpc0xvZ2luID8gXCJMb2dpblwiIDogXCJTaWduIFVwXCJ9XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvRGlhbG9nPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiRGlhbG9nIiwiRGlhbG9nVGl0bGUiLCJEaWFsb2dDb250ZW50IiwiRGlhbG9nQWN0aW9ucyIsIkJ1dHRvbiIsIlRleHRGaWVsZCIsIlR5cG9ncmFwaHkiLCJCb3giLCJDaXJjdWxhclByb2dyZXNzIiwiQWxlcnQiLCJGb3JtQ29udHJvbCIsIklucHV0TGFiZWwiLCJTZWxlY3QiLCJNZW51SXRlbSIsInVzZVJvdXRlciIsInVzZUF1dGgiLCJMb2dpblBvcHVwIiwib3BlbiIsIm9uQ2xvc2UiLCJyb3V0ZXIiLCJsb2dpbiIsImlzTG9naW4iLCJzZXRJc0xvZ2luIiwibG9hZGluZyIsInNldExvYWRpbmciLCJlcnJvciIsInNldEVycm9yIiwic3VjY2VzcyIsInNldFN1Y2Nlc3MiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJjb25maXJtUGFzc3dvcmQiLCJyb2xlIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJ0b2dnbGVNb2RlIiwidmFsaWRhdGVGb3JtIiwibGVuZ3RoIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJzZXRUaW1lb3V0IiwiZXJyIiwibWVzc2FnZSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJhY3Rpb24iLCJvayIsImVycm9yRGF0YSIsImpzb24iLCJFcnJvciIsImRhdGEiLCJtYXhXaWR0aCIsImZ1bGxXaWR0aCIsImZvcm0iLCJvblN1Ym1pdCIsInNldmVyaXR5Iiwic3giLCJtYiIsIm1hcmdpbiIsImxhYmVsIiwidHlwZSIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJ2YXJpYW50IiwiaWQiLCJsYWJlbElkIiwibXQiLCJ0ZXh0QWxpZ24iLCJvbkNsaWNrIiwiY29sb3IiLCJtbCIsInB4IiwicGIiLCJkaXNhYmxlZCIsInN0YXJ0SWNvbiIsInNpemUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/LoginPopup.js\n");

/***/ }),

/***/ "./lib/auth.js":
/*!*********************!*\
  !*** ./lib/auth.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider),\n/* harmony export */   useAuth: () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction AuthProvider({ children }) {\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"AuthProvider.useEffect\": ()=>{\n            // Check if user data exists in local storage\n            const storedUser = localStorage.getItem(\"user\");\n            if (storedUser) {\n                setUser(JSON.parse(storedUser));\n            }\n            // Redirect to login page if not authenticated and trying to access a protected route\n            if (!user && router.pathname !== \"/\" && !router.pathname.startsWith(\"/api\")) {\n                router.push(\"/\");\n            }\n        }\n    }[\"AuthProvider.useEffect\"], [\n        router\n    ]);\n    const login = async (email, password)=>{\n        try {\n            const response = await fetch(\"/api/auth\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    email,\n                    password\n                })\n            });\n            const data = await response.json();\n            if (response.ok) {\n                setUser(data.user);\n                localStorage.setItem(\"user\", JSON.stringify(data.user));\n            } else {\n                throw new Error(data.error || \"Login failed\");\n            }\n        } catch (error) {\n            console.error(\"Login error:\", error);\n            throw error;\n        }\n    };\n    const logout = ()=>{\n        setUser(null);\n        localStorage.removeItem(\"user\");\n        router.push(\"/\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user,\n            login,\n            logout\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"E:\\\\my-threejs-project\\\\lib\\\\auth.js\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, this);\n}\nconst useAuth = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYXV0aC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBdUU7QUFDL0I7QUFFeEMsTUFBTUssNEJBQWNMLG9EQUFhQSxDQUFDLENBQUM7QUFFNUIsU0FBU00sYUFBYSxFQUFFQyxRQUFRLEVBQUU7SUFDdkMsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU1RLFNBQVNOLHNEQUFTQTtJQUV4QkQsZ0RBQVNBO2tDQUFDO1lBQ1IsNkNBQTZDO1lBQzdDLE1BQU1RLGFBQWFDLGFBQWFDLE9BQU8sQ0FBQztZQUN4QyxJQUFJRixZQUFZO2dCQUNkRixRQUFRSyxLQUFLQyxLQUFLLENBQUNKO1lBQ3JCO1lBRUEscUZBQXFGO1lBQ3JGLElBQ0UsQ0FBQ0gsUUFDREUsT0FBT00sUUFBUSxLQUFLLE9BQ3BCLENBQUNOLE9BQU9NLFFBQVEsQ0FBQ0MsVUFBVSxDQUFDLFNBQzVCO2dCQUNBUCxPQUFPUSxJQUFJLENBQUM7WUFDZDtRQUNGO2lDQUFHO1FBQUNSO0tBQU87SUFFWCxNQUFNUyxRQUFRLE9BQU9DLE9BQU9DO1FBQzFCLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQU0sYUFBYTtnQkFDeENDLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ1AsZ0JBQWdCO2dCQUNsQjtnQkFDQUMsTUFBTVosS0FBS2EsU0FBUyxDQUFDO29CQUFFUDtvQkFBT0M7Z0JBQVM7WUFDekM7WUFFQSxNQUFNTyxPQUFPLE1BQU1OLFNBQVNPLElBQUk7WUFFaEMsSUFBSVAsU0FBU1EsRUFBRSxFQUFFO2dCQUNmckIsUUFBUW1CLEtBQUtwQixJQUFJO2dCQUNqQkksYUFBYW1CLE9BQU8sQ0FBQyxRQUFRakIsS0FBS2EsU0FBUyxDQUFDQyxLQUFLcEIsSUFBSTtZQUN2RCxPQUFPO2dCQUNMLE1BQU0sSUFBSXdCLE1BQU1KLEtBQUtLLEtBQUssSUFBSTtZQUNoQztRQUNGLEVBQUUsT0FBT0EsT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsZ0JBQWdCQTtZQUM5QixNQUFNQTtRQUNSO0lBQ0Y7SUFFQSxNQUFNRSxTQUFTO1FBQ2IxQixRQUFRO1FBQ1JHLGFBQWF3QixVQUFVLENBQUM7UUFDeEIxQixPQUFPUSxJQUFJLENBQUM7SUFDZDtJQUVBLHFCQUNFLDhEQUFDYixZQUFZZ0MsUUFBUTtRQUFDQyxPQUFPO1lBQUU5QjtZQUFNVztZQUFPZ0I7UUFBTztrQkFDaEQ1Qjs7Ozs7O0FBR1A7QUFFTyxNQUFNZ0MsVUFBVSxJQUFNdEMsaURBQVVBLENBQUNJLGFBQWEiLCJzb3VyY2VzIjpbIkU6XFxteS10aHJlZWpzLXByb2plY3RcXGxpYlxcYXV0aC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBBdXRoUHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBDaGVjayBpZiB1c2VyIGRhdGEgZXhpc3RzIGluIGxvY2FsIHN0b3JhZ2VcclxuICAgIGNvbnN0IHN0b3JlZFVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIik7XHJcbiAgICBpZiAoc3RvcmVkVXNlcikge1xyXG4gICAgICBzZXRVc2VyKEpTT04ucGFyc2Uoc3RvcmVkVXNlcikpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlZGlyZWN0IHRvIGxvZ2luIHBhZ2UgaWYgbm90IGF1dGhlbnRpY2F0ZWQgYW5kIHRyeWluZyB0byBhY2Nlc3MgYSBwcm90ZWN0ZWQgcm91dGVcclxuICAgIGlmIChcclxuICAgICAgIXVzZXIgJiZcclxuICAgICAgcm91dGVyLnBhdGhuYW1lICE9PSBcIi9cIiAmJlxyXG4gICAgICAhcm91dGVyLnBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvYXBpXCIpXHJcbiAgICApIHtcclxuICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgfVxyXG4gIH0sIFtyb3V0ZXJdKTtcclxuXHJcbiAgY29uc3QgbG9naW4gPSBhc3luYyAoZW1haWwsIHBhc3N3b3JkKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9hdXRoXCIsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBlbWFpbCwgcGFzc3dvcmQgfSksXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgIHNldFVzZXIoZGF0YS51c2VyKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJcIiwgSlNPTi5zdHJpbmdpZnkoZGF0YS51c2VyKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGRhdGEuZXJyb3IgfHwgXCJMb2dpbiBmYWlsZWRcIik7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJMb2dpbiBlcnJvcjpcIiwgZXJyb3IpO1xyXG4gICAgICB0aHJvdyBlcnJvcjtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBzZXRVc2VyKG51bGwpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VyXCIpO1xyXG4gICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdXNlciwgbG9naW4sIGxvZ291dCB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlQXV0aCA9ICgpID0+IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIkF1dGhDb250ZXh0IiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyIiwic2V0VXNlciIsInJvdXRlciIsInN0b3JlZFVzZXIiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwicGF0aG5hbWUiLCJzdGFydHNXaXRoIiwicHVzaCIsImxvZ2luIiwiZW1haWwiLCJwYXNzd29yZCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsInN0cmluZ2lmeSIsImRhdGEiLCJqc29uIiwib2siLCJzZXRJdGVtIiwiRXJyb3IiLCJlcnJvciIsImNvbnNvbGUiLCJsb2dvdXQiLCJyZW1vdmVJdGVtIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZUF1dGgiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/auth.js\n");

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F_error&preferredRegion=&absolutePagePath=.%2Fnode_modules%5Cnext%5Cdist%5Cpages%5C_error.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F_error&preferredRegion=&absolutePagePath=.%2Fnode_modules%5Cnext%5Cdist%5Cpages%5C_error.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),\n/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),\n/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps),\n/* harmony export */   reportWebVitals: () => (/* binding */ reportWebVitals),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   unstable_getServerProps: () => (/* binding */ unstable_getServerProps),\n/* harmony export */   unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),\n/* harmony export */   unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),\n/* harmony export */   unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),\n/* harmony export */   unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/pages/module.compiled */ \"./node_modules/next/dist/server/route-modules/pages/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! private-next-pages/_document */ \"./node_modules/next/dist/pages/_document.js\");\n/* harmony import */ var private_next_pages_document__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! private-next-pages/_app */ \"./pages/_app.js\");\n/* harmony import */ var _node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules\\next\\dist\\pages\\_error.js */ \"./node_modules/next/dist/pages/_error.js\");\n/* harmony import */ var _node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__]);\nprivate_next_pages_app__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n// Import the app and document modules.\n\n\n// Import the userland code.\n\n// Re-export the component (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5__, 'default'));\n// Re-export methods.\nconst getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');\nconst getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');\nconst getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5__, 'config');\nconst reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');\n// Re-export legacy methods.\nconst unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');\nconst unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');\nconst unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');\nconst unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');\nconst unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,\n        page: \"/_error\",\n        pathname: \"/_error\",\n        // The following aren't used in production.\n        bundlePath: '',\n        filename: ''\n    },\n    components: {\n        // default export might not exist when optimized for data only\n        App: private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        Document: (private_next_pages_document__WEBPACK_IMPORTED_MODULE_3___default())\n    },\n    userland: _node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5__\n});\n\n//# sourceMappingURL=pages.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTJnBhZ2U9JTJGX2Vycm9yJnByZWZlcnJlZFJlZ2lvbj0mYWJzb2x1dGVQYWdlUGF0aD0uJTJGbm9kZV9tb2R1bGVzJTVDbmV4dCU1Q2Rpc3QlNUNwYWdlcyU1Q19lcnJvci5qcyZhYnNvbHV0ZUFwcFBhdGg9cHJpdmF0ZS1uZXh0LXBhZ2VzJTJGX2FwcCZhYnNvbHV0ZURvY3VtZW50UGF0aD1wcml2YXRlLW5leHQtcGFnZXMlMkZfZG9jdW1lbnQmbWlkZGxld2FyZUNvbmZpZ0Jhc2U2ND1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3RjtBQUNoQztBQUNFO0FBQzFEO0FBQ3lEO0FBQ1Y7QUFDL0M7QUFDeUU7QUFDekU7QUFDQSxpRUFBZSx3RUFBSyxDQUFDLG1FQUFRLFlBQVksRUFBQztBQUMxQztBQUNPLHVCQUF1Qix3RUFBSyxDQUFDLG1FQUFRO0FBQ3JDLHVCQUF1Qix3RUFBSyxDQUFDLG1FQUFRO0FBQ3JDLDJCQUEyQix3RUFBSyxDQUFDLG1FQUFRO0FBQ3pDLGVBQWUsd0VBQUssQ0FBQyxtRUFBUTtBQUM3Qix3QkFBd0Isd0VBQUssQ0FBQyxtRUFBUTtBQUM3QztBQUNPLGdDQUFnQyx3RUFBSyxDQUFDLG1FQUFRO0FBQzlDLGdDQUFnQyx3RUFBSyxDQUFDLG1FQUFRO0FBQzlDLGlDQUFpQyx3RUFBSyxDQUFDLG1FQUFRO0FBQy9DLGdDQUFnQyx3RUFBSyxDQUFDLG1FQUFRO0FBQzlDLG9DQUFvQyx3RUFBSyxDQUFDLG1FQUFRO0FBQ3pEO0FBQ08sd0JBQXdCLGtHQUFnQjtBQUMvQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsYUFBYSw4REFBVztBQUN4QixrQkFBa0Isb0VBQWdCO0FBQ2xDLEtBQUs7QUFDTCxZQUFZO0FBQ1osQ0FBQzs7QUFFRCxpQyIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2VzUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL3BhZ2VzL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgaG9pc3QgfSBmcm9tIFwibmV4dC9kaXN0L2J1aWxkL3RlbXBsYXRlcy9oZWxwZXJzXCI7XG4vLyBJbXBvcnQgdGhlIGFwcCBhbmQgZG9jdW1lbnQgbW9kdWxlcy5cbmltcG9ydCAqIGFzIGRvY3VtZW50IGZyb20gXCJwcml2YXRlLW5leHQtcGFnZXMvX2RvY3VtZW50XCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInByaXZhdGUtbmV4dC1wYWdlcy9fYXBwXCI7XG4vLyBJbXBvcnQgdGhlIHVzZXJsYW5kIGNvZGUuXG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiLi9ub2RlX21vZHVsZXNcXFxcbmV4dFxcXFxkaXN0XFxcXHBhZ2VzXFxcXF9lcnJvci5qc1wiO1xuLy8gUmUtZXhwb3J0IHRoZSBjb21wb25lbnQgKHNob3VsZCBiZSB0aGUgZGVmYXVsdCBleHBvcnQpLlxuZXhwb3J0IGRlZmF1bHQgaG9pc3QodXNlcmxhbmQsICdkZWZhdWx0Jyk7XG4vLyBSZS1leHBvcnQgbWV0aG9kcy5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGhvaXN0KHVzZXJsYW5kLCAnZ2V0U3RhdGljUHJvcHMnKTtcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGhvaXN0KHVzZXJsYW5kLCAnZ2V0U3RhdGljUGF0aHMnKTtcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBob2lzdCh1c2VybGFuZCwgJ2dldFNlcnZlclNpZGVQcm9wcycpO1xuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IGhvaXN0KHVzZXJsYW5kLCAnY29uZmlnJyk7XG5leHBvcnQgY29uc3QgcmVwb3J0V2ViVml0YWxzID0gaG9pc3QodXNlcmxhbmQsICdyZXBvcnRXZWJWaXRhbHMnKTtcbi8vIFJlLWV4cG9ydCBsZWdhY3kgbWV0aG9kcy5cbmV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTdGF0aWNQcm9wcyA9IGhvaXN0KHVzZXJsYW5kLCAndW5zdGFibGVfZ2V0U3RhdGljUHJvcHMnKTtcbmV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTdGF0aWNQYXRocyA9IGhvaXN0KHVzZXJsYW5kLCAndW5zdGFibGVfZ2V0U3RhdGljUGF0aHMnKTtcbmV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTdGF0aWNQYXJhbXMgPSBob2lzdCh1c2VybGFuZCwgJ3Vuc3RhYmxlX2dldFN0YXRpY1BhcmFtcycpO1xuZXhwb3J0IGNvbnN0IHVuc3RhYmxlX2dldFNlcnZlclByb3BzID0gaG9pc3QodXNlcmxhbmQsICd1bnN0YWJsZV9nZXRTZXJ2ZXJQcm9wcycpO1xuZXhwb3J0IGNvbnN0IHVuc3RhYmxlX2dldFNlcnZlclNpZGVQcm9wcyA9IGhvaXN0KHVzZXJsYW5kLCAndW5zdGFibGVfZ2V0U2VydmVyU2lkZVByb3BzJyk7XG4vLyBDcmVhdGUgYW5kIGV4cG9ydCB0aGUgcm91dGUgbW9kdWxlIHRoYXQgd2lsbCBiZSBjb25zdW1lZC5cbmV4cG9ydCBjb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBQYWdlc1JvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5QQUdFUyxcbiAgICAgICAgcGFnZTogXCIvX2Vycm9yXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9fZXJyb3JcIixcbiAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBhcmVuJ3QgdXNlZCBpbiBwcm9kdWN0aW9uLlxuICAgICAgICBidW5kbGVQYXRoOiAnJyxcbiAgICAgICAgZmlsZW5hbWU6ICcnXG4gICAgfSxcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIC8vIGRlZmF1bHQgZXhwb3J0IG1pZ2h0IG5vdCBleGlzdCB3aGVuIG9wdGltaXplZCBmb3IgZGF0YSBvbmx5XG4gICAgICAgIEFwcDogYXBwLmRlZmF1bHQsXG4gICAgICAgIERvY3VtZW50OiBkb2N1bWVudC5kZWZhdWx0XG4gICAgfSxcbiAgICB1c2VybGFuZFxufSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhZ2VzLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F_error&preferredRegion=&absolutePagePath=.%2Fnode_modules%5Cnext%5Cdist%5Cpages%5C_error.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/esm/styles/index.js\");\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/CssBaseline */ \"./node_modules/@mui/material/esm/CssBaseline/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/auth */ \"./lib/auth.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Layout__WEBPACK_IMPORTED_MODULE_1__, _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__, _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4__]);\n([_components_Layout__WEBPACK_IMPORTED_MODULE_1__, _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__, _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// pages/_app.js\n\n\n\n\n\nconst theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.createTheme)({\n    palette: {\n        mode: \"light\",\n        primary: {\n            main: \"#6c4f3d\"\n        },\n        secondary: {\n            main: \"#ff9800\"\n        }\n    },\n    typography: {\n        fontFamily: `'Roboto', sans-serif`\n    }\n});\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_auth__WEBPACK_IMPORTED_MODULE_2__.AuthProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {\n            theme: theme,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"E:\\\\my-threejs-project\\\\pages\\\\_app.js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"E:\\\\my-threejs-project\\\\pages\\\\_app.js\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\my-threejs-project\\\\pages\\\\_app.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\my-threejs-project\\\\pages\\\\_app.js\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\my-threejs-project\\\\pages\\\\_app.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n} // This is the custom App component for Next.js, which wraps all pages with a theme and layout.\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxnQkFBZ0I7O0FBQ2tEO0FBQ2Q7QUFDVjtBQUVDO0FBRTNDLE1BQU1LLFFBQVFKLGlFQUFXQSxDQUFDO0lBQ3hCSyxTQUFTO1FBQ1BDLE1BQU07UUFDTkMsU0FBUztZQUNQQyxNQUFNO1FBQ1I7UUFDQUMsV0FBVztZQUNURCxNQUFNO1FBQ1I7SUFDRjtJQUNBRSxZQUFZO1FBQ1ZDLFlBQVksQ0FBQyxvQkFBb0IsQ0FBQztJQUNwQztBQUNGO0FBRWUsU0FBU0MsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNwRCxxQkFDRSw4REFBQ1gsbURBQVlBO2tCQUNYLDRFQUFDSiwrREFBYUE7WUFBQ0ssT0FBT0E7OzhCQUNwQiw4REFBQ0gsaUVBQVdBOzs7Ozs4QkFDWiw4REFBQ0MsMERBQU1BOzhCQUNMLDRFQUFDVzt3QkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2xDLEVBQ0EsK0ZBQStGIiwic291cmNlcyI6WyJFOlxcbXktdGhyZWVqcy1wcm9qZWN0XFxwYWdlc1xcX2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy9fYXBwLmpzXHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIsIGNyZWF0ZVRoZW1lIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvc3R5bGVzXCI7XHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tIFwiQG11aS9tYXRlcmlhbC9Dc3NCYXNlbGluZVwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5cclxuaW1wb3J0IHsgQXV0aFByb3ZpZGVyIH0gZnJvbSBcIi4uL2xpYi9hdXRoXCI7XHJcblxyXG5jb25zdCB0aGVtZSA9IGNyZWF0ZVRoZW1lKHtcclxuICBwYWxldHRlOiB7XHJcbiAgICBtb2RlOiBcImxpZ2h0XCIsXHJcbiAgICBwcmltYXJ5OiB7XHJcbiAgICAgIG1haW46IFwiIzZjNGYzZFwiLCAvLyBjb2ZmZWUtYnJvd25cclxuICAgIH0sXHJcbiAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgbWFpbjogXCIjZmY5ODAwXCIsIC8vIGFtYmVyXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgdHlwb2dyYXBoeToge1xyXG4gICAgZm9udEZhbWlseTogYCdSb2JvdG8nLCBzYW5zLXNlcmlmYCxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8QXV0aFByb3ZpZGVyPlxyXG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICAgIDwvQXV0aFByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuLy8gVGhpcyBpcyB0aGUgY3VzdG9tIEFwcCBjb21wb25lbnQgZm9yIE5leHQuanMsIHdoaWNoIHdyYXBzIGFsbCBwYWdlcyB3aXRoIGEgdGhlbWUgYW5kIGxheW91dC5cclxuIl0sIm5hbWVzIjpbIlRoZW1lUHJvdmlkZXIiLCJjcmVhdGVUaGVtZSIsIkNzc0Jhc2VsaW5lIiwiTGF5b3V0IiwiQXV0aFByb3ZpZGVyIiwidGhlbWUiLCJwYWxldHRlIiwibW9kZSIsInByaW1hcnkiLCJtYWluIiwic2Vjb25kYXJ5IiwidHlwb2dyYXBoeSIsImZvbnRGYW1pbHkiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "@mui/system":
/*!******************************!*\
  !*** external "@mui/system" ***!
  \******************************/
/***/ ((module) => {

module.exports = import("@mui/system");;

/***/ }),

/***/ "@mui/system/DefaultPropsProvider":
/*!***************************************************!*\
  !*** external "@mui/system/DefaultPropsProvider" ***!
  \***************************************************/
/***/ ((module) => {

module.exports = import("@mui/system/DefaultPropsProvider");;

/***/ }),

/***/ "@mui/system/InitColorSchemeScript":
/*!****************************************************!*\
  !*** external "@mui/system/InitColorSchemeScript" ***!
  \****************************************************/
/***/ ((module) => {

module.exports = import("@mui/system/InitColorSchemeScript");;

/***/ }),

/***/ "@mui/system/RtlProvider":
/*!******************************************!*\
  !*** external "@mui/system/RtlProvider" ***!
  \******************************************/
/***/ ((module) => {

module.exports = import("@mui/system/RtlProvider");;

/***/ }),

/***/ "@mui/system/colorManipulator":
/*!***********************************************!*\
  !*** external "@mui/system/colorManipulator" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = import("@mui/system/colorManipulator");;

/***/ }),

/***/ "@mui/system/createBreakpoints":
/*!************************************************!*\
  !*** external "@mui/system/createBreakpoints" ***!
  \************************************************/
/***/ ((module) => {

module.exports = import("@mui/system/createBreakpoints");;

/***/ }),

/***/ "@mui/system/createStyled":
/*!*******************************************!*\
  !*** external "@mui/system/createStyled" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = import("@mui/system/createStyled");;

/***/ }),

/***/ "@mui/system/createTheme":
/*!******************************************!*\
  !*** external "@mui/system/createTheme" ***!
  \******************************************/
/***/ ((module) => {

module.exports = import("@mui/system/createTheme");;

/***/ }),

/***/ "@mui/system/cssVars":
/*!**************************************!*\
  !*** external "@mui/system/cssVars" ***!
  \**************************************/
/***/ ((module) => {

module.exports = import("@mui/system/cssVars");;

/***/ }),

/***/ "@mui/system/spacing":
/*!**************************************!*\
  !*** external "@mui/system/spacing" ***!
  \**************************************/
/***/ ((module) => {

module.exports = import("@mui/system/spacing");;

/***/ }),

/***/ "@mui/system/styleFunctionSx":
/*!**********************************************!*\
  !*** external "@mui/system/styleFunctionSx" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = import("@mui/system/styleFunctionSx");;

/***/ }),

/***/ "@mui/system/useThemeProps":
/*!********************************************!*\
  !*** external "@mui/system/useThemeProps" ***!
  \********************************************/
/***/ ((module) => {

module.exports = import("@mui/system/useThemeProps");;

/***/ }),

/***/ "@mui/utils/ClassNameGenerator":
/*!************************************************!*\
  !*** external "@mui/utils/ClassNameGenerator" ***!
  \************************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/ClassNameGenerator");;

/***/ }),

/***/ "@mui/utils/HTMLElementType":
/*!*********************************************!*\
  !*** external "@mui/utils/HTMLElementType" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/HTMLElementType");;

/***/ }),

/***/ "@mui/utils/appendOwnerState":
/*!**********************************************!*\
  !*** external "@mui/utils/appendOwnerState" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/appendOwnerState");;

/***/ }),

/***/ "@mui/utils/capitalize":
/*!****************************************!*\
  !*** external "@mui/utils/capitalize" ***!
  \****************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/capitalize");;

/***/ }),

/***/ "@mui/utils/chainPropTypes":
/*!********************************************!*\
  !*** external "@mui/utils/chainPropTypes" ***!
  \********************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/chainPropTypes");;

/***/ }),

/***/ "@mui/utils/composeClasses":
/*!********************************************!*\
  !*** external "@mui/utils/composeClasses" ***!
  \********************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/composeClasses");;

/***/ }),

/***/ "@mui/utils/createChainedFunction":
/*!***************************************************!*\
  !*** external "@mui/utils/createChainedFunction" ***!
  \***************************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/createChainedFunction");;

/***/ }),

/***/ "@mui/utils/debounce":
/*!**************************************!*\
  !*** external "@mui/utils/debounce" ***!
  \**************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/debounce");;

/***/ }),

/***/ "@mui/utils/deepmerge":
/*!***************************************!*\
  !*** external "@mui/utils/deepmerge" ***!
  \***************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/deepmerge");;

/***/ }),

/***/ "@mui/utils/deprecatedPropType":
/*!************************************************!*\
  !*** external "@mui/utils/deprecatedPropType" ***!
  \************************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/deprecatedPropType");;

/***/ }),

/***/ "@mui/utils/elementAcceptingRef":
/*!*************************************************!*\
  !*** external "@mui/utils/elementAcceptingRef" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/elementAcceptingRef");;

/***/ }),

/***/ "@mui/utils/elementTypeAcceptingRef":
/*!*****************************************************!*\
  !*** external "@mui/utils/elementTypeAcceptingRef" ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/elementTypeAcceptingRef");;

/***/ }),

/***/ "@mui/utils/exactProp":
/*!***************************************!*\
  !*** external "@mui/utils/exactProp" ***!
  \***************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/exactProp");;

/***/ }),

/***/ "@mui/utils/extractEventHandlers":
/*!**************************************************!*\
  !*** external "@mui/utils/extractEventHandlers" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/extractEventHandlers");;

/***/ }),

/***/ "@mui/utils/formatMuiErrorMessage":
/*!***************************************************!*\
  !*** external "@mui/utils/formatMuiErrorMessage" ***!
  \***************************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/formatMuiErrorMessage");;

/***/ }),

/***/ "@mui/utils/generateUtilityClass":
/*!**************************************************!*\
  !*** external "@mui/utils/generateUtilityClass" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/generateUtilityClass");;

/***/ }),

/***/ "@mui/utils/generateUtilityClasses":
/*!****************************************************!*\
  !*** external "@mui/utils/generateUtilityClasses" ***!
  \****************************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/generateUtilityClasses");;

/***/ }),

/***/ "@mui/utils/getReactElementRef":
/*!************************************************!*\
  !*** external "@mui/utils/getReactElementRef" ***!
  \************************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/getReactElementRef");;

/***/ }),

/***/ "@mui/utils/getScrollbarSize":
/*!**********************************************!*\
  !*** external "@mui/utils/getScrollbarSize" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/getScrollbarSize");;

/***/ }),

/***/ "@mui/utils/integerPropType":
/*!*********************************************!*\
  !*** external "@mui/utils/integerPropType" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/integerPropType");;

/***/ }),

/***/ "@mui/utils/isFocusVisible":
/*!********************************************!*\
  !*** external "@mui/utils/isFocusVisible" ***!
  \********************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/isFocusVisible");;

/***/ }),

/***/ "@mui/utils/isMuiElement":
/*!******************************************!*\
  !*** external "@mui/utils/isMuiElement" ***!
  \******************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/isMuiElement");;

/***/ }),

/***/ "@mui/utils/mergeSlotProps":
/*!********************************************!*\
  !*** external "@mui/utils/mergeSlotProps" ***!
  \********************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/mergeSlotProps");;

/***/ }),

/***/ "@mui/utils/ownerDocument":
/*!*******************************************!*\
  !*** external "@mui/utils/ownerDocument" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/ownerDocument");;

/***/ }),

/***/ "@mui/utils/ownerWindow":
/*!*****************************************!*\
  !*** external "@mui/utils/ownerWindow" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/ownerWindow");;

/***/ }),

/***/ "@mui/utils/refType":
/*!*************************************!*\
  !*** external "@mui/utils/refType" ***!
  \*************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/refType");;

/***/ }),

/***/ "@mui/utils/requirePropFactory":
/*!************************************************!*\
  !*** external "@mui/utils/requirePropFactory" ***!
  \************************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/requirePropFactory");;

/***/ }),

/***/ "@mui/utils/resolveComponentProps":
/*!***************************************************!*\
  !*** external "@mui/utils/resolveComponentProps" ***!
  \***************************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/resolveComponentProps");;

/***/ }),

/***/ "@mui/utils/resolveProps":
/*!******************************************!*\
  !*** external "@mui/utils/resolveProps" ***!
  \******************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/resolveProps");;

/***/ }),

/***/ "@mui/utils/setRef":
/*!************************************!*\
  !*** external "@mui/utils/setRef" ***!
  \************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/setRef");;

/***/ }),

/***/ "@mui/utils/unsupportedProp":
/*!*********************************************!*\
  !*** external "@mui/utils/unsupportedProp" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/unsupportedProp");;

/***/ }),

/***/ "@mui/utils/useControlled":
/*!*******************************************!*\
  !*** external "@mui/utils/useControlled" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/useControlled");;

/***/ }),

/***/ "@mui/utils/useEnhancedEffect":
/*!***********************************************!*\
  !*** external "@mui/utils/useEnhancedEffect" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/useEnhancedEffect");;

/***/ }),

/***/ "@mui/utils/useEventCallback":
/*!**********************************************!*\
  !*** external "@mui/utils/useEventCallback" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/useEventCallback");;

/***/ }),

/***/ "@mui/utils/useForkRef":
/*!****************************************!*\
  !*** external "@mui/utils/useForkRef" ***!
  \****************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/useForkRef");;

/***/ }),

/***/ "@mui/utils/useId":
/*!***********************************!*\
  !*** external "@mui/utils/useId" ***!
  \***********************************/
/***/ ((module) => {

module.exports = import("@mui/utils/useId");;

/***/ }),

/***/ "@mui/utils/useLazyRef":
/*!****************************************!*\
  !*** external "@mui/utils/useLazyRef" ***!
  \****************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/useLazyRef");;

/***/ }),

/***/ "@mui/utils/useSlotProps":
/*!******************************************!*\
  !*** external "@mui/utils/useSlotProps" ***!
  \******************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/useSlotProps");;

/***/ }),

/***/ "@mui/utils/useTimeout":
/*!****************************************!*\
  !*** external "@mui/utils/useTimeout" ***!
  \****************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/useTimeout");;

/***/ }),

/***/ "__barrel_optimize__?names=Alert,Box,Button,CircularProgress,Dialog,DialogActions,DialogContent,DialogTitle,FormControl,InputLabel,MenuItem,Select,TextField,Typography!=!./node_modules/@mui/material/esm/index.js":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** __barrel_optimize__?names=Alert,Box,Button,CircularProgress,Dialog,DialogActions,DialogContent,DialogTitle,FormControl,InputLabel,MenuItem,Select,TextField,Typography!=!./node_modules/@mui/material/esm/index.js ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Alert: () => (/* reexport safe */ _Alert_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   Box: () => (/* reexport safe */ _Box_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   Button: () => (/* reexport safe */ _Button_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   CircularProgress: () => (/* reexport safe */ _CircularProgress_index_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n/* harmony export */   Dialog: () => (/* reexport safe */ _Dialog_index_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n/* harmony export */   DialogActions: () => (/* reexport safe */ _DialogActions_index_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),\n/* harmony export */   DialogContent: () => (/* reexport safe */ _DialogContent_index_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]),\n/* harmony export */   DialogTitle: () => (/* reexport safe */ _DialogTitle_index_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]),\n/* harmony export */   FormControl: () => (/* reexport safe */ _FormControl_index_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"]),\n/* harmony export */   InputLabel: () => (/* reexport safe */ _InputLabel_index_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"]),\n/* harmony export */   MenuItem: () => (/* reexport safe */ _MenuItem_index_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"]),\n/* harmony export */   Select: () => (/* reexport safe */ _Select_index_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"]),\n/* harmony export */   TextField: () => (/* reexport safe */ _TextField_index_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"]),\n/* harmony export */   Typography: () => (/* reexport safe */ _Typography_index_js__WEBPACK_IMPORTED_MODULE_13__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _Alert_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Alert/index.js */ \"./node_modules/@mui/material/esm/Alert/index.js\");\n/* harmony import */ var _Box_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Box/index.js */ \"./node_modules/@mui/material/esm/Box/index.js\");\n/* harmony import */ var _Button_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button/index.js */ \"./node_modules/@mui/material/esm/Button/index.js\");\n/* harmony import */ var _CircularProgress_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CircularProgress/index.js */ \"./node_modules/@mui/material/esm/CircularProgress/index.js\");\n/* harmony import */ var _Dialog_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Dialog/index.js */ \"./node_modules/@mui/material/esm/Dialog/index.js\");\n/* harmony import */ var _DialogActions_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DialogActions/index.js */ \"./node_modules/@mui/material/esm/DialogActions/index.js\");\n/* harmony import */ var _DialogContent_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DialogContent/index.js */ \"./node_modules/@mui/material/esm/DialogContent/index.js\");\n/* harmony import */ var _DialogTitle_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DialogTitle/index.js */ \"./node_modules/@mui/material/esm/DialogTitle/index.js\");\n/* harmony import */ var _FormControl_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FormControl/index.js */ \"./node_modules/@mui/material/esm/FormControl/index.js\");\n/* harmony import */ var _InputLabel_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./InputLabel/index.js */ \"./node_modules/@mui/material/esm/InputLabel/index.js\");\n/* harmony import */ var _MenuItem_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./MenuItem/index.js */ \"./node_modules/@mui/material/esm/MenuItem/index.js\");\n/* harmony import */ var _Select_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Select/index.js */ \"./node_modules/@mui/material/esm/Select/index.js\");\n/* harmony import */ var _TextField_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./TextField/index.js */ \"./node_modules/@mui/material/esm/TextField/index.js\");\n/* harmony import */ var _Typography_index_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Typography/index.js */ \"./node_modules/@mui/material/esm/Typography/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Alert_index_js__WEBPACK_IMPORTED_MODULE_0__, _Box_index_js__WEBPACK_IMPORTED_MODULE_1__, _Button_index_js__WEBPACK_IMPORTED_MODULE_2__, _CircularProgress_index_js__WEBPACK_IMPORTED_MODULE_3__, _Dialog_index_js__WEBPACK_IMPORTED_MODULE_4__, _DialogActions_index_js__WEBPACK_IMPORTED_MODULE_5__, _DialogContent_index_js__WEBPACK_IMPORTED_MODULE_6__, _DialogTitle_index_js__WEBPACK_IMPORTED_MODULE_7__, _FormControl_index_js__WEBPACK_IMPORTED_MODULE_8__, _InputLabel_index_js__WEBPACK_IMPORTED_MODULE_9__, _MenuItem_index_js__WEBPACK_IMPORTED_MODULE_10__, _Select_index_js__WEBPACK_IMPORTED_MODULE_11__, _TextField_index_js__WEBPACK_IMPORTED_MODULE_12__, _Typography_index_js__WEBPACK_IMPORTED_MODULE_13__]);\n([_Alert_index_js__WEBPACK_IMPORTED_MODULE_0__, _Box_index_js__WEBPACK_IMPORTED_MODULE_1__, _Button_index_js__WEBPACK_IMPORTED_MODULE_2__, _CircularProgress_index_js__WEBPACK_IMPORTED_MODULE_3__, _Dialog_index_js__WEBPACK_IMPORTED_MODULE_4__, _DialogActions_index_js__WEBPACK_IMPORTED_MODULE_5__, _DialogContent_index_js__WEBPACK_IMPORTED_MODULE_6__, _DialogTitle_index_js__WEBPACK_IMPORTED_MODULE_7__, _FormControl_index_js__WEBPACK_IMPORTED_MODULE_8__, _InputLabel_index_js__WEBPACK_IMPORTED_MODULE_9__, _MenuItem_index_js__WEBPACK_IMPORTED_MODULE_10__, _Select_index_js__WEBPACK_IMPORTED_MODULE_11__, _TextField_index_js__WEBPACK_IMPORTED_MODULE_12__, _Typography_index_js__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19iYXJyZWxfb3B0aW1pemVfXz9uYW1lcz1BbGVydCxCb3gsQnV0dG9uLENpcmN1bGFyUHJvZ3Jlc3MsRGlhbG9nLERpYWxvZ0FjdGlvbnMsRGlhbG9nQ29udGVudCxEaWFsb2dUaXRsZSxGb3JtQ29udHJvbCxJbnB1dExhYmVsLE1lbnVJdGVtLFNlbGVjdCxUZXh0RmllbGQsVHlwb2dyYXBoeSE9IS4vbm9kZV9tb2R1bGVzL0BtdWkvbWF0ZXJpYWwvZXNtL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ21EO0FBQ0o7QUFDTTtBQUNvQjtBQUNwQjtBQUNjO0FBQ0E7QUFDSjtBQUNBO0FBQ0Y7QUFDSjtBQUNKO0FBQ00iLCJzb3VyY2VzIjpbIkU6XFxteS10aHJlZWpzLXByb2plY3RcXG5vZGVfbW9kdWxlc1xcQG11aVxcbWF0ZXJpYWxcXGVzbVxcaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgeyBkZWZhdWx0IGFzIEFsZXJ0IH0gZnJvbSBcIi4vQWxlcnQvaW5kZXguanNcIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBCb3ggfSBmcm9tIFwiLi9Cb3gvaW5kZXguanNcIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBCdXR0b24gfSBmcm9tIFwiLi9CdXR0b24vaW5kZXguanNcIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDaXJjdWxhclByb2dyZXNzIH0gZnJvbSBcIi4vQ2lyY3VsYXJQcm9ncmVzcy9pbmRleC5qc1wiXG5leHBvcnQgeyBkZWZhdWx0IGFzIERpYWxvZyB9IGZyb20gXCIuL0RpYWxvZy9pbmRleC5qc1wiXG5leHBvcnQgeyBkZWZhdWx0IGFzIERpYWxvZ0FjdGlvbnMgfSBmcm9tIFwiLi9EaWFsb2dBY3Rpb25zL2luZGV4LmpzXCJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRGlhbG9nQ29udGVudCB9IGZyb20gXCIuL0RpYWxvZ0NvbnRlbnQvaW5kZXguanNcIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBEaWFsb2dUaXRsZSB9IGZyb20gXCIuL0RpYWxvZ1RpdGxlL2luZGV4LmpzXCJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRm9ybUNvbnRyb2wgfSBmcm9tIFwiLi9Gb3JtQ29udHJvbC9pbmRleC5qc1wiXG5leHBvcnQgeyBkZWZhdWx0IGFzIElucHV0TGFiZWwgfSBmcm9tIFwiLi9JbnB1dExhYmVsL2luZGV4LmpzXCJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWVudUl0ZW0gfSBmcm9tIFwiLi9NZW51SXRlbS9pbmRleC5qc1wiXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlbGVjdCB9IGZyb20gXCIuL1NlbGVjdC9pbmRleC5qc1wiXG5leHBvcnQgeyBkZWZhdWx0IGFzIFRleHRGaWVsZCB9IGZyb20gXCIuL1RleHRGaWVsZC9pbmRleC5qc1wiXG5leHBvcnQgeyBkZWZhdWx0IGFzIFR5cG9ncmFwaHkgfSBmcm9tIFwiLi9UeXBvZ3JhcGh5L2luZGV4LmpzXCIiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///__barrel_optimize__?names=Alert,Box,Button,CircularProgress,Dialog,DialogActions,DialogContent,DialogTitle,FormControl,InputLabel,MenuItem,Select,TextField,Typography!=!./node_modules/@mui/material/esm/index.js\n");

/***/ }),

/***/ "__barrel_optimize__?names=AppBar,Button,Container,Toolbar,Typography!=!./node_modules/@mui/material/esm/index.js":
/*!************************************************************************************************************************!*\
  !*** __barrel_optimize__?names=AppBar,Button,Container,Toolbar,Typography!=!./node_modules/@mui/material/esm/index.js ***!
  \************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AppBar: () => (/* reexport safe */ _AppBar_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   Button: () => (/* reexport safe */ _Button_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   Container: () => (/* reexport safe */ _Container_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   Toolbar: () => (/* reexport safe */ _Toolbar_index_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n/* harmony export */   Typography: () => (/* reexport safe */ _Typography_index_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _AppBar_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppBar/index.js */ \"./node_modules/@mui/material/esm/AppBar/index.js\");\n/* harmony import */ var _Button_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button/index.js */ \"./node_modules/@mui/material/esm/Button/index.js\");\n/* harmony import */ var _Container_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Container/index.js */ \"./node_modules/@mui/material/esm/Container/index.js\");\n/* harmony import */ var _Toolbar_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Toolbar/index.js */ \"./node_modules/@mui/material/esm/Toolbar/index.js\");\n/* harmony import */ var _Typography_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Typography/index.js */ \"./node_modules/@mui/material/esm/Typography/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_AppBar_index_js__WEBPACK_IMPORTED_MODULE_0__, _Button_index_js__WEBPACK_IMPORTED_MODULE_1__, _Container_index_js__WEBPACK_IMPORTED_MODULE_2__, _Toolbar_index_js__WEBPACK_IMPORTED_MODULE_3__, _Typography_index_js__WEBPACK_IMPORTED_MODULE_4__]);\n([_AppBar_index_js__WEBPACK_IMPORTED_MODULE_0__, _Button_index_js__WEBPACK_IMPORTED_MODULE_1__, _Container_index_js__WEBPACK_IMPORTED_MODULE_2__, _Toolbar_index_js__WEBPACK_IMPORTED_MODULE_3__, _Typography_index_js__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19iYXJyZWxfb3B0aW1pemVfXz9uYW1lcz1BcHBCYXIsQnV0dG9uLENvbnRhaW5lcixUb29sYmFyLFR5cG9ncmFwaHkhPSEuL25vZGVfbW9kdWxlcy9AbXVpL21hdGVyaWFsL2VzbS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNxRDtBQUNBO0FBQ007QUFDSiIsInNvdXJjZXMiOlsiRTpcXG15LXRocmVlanMtcHJvamVjdFxcbm9kZV9tb2R1bGVzXFxAbXVpXFxtYXRlcmlhbFxcZXNtXFxpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQXBwQmFyIH0gZnJvbSBcIi4vQXBwQmFyL2luZGV4LmpzXCJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQnV0dG9uIH0gZnJvbSBcIi4vQnV0dG9uL2luZGV4LmpzXCJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ29udGFpbmVyIH0gZnJvbSBcIi4vQ29udGFpbmVyL2luZGV4LmpzXCJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVG9vbGJhciB9IGZyb20gXCIuL1Rvb2xiYXIvaW5kZXguanNcIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBUeXBvZ3JhcGh5IH0gZnJvbSBcIi4vVHlwb2dyYXBoeS9pbmRleC5qc1wiIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///__barrel_optimize__?names=AppBar,Button,Container,Toolbar,Typography!=!./node_modules/@mui/material/esm/index.js\n");

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/***/ ((module) => {

module.exports = import("clsx");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("react-is");

/***/ }),

/***/ "react-transition-group":
/*!*****************************************!*\
  !*** external "react-transition-group" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("react-transition-group");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("./webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/@mui"], () => (__webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F_error&preferredRegion=&absolutePagePath=.%2Fnode_modules%5Cnext%5Cdist%5Cpages%5C_error.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();