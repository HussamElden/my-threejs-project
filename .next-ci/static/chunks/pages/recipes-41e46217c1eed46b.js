(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[245],{

/***/ 1224:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RecipesPage)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7876);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(4232);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/Box/Box.js + 2 modules
var Box = __webpack_require__(5588);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(6530);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/Alert/Alert.js + 6 modules
var Alert = __webpack_require__(2005);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(3511);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/Tabs/Tabs.js + 7 modules
var Tabs = __webpack_require__(619);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/Tab/Tab.js + 1 modules
var Tab = __webpack_require__(8367);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/Button/Button.js + 3 modules
var Button = __webpack_require__(3679);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/Grid/Grid.js + 4 modules
var Grid = __webpack_require__(2110);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/Card/Card.js + 1 modules
var Card = __webpack_require__(2605);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/CardContent/CardContent.js + 1 modules
var CardContent = __webpack_require__(3046);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/Chip/Chip.js + 2 modules
var Chip = __webpack_require__(9978);
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
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(764);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/Dialog/Dialog.js + 1 modules
var Dialog = __webpack_require__(167);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/DialogTitle/DialogTitle.js
var DialogTitle = __webpack_require__(4182);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(2200);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/DialogContentText/DialogContentText.js + 1 modules
var DialogContentText = __webpack_require__(1784);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(9763);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/esm/LocalCafe.js
var LocalCafe = __webpack_require__(8302);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/esm/Restaurant.js
var Restaurant = __webpack_require__(8747);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/esm/Add.js
var Add = __webpack_require__(2779);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/esm/Edit.js
var Edit = __webpack_require__(4128);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/esm/Delete.js
var Delete = __webpack_require__(4871);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/TextField/TextField.js + 3 modules
var TextField = __webpack_require__(4133);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/FormControl/FormControl.js + 2 modules
var FormControl = __webpack_require__(1801);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/InputLabel/InputLabel.js + 3 modules
var InputLabel = __webpack_require__(3357);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/Select/Select.js + 17 modules
var Select = __webpack_require__(4951);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/MenuItem/MenuItem.js + 4 modules
var MenuItem = __webpack_require__(9183);
;// ./components/AddProductDialog.js



function AddProductDialog(param) {
    let { open, onClose, onProductAdded } = param;
    const [formData, setFormData] = (0,react.useState)({
        name: "",
        category: ""
    });
    const [loading, setLoading] = (0,react.useState)(false);
    const categories = [
        "Espresso",
        "Coffee",
        "Tea",
        "Cold Brew",
        "Frappuccino",
        "Specialty",
        "Pastry",
        "Sandwich",
        "Other"
    ];
    const handleInputChange = (field, value)=>{
        setFormData((prev)=>({
                ...prev,
                [field]: value
            }));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        try {
            if (!formData.name || !formData.category) {
                alert("Please fill in all required fields");
                return;
            }
            const res = await fetch("/api/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
            if (res.ok) {
                const newProduct = await res.json();
                onProductAdded(newProduct);
                handleClose();
            } else {
                const error = await res.json();
                alert("Error: ".concat(error.error));
            }
        } catch (error) {
            console.error("Failed to create product:", error);
            alert("Failed to create product");
        } finally{
            setLoading(false);
        }
    };
    const handleClose = ()=>{
        setFormData({
            name: "",
            category: ""
        });
        onClose();
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Dialog/* default */.A, {
        open: open,
        onClose: handleClose,
        maxWidth: "sm",
        fullWidth: true,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogTitle/* default */.A, {
                children: "Add New Product"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.A, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.A, {
                            container: true,
                            spacing: 2,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.A, {
                                    item: true,
                                    xs: 12,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                                        label: "Product Name",
                                        value: formData.name,
                                        onChange: (e)=>handleInputChange("name", e.target.value),
                                        fullWidth: true,
                                        margin: "normal",
                                        required: true,
                                        placeholder: "e.g., Cappuccino, Croissant"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.A, {
                                    item: true,
                                    xs: 12,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(FormControl/* default */.A, {
                                        fullWidth: true,
                                        margin: "normal",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(InputLabel/* default */.A, {
                                                children: "Category"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Select/* default */.A, {
                                                value: formData.category,
                                                onChange: (e)=>handleInputChange("category", e.target.value),
                                                required: true,
                                                children: categories.map((category)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.A, {
                                                        value: category,
                                                        children: category
                                                    }, category))
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions/* default */.A, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                onClick: handleClose,
                                children: "Cancel"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                type: "submit",
                                variant: "contained",
                                disabled: loading,
                                children: loading ? "Creating..." : "Create Product"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

;// ./components/AddRecipeDialog.js




function AddRecipeDialog(param) {
    let { open, onClose, onRecipeAdded } = param;
    const [formData, setFormData] = (0,react.useState)({
        productId: "",
        variant: "",
        ingredients: [
            {
                ingredientId: "",
                quantity: ""
            }
        ]
    });
    const [products, setProducts] = (0,react.useState)([]);
    const [ingredients, setIngredients] = (0,react.useState)([]);
    const [loading, setLoading] = (0,react.useState)(false);
    (0,react.useEffect)(()=>{
        if (open) {
            fetchProducts();
            fetchIngredients();
        }
    }, [
        open
    ]);
    const fetchProducts = async ()=>{
        try {
            const res = await fetch("/api/products");
            if (res.ok) {
                const data = await res.json();
                setProducts(data);
            }
        } catch (error) {
            console.error("Failed to fetch products:", error);
        }
    };
    const fetchIngredients = async ()=>{
        try {
            const res = await fetch("/api/ingredient");
            if (res.ok) {
                const data = await res.json();
                setIngredients(data);
            }
        } catch (error) {
            console.error("Failed to fetch ingredients:", error);
        }
    };
    const handleInputChange = (field, value)=>{
        setFormData((prev)=>({
                ...prev,
                [field]: value
            }));
    };
    const handleIngredientChange = (index, field, value)=>{
        const updatedIngredients = [
            ...formData.ingredients
        ];
        updatedIngredients[index] = {
            ...updatedIngredients[index],
            [field]: value
        };
        setFormData((prev)=>({
                ...prev,
                ingredients: updatedIngredients
            }));
    };
    const addIngredient = ()=>{
        setFormData((prev)=>({
                ...prev,
                ingredients: [
                    ...prev.ingredients,
                    {
                        ingredientId: "",
                        quantity: ""
                    }
                ]
            }));
    };
    const removeIngredient = (index)=>{
        if (formData.ingredients.length > 1) {
            const updatedIngredients = formData.ingredients.filter((_, i)=>i !== index);
            setFormData((prev)=>({
                    ...prev,
                    ingredients: updatedIngredients
                }));
        }
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        try {
            // Validate form
            if (!formData.productId || !formData.variant) {
                alert("Please fill in all required fields");
                return;
            }
            const validIngredients = formData.ingredients.filter((ing)=>ing.ingredientId && ing.quantity);
            if (validIngredients.length === 0) {
                alert("Please add at least one ingredient");
                return;
            }
            const res = await fetch("/api/recipes", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    productId: parseInt(formData.productId),
                    variant: formData.variant,
                    ingredients: validIngredients.map((ing)=>({
                            ingredientId: parseInt(ing.ingredientId),
                            quantity: parseFloat(ing.quantity)
                        }))
                })
            });
            if (res.ok) {
                const newRecipe = await res.json();
                onRecipeAdded(newRecipe);
                handleClose();
            } else {
                const error = await res.json();
                alert("Error: ".concat(error.error));
            }
        } catch (error) {
            console.error("Failed to create recipe:", error);
            alert("Failed to create recipe");
        } finally{
            setLoading(false);
        }
    };
    const handleClose = ()=>{
        setFormData({
            productId: "",
            variant: "",
            ingredients: [
                {
                    ingredientId: "",
                    quantity: ""
                }
            ]
        });
        onClose();
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Dialog/* default */.A, {
        open: open,
        onClose: handleClose,
        maxWidth: "md",
        fullWidth: true,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogTitle/* default */.A, {
                children: "Add New Recipe"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.A, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.A, {
                                container: true,
                                spacing: 2,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.A, {
                                        item: true,
                                        xs: 12,
                                        sm: 6,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(FormControl/* default */.A, {
                                            fullWidth: true,
                                            margin: "normal",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(InputLabel/* default */.A, {
                                                    children: "Product"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Select/* default */.A, {
                                                    value: formData.productId,
                                                    onChange: (e)=>handleInputChange("productId", e.target.value),
                                                    required: true,
                                                    children: products.map((product)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(MenuItem/* default */.A, {
                                                            value: product.id,
                                                            children: [
                                                                product.name,
                                                                " (",
                                                                product.category,
                                                                ")"
                                                            ]
                                                        }, product.id))
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.A, {
                                        item: true,
                                        xs: 12,
                                        sm: 6,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                                            label: "Variant",
                                            value: formData.variant,
                                            onChange: (e)=>handleInputChange("variant", e.target.value),
                                            fullWidth: true,
                                            margin: "normal",
                                            required: true,
                                            placeholder: "e.g., Regular, Decaf, Sugar-Free"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                                sx: {
                                    mt: 3
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                        variant: "h6",
                                        gutterBottom: true,
                                        children: "Ingredients"
                                    }),
                                    formData.ingredients.map((ingredient, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                                            sx: {
                                                display: "flex",
                                                gap: 1,
                                                mb: 2,
                                                alignItems: "center"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(FormControl/* default */.A, {
                                                    sx: {
                                                        minWidth: 200
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(InputLabel/* default */.A, {
                                                            children: "Ingredient"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Select/* default */.A, {
                                                            value: ingredient.ingredientId,
                                                            onChange: (e)=>handleIngredientChange(index, "ingredientId", e.target.value),
                                                            required: true,
                                                            children: ingredients.map((ing)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(MenuItem/* default */.A, {
                                                                    value: ing.id,
                                                                    children: [
                                                                        ing.name,
                                                                        " (",
                                                                        ing.unit,
                                                                        ")"
                                                                    ]
                                                                }, ing.id))
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                                                    label: "Quantity",
                                                    type: "number",
                                                    value: ingredient.quantity,
                                                    onChange: (e)=>handleIngredientChange(index, "quantity", e.target.value),
                                                    sx: {
                                                        width: 120
                                                    },
                                                    inputProps: {
                                                        min: 0,
                                                        step: 0.1
                                                    },
                                                    required: true
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                                                    onClick: ()=>removeIngredient(index),
                                                    disabled: formData.ingredients.length === 1,
                                                    color: "error",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Delete/* default */.A, {})
                                                })
                                            ]
                                        }, index)),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                        startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Add/* default */.A, {}),
                                        onClick: addIngredient,
                                        variant: "outlined",
                                        size: "small",
                                        children: "Add Ingredient"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions/* default */.A, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                onClick: handleClose,
                                children: "Cancel"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                type: "submit",
                                variant: "contained",
                                disabled: loading,
                                children: loading ? "Creating..." : "Create Recipe"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

;// ./components/EditRecipeDialog.js




function EditRecipeDialog(param) {
    let { open, onClose, recipe, onRecipeUpdated } = param;
    var _recipe_product;
    const [formData, setFormData] = (0,react.useState)({
        variant: "",
        ingredients: [
            {
                ingredientId: "",
                quantity: ""
            }
        ]
    });
    const [ingredients, setIngredients] = (0,react.useState)([]);
    const [loading, setLoading] = (0,react.useState)(false);
    (0,react.useEffect)(()=>{
        if (open && recipe) {
            var _recipe_ingredients;
            setFormData({
                variant: recipe.variant || "",
                ingredients: ((_recipe_ingredients = recipe.ingredients) === null || _recipe_ingredients === void 0 ? void 0 : _recipe_ingredients.length) > 0 ? recipe.ingredients.map((ri)=>({
                        ingredientId: ri.ingredientId.toString(),
                        quantity: ri.quantity.toString()
                    })) : [
                    {
                        ingredientId: "",
                        quantity: ""
                    }
                ]
            });
            fetchIngredients();
        }
    }, [
        open,
        recipe
    ]);
    const fetchIngredients = async ()=>{
        try {
            const res = await fetch("/api/ingredient");
            if (res.ok) {
                const data = await res.json();
                setIngredients(data);
            }
        } catch (error) {
            console.error("Failed to fetch ingredients:", error);
        }
    };
    const handleInputChange = (field, value)=>{
        setFormData((prev)=>({
                ...prev,
                [field]: value
            }));
    };
    const handleIngredientChange = (index, field, value)=>{
        const updatedIngredients = [
            ...formData.ingredients
        ];
        updatedIngredients[index] = {
            ...updatedIngredients[index],
            [field]: value
        };
        setFormData((prev)=>({
                ...prev,
                ingredients: updatedIngredients
            }));
    };
    const addIngredient = ()=>{
        setFormData((prev)=>({
                ...prev,
                ingredients: [
                    ...prev.ingredients,
                    {
                        ingredientId: "",
                        quantity: ""
                    }
                ]
            }));
    };
    const removeIngredient = (index)=>{
        if (formData.ingredients.length > 1) {
            const updatedIngredients = formData.ingredients.filter((_, i)=>i !== index);
            setFormData((prev)=>({
                    ...prev,
                    ingredients: updatedIngredients
                }));
        }
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        try {
            // Validate form
            if (!formData.variant) {
                alert("Please fill in all required fields");
                return;
            }
            const validIngredients = formData.ingredients.filter((ing)=>ing.ingredientId && ing.quantity);
            if (validIngredients.length === 0) {
                alert("Please add at least one ingredient");
                return;
            }
            const res = await fetch("/api/recipes/".concat(recipe.id), {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    variant: formData.variant,
                    ingredients: validIngredients.map((ing)=>({
                            ingredientId: parseInt(ing.ingredientId),
                            quantity: parseFloat(ing.quantity)
                        }))
                })
            });
            if (res.ok) {
                const updatedRecipe = await res.json();
                onRecipeUpdated(updatedRecipe);
                onClose();
            } else {
                const error = await res.json();
                alert("Error: ".concat(error.error));
            }
        } catch (error) {
            console.error("Failed to update recipe:", error);
            alert("Failed to update recipe");
        } finally{
            setLoading(false);
        }
    };
    if (!recipe) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Dialog/* default */.A, {
        open: open,
        onClose: onClose,
        maxWidth: "md",
        fullWidth: true,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogTitle/* default */.A, {
                children: [
                    "Edit Recipe: ",
                    (_recipe_product = recipe.product) === null || _recipe_product === void 0 ? void 0 : _recipe_product.name,
                    " - ",
                    recipe.variant
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.A, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.A, {
                                container: true,
                                spacing: 2,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.A, {
                                    item: true,
                                    xs: 12,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                                        label: "Variant",
                                        value: formData.variant,
                                        onChange: (e)=>handleInputChange("variant", e.target.value),
                                        fullWidth: true,
                                        margin: "normal",
                                        required: true,
                                        placeholder: "e.g., Regular, Decaf, Sugar-Free"
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                                sx: {
                                    mt: 3
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                        variant: "h6",
                                        gutterBottom: true,
                                        children: "Ingredients"
                                    }),
                                    formData.ingredients.map((ingredient, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                                            sx: {
                                                display: "flex",
                                                gap: 1,
                                                mb: 2,
                                                alignItems: "center"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(FormControl/* default */.A, {
                                                    sx: {
                                                        minWidth: 200
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(InputLabel/* default */.A, {
                                                            children: "Ingredient"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Select/* default */.A, {
                                                            value: ingredient.ingredientId,
                                                            onChange: (e)=>handleIngredientChange(index, "ingredientId", e.target.value),
                                                            required: true,
                                                            children: ingredients.map((ing)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(MenuItem/* default */.A, {
                                                                    value: ing.id,
                                                                    children: [
                                                                        ing.name,
                                                                        " (",
                                                                        ing.unit,
                                                                        ")"
                                                                    ]
                                                                }, ing.id))
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                                                    label: "Quantity",
                                                    type: "number",
                                                    value: ingredient.quantity,
                                                    onChange: (e)=>handleIngredientChange(index, "quantity", e.target.value),
                                                    sx: {
                                                        width: 120
                                                    },
                                                    inputProps: {
                                                        min: 0,
                                                        step: 0.1
                                                    },
                                                    required: true
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                                                    onClick: ()=>removeIngredient(index),
                                                    disabled: formData.ingredients.length === 1,
                                                    color: "error",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Delete/* default */.A, {})
                                                })
                                            ]
                                        }, index)),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                        startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Add/* default */.A, {}),
                                        onClick: addIngredient,
                                        variant: "outlined",
                                        size: "small",
                                        children: "Add Ingredient"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions/* default */.A, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                onClick: onClose,
                                children: "Cancel"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                type: "submit",
                                variant: "contained",
                                disabled: loading,
                                children: loading ? "Updating..." : "Update Recipe"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

;// ./components/RecipeManagement.js







function TabPanel(param) {
    let { children, value, index, ...other } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        role: "tabpanel",
        hidden: value !== index,
        ...other,
        children: value === index && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
            sx: {
                p: 3
            },
            children: children
        })
    });
}
function RecipeManagement() {
    const [tabValue, setTabValue] = (0,react.useState)(0);
    const [products, setProducts] = (0,react.useState)([]);
    const [recipes, setRecipes] = (0,react.useState)([]);
    const [loading, setLoading] = (0,react.useState)(true);
    const [error, setError] = (0,react.useState)(null);
    // Dialog states
    const [addProductDialogOpen, setAddProductDialogOpen] = (0,react.useState)(false);
    const [addRecipeDialogOpen, setAddRecipeDialogOpen] = (0,react.useState)(false);
    const [editRecipeDialogOpen, setEditRecipeDialogOpen] = (0,react.useState)(false);
    const [selectedRecipe, setSelectedRecipe] = (0,react.useState)(null);
    // Delete confirmation dialog
    const [deleteDialogOpen, setDeleteDialogOpen] = (0,react.useState)(false);
    const [itemToDelete, setItemToDelete] = (0,react.useState)(null);
    const [deleteType, setDeleteType] = (0,react.useState)(""); // "product" or "recipe"
    (0,react.useEffect)(()=>{
        fetchData();
    }, []);
    const fetchData = async ()=>{
        setLoading(true);
        try {
            await Promise.all([
                fetchProducts(),
                fetchRecipes()
            ]);
        } catch (error) {
            console.error("Failed to fetch data:", error);
            setError("Failed to load data");
        } finally{
            setLoading(false);
        }
    };
    const fetchProducts = async ()=>{
        try {
            const res = await fetch("/api/products");
            if (!res.ok) {
                throw new Error("HTTP error! status: ".concat(res.status));
            }
            const data = await res.json();
            setProducts(data);
        } catch (error) {
            console.error("Failed to fetch products:", error);
            throw error;
        }
    };
    const fetchRecipes = async ()=>{
        try {
            const res = await fetch("/api/recipes");
            if (!res.ok) {
                throw new Error("HTTP error! status: ".concat(res.status));
            }
            const data = await res.json();
            setRecipes(data);
        } catch (error) {
            console.error("Failed to fetch recipes:", error);
            throw error;
        }
    };
    const handleTabChange = (event, newValue)=>{
        setTabValue(newValue);
    };
    const handleProductAdded = (newProduct)=>{
        setProducts((prev)=>[
                ...prev,
                newProduct
            ]);
    };
    const handleRecipeAdded = (newRecipe)=>{
        setRecipes((prev)=>[
                ...prev,
                newRecipe
            ]);
    };
    const handleRecipeUpdated = (updatedRecipe)=>{
        setRecipes((prev)=>prev.map((recipe)=>recipe.id === updatedRecipe.id ? updatedRecipe : recipe));
    };
    const handleEditRecipe = (recipe)=>{
        setSelectedRecipe(recipe);
        setEditRecipeDialogOpen(true);
    };
    const handleDeleteClick = (item, type)=>{
        setItemToDelete(item);
        setDeleteType(type);
        setDeleteDialogOpen(true);
    };
    const handleDeleteConfirm = async ()=>{
        try {
            const endpoint = deleteType === "product" ? "/api/products/".concat(itemToDelete.id) : "/api/recipes/".concat(itemToDelete.id);
            const res = await fetch(endpoint, {
                method: "DELETE"
            });
            if (res.ok) {
                if (deleteType === "product") {
                    setProducts((prev)=>prev.filter((p)=>p.id !== itemToDelete.id));
                    // Also remove related recipes
                    setRecipes((prev)=>prev.filter((r)=>r.productId !== itemToDelete.id));
                } else {
                    setRecipes((prev)=>prev.filter((r)=>r.id !== itemToDelete.id));
                }
            } else {
                const error = await res.json();
                alert("Error: ".concat(error.error));
            }
        } catch (error) {
            console.error("Failed to delete:", error);
            alert("Failed to delete item");
        } finally{
            setDeleteDialogOpen(false);
            setItemToDelete(null);
            setDeleteType("");
        }
    };
    const calculateRecipeCost = (recipe)=>{
        if (!recipe.ingredients) return 0;
        return recipe.ingredients.reduce((total, ri)=>{
            return total + ri.quantity * ri.ingredient.costPerUnit;
        }, 0);
    };
    if (loading) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "200px",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.A, {})
        });
    }
    if (error) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.A, {
            severity: "error",
            sx: {
                mt: 2
            },
            children: error
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                variant: "h4",
                gutterBottom: true,
                children: "Recipe & Product Management"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                sx: {
                    borderBottom: 1,
                    borderColor: 'divider'
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
                    value: tabValue,
                    onChange: handleTabChange,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.A, {
                            label: "Products",
                            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(LocalCafe/* default */.A, {}),
                            iconPosition: "start"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.A, {
                            label: "Recipes",
                            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Restaurant/* default */.A, {}),
                            iconPosition: "start"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(TabPanel, {
                value: tabValue,
                index: 0,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                        sx: {
                            display: 'flex',
                            justifyContent: 'space-between',
                            mb: 3
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                                variant: "h5",
                                children: [
                                    "Products (",
                                    products.length,
                                    ")"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                variant: "contained",
                                startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Add/* default */.A, {}),
                                onClick: ()=>setAddProductDialogOpen(true),
                                children: "Add Product"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.A, {
                        container: true,
                        spacing: 3,
                        children: products.map((product)=>{
                            var _product_recipes;
                            return /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.A, {
                                item: true,
                                xs: 12,
                                sm: 6,
                                md: 4,
                                lg: 3,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.A, {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.A, {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                                variant: "h6",
                                                gutterBottom: true,
                                                children: product.name
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.A, {
                                                label: product.category,
                                                color: "primary",
                                                size: "small",
                                                sx: {
                                                    mb: 2
                                                }
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                                                variant: "body2",
                                                color: "text.secondary",
                                                gutterBottom: true,
                                                children: [
                                                    "Recipes: ",
                                                    ((_product_recipes = product.recipes) === null || _product_recipes === void 0 ? void 0 : _product_recipes.length) || 0
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                                                sx: {
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    mt: 2
                                                },
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                                    size: "small",
                                                    color: "error",
                                                    onClick: ()=>handleDeleteClick(product, "product"),
                                                    children: "Delete"
                                                })
                                            })
                                        ]
                                    })
                                })
                            }, product.id);
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(TabPanel, {
                value: tabValue,
                index: 1,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                        sx: {
                            display: 'flex',
                            justifyContent: 'space-between',
                            mb: 3
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                                variant: "h5",
                                children: [
                                    "Recipes (",
                                    recipes.length,
                                    ")"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                variant: "contained",
                                startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Add/* default */.A, {}),
                                onClick: ()=>setAddRecipeDialogOpen(true),
                                children: "Add Recipe"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableContainer/* default */.A, {
                        component: Paper/* default */.A,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Table/* default */.A, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(TableHead/* default */.A, {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.A, {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.A, {
                                                children: "Product"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.A, {
                                                children: "Variant"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.A, {
                                                children: "Category"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.A, {
                                                children: "Ingredients"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.A, {
                                                children: "Estimated Cost"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.A, {
                                                children: "Actions"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(TableBody/* default */.A, {
                                    children: recipes.map((recipe)=>{
                                        var _recipe_product, _recipe_product1, _recipe_ingredients;
                                        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.A, {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.A, {
                                                    children: (_recipe_product = recipe.product) === null || _recipe_product === void 0 ? void 0 : _recipe_product.name
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.A, {
                                                    children: recipe.variant
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.A, {
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.A, {
                                                        label: (_recipe_product1 = recipe.product) === null || _recipe_product1 === void 0 ? void 0 : _recipe_product1.category,
                                                        size: "small"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.A, {
                                                    children: (_recipe_ingredients = recipe.ingredients) === null || _recipe_ingredients === void 0 ? void 0 : _recipe_ingredients.map((ri, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.A, {
                                                            label: "".concat(ri.ingredient.name, " (").concat(ri.quantity).concat(ri.ingredient.unit, ")"),
                                                            size: "small",
                                                            variant: "outlined",
                                                            sx: {
                                                                mr: 0.5,
                                                                mb: 0.5
                                                            }
                                                        }, index))
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableCell/* default */.A, {
                                                    children: [
                                                        "$",
                                                        calculateRecipeCost(recipe).toFixed(2)
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableCell/* default */.A, {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                                                            onClick: ()=>handleEditRecipe(recipe),
                                                            color: "primary",
                                                            size: "small",
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Edit/* default */.A, {})
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                                                            onClick: ()=>handleDeleteClick(recipe, "recipe"),
                                                            color: "error",
                                                            size: "small",
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Delete/* default */.A, {})
                                                        })
                                                    ]
                                                })
                                            ]
                                        }, recipe.id);
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(AddProductDialog, {
                open: addProductDialogOpen,
                onClose: ()=>setAddProductDialogOpen(false),
                onProductAdded: handleProductAdded
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(AddRecipeDialog, {
                open: addRecipeDialogOpen,
                onClose: ()=>setAddRecipeDialogOpen(false),
                onRecipeAdded: handleRecipeAdded
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(EditRecipeDialog, {
                open: editRecipeDialogOpen,
                onClose: ()=>setEditRecipeDialogOpen(false),
                recipe: selectedRecipe,
                onRecipeUpdated: handleRecipeUpdated
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Dialog/* default */.A, {
                open: deleteDialogOpen,
                onClose: ()=>setDeleteDialogOpen(false),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogTitle/* default */.A, {
                        children: "Confirm Delete"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.A, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContentText/* default */.A, {
                            children: [
                                "Are you sure you want to delete this ",
                                deleteType,
                                "?",
                                deleteType === "product" && " This will also delete all associated recipes.",
                                "This action cannot be undone."
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions/* default */.A, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                onClick: ()=>setDeleteDialogOpen(false),
                                children: "Cancel"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                onClick: handleDeleteConfirm,
                                color: "error",
                                autoFocus: true,
                                children: "Delete"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./lib/auth.js
var auth = __webpack_require__(7332);
;// ./pages/recipes/index.js





function RecipesPage() {
    const { user, loading } = (0,auth/* useAuth */.A)();
    const [authChecked, setAuthChecked] = (0,react.useState)(false);
    (0,react.useEffect)(()=>{
        if (!loading) {
            setAuthChecked(true);
        }
    }, [
        loading
    ]);
    if (!authChecked || loading) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "200px",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                children: "Loading..."
            })
        });
    }
    // Check if user has permission (Admin or Manager)
    if (!user || user.role !== "ADMIN" && user.role !== "MANAGER") {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
            sx: {
                mt: 4
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.A, {
                severity: "error",
                children: "Access denied. You need Admin or Manager privileges to access recipe management."
            })
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(RecipeManagement, {});
}


/***/ }),

/***/ 9677:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/recipes",
      function () {
        return __webpack_require__(1224);
      }
    ]);
    if(false) {}
  

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [286,362,446,636,593,792], () => (__webpack_exec__(9677)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);