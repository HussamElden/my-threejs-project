(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[332],{

/***/ 2936:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/",
      function () {
        return __webpack_require__(6167);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 6167:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7876);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/Box/Box.js + 2 modules
var Box = __webpack_require__(5588);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/Paper/Paper.js + 1 modules
var Paper = __webpack_require__(2525);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(3511);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/Grid/Grid.js + 4 modules
var Grid = __webpack_require__(2110);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/Card/Card.js + 1 modules
var Card = __webpack_require__(2605);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(4232);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(9241);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(3323);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/styles/styled.js
var styled = __webpack_require__(9289);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(4656);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(4457);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(1849);
;// ./node_modules/@mui/material/esm/CardMedia/cardMediaClasses.js


function getCardMediaUtilityClass(slot) {
    return (0,generateUtilityClass/* default */.Ay)('MuiCardMedia', slot);
}
const cardMediaClasses = (0,generateUtilityClasses/* default */.A)('MuiCardMedia', [
    'root',
    'media',
    'img'
]);
/* harmony default export */ const CardMedia_cardMediaClasses = ((/* unused pure expression or super */ null && (cardMediaClasses)));

;// ./node_modules/@mui/material/esm/CardMedia/CardMedia.js
/* __next_internal_client_entry_do_not_use__ default auto */ 








const useUtilityClasses = (ownerState)=>{
    const { classes, isMediaComponent, isImageComponent } = ownerState;
    const slots = {
        root: [
            'root',
            isMediaComponent && 'media',
            isImageComponent && 'img'
        ]
    };
    return (0,composeClasses/* default */.A)(slots, getCardMediaUtilityClass, classes);
};
const CardMediaRoot = (0,styled/* default */.Ay)('div', {
    name: 'MuiCardMedia',
    slot: 'Root',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        const { isMediaComponent, isImageComponent } = ownerState;
        return [
            styles.root,
            isMediaComponent && styles.media,
            isImageComponent && styles.img
        ];
    }
})({
    display: 'block',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    variants: [
        {
            props: {
                isMediaComponent: true
            },
            style: {
                width: '100%'
            }
        },
        {
            props: {
                isImageComponent: true
            },
            style: {
                objectFit: 'cover'
            }
        }
    ]
});
const MEDIA_COMPONENTS = [
    'video',
    'audio',
    'picture',
    'iframe',
    'img'
];
const IMAGE_COMPONENTS = [
    'picture',
    'img'
];
const CardMedia = /*#__PURE__*/ react.forwardRef(function CardMedia(inProps, ref) {
    const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
        props: inProps,
        name: 'MuiCardMedia'
    });
    const { children, className, component = 'div', image, src, style, ...other } = props;
    const isMediaComponent = MEDIA_COMPONENTS.includes(component);
    const composedStyle = !isMediaComponent && image ? {
        backgroundImage: 'url("'.concat(image, '")'),
        ...style
    } : style;
    const ownerState = {
        ...props,
        component,
        isMediaComponent,
        isImageComponent: IMAGE_COMPONENTS.includes(component)
    };
    const classes = useUtilityClasses(ownerState);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(CardMediaRoot, {
        className: (0,clsx/* default */.A)(classes.root, className),
        as: component,
        role: !isMediaComponent && image ? 'img' : undefined,
        ref: ref,
        style: composedStyle,
        ownerState: ownerState,
        src: isMediaComponent ? image || src : undefined,
        ...other,
        children: children
    });
});
 false ? 0 : void 0;
/* harmony default export */ const CardMedia_CardMedia = (CardMedia);

// EXTERNAL MODULE: ./node_modules/@mui/material/esm/CardContent/CardContent.js + 1 modules
var CardContent = __webpack_require__(3046);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/Button/Button.js + 3 modules
var Button = __webpack_require__(3679);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/deepmerge/deepmerge.js
var deepmerge = __webpack_require__(3033);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/styled/styled.js
var styled_styled = __webpack_require__(9093);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/useThemeProps/useThemeProps.js + 1 modules
var useThemeProps = __webpack_require__(4674);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js
var extendSxProp = __webpack_require__(1971);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/createTheme/createTheme.js + 3 modules
var createTheme = __webpack_require__(5556);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/breakpoints/breakpoints.js
var breakpoints = __webpack_require__(7937);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/spacing/spacing.js + 1 modules
var spacing = __webpack_require__(5537);
;// ./node_modules/@mui/system/esm/Stack/createStack.js
'use client';














const defaultTheme = (0,createTheme/* default */.A)();
// widening Theme to any so that the consumer can own the theme structure.
const defaultCreateStyledComponent = (0,styled_styled/* default */.A)('div', {
  name: 'MuiStack',
  slot: 'Root'
});
function useThemePropsDefault(props) {
  return (0,useThemeProps/* default */.A)({
    props,
    name: 'MuiStack',
    defaultTheme
  });
}

/**
 * Return an array with the separator React element interspersed between
 * each React node of the input children.
 *
 * > joinChildren([1,2,3], 0)
 * [1,0,2,0,3]
 */
function joinChildren(children, separator) {
  const childrenArray = react.Children.toArray(children).filter(Boolean);
  return childrenArray.reduce((output, child, index) => {
    output.push(child);
    if (index < childrenArray.length - 1) {
      output.push(/*#__PURE__*/react.cloneElement(separator, {
        key: `separator-${index}`
      }));
    }
    return output;
  }, []);
}
const getSideFromDirection = direction => {
  return {
    row: 'Left',
    'row-reverse': 'Right',
    column: 'Top',
    'column-reverse': 'Bottom'
  }[direction];
};
const style = ({
  ownerState,
  theme
}) => {
  let styles = {
    display: 'flex',
    flexDirection: 'column',
    ...(0,breakpoints/* handleBreakpoints */.NI)({
      theme
    }, (0,breakpoints/* resolveBreakpointValues */.kW)({
      values: ownerState.direction,
      breakpoints: theme.breakpoints.values
    }), propValue => ({
      flexDirection: propValue
    }))
  };
  if (ownerState.spacing) {
    const transformer = (0,spacing/* createUnarySpacing */.LX)(theme);
    const base = Object.keys(theme.breakpoints.values).reduce((acc, breakpoint) => {
      if (typeof ownerState.spacing === 'object' && ownerState.spacing[breakpoint] != null || typeof ownerState.direction === 'object' && ownerState.direction[breakpoint] != null) {
        acc[breakpoint] = true;
      }
      return acc;
    }, {});
    const directionValues = (0,breakpoints/* resolveBreakpointValues */.kW)({
      values: ownerState.direction,
      base
    });
    const spacingValues = (0,breakpoints/* resolveBreakpointValues */.kW)({
      values: ownerState.spacing,
      base
    });
    if (typeof directionValues === 'object') {
      Object.keys(directionValues).forEach((breakpoint, index, breakpoints) => {
        const directionValue = directionValues[breakpoint];
        if (!directionValue) {
          const previousDirectionValue = index > 0 ? directionValues[breakpoints[index - 1]] : 'column';
          directionValues[breakpoint] = previousDirectionValue;
        }
      });
    }
    const styleFromPropValue = (propValue, breakpoint) => {
      if (ownerState.useFlexGap) {
        return {
          gap: (0,spacing/* getValue */._W)(transformer, propValue)
        };
      }
      return {
        // The useFlexGap={false} implement relies on each child to give up control of the margin.
        // We need to reset the margin to avoid double spacing.
        '& > :not(style):not(style)': {
          margin: 0
        },
        '& > :not(style) ~ :not(style)': {
          [`margin${getSideFromDirection(breakpoint ? directionValues[breakpoint] : ownerState.direction)}`]: (0,spacing/* getValue */._W)(transformer, propValue)
        }
      };
    };
    styles = (0,deepmerge/* default */.A)(styles, (0,breakpoints/* handleBreakpoints */.NI)({
      theme
    }, spacingValues, styleFromPropValue));
  }
  styles = (0,breakpoints/* mergeBreakpointsInOrder */.iZ)(theme.breakpoints, styles);
  return styles;
};
function createStack(options = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent = defaultCreateStyledComponent,
    useThemeProps = useThemePropsDefault,
    componentName = 'MuiStack'
  } = options;
  const useUtilityClasses = () => {
    const slots = {
      root: ['root']
    };
    return (0,composeClasses/* default */.A)(slots, slot => (0,generateUtilityClass/* default */.Ay)(componentName, slot), {});
  };
  const StackRoot = createStyledComponent(style);
  const Stack = /*#__PURE__*/react.forwardRef(function Grid(inProps, ref) {
    const themeProps = useThemeProps(inProps);
    const props = (0,extendSxProp/* default */.A)(themeProps); // `color` type conflicts with html color attribute.
    const {
      component = 'div',
      direction = 'column',
      spacing = 0,
      divider,
      children,
      className,
      useFlexGap = false,
      ...other
    } = props;
    const ownerState = {
      direction,
      spacing,
      useFlexGap
    };
    const classes = useUtilityClasses();
    return /*#__PURE__*/(0,jsx_runtime.jsx)(StackRoot, {
      as: component,
      ownerState: ownerState,
      ref: ref,
      className: (0,clsx/* default */.A)(classes.root, className),
      ...other,
      children: divider ? joinChildren(children, divider) : children
    });
  });
   false ? 0 : void 0;
  return Stack;
}
;// ./node_modules/@mui/material/esm/Stack/Stack.js
/* __next_internal_client_entry_do_not_use__ default auto */ 



const Stack = createStack({
    createStyledComponent: (0,styled/* default */.Ay)('div', {
        name: 'MuiStack',
        slot: 'Root'
    }),
    useThemeProps: (inProps)=>(0,DefaultPropsProvider/* useDefaultProps */.b)({
            props: inProps,
            name: 'MuiStack'
        })
});
 false ? 0 : void 0;
/* harmony default export */ const Stack_Stack = (Stack);

// EXTERNAL MODULE: ./node_modules/@mui/material/esm/utils/createSvgIcon.js + 2 modules
var createSvgIcon = __webpack_require__(6914);
;// ./node_modules/@mui/icons-material/esm/Coffee.js
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const Coffee = ((0,createSvgIcon/* default */.A)(/*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
    d: "M18.5 3H6c-1.1 0-2 .9-2 2v5.71c0 3.83 2.95 7.18 6.78 7.29 3.96.12 7.22-3.06 7.22-7v-1h.5c1.93 0 3.5-1.57 3.5-3.5S20.43 3 18.5 3M16 5v3H6V5zm2.5 3H18V5h.5c.83 0 1.5.67 1.5 1.5S19.33 8 18.5 8M4 19h16v2H4z"
}), 'Coffee'));

// EXTERNAL MODULE: ./node_modules/@mui/icons-material/esm/LocalCafe.js
var LocalCafe = __webpack_require__(8302);
;// ./node_modules/@mui/icons-material/esm/MenuBook.js
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const MenuBook = ((0,createSvgIcon/* default */.A)([
    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        d: "M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1m0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5z"
    }, "0"),
    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        d: "M17.5 10.5c.88 0 1.73.09 2.5.26V9.24c-.79-.15-1.64-.24-2.5-.24-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99M13 12.49v1.66c1.13-.64 2.7-.99 4.5-.99.88 0 1.73.09 2.5.26V11.9c-.79-.15-1.64-.24-2.5-.24-1.7 0-3.24.3-4.5.83m4.5 1.84c-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99.88 0 1.73.09 2.5.26v-1.52c-.79-.16-1.64-.24-2.5-.24"
    }, "1")
], 'MenuBook'));

;// ./pages/index.js
// pages/index.js





function Home() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        sx: {
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            bgcolor: "primary.main",
            color: "white"
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper/* default */.A, {
                elevation: 0,
                sx: {
                    p: 4,
                    mb: 4,
                    bgcolor: "transparent"
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "h2",
                        component: "h1",
                        gutterBottom: true,
                        children: "Welcome to The Brewery"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "h5",
                        color: "text.secondary",
                        gutterBottom: true,
                        children: "Specialty Coffee Experience"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                        sx: {
                            display: "flex",
                            justifyContent: "center",
                            mt: 2
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Coffee, {
                            sx: {
                                fontSize: 40,
                                color: "white",
                                mr: 1
                            }
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.A, {
                container: true,
                spacing: 4,
                sx: {
                    mt: 2,
                    width: "100%",
                    maxWidth: "900px"
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.A, {
                        item: true,
                        xs: 12,
                        md: 6,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.A, {
                            elevation: 3,
                            sx: {
                                bgcolor: "background.paper",
                                color: "text.primary"
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(CardMedia_CardMedia, {
                                    component: "img",
                                    height: "240",
                                    image: "/your_image.jpg",
                                    alt: "Coffee Shop",
                                    sx: {
                                        objectFit: "cover"
                                    }
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.A, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                            variant: "h5",
                                            component: "div",
                                            gutterBottom: true,
                                            children: "Our Coffee Shop"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                            variant: "body1",
                                            color: "text.secondary",
                                            children: "Experience the finest coffee in a cozy atmosphere. We source our beans from sustainable farms around the world."
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                            variant: "contained",
                                            color: "primary",
                                            startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(LocalCafe/* default */.A, {}),
                                            sx: {
                                                mt: 2
                                            },
                                            children: "View Menu"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.A, {
                        item: true,
                        xs: 12,
                        md: 6,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.A, {
                            elevation: 3,
                            sx: {
                                bgcolor: "background.paper",
                                color: "text.primary"
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.A, {
                                sx: {
                                    height: "100%"
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                        variant: "h5",
                                        component: "div",
                                        gutterBottom: true,
                                        children: "Our Recommendations"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack_Stack, {
                                        spacing: 2,
                                        sx: {
                                            mt: 3
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper/* default */.A, {
                                                elevation: 1,
                                                sx: {
                                                    p: 2,
                                                    bgcolor: "background.default",
                                                    color: "text.primary"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                                        variant: "h6",
                                                        children: "Recommended Products"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                                        variant: "body2",
                                                        children: "Explore our curated selection of coffee beans and brewing equipment."
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper/* default */.A, {
                                                elevation: 1,
                                                sx: {
                                                    p: 2,
                                                    bgcolor: "background.default",
                                                    color: "text.primary"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                                        variant: "h6",
                                                        children: "Subscription Service"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                                        variant: "body2",
                                                        children: "Get fresh coffee delivered to your door regularly."
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                        variant: "outlined",
                                        color: "secondary",
                                        startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuBook, {}),
                                        sx: {
                                            mt: 3
                                        },
                                        children: "Subscribe Now"
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        ]
    });
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [362,636,593,792], () => (__webpack_exec__(2936)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);