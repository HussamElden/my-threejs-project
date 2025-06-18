(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[668],{

/***/ 4296:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ InventoryPage)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7876);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(4232);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/Box/Box.js + 2 modules
var Box = __webpack_require__(5588);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/Button/Button.js + 3 modules
var Button = __webpack_require__(3679);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/TableContainer/TableContainer.js + 1 modules
var TableContainer = __webpack_require__(5736);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/Paper/Paper.js + 1 modules
var Paper = __webpack_require__(2525);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/Table/Table.js + 1 modules
var Table = __webpack_require__(1024);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/TableHead/TableHead.js + 1 modules
var TableHead = __webpack_require__(515);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/TableRow/TableRow.js + 1 modules
var TableRow = __webpack_require__(4507);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/TableCell/TableCell.js + 1 modules
var TableCell = __webpack_require__(787);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/TableBody/TableBody.js + 1 modules
var TableBody = __webpack_require__(8236);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/esm/Add.js
var Add = __webpack_require__(2779);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/Dialog/Dialog.js + 1 modules
var Dialog = __webpack_require__(167);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/DialogTitle/DialogTitle.js
var DialogTitle = __webpack_require__(4182);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(2200);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/Alert/Alert.js + 6 modules
var Alert = __webpack_require__(2005);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/TextField/TextField.js + 3 modules
var TextField = __webpack_require__(4133);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(9763);
;// ./components/AddIngredientDialog.js



function AddIngredientDialog(param) {
    let { open, onClose, refreshIngredients } = param;
    const [name, setName] = (0,react.useState)("");
    const [quantity, setQuantity] = (0,react.useState)("");
    const [currentStock, setCurrentStock] = (0,react.useState)("");
    const [cost, setCost] = (0,react.useState)("");
    const [error, setError] = (0,react.useState)("");
    const handleSubmit = async ()=>{
        setError("");
        try {
            const response = await fetch("/api/ingredient", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    unit: quantity,
                    currentStock: parseFloat(currentStock),
                    cost: parseFloat(cost)
                })
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Failed to create ingredient");
            }
            onClose();
            refreshIngredients();
        } catch (err) {
            setError(err.message || "An error occurred");
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Dialog/* default */.A, {
        open: open,
        onClose: onClose,
        maxWidth: "sm",
        fullWidth: true,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogTitle/* default */.A, {
                children: "Add New Ingredient"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.A, {
                children: [
                    error && /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.A, {
                        severity: "error",
                        sx: {
                            mb: 2
                        },
                        children: error
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                        autoFocus: true,
                        margin: "dense",
                        label: "Name",
                        type: "text",
                        fullWidth: true,
                        variant: "outlined",
                        value: name,
                        onChange: (e)=>setName(e.target.value),
                        sx: {
                            mb: 2
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                        margin: "dense",
                        label: "Unit",
                        type: "text",
                        fullWidth: true,
                        variant: "outlined",
                        value: quantity,
                        onChange: (e)=>setQuantity(e.target.value),
                        sx: {
                            mb: 2
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                        margin: "dense",
                        label: "Stock",
                        type: "number",
                        fullWidth: true,
                        variant: "outlined",
                        value: currentStock,
                        onChange: (e)=>setCurrentStock(e.target.value),
                        sx: {
                            mb: 2
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                        margin: "dense",
                        label: "Cost",
                        type: "number",
                        fullWidth: true,
                        variant: "outlined",
                        value: cost,
                        onChange: (e)=>setCost(e.target.value),
                        sx: {
                            mb: 2
                        }
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions/* default */.A, {
                sx: {
                    px: 3,
                    pb: 3
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                        onClick: onClose,
                        color: "primary",
                        children: "Cancel"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                        onClick: handleSubmit,
                        color: "primary",
                        variant: "contained",
                        children: "Add"
                    })
                ]
            })
        ]
    });
}

;// ./components/EditIngredientDialog.js



function EditIngredientDialog(param) {
    let { open, onClose, ingredient, refreshIngredients } = param;
    const [name, setName] = (0,react.useState)("");
    const [stock, setStock] = (0,react.useState)("");
    const [cost, setCost] = (0,react.useState)("");
    const [error, setError] = (0,react.useState)("");
    (0,react.useEffect)(()=>{
        if (ingredient) {
            setName(ingredient.name);
            setStock(ingredient.currentStock);
            setCost(ingredient.costPerUnit);
        }
    }, [
        ingredient
    ]);
    const handleSubmit = async ()=>{
        setError("");
        try {
            const response = await fetch("/api/ingredient/".concat(ingredient.id), {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    stock: parseFloat(stock),
                    costPerUnit: parseFloat(cost)
                })
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Failed to update ingredient");
            }
            onClose();
            refreshIngredients();
        } catch (err) {
            setError(err.message || "An error occurred");
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Dialog/* default */.A, {
        open: open,
        onClose: onClose,
        maxWidth: "sm",
        fullWidth: true,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogTitle/* default */.A, {
                children: "Edit Ingredient"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.A, {
                children: [
                    error && /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.A, {
                        severity: "error",
                        sx: {
                            mb: 2
                        },
                        children: error
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                        autoFocus: true,
                        margin: "dense",
                        label: "Name",
                        type: "text",
                        fullWidth: true,
                        variant: "outlined",
                        value: name,
                        onChange: (e)=>setName(e.target.value),
                        sx: {
                            mb: 2
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                        margin: "dense",
                        label: "Stock",
                        type: "number",
                        fullWidth: true,
                        variant: "outlined",
                        value: stock,
                        onChange: (e)=>setStock(e.target.value),
                        sx: {
                            mb: 2
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                        margin: "dense",
                        label: "Cost",
                        type: "number",
                        fullWidth: true,
                        variant: "outlined",
                        value: cost,
                        onChange: (e)=>setCost(e.target.value),
                        sx: {
                            mb: 2
                        }
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions/* default */.A, {
                sx: {
                    px: 3,
                    pb: 3
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                        onClick: onClose,
                        color: "primary",
                        children: "Cancel"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                        onClick: handleSubmit,
                        color: "primary",
                        variant: "contained",
                        children: "Update"
                    })
                ]
            })
        ]
    });
}

;// ./components/InventoryManagement.js






function InventoryManagement() {
    const [ingredients, setIngredients] = (0,react.useState)([]);
    const [loading, setLoading] = (0,react.useState)(true);
    const [error, setError] = (0,react.useState)(null);
    const [addIngredientOpen, setAddIngredientOpen] = (0,react.useState)(false);
    const [editIngredientOpen, setEditIngredientOpen] = (0,react.useState)(false);
    const [selectedIngredient, setSelectedIngredient] = (0,react.useState)(null);
    const fetchIngredients = async ()=>{
        try {
            const res = await fetch("/api/inventory");
            if (!res.ok) {
                throw new Error("HTTP error! status: ".concat(res.status));
            }
            const data = await res.json();
            setIngredients(data);
        } catch (error) {
            console.error("Failed to fetch ingredients:", error);
            setError(error);
        } finally{
            setLoading(false);
        }
    };
    (0,react.useEffect)(()=>{
        fetchIngredients();
    }, []);
    const handleAddIngredientOpen = ()=>{
        setAddIngredientOpen(true);
    };
    const handleAddIngredientClose = ()=>{
        setAddIngredientOpen(false);
    };
    const handleEditIngredientOpen = (ingredient)=>{
        setSelectedIngredient(ingredient);
        setEditIngredientOpen(true);
    };
    const handleEditIngredientClose = ()=>{
        setSelectedIngredient(null);
        setEditIngredientOpen(false);
    };
    if (loading) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            children: "Loading inventory..."
        });
    }
    if (error) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            children: [
                "Error: ",
                error.message
            ]
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                children: "Inventory Management"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                display: "flex",
                justifyContent: "flex-end",
                mb: 2,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                    variant: "contained",
                    color: "primary",
                    startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Add/* default */.A, {}),
                    onClick: handleAddIngredientOpen,
                    children: "Add Ingredient"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableContainer/* default */.A, {
                component: Paper/* default */.A,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Table/* default */.A, {
                    sx: {
                        minWidth: 650
                    },
                    "aria-label": "simple table",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TableHead/* default */.A, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.A, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.A, {
                                        children: "Name"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.A, {
                                        align: "right",
                                        children: "Unit"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.A, {
                                        align: "right",
                                        children: "Current Stock"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.A, {
                                        align: "right",
                                        children: "Cost"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TableBody/* default */.A, {
                            children: ingredients.map((ingredient)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.A, {
                                    sx: {
                                        "&:last-child td, &:last-child th": {
                                            border: 0
                                        }
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.A, {
                                            component: "th",
                                            scope: "row",
                                            children: ingredient.name
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.A, {
                                            align: "right",
                                            children: ingredient.unit
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.A, {
                                            align: "right",
                                            children: ingredient.currentStock
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.A, {
                                            align: "right",
                                            children: ingredient.costPerUnit
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.A, {
                                            align: "right",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                                variant: "contained",
                                                color: "primary",
                                                size: "small",
                                                onClick: ()=>handleEditIngredientOpen(ingredient),
                                                children: "Edit"
                                            })
                                        })
                                    ]
                                }, ingredient.id))
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(AddIngredientDialog, {
                open: addIngredientOpen,
                onClose: handleAddIngredientClose,
                refreshIngredients: fetchIngredients
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(EditIngredientDialog, {
                open: editIngredientOpen,
                onClose: handleEditIngredientClose,
                ingredient: selectedIngredient,
                refreshIngredients: fetchIngredients
            })
        ]
    });
}

;// ./pages/inventory/index.js


function InventoryPage() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(InventoryManagement, {});
}


/***/ }),

/***/ 6203:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/inventory",
      function () {
        return __webpack_require__(4296);
      }
    ]);
    if(false) {}
  

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [286,636,593,792], () => (__webpack_exec__(6203)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);