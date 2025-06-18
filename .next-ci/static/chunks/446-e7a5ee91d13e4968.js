"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[446],{

/***/ 619:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Tabs_Tabs)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(4232);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(9241);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(3323);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/RtlProvider/index.js
var RtlProvider = __webpack_require__(1870);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/useSlotProps/useSlotProps.js
var useSlotProps = __webpack_require__(3073);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/styles/styled.js
var styled = __webpack_require__(9289);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/styles/useTheme.js
var useTheme = __webpack_require__(4570);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/utils/memoTheme.js + 1 modules
var memoTheme = __webpack_require__(11);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(4656);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/utils/debounce.js
var debounce = __webpack_require__(6278);
;// ./node_modules/@mui/material/esm/internal/animate.js
function easeInOutSin(time) {
    return (1 + Math.sin(Math.PI * time - Math.PI / 2)) / 2;
}
function animate(property, element, to) {
    let options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, cb = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : ()=>{};
    const { ease = easeInOutSin, duration = 300 // standard
     } = options;
    let start = null;
    const from = element[property];
    let cancelled = false;
    const cancel = ()=>{
        cancelled = true;
    };
    const step = (timestamp)=>{
        if (cancelled) {
            cb(new Error('Animation cancelled'));
            return;
        }
        if (start === null) {
            start = timestamp;
        }
        const time = Math.min(1, (timestamp - start) / duration);
        element[property] = ease(time) * (to - from) + from;
        if (time >= 1) {
            requestAnimationFrame(()=>{
                cb(null);
            });
            return;
        }
        requestAnimationFrame(step);
    };
    if (from === to) {
        cb(new Error('Element already at target position'));
        return cancel;
    }
    requestAnimationFrame(step);
    return cancel;
}

// EXTERNAL MODULE: ./node_modules/@mui/material/esm/utils/useEnhancedEffect.js
var useEnhancedEffect = __webpack_require__(8759);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/utils/ownerWindow.js
var ownerWindow = __webpack_require__(4400);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7876);
;// ./node_modules/@mui/material/esm/Tabs/ScrollbarSize.js
/* __next_internal_client_entry_do_not_use__ default auto */ 




const styles = {
    width: 99,
    height: 99,
    position: 'absolute',
    top: -9999,
    overflow: 'scroll'
};
/**
 * @ignore - internal component.
 * The component originates from https://github.com/STORIS/react-scrollbar-size.
 * It has been moved into the core in order to minimize the bundle size.
 */ function ScrollbarSize(props) {
    const { onChange, ...other } = props;
    const scrollbarHeight = react.useRef();
    const nodeRef = react.useRef(null);
    const setMeasurements = ()=>{
        scrollbarHeight.current = nodeRef.current.offsetHeight - nodeRef.current.clientHeight;
    };
    (0,useEnhancedEffect/* default */.A)(()=>{
        const handleResize = (0,debounce/* default */.A)(()=>{
            const prevHeight = scrollbarHeight.current;
            setMeasurements();
            if (prevHeight !== scrollbarHeight.current) {
                onChange(scrollbarHeight.current);
            }
        });
        const containerWindow = (0,ownerWindow/* default */.A)(nodeRef.current);
        containerWindow.addEventListener('resize', handleResize);
        return ()=>{
            handleResize.clear();
            containerWindow.removeEventListener('resize', handleResize);
        };
    }, [
        onChange
    ]);
    react.useEffect(()=>{
        setMeasurements();
        onChange(scrollbarHeight.current);
    }, [
        onChange
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        style: styles,
        ...other,
        ref: nodeRef
    });
}
 false ? 0 : void 0;

// EXTERNAL MODULE: ./node_modules/@mui/material/esm/utils/createSvgIcon.js + 2 modules
var createSvgIcon = __webpack_require__(6914);
;// ./node_modules/@mui/material/esm/internal/svg-icons/KeyboardArrowLeft.js
/* __next_internal_client_entry_do_not_use__ default auto */ 

/**
 * @ignore - internal component.
 */ 
/* harmony default export */ const KeyboardArrowLeft = ((0,createSvgIcon/* default */.A)(/*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
    d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
}), 'KeyboardArrowLeft'));

;// ./node_modules/@mui/material/esm/internal/svg-icons/KeyboardArrowRight.js
/* __next_internal_client_entry_do_not_use__ default auto */ 

/**
 * @ignore - internal component.
 */ 
/* harmony default export */ const KeyboardArrowRight = ((0,createSvgIcon/* default */.A)(/*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
    d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
}), 'KeyboardArrowRight'));

// EXTERNAL MODULE: ./node_modules/@mui/material/esm/ButtonBase/ButtonBase.js + 9 modules
var ButtonBase = __webpack_require__(6182);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(4457);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(1849);
;// ./node_modules/@mui/material/esm/TabScrollButton/tabScrollButtonClasses.js


function getTabScrollButtonUtilityClass(slot) {
    return (0,generateUtilityClass/* default */.Ay)('MuiTabScrollButton', slot);
}
const tabScrollButtonClasses = (0,generateUtilityClasses/* default */.A)('MuiTabScrollButton', [
    'root',
    'vertical',
    'horizontal',
    'disabled'
]);
/* harmony default export */ const TabScrollButton_tabScrollButtonClasses = (tabScrollButtonClasses);

;// ./node_modules/@mui/material/esm/TabScrollButton/TabScrollButton.js
/* __next_internal_client_entry_do_not_use__ default auto */ /* eslint-disable jsx-a11y/aria-role */ 












const useUtilityClasses = (ownerState)=>{
    const { classes, orientation, disabled } = ownerState;
    const slots = {
        root: [
            'root',
            orientation,
            disabled && 'disabled'
        ]
    };
    return (0,composeClasses/* default */.A)(slots, getTabScrollButtonUtilityClass, classes);
};
const TabScrollButtonRoot = (0,styled/* default */.Ay)(ButtonBase/* default */.A, {
    name: 'MuiTabScrollButton',
    slot: 'Root',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.root,
            ownerState.orientation && styles[ownerState.orientation]
        ];
    }
})({
    width: 40,
    flexShrink: 0,
    opacity: 0.8,
    ["&.".concat(TabScrollButton_tabScrollButtonClasses.disabled)]: {
        opacity: 0
    },
    variants: [
        {
            props: {
                orientation: 'vertical'
            },
            style: {
                width: '100%',
                height: 40,
                '& svg': {
                    transform: 'var(--TabScrollButton-svgRotate)'
                }
            }
        }
    ]
});
const TabScrollButton = /*#__PURE__*/ react.forwardRef(function TabScrollButton(inProps, ref) {
    const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
        props: inProps,
        name: 'MuiTabScrollButton'
    });
    const { className, slots = {}, slotProps = {}, direction, orientation, disabled, ...other } = props;
    const isRtl = (0,RtlProvider/* useRtl */.I)();
    const ownerState = {
        isRtl,
        ...props
    };
    const classes = useUtilityClasses(ownerState);
    var _slots_StartScrollButtonIcon;
    const StartButtonIcon = (_slots_StartScrollButtonIcon = slots.StartScrollButtonIcon) !== null && _slots_StartScrollButtonIcon !== void 0 ? _slots_StartScrollButtonIcon : KeyboardArrowLeft;
    var _slots_EndScrollButtonIcon;
    const EndButtonIcon = (_slots_EndScrollButtonIcon = slots.EndScrollButtonIcon) !== null && _slots_EndScrollButtonIcon !== void 0 ? _slots_EndScrollButtonIcon : KeyboardArrowRight;
    const startButtonIconProps = (0,useSlotProps/* default */.A)({
        elementType: StartButtonIcon,
        externalSlotProps: slotProps.startScrollButtonIcon,
        additionalProps: {
            fontSize: 'small'
        },
        ownerState
    });
    const endButtonIconProps = (0,useSlotProps/* default */.A)({
        elementType: EndButtonIcon,
        externalSlotProps: slotProps.endScrollButtonIcon,
        additionalProps: {
            fontSize: 'small'
        },
        ownerState
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(TabScrollButtonRoot, {
        component: "div",
        className: (0,clsx/* default */.A)(classes.root, className),
        ref: ref,
        role: null,
        ownerState: ownerState,
        tabIndex: null,
        ...other,
        style: {
            ...other.style,
            ...orientation === 'vertical' && {
                '--TabScrollButton-svgRotate': "rotate(".concat(isRtl ? -90 : 90, "deg)")
            }
        },
        children: direction === 'left' ? /*#__PURE__*/ (0,jsx_runtime.jsx)(StartButtonIcon, {
            ...startButtonIconProps
        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(EndButtonIcon, {
            ...endButtonIconProps
        })
    });
});
 false ? 0 : void 0;
/* harmony default export */ const TabScrollButton_TabScrollButton = (TabScrollButton);

// EXTERNAL MODULE: ./node_modules/@mui/material/esm/utils/useEventCallback.js
var useEventCallback = __webpack_require__(5719);
;// ./node_modules/@mui/material/esm/Tabs/tabsClasses.js


function getTabsUtilityClass(slot) {
    return (0,generateUtilityClass/* default */.Ay)('MuiTabs', slot);
}
const tabsClasses = (0,generateUtilityClasses/* default */.A)('MuiTabs', [
    'root',
    'vertical',
    'list',
    'flexContainer',
    'flexContainerVertical',
    'centered',
    'scroller',
    'fixed',
    'scrollableX',
    'scrollableY',
    'hideScrollbar',
    'scrollButtons',
    'scrollButtonsHideMobile',
    'indicator'
]);
/* harmony default export */ const Tabs_tabsClasses = (tabsClasses);

// EXTERNAL MODULE: ./node_modules/@mui/material/esm/utils/ownerDocument.js
var ownerDocument = __webpack_require__(7201);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/utils/useSlot.js
var useSlot = __webpack_require__(5852);
;// ./node_modules/@mui/material/esm/Tabs/Tabs.js
/* __next_internal_client_entry_do_not_use__ default auto */ 




















const nextItem = (list, item)=>{
    if (list === item) {
        return list.firstChild;
    }
    if (item && item.nextElementSibling) {
        return item.nextElementSibling;
    }
    return list.firstChild;
};
const previousItem = (list, item)=>{
    if (list === item) {
        return list.lastChild;
    }
    if (item && item.previousElementSibling) {
        return item.previousElementSibling;
    }
    return list.lastChild;
};
const moveFocus = (list, currentFocus, traversalFunction)=>{
    let wrappedOnce = false;
    let nextFocus = traversalFunction(list, currentFocus);
    while(nextFocus){
        // Prevent infinite loop.
        if (nextFocus === list.firstChild) {
            if (wrappedOnce) {
                return;
            }
            wrappedOnce = true;
        }
        // Same logic as useAutocomplete.js
        const nextFocusDisabled = nextFocus.disabled || nextFocus.getAttribute('aria-disabled') === 'true';
        if (!nextFocus.hasAttribute('tabindex') || nextFocusDisabled) {
            // Move to the next element.
            nextFocus = traversalFunction(list, nextFocus);
        } else {
            nextFocus.focus();
            return;
        }
    }
};
const Tabs_useUtilityClasses = (ownerState)=>{
    const { vertical, fixed, hideScrollbar, scrollableX, scrollableY, centered, scrollButtonsHideMobile, classes } = ownerState;
    const slots = {
        root: [
            'root',
            vertical && 'vertical'
        ],
        scroller: [
            'scroller',
            fixed && 'fixed',
            hideScrollbar && 'hideScrollbar',
            scrollableX && 'scrollableX',
            scrollableY && 'scrollableY'
        ],
        list: [
            'list',
            'flexContainer',
            vertical && 'flexContainerVertical',
            vertical && 'vertical',
            centered && 'centered'
        ],
        indicator: [
            'indicator'
        ],
        scrollButtons: [
            'scrollButtons',
            scrollButtonsHideMobile && 'scrollButtonsHideMobile'
        ],
        scrollableX: [
            scrollableX && 'scrollableX'
        ],
        hideScrollbar: [
            hideScrollbar && 'hideScrollbar'
        ]
    };
    return (0,composeClasses/* default */.A)(slots, getTabsUtilityClass, classes);
};
const TabsRoot = (0,styled/* default */.Ay)('div', {
    name: 'MuiTabs',
    slot: 'Root',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            {
                ["& .".concat(Tabs_tabsClasses.scrollButtons)]: styles.scrollButtons
            },
            {
                ["& .".concat(Tabs_tabsClasses.scrollButtons)]: ownerState.scrollButtonsHideMobile && styles.scrollButtonsHideMobile
            },
            styles.root,
            ownerState.vertical && styles.vertical
        ];
    }
})((0,memoTheme/* default */.A)((param)=>{
    let { theme } = param;
    return {
        overflow: 'hidden',
        minHeight: 48,
        // Add iOS momentum scrolling for iOS < 13.0
        WebkitOverflowScrolling: 'touch',
        display: 'flex',
        variants: [
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.vertical;
                },
                style: {
                    flexDirection: 'column'
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.scrollButtonsHideMobile;
                },
                style: {
                    ["& .".concat(Tabs_tabsClasses.scrollButtons)]: {
                        [theme.breakpoints.down('sm')]: {
                            display: 'none'
                        }
                    }
                }
            }
        ]
    };
}));
const TabsScroller = (0,styled/* default */.Ay)('div', {
    name: 'MuiTabs',
    slot: 'Scroller',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.scroller,
            ownerState.fixed && styles.fixed,
            ownerState.hideScrollbar && styles.hideScrollbar,
            ownerState.scrollableX && styles.scrollableX,
            ownerState.scrollableY && styles.scrollableY
        ];
    }
})({
    position: 'relative',
    display: 'inline-block',
    flex: '1 1 auto',
    whiteSpace: 'nowrap',
    variants: [
        {
            props: (param)=>{
                let { ownerState } = param;
                return ownerState.fixed;
            },
            style: {
                overflowX: 'hidden',
                width: '100%'
            }
        },
        {
            props: (param)=>{
                let { ownerState } = param;
                return ownerState.hideScrollbar;
            },
            style: {
                // Hide dimensionless scrollbar on macOS
                scrollbarWidth: 'none',
                // Firefox
                '&::-webkit-scrollbar': {
                    display: 'none' // Safari + Chrome
                }
            }
        },
        {
            props: (param)=>{
                let { ownerState } = param;
                return ownerState.scrollableX;
            },
            style: {
                overflowX: 'auto',
                overflowY: 'hidden'
            }
        },
        {
            props: (param)=>{
                let { ownerState } = param;
                return ownerState.scrollableY;
            },
            style: {
                overflowY: 'auto',
                overflowX: 'hidden'
            }
        }
    ]
});
const List = (0,styled/* default */.Ay)('div', {
    name: 'MuiTabs',
    slot: 'List',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.list,
            styles.flexContainer,
            ownerState.vertical && styles.flexContainerVertical,
            ownerState.centered && styles.centered
        ];
    }
})({
    display: 'flex',
    variants: [
        {
            props: (param)=>{
                let { ownerState } = param;
                return ownerState.vertical;
            },
            style: {
                flexDirection: 'column'
            }
        },
        {
            props: (param)=>{
                let { ownerState } = param;
                return ownerState.centered;
            },
            style: {
                justifyContent: 'center'
            }
        }
    ]
});
const TabsIndicator = (0,styled/* default */.Ay)('span', {
    name: 'MuiTabs',
    slot: 'Indicator'
})((0,memoTheme/* default */.A)((param)=>{
    let { theme } = param;
    return {
        position: 'absolute',
        height: 2,
        bottom: 0,
        width: '100%',
        transition: theme.transitions.create(),
        variants: [
            {
                props: {
                    indicatorColor: 'primary'
                },
                style: {
                    backgroundColor: (theme.vars || theme).palette.primary.main
                }
            },
            {
                props: {
                    indicatorColor: 'secondary'
                },
                style: {
                    backgroundColor: (theme.vars || theme).palette.secondary.main
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.vertical;
                },
                style: {
                    height: '100%',
                    width: 2,
                    right: 0
                }
            }
        ]
    };
}));
const TabsScrollbarSize = (0,styled/* default */.Ay)(ScrollbarSize)({
    overflowX: 'auto',
    overflowY: 'hidden',
    // Hide dimensionless scrollbar on macOS
    scrollbarWidth: 'none',
    // Firefox
    '&::-webkit-scrollbar': {
        display: 'none' // Safari + Chrome
    }
});
const defaultIndicatorStyle = {};
let warnedOnceTabPresent = false;
const Tabs = /*#__PURE__*/ react.forwardRef(function Tabs(inProps, ref) {
    const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
        props: inProps,
        name: 'MuiTabs'
    });
    const theme = (0,useTheme/* default */.A)();
    const isRtl = (0,RtlProvider/* useRtl */.I)();
    const { 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledBy, action, centered = false, children: childrenProp, className, component = 'div', allowScrollButtonsMobile = false, indicatorColor = 'primary', onChange, orientation = 'horizontal', ScrollButtonComponent, // TODO: remove in v7 (deprecated in v6)
    scrollButtons = 'auto', selectionFollowsFocus, slots = {}, slotProps = {}, TabIndicatorProps = {}, // TODO: remove in v7 (deprecated in v6)
    TabScrollButtonProps = {}, // TODO: remove in v7 (deprecated in v6)
    textColor = 'primary', value, variant = 'standard', visibleScrollbar = false, ...other } = props;
    const scrollable = variant === 'scrollable';
    const vertical = orientation === 'vertical';
    const scrollStart = vertical ? 'scrollTop' : 'scrollLeft';
    const start = vertical ? 'top' : 'left';
    const end = vertical ? 'bottom' : 'right';
    const clientSize = vertical ? 'clientHeight' : 'clientWidth';
    const size = vertical ? 'height' : 'width';
    const ownerState = {
        ...props,
        component,
        allowScrollButtonsMobile,
        indicatorColor,
        orientation,
        vertical,
        scrollButtons,
        textColor,
        variant,
        visibleScrollbar,
        fixed: !scrollable,
        hideScrollbar: scrollable && !visibleScrollbar,
        scrollableX: scrollable && !vertical,
        scrollableY: scrollable && vertical,
        centered: centered && !scrollable,
        scrollButtonsHideMobile: !allowScrollButtonsMobile
    };
    const classes = Tabs_useUtilityClasses(ownerState);
    const startScrollButtonIconProps = (0,useSlotProps/* default */.A)({
        elementType: slots.StartScrollButtonIcon,
        externalSlotProps: slotProps.startScrollButtonIcon,
        ownerState
    });
    const endScrollButtonIconProps = (0,useSlotProps/* default */.A)({
        elementType: slots.EndScrollButtonIcon,
        externalSlotProps: slotProps.endScrollButtonIcon,
        ownerState
    });
    if (false) {}
    const [mounted, setMounted] = react.useState(false);
    const [indicatorStyle, setIndicatorStyle] = react.useState(defaultIndicatorStyle);
    const [displayStartScroll, setDisplayStartScroll] = react.useState(false);
    const [displayEndScroll, setDisplayEndScroll] = react.useState(false);
    const [updateScrollObserver, setUpdateScrollObserver] = react.useState(false);
    const [scrollerStyle, setScrollerStyle] = react.useState({
        overflow: 'hidden',
        scrollbarWidth: 0
    });
    const valueToIndex = new Map();
    const tabsRef = react.useRef(null);
    const tabListRef = react.useRef(null);
    const externalForwardedProps = {
        slots,
        slotProps: {
            indicator: TabIndicatorProps,
            scrollButton: TabScrollButtonProps,
            ...slotProps
        }
    };
    const getTabsMeta = ()=>{
        const tabsNode = tabsRef.current;
        let tabsMeta;
        if (tabsNode) {
            const rect = tabsNode.getBoundingClientRect();
            // create a new object with ClientRect class props + scrollLeft
            tabsMeta = {
                clientWidth: tabsNode.clientWidth,
                scrollLeft: tabsNode.scrollLeft,
                scrollTop: tabsNode.scrollTop,
                scrollWidth: tabsNode.scrollWidth,
                top: rect.top,
                bottom: rect.bottom,
                left: rect.left,
                right: rect.right
            };
        }
        let tabMeta;
        if (tabsNode && value !== false) {
            const children = tabListRef.current.children;
            if (children.length > 0) {
                const tab = children[valueToIndex.get(value)];
                if (false) {}
                tabMeta = tab ? tab.getBoundingClientRect() : null;
                if (false) {}
            }
        }
        return {
            tabsMeta,
            tabMeta
        };
    };
    const updateIndicatorState = (0,useEventCallback/* default */.A)(()=>{
        const { tabsMeta, tabMeta } = getTabsMeta();
        let startValue = 0;
        let startIndicator;
        if (vertical) {
            startIndicator = 'top';
            if (tabMeta && tabsMeta) {
                startValue = tabMeta.top - tabsMeta.top + tabsMeta.scrollTop;
            }
        } else {
            startIndicator = isRtl ? 'right' : 'left';
            if (tabMeta && tabsMeta) {
                startValue = (isRtl ? -1 : 1) * (tabMeta[startIndicator] - tabsMeta[startIndicator] + tabsMeta.scrollLeft);
            }
        }
        const newIndicatorStyle = {
            [startIndicator]: startValue,
            // May be wrong until the font is loaded.
            [size]: tabMeta ? tabMeta[size] : 0
        };
        if (typeof indicatorStyle[startIndicator] !== 'number' || typeof indicatorStyle[size] !== 'number') {
            setIndicatorStyle(newIndicatorStyle);
        } else {
            const dStart = Math.abs(indicatorStyle[startIndicator] - newIndicatorStyle[startIndicator]);
            const dSize = Math.abs(indicatorStyle[size] - newIndicatorStyle[size]);
            if (dStart >= 1 || dSize >= 1) {
                setIndicatorStyle(newIndicatorStyle);
            }
        }
    });
    const scroll = function(scrollValue) {
        let { animation = true } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (animation) {
            animate(scrollStart, tabsRef.current, scrollValue, {
                duration: theme.transitions.duration.standard
            });
        } else {
            tabsRef.current[scrollStart] = scrollValue;
        }
    };
    const moveTabsScroll = (delta)=>{
        let scrollValue = tabsRef.current[scrollStart];
        if (vertical) {
            scrollValue += delta;
        } else {
            scrollValue += delta * (isRtl ? -1 : 1);
        }
        scroll(scrollValue);
    };
    const getScrollSize = ()=>{
        const containerSize = tabsRef.current[clientSize];
        let totalSize = 0;
        const children = Array.from(tabListRef.current.children);
        for(let i = 0; i < children.length; i += 1){
            const tab = children[i];
            if (totalSize + tab[clientSize] > containerSize) {
                // If the first item is longer than the container size, then only scroll
                // by the container size.
                if (i === 0) {
                    totalSize = containerSize;
                }
                break;
            }
            totalSize += tab[clientSize];
        }
        return totalSize;
    };
    const handleStartScrollClick = ()=>{
        moveTabsScroll(-1 * getScrollSize());
    };
    const handleEndScrollClick = ()=>{
        moveTabsScroll(getScrollSize());
    };
    const [ScrollbarSlot, { onChange: scrollbarOnChange, ...scrollbarSlotProps }] = (0,useSlot/* default */.A)('scrollbar', {
        className: (0,clsx/* default */.A)(classes.scrollableX, classes.hideScrollbar),
        elementType: TabsScrollbarSize,
        shouldForwardComponentProp: true,
        externalForwardedProps,
        ownerState
    });
    // TODO Remove <ScrollbarSize /> as browser support for hiding the scrollbar
    // with CSS improves.
    const handleScrollbarSizeChange = react.useCallback((scrollbarWidth)=>{
        scrollbarOnChange === null || scrollbarOnChange === void 0 ? void 0 : scrollbarOnChange(scrollbarWidth);
        setScrollerStyle({
            overflow: null,
            scrollbarWidth
        });
    }, [
        scrollbarOnChange
    ]);
    const [ScrollButtonsSlot, scrollButtonSlotProps] = (0,useSlot/* default */.A)('scrollButtons', {
        className: (0,clsx/* default */.A)(classes.scrollButtons, TabScrollButtonProps.className),
        elementType: TabScrollButton_TabScrollButton,
        externalForwardedProps,
        ownerState,
        additionalProps: {
            orientation,
            slots: {
                StartScrollButtonIcon: slots.startScrollButtonIcon || slots.StartScrollButtonIcon,
                EndScrollButtonIcon: slots.endScrollButtonIcon || slots.EndScrollButtonIcon
            },
            slotProps: {
                startScrollButtonIcon: startScrollButtonIconProps,
                endScrollButtonIcon: endScrollButtonIconProps
            }
        }
    });
    const getConditionalElements = ()=>{
        const conditionalElements = {};
        conditionalElements.scrollbarSizeListener = scrollable ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ScrollbarSlot, {
            ...scrollbarSlotProps,
            onChange: handleScrollbarSizeChange
        }) : null;
        const scrollButtonsActive = displayStartScroll || displayEndScroll;
        const showScrollButtons = scrollable && (scrollButtons === 'auto' && scrollButtonsActive || scrollButtons === true);
        conditionalElements.scrollButtonStart = showScrollButtons ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ScrollButtonsSlot, {
            direction: isRtl ? 'right' : 'left',
            onClick: handleStartScrollClick,
            disabled: !displayStartScroll,
            ...scrollButtonSlotProps
        }) : null;
        conditionalElements.scrollButtonEnd = showScrollButtons ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ScrollButtonsSlot, {
            direction: isRtl ? 'left' : 'right',
            onClick: handleEndScrollClick,
            disabled: !displayEndScroll,
            ...scrollButtonSlotProps
        }) : null;
        return conditionalElements;
    };
    const scrollSelectedIntoView = (0,useEventCallback/* default */.A)((animation)=>{
        const { tabsMeta, tabMeta } = getTabsMeta();
        if (!tabMeta || !tabsMeta) {
            return;
        }
        if (tabMeta[start] < tabsMeta[start]) {
            // left side of button is out of view
            const nextScrollStart = tabsMeta[scrollStart] + (tabMeta[start] - tabsMeta[start]);
            scroll(nextScrollStart, {
                animation
            });
        } else if (tabMeta[end] > tabsMeta[end]) {
            // right side of button is out of view
            const nextScrollStart = tabsMeta[scrollStart] + (tabMeta[end] - tabsMeta[end]);
            scroll(nextScrollStart, {
                animation
            });
        }
    });
    const updateScrollButtonState = (0,useEventCallback/* default */.A)(()=>{
        if (scrollable && scrollButtons !== false) {
            setUpdateScrollObserver(!updateScrollObserver);
        }
    });
    react.useEffect(()=>{
        const handleResize = (0,debounce/* default */.A)(()=>{
            // If the Tabs component is replaced by Suspense with a fallback, the last
            // ResizeObserver's handler that runs because of the change in the layout is trying to
            // access a dom node that is no longer there (as the fallback component is being shown instead).
            // See https://github.com/mui/material-ui/issues/33276
            // TODO: Add tests that will ensure the component is not failing when
            // replaced by Suspense with a fallback, once React is updated to version 18
            if (tabsRef.current) {
                updateIndicatorState();
            }
        });
        let resizeObserver;
        /**
     * @type {MutationCallback}
     */ const handleMutation = (records)=>{
            records.forEach((record)=>{
                record.removedNodes.forEach((item)=>{
                    resizeObserver === null || resizeObserver === void 0 ? void 0 : resizeObserver.unobserve(item);
                });
                record.addedNodes.forEach((item)=>{
                    resizeObserver === null || resizeObserver === void 0 ? void 0 : resizeObserver.observe(item);
                });
            });
            handleResize();
            updateScrollButtonState();
        };
        const win = (0,ownerWindow/* default */.A)(tabsRef.current);
        win.addEventListener('resize', handleResize);
        let mutationObserver;
        if (typeof ResizeObserver !== 'undefined') {
            resizeObserver = new ResizeObserver(handleResize);
            Array.from(tabListRef.current.children).forEach((child)=>{
                resizeObserver.observe(child);
            });
        }
        if (typeof MutationObserver !== 'undefined') {
            mutationObserver = new MutationObserver(handleMutation);
            mutationObserver.observe(tabListRef.current, {
                childList: true
            });
        }
        return ()=>{
            handleResize.clear();
            win.removeEventListener('resize', handleResize);
            mutationObserver === null || mutationObserver === void 0 ? void 0 : mutationObserver.disconnect();
            resizeObserver === null || resizeObserver === void 0 ? void 0 : resizeObserver.disconnect();
        };
    }, [
        updateIndicatorState,
        updateScrollButtonState
    ]);
    /**
   * Toggle visibility of start and end scroll buttons
   * Using IntersectionObserver on first and last Tabs.
   */ react.useEffect(()=>{
        const tabListChildren = Array.from(tabListRef.current.children);
        const length = tabListChildren.length;
        if (typeof IntersectionObserver !== 'undefined' && length > 0 && scrollable && scrollButtons !== false) {
            const firstTab = tabListChildren[0];
            const lastTab = tabListChildren[length - 1];
            const observerOptions = {
                root: tabsRef.current,
                threshold: 0.99
            };
            const handleScrollButtonStart = (entries)=>{
                setDisplayStartScroll(!entries[0].isIntersecting);
            };
            const firstObserver = new IntersectionObserver(handleScrollButtonStart, observerOptions);
            firstObserver.observe(firstTab);
            const handleScrollButtonEnd = (entries)=>{
                setDisplayEndScroll(!entries[0].isIntersecting);
            };
            const lastObserver = new IntersectionObserver(handleScrollButtonEnd, observerOptions);
            lastObserver.observe(lastTab);
            return ()=>{
                firstObserver.disconnect();
                lastObserver.disconnect();
            };
        }
        return undefined;
    }, [
        scrollable,
        scrollButtons,
        updateScrollObserver,
        childrenProp === null || childrenProp === void 0 ? void 0 : childrenProp.length
    ]);
    react.useEffect(()=>{
        setMounted(true);
    }, []);
    react.useEffect(()=>{
        updateIndicatorState();
    });
    react.useEffect(()=>{
        // Don't animate on the first render.
        scrollSelectedIntoView(defaultIndicatorStyle !== indicatorStyle);
    }, [
        scrollSelectedIntoView,
        indicatorStyle
    ]);
    react.useImperativeHandle(action, ()=>({
            updateIndicator: updateIndicatorState,
            updateScrollButtons: updateScrollButtonState
        }), [
        updateIndicatorState,
        updateScrollButtonState
    ]);
    const [IndicatorSlot, indicatorSlotProps] = (0,useSlot/* default */.A)('indicator', {
        className: (0,clsx/* default */.A)(classes.indicator, TabIndicatorProps.className),
        elementType: TabsIndicator,
        externalForwardedProps,
        ownerState,
        additionalProps: {
            style: indicatorStyle
        }
    });
    const indicator = /*#__PURE__*/ (0,jsx_runtime.jsx)(IndicatorSlot, {
        ...indicatorSlotProps
    });
    let childIndex = 0;
    const children = react.Children.map(childrenProp, (child)=>{
        if (!/*#__PURE__*/ react.isValidElement(child)) {
            return null;
        }
        if (false) {}
        const childValue = child.props.value === undefined ? childIndex : child.props.value;
        valueToIndex.set(childValue, childIndex);
        const selected = childValue === value;
        childIndex += 1;
        return /*#__PURE__*/ react.cloneElement(child, {
            fullWidth: variant === 'fullWidth',
            indicator: selected && !mounted && indicator,
            selected,
            selectionFollowsFocus,
            onChange,
            textColor,
            value: childValue,
            ...childIndex === 1 && value === false && !child.props.tabIndex ? {
                tabIndex: 0
            } : {}
        });
    });
    const handleKeyDown = (event)=>{
        // Check if a modifier key (Alt, Shift, Ctrl, Meta) is pressed
        if (event.altKey || event.shiftKey || event.ctrlKey || event.metaKey) {
            return;
        }
        const list = tabListRef.current;
        const currentFocus = (0,ownerDocument/* default */.A)(list).activeElement;
        // Keyboard navigation assumes that [role="tab"] are siblings
        // though we might warn in the future about nested, interactive elements
        // as a a11y violation
        const role = currentFocus.getAttribute('role');
        if (role !== 'tab') {
            return;
        }
        let previousItemKey = orientation === 'horizontal' ? 'ArrowLeft' : 'ArrowUp';
        let nextItemKey = orientation === 'horizontal' ? 'ArrowRight' : 'ArrowDown';
        if (orientation === 'horizontal' && isRtl) {
            // swap previousItemKey with nextItemKey
            previousItemKey = 'ArrowRight';
            nextItemKey = 'ArrowLeft';
        }
        switch(event.key){
            case previousItemKey:
                event.preventDefault();
                moveFocus(list, currentFocus, previousItem);
                break;
            case nextItemKey:
                event.preventDefault();
                moveFocus(list, currentFocus, nextItem);
                break;
            case 'Home':
                event.preventDefault();
                moveFocus(list, null, nextItem);
                break;
            case 'End':
                event.preventDefault();
                moveFocus(list, null, previousItem);
                break;
            default:
                break;
        }
    };
    const conditionalElements = getConditionalElements();
    const [RootSlot, rootSlotProps] = (0,useSlot/* default */.A)('root', {
        ref,
        className: (0,clsx/* default */.A)(classes.root, className),
        elementType: TabsRoot,
        externalForwardedProps: {
            ...externalForwardedProps,
            ...other,
            component
        },
        ownerState
    });
    const [ScrollerSlot, scrollerSlotProps] = (0,useSlot/* default */.A)('scroller', {
        ref: tabsRef,
        className: classes.scroller,
        elementType: TabsScroller,
        externalForwardedProps,
        ownerState,
        additionalProps: {
            style: {
                overflow: scrollerStyle.overflow,
                [vertical ? "margin".concat(isRtl ? 'Left' : 'Right') : 'marginBottom']: visibleScrollbar ? undefined : -scrollerStyle.scrollbarWidth
            }
        }
    });
    const [ListSlot, listSlotProps] = (0,useSlot/* default */.A)('list', {
        ref: tabListRef,
        className: (0,clsx/* default */.A)(classes.list, classes.flexContainer),
        elementType: List,
        externalForwardedProps,
        ownerState,
        getSlotProps: (handlers)=>({
                ...handlers,
                onKeyDown: (event)=>{
                    var _handlers_onKeyDown;
                    handleKeyDown(event);
                    (_handlers_onKeyDown = handlers.onKeyDown) === null || _handlers_onKeyDown === void 0 ? void 0 : _handlers_onKeyDown.call(handlers, event);
                }
            })
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(RootSlot, {
        ...rootSlotProps,
        children: [
            conditionalElements.scrollButtonStart,
            conditionalElements.scrollbarSizeListener,
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ScrollerSlot, {
                ...scrollerSlotProps,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ListSlot, {
                        "aria-label": ariaLabel,
                        "aria-labelledby": ariaLabelledBy,
                        "aria-orientation": orientation === 'vertical' ? 'vertical' : null,
                        role: "tablist",
                        ...listSlotProps,
                        children: children
                    }),
                    mounted && indicator
                ]
            }),
            conditionalElements.scrollButtonEnd
        ]
    });
});
 false ? 0 : void 0;
/* harmony default export */ const Tabs_Tabs = (Tabs);


/***/ }),

/***/ 1784:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ DialogContentText_DialogContentText)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(4232);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(9241);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(3323);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/styles/rootShouldForwardProp.js
var rootShouldForwardProp = __webpack_require__(479);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/styles/styled.js
var styled = __webpack_require__(9289);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(4656);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(3511);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(4457);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(1849);
;// ./node_modules/@mui/material/esm/DialogContentText/dialogContentTextClasses.js


function getDialogContentTextUtilityClass(slot) {
    return (0,generateUtilityClass/* default */.Ay)('MuiDialogContentText', slot);
}
const dialogContentTextClasses = (0,generateUtilityClasses/* default */.A)('MuiDialogContentText', [
    'root'
]);
/* harmony default export */ const DialogContentText_dialogContentTextClasses = ((/* unused pure expression or super */ null && (dialogContentTextClasses)));

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7876);
;// ./node_modules/@mui/material/esm/DialogContentText/DialogContentText.js
/* __next_internal_client_entry_do_not_use__ default auto */ 









const useUtilityClasses = (ownerState)=>{
    const { classes } = ownerState;
    const slots = {
        root: [
            'root'
        ]
    };
    const composedClasses = (0,composeClasses/* default */.A)(slots, getDialogContentTextUtilityClass, classes);
    return {
        ...classes,
        // forward classes to the Typography
        ...composedClasses
    };
};
const DialogContentTextRoot = (0,styled/* default */.Ay)(Typography/* default */.A, {
    shouldForwardProp: (prop)=>(0,rootShouldForwardProp/* default */.A)(prop) || prop === 'classes',
    name: 'MuiDialogContentText',
    slot: 'Root'
})({});
const DialogContentText = /*#__PURE__*/ react.forwardRef(function DialogContentText(inProps, ref) {
    const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
        props: inProps,
        name: 'MuiDialogContentText'
    });
    const { children, className, ...ownerState } = props;
    const classes = useUtilityClasses(ownerState);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContentTextRoot, {
        component: "p",
        variant: "body1",
        color: "textSecondary",
        ref: ref,
        ownerState: ownerState,
        className: (0,clsx/* default */.A)(classes.root, className),
        ...props,
        classes: classes
    });
});
 false ? 0 : void 0;
/* harmony default export */ const DialogContentText_DialogContentText = (DialogContentText);


/***/ }),

/***/ 4128:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6914);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7876);
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"
}), 'Edit'));


/***/ }),

/***/ 4871:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6914);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7876);
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
}), 'Delete'));


/***/ }),

/***/ 8367:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Tab_Tab)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(4232);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(9241);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(3323);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/ButtonBase/ButtonBase.js + 9 modules
var ButtonBase = __webpack_require__(6182);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/utils/capitalize.js
var capitalize = __webpack_require__(5055);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/styles/styled.js
var styled = __webpack_require__(9289);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/utils/memoTheme.js + 1 modules
var memoTheme = __webpack_require__(11);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(4656);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(4457);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(1849);
;// ./node_modules/@mui/material/esm/Tab/tabClasses.js


function getTabUtilityClass(slot) {
    return (0,generateUtilityClass/* default */.Ay)('MuiTab', slot);
}
const tabClasses = (0,generateUtilityClasses/* default */.A)('MuiTab', [
    'root',
    'labelIcon',
    'textColorInherit',
    'textColorPrimary',
    'textColorSecondary',
    'selected',
    'disabled',
    'fullWidth',
    'wrapped',
    'iconWrapper',
    'icon'
]);
/* harmony default export */ const Tab_tabClasses = (tabClasses);

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7876);
;// ./node_modules/@mui/material/esm/Tab/Tab.js
/* __next_internal_client_entry_do_not_use__ default auto */ 











const useUtilityClasses = (ownerState)=>{
    const { classes, textColor, fullWidth, wrapped, icon, label, selected, disabled } = ownerState;
    const slots = {
        root: [
            'root',
            icon && label && 'labelIcon',
            "textColor".concat((0,capitalize/* default */.A)(textColor)),
            fullWidth && 'fullWidth',
            wrapped && 'wrapped',
            selected && 'selected',
            disabled && 'disabled'
        ],
        icon: [
            'iconWrapper',
            'icon'
        ]
    };
    return (0,composeClasses/* default */.A)(slots, getTabUtilityClass, classes);
};
const TabRoot = (0,styled/* default */.Ay)(ButtonBase/* default */.A, {
    name: 'MuiTab',
    slot: 'Root',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.root,
            ownerState.label && ownerState.icon && styles.labelIcon,
            styles["textColor".concat((0,capitalize/* default */.A)(ownerState.textColor))],
            ownerState.fullWidth && styles.fullWidth,
            ownerState.wrapped && styles.wrapped,
            {
                ["& .".concat(Tab_tabClasses.iconWrapper)]: styles.iconWrapper
            },
            {
                ["& .".concat(Tab_tabClasses.icon)]: styles.icon
            }
        ];
    }
})((0,memoTheme/* default */.A)((param)=>{
    let { theme } = param;
    return {
        ...theme.typography.button,
        maxWidth: 360,
        minWidth: 90,
        position: 'relative',
        minHeight: 48,
        flexShrink: 0,
        padding: '12px 16px',
        overflow: 'hidden',
        whiteSpace: 'normal',
        textAlign: 'center',
        lineHeight: 1.25,
        variants: [
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.label && (ownerState.iconPosition === 'top' || ownerState.iconPosition === 'bottom');
                },
                style: {
                    flexDirection: 'column'
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.label && ownerState.iconPosition !== 'top' && ownerState.iconPosition !== 'bottom';
                },
                style: {
                    flexDirection: 'row'
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.icon && ownerState.label;
                },
                style: {
                    minHeight: 72,
                    paddingTop: 9,
                    paddingBottom: 9
                }
            },
            {
                props: (param)=>{
                    let { ownerState, iconPosition } = param;
                    return ownerState.icon && ownerState.label && iconPosition === 'top';
                },
                style: {
                    ["& > .".concat(Tab_tabClasses.icon)]: {
                        marginBottom: 6
                    }
                }
            },
            {
                props: (param)=>{
                    let { ownerState, iconPosition } = param;
                    return ownerState.icon && ownerState.label && iconPosition === 'bottom';
                },
                style: {
                    ["& > .".concat(Tab_tabClasses.icon)]: {
                        marginTop: 6
                    }
                }
            },
            {
                props: (param)=>{
                    let { ownerState, iconPosition } = param;
                    return ownerState.icon && ownerState.label && iconPosition === 'start';
                },
                style: {
                    ["& > .".concat(Tab_tabClasses.icon)]: {
                        marginRight: theme.spacing(1)
                    }
                }
            },
            {
                props: (param)=>{
                    let { ownerState, iconPosition } = param;
                    return ownerState.icon && ownerState.label && iconPosition === 'end';
                },
                style: {
                    ["& > .".concat(Tab_tabClasses.icon)]: {
                        marginLeft: theme.spacing(1)
                    }
                }
            },
            {
                props: {
                    textColor: 'inherit'
                },
                style: {
                    color: 'inherit',
                    opacity: 0.6,
                    // same opacity as theme.palette.text.secondary
                    ["&.".concat(Tab_tabClasses.selected)]: {
                        opacity: 1
                    },
                    ["&.".concat(Tab_tabClasses.disabled)]: {
                        opacity: (theme.vars || theme).palette.action.disabledOpacity
                    }
                }
            },
            {
                props: {
                    textColor: 'primary'
                },
                style: {
                    color: (theme.vars || theme).palette.text.secondary,
                    ["&.".concat(Tab_tabClasses.selected)]: {
                        color: (theme.vars || theme).palette.primary.main
                    },
                    ["&.".concat(Tab_tabClasses.disabled)]: {
                        color: (theme.vars || theme).palette.text.disabled
                    }
                }
            },
            {
                props: {
                    textColor: 'secondary'
                },
                style: {
                    color: (theme.vars || theme).palette.text.secondary,
                    ["&.".concat(Tab_tabClasses.selected)]: {
                        color: (theme.vars || theme).palette.secondary.main
                    },
                    ["&.".concat(Tab_tabClasses.disabled)]: {
                        color: (theme.vars || theme).palette.text.disabled
                    }
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.fullWidth;
                },
                style: {
                    flexShrink: 1,
                    flexGrow: 1,
                    flexBasis: 0,
                    maxWidth: 'none'
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.wrapped;
                },
                style: {
                    fontSize: theme.typography.pxToRem(12)
                }
            }
        ]
    };
}));
const Tab = /*#__PURE__*/ react.forwardRef(function Tab(inProps, ref) {
    const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
        props: inProps,
        name: 'MuiTab'
    });
    const { className, disabled = false, disableFocusRipple = false, // eslint-disable-next-line react/prop-types
    fullWidth, icon: iconProp, iconPosition = 'top', // eslint-disable-next-line react/prop-types
    indicator, label, onChange, onClick, onFocus, // eslint-disable-next-line react/prop-types
    selected, // eslint-disable-next-line react/prop-types
    selectionFollowsFocus, // eslint-disable-next-line react/prop-types
    textColor = 'inherit', value, wrapped = false, ...other } = props;
    const ownerState = {
        ...props,
        disabled,
        disableFocusRipple,
        selected,
        icon: !!iconProp,
        iconPosition,
        label: !!label,
        fullWidth,
        textColor,
        wrapped
    };
    const classes = useUtilityClasses(ownerState);
    const icon = iconProp && label && /*#__PURE__*/ react.isValidElement(iconProp) ? /*#__PURE__*/ react.cloneElement(iconProp, {
        className: (0,clsx/* default */.A)(classes.icon, iconProp.props.className)
    }) : iconProp;
    const handleClick = (event)=>{
        if (!selected && onChange) {
            onChange(event, value);
        }
        if (onClick) {
            onClick(event);
        }
    };
    const handleFocus = (event)=>{
        if (selectionFollowsFocus && !selected && onChange) {
            onChange(event, value);
        }
        if (onFocus) {
            onFocus(event);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(TabRoot, {
        focusRipple: !disableFocusRipple,
        className: (0,clsx/* default */.A)(classes.root, className),
        ref: ref,
        role: "tab",
        "aria-selected": selected,
        disabled: disabled,
        onClick: handleClick,
        onFocus: handleFocus,
        ownerState: ownerState,
        tabIndex: selected ? 0 : -1,
        ...other,
        children: [
            iconPosition === 'top' || iconPosition === 'start' ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(react.Fragment, {
                children: [
                    icon,
                    label
                ]
            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(react.Fragment, {
                children: [
                    label,
                    icon
                ]
            }),
            indicator
        ]
    });
});
 false ? 0 : void 0;
/* harmony default export */ const Tab_Tab = (Tab);


/***/ }),

/***/ 8747:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6914);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7876);
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4"
}), 'Restaurant'));


/***/ }),

/***/ 9978:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Chip_Chip)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(4232);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(9241);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(3323);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/colorManipulator/colorManipulator.js + 1 modules
var colorManipulator = __webpack_require__(7387);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/utils/createSvgIcon.js + 2 modules
var createSvgIcon = __webpack_require__(6914);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7876);
;// ./node_modules/@mui/material/esm/internal/svg-icons/Cancel.js
/* __next_internal_client_entry_do_not_use__ default auto */ 

/**
 * @ignore - internal component.
 */ 
/* harmony default export */ const Cancel = ((0,createSvgIcon/* default */.A)(/*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
    d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), 'Cancel'));

// EXTERNAL MODULE: ./node_modules/@mui/material/esm/utils/useForkRef.js
var useForkRef = __webpack_require__(3045);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/utils/capitalize.js
var capitalize = __webpack_require__(5055);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/ButtonBase/ButtonBase.js + 9 modules
var ButtonBase = __webpack_require__(6182);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/styles/styled.js
var styled = __webpack_require__(9289);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/utils/memoTheme.js + 1 modules
var memoTheme = __webpack_require__(11);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/utils/createSimplePaletteValueFilter.js
var createSimplePaletteValueFilter = __webpack_require__(2269);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(4656);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(4457);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(1849);
;// ./node_modules/@mui/material/esm/Chip/chipClasses.js


function getChipUtilityClass(slot) {
    return (0,generateUtilityClass/* default */.Ay)('MuiChip', slot);
}
const chipClasses = (0,generateUtilityClasses/* default */.A)('MuiChip', [
    'root',
    'sizeSmall',
    'sizeMedium',
    'colorDefault',
    'colorError',
    'colorInfo',
    'colorPrimary',
    'colorSecondary',
    'colorSuccess',
    'colorWarning',
    'disabled',
    'clickable',
    'clickableColorPrimary',
    'clickableColorSecondary',
    'deletable',
    'deletableColorPrimary',
    'deletableColorSecondary',
    'outlined',
    'filled',
    'outlinedPrimary',
    'outlinedSecondary',
    'filledPrimary',
    'filledSecondary',
    'avatar',
    'avatarSmall',
    'avatarMedium',
    'avatarColorPrimary',
    'avatarColorSecondary',
    'icon',
    'iconSmall',
    'iconMedium',
    'iconColorPrimary',
    'iconColorSecondary',
    'label',
    'labelSmall',
    'labelMedium',
    'deleteIcon',
    'deleteIconSmall',
    'deleteIconMedium',
    'deleteIconColorPrimary',
    'deleteIconColorSecondary',
    'deleteIconOutlinedColorPrimary',
    'deleteIconOutlinedColorSecondary',
    'deleteIconFilledColorPrimary',
    'deleteIconFilledColorSecondary',
    'focusVisible'
]);
/* harmony default export */ const Chip_chipClasses = (chipClasses);

// EXTERNAL MODULE: ./node_modules/@mui/material/esm/utils/useSlot.js
var useSlot = __webpack_require__(5852);
;// ./node_modules/@mui/material/esm/Chip/Chip.js
/* __next_internal_client_entry_do_not_use__ default auto */ 
















const useUtilityClasses = (ownerState)=>{
    const { classes, disabled, size, color, iconColor, onDelete, clickable, variant } = ownerState;
    const slots = {
        root: [
            'root',
            variant,
            disabled && 'disabled',
            "size".concat((0,capitalize/* default */.A)(size)),
            "color".concat((0,capitalize/* default */.A)(color)),
            clickable && 'clickable',
            clickable && "clickableColor".concat((0,capitalize/* default */.A)(color)),
            onDelete && 'deletable',
            onDelete && "deletableColor".concat((0,capitalize/* default */.A)(color)),
            "".concat(variant).concat((0,capitalize/* default */.A)(color))
        ],
        label: [
            'label',
            "label".concat((0,capitalize/* default */.A)(size))
        ],
        avatar: [
            'avatar',
            "avatar".concat((0,capitalize/* default */.A)(size)),
            "avatarColor".concat((0,capitalize/* default */.A)(color))
        ],
        icon: [
            'icon',
            "icon".concat((0,capitalize/* default */.A)(size)),
            "iconColor".concat((0,capitalize/* default */.A)(iconColor))
        ],
        deleteIcon: [
            'deleteIcon',
            "deleteIcon".concat((0,capitalize/* default */.A)(size)),
            "deleteIconColor".concat((0,capitalize/* default */.A)(color)),
            "deleteIcon".concat((0,capitalize/* default */.A)(variant), "Color").concat((0,capitalize/* default */.A)(color))
        ]
    };
    return (0,composeClasses/* default */.A)(slots, getChipUtilityClass, classes);
};
const ChipRoot = (0,styled/* default */.Ay)('div', {
    name: 'MuiChip',
    slot: 'Root',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        const { color, iconColor, clickable, onDelete, size, variant } = ownerState;
        return [
            {
                ["& .".concat(Chip_chipClasses.avatar)]: styles.avatar
            },
            {
                ["& .".concat(Chip_chipClasses.avatar)]: styles["avatar".concat((0,capitalize/* default */.A)(size))]
            },
            {
                ["& .".concat(Chip_chipClasses.avatar)]: styles["avatarColor".concat((0,capitalize/* default */.A)(color))]
            },
            {
                ["& .".concat(Chip_chipClasses.icon)]: styles.icon
            },
            {
                ["& .".concat(Chip_chipClasses.icon)]: styles["icon".concat((0,capitalize/* default */.A)(size))]
            },
            {
                ["& .".concat(Chip_chipClasses.icon)]: styles["iconColor".concat((0,capitalize/* default */.A)(iconColor))]
            },
            {
                ["& .".concat(Chip_chipClasses.deleteIcon)]: styles.deleteIcon
            },
            {
                ["& .".concat(Chip_chipClasses.deleteIcon)]: styles["deleteIcon".concat((0,capitalize/* default */.A)(size))]
            },
            {
                ["& .".concat(Chip_chipClasses.deleteIcon)]: styles["deleteIconColor".concat((0,capitalize/* default */.A)(color))]
            },
            {
                ["& .".concat(Chip_chipClasses.deleteIcon)]: styles["deleteIcon".concat((0,capitalize/* default */.A)(variant), "Color").concat((0,capitalize/* default */.A)(color))]
            },
            styles.root,
            styles["size".concat((0,capitalize/* default */.A)(size))],
            styles["color".concat((0,capitalize/* default */.A)(color))],
            clickable && styles.clickable,
            clickable && color !== 'default' && styles["clickableColor".concat((0,capitalize/* default */.A)(color), ")")],
            onDelete && styles.deletable,
            onDelete && color !== 'default' && styles["deletableColor".concat((0,capitalize/* default */.A)(color))],
            styles[variant],
            styles["".concat(variant).concat((0,capitalize/* default */.A)(color))]
        ];
    }
})((0,memoTheme/* default */.A)((param)=>{
    let { theme } = param;
    const textColor = theme.palette.mode === 'light' ? theme.palette.grey[700] : theme.palette.grey[300];
    return {
        maxWidth: '100%',
        fontFamily: theme.typography.fontFamily,
        fontSize: theme.typography.pxToRem(13),
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 32,
        color: (theme.vars || theme).palette.text.primary,
        backgroundColor: (theme.vars || theme).palette.action.selected,
        borderRadius: 32 / 2,
        whiteSpace: 'nowrap',
        transition: theme.transitions.create([
            'background-color',
            'box-shadow'
        ]),
        // reset cursor explicitly in case ButtonBase is used
        cursor: 'unset',
        // We disable the focus ring for mouse, touch and keyboard users.
        outline: 0,
        textDecoration: 'none',
        border: 0,
        // Remove `button` border
        padding: 0,
        // Remove `button` padding
        verticalAlign: 'middle',
        boxSizing: 'border-box',
        ["&.".concat(Chip_chipClasses.disabled)]: {
            opacity: (theme.vars || theme).palette.action.disabledOpacity,
            pointerEvents: 'none'
        },
        ["& .".concat(Chip_chipClasses.avatar)]: {
            marginLeft: 5,
            marginRight: -6,
            width: 24,
            height: 24,
            color: theme.vars ? theme.vars.palette.Chip.defaultAvatarColor : textColor,
            fontSize: theme.typography.pxToRem(12)
        },
        ["& .".concat(Chip_chipClasses.avatarColorPrimary)]: {
            color: (theme.vars || theme).palette.primary.contrastText,
            backgroundColor: (theme.vars || theme).palette.primary.dark
        },
        ["& .".concat(Chip_chipClasses.avatarColorSecondary)]: {
            color: (theme.vars || theme).palette.secondary.contrastText,
            backgroundColor: (theme.vars || theme).palette.secondary.dark
        },
        ["& .".concat(Chip_chipClasses.avatarSmall)]: {
            marginLeft: 4,
            marginRight: -4,
            width: 18,
            height: 18,
            fontSize: theme.typography.pxToRem(10)
        },
        ["& .".concat(Chip_chipClasses.icon)]: {
            marginLeft: 5,
            marginRight: -6
        },
        ["& .".concat(Chip_chipClasses.deleteIcon)]: {
            WebkitTapHighlightColor: 'transparent',
            color: theme.vars ? "rgba(".concat(theme.vars.palette.text.primaryChannel, " / 0.26)") : (0,colorManipulator/* alpha */.X4)(theme.palette.text.primary, 0.26),
            fontSize: 22,
            cursor: 'pointer',
            margin: '0 5px 0 -6px',
            '&:hover': {
                color: theme.vars ? "rgba(".concat(theme.vars.palette.text.primaryChannel, " / 0.4)") : (0,colorManipulator/* alpha */.X4)(theme.palette.text.primary, 0.4)
            }
        },
        variants: [
            {
                props: {
                    size: 'small'
                },
                style: {
                    height: 24,
                    ["& .".concat(Chip_chipClasses.icon)]: {
                        fontSize: 18,
                        marginLeft: 4,
                        marginRight: -4
                    },
                    ["& .".concat(Chip_chipClasses.deleteIcon)]: {
                        fontSize: 16,
                        marginRight: 4,
                        marginLeft: -4
                    }
                }
            },
            ...Object.entries(theme.palette).filter((0,createSimplePaletteValueFilter/* default */.A)([
                'contrastText'
            ])).map((param)=>{
                let [color] = param;
                return {
                    props: {
                        color
                    },
                    style: {
                        backgroundColor: (theme.vars || theme).palette[color].main,
                        color: (theme.vars || theme).palette[color].contrastText,
                        ["& .".concat(Chip_chipClasses.deleteIcon)]: {
                            color: theme.vars ? "rgba(".concat(theme.vars.palette[color].contrastTextChannel, " / 0.7)") : (0,colorManipulator/* alpha */.X4)(theme.palette[color].contrastText, 0.7),
                            '&:hover, &:active': {
                                color: (theme.vars || theme).palette[color].contrastText
                            }
                        }
                    }
                };
            }),
            {
                props: (props)=>props.iconColor === props.color,
                style: {
                    ["& .".concat(Chip_chipClasses.icon)]: {
                        color: theme.vars ? theme.vars.palette.Chip.defaultIconColor : textColor
                    }
                }
            },
            {
                props: (props)=>props.iconColor === props.color && props.color !== 'default',
                style: {
                    ["& .".concat(Chip_chipClasses.icon)]: {
                        color: 'inherit'
                    }
                }
            },
            {
                props: {
                    onDelete: true
                },
                style: {
                    ["&.".concat(Chip_chipClasses.focusVisible)]: {
                        backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette.action.selectedChannel, " / calc(").concat(theme.vars.palette.action.selectedOpacity, " + ").concat(theme.vars.palette.action.focusOpacity, "))") : (0,colorManipulator/* alpha */.X4)(theme.palette.action.selected, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
                    }
                }
            },
            ...Object.entries(theme.palette).filter((0,createSimplePaletteValueFilter/* default */.A)([
                'dark'
            ])).map((param)=>{
                let [color] = param;
                return {
                    props: {
                        color,
                        onDelete: true
                    },
                    style: {
                        ["&.".concat(Chip_chipClasses.focusVisible)]: {
                            background: (theme.vars || theme).palette[color].dark
                        }
                    }
                };
            }),
            {
                props: {
                    clickable: true
                },
                style: {
                    userSelect: 'none',
                    WebkitTapHighlightColor: 'transparent',
                    cursor: 'pointer',
                    '&:hover': {
                        backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette.action.selectedChannel, " / calc(").concat(theme.vars.palette.action.selectedOpacity, " + ").concat(theme.vars.palette.action.hoverOpacity, "))") : (0,colorManipulator/* alpha */.X4)(theme.palette.action.selected, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity)
                    },
                    ["&.".concat(Chip_chipClasses.focusVisible)]: {
                        backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette.action.selectedChannel, " / calc(").concat(theme.vars.palette.action.selectedOpacity, " + ").concat(theme.vars.palette.action.focusOpacity, "))") : (0,colorManipulator/* alpha */.X4)(theme.palette.action.selected, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
                    },
                    '&:active': {
                        boxShadow: (theme.vars || theme).shadows[1]
                    }
                }
            },
            ...Object.entries(theme.palette).filter((0,createSimplePaletteValueFilter/* default */.A)([
                'dark'
            ])).map((param)=>{
                let [color] = param;
                return {
                    props: {
                        color,
                        clickable: true
                    },
                    style: {
                        ["&:hover, &.".concat(Chip_chipClasses.focusVisible)]: {
                            backgroundColor: (theme.vars || theme).palette[color].dark
                        }
                    }
                };
            }),
            {
                props: {
                    variant: 'outlined'
                },
                style: {
                    backgroundColor: 'transparent',
                    border: theme.vars ? "1px solid ".concat(theme.vars.palette.Chip.defaultBorder) : "1px solid ".concat(theme.palette.mode === 'light' ? theme.palette.grey[400] : theme.palette.grey[700]),
                    ["&.".concat(Chip_chipClasses.clickable, ":hover")]: {
                        backgroundColor: (theme.vars || theme).palette.action.hover
                    },
                    ["&.".concat(Chip_chipClasses.focusVisible)]: {
                        backgroundColor: (theme.vars || theme).palette.action.focus
                    },
                    ["& .".concat(Chip_chipClasses.avatar)]: {
                        marginLeft: 4
                    },
                    ["& .".concat(Chip_chipClasses.avatarSmall)]: {
                        marginLeft: 2
                    },
                    ["& .".concat(Chip_chipClasses.icon)]: {
                        marginLeft: 4
                    },
                    ["& .".concat(Chip_chipClasses.iconSmall)]: {
                        marginLeft: 2
                    },
                    ["& .".concat(Chip_chipClasses.deleteIcon)]: {
                        marginRight: 5
                    },
                    ["& .".concat(Chip_chipClasses.deleteIconSmall)]: {
                        marginRight: 3
                    }
                }
            },
            ...Object.entries(theme.palette).filter((0,createSimplePaletteValueFilter/* default */.A)()) // no need to check for mainChannel as it's calculated from main
            .map((param)=>{
                let [color] = param;
                return {
                    props: {
                        variant: 'outlined',
                        color
                    },
                    style: {
                        color: (theme.vars || theme).palette[color].main,
                        border: "1px solid ".concat(theme.vars ? "rgba(".concat(theme.vars.palette[color].mainChannel, " / 0.7)") : (0,colorManipulator/* alpha */.X4)(theme.palette[color].main, 0.7)),
                        ["&.".concat(Chip_chipClasses.clickable, ":hover")]: {
                            backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette[color].mainChannel, " / ").concat(theme.vars.palette.action.hoverOpacity, ")") : (0,colorManipulator/* alpha */.X4)(theme.palette[color].main, theme.palette.action.hoverOpacity)
                        },
                        ["&.".concat(Chip_chipClasses.focusVisible)]: {
                            backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette[color].mainChannel, " / ").concat(theme.vars.palette.action.focusOpacity, ")") : (0,colorManipulator/* alpha */.X4)(theme.palette[color].main, theme.palette.action.focusOpacity)
                        },
                        ["& .".concat(Chip_chipClasses.deleteIcon)]: {
                            color: theme.vars ? "rgba(".concat(theme.vars.palette[color].mainChannel, " / 0.7)") : (0,colorManipulator/* alpha */.X4)(theme.palette[color].main, 0.7),
                            '&:hover, &:active': {
                                color: (theme.vars || theme).palette[color].main
                            }
                        }
                    }
                };
            })
        ]
    };
}));
const ChipLabel = (0,styled/* default */.Ay)('span', {
    name: 'MuiChip',
    slot: 'Label',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        const { size } = ownerState;
        return [
            styles.label,
            styles["label".concat((0,capitalize/* default */.A)(size))]
        ];
    }
})({
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    paddingLeft: 12,
    paddingRight: 12,
    whiteSpace: 'nowrap',
    variants: [
        {
            props: {
                variant: 'outlined'
            },
            style: {
                paddingLeft: 11,
                paddingRight: 11
            }
        },
        {
            props: {
                size: 'small'
            },
            style: {
                paddingLeft: 8,
                paddingRight: 8
            }
        },
        {
            props: {
                size: 'small',
                variant: 'outlined'
            },
            style: {
                paddingLeft: 7,
                paddingRight: 7
            }
        }
    ]
});
function isDeleteKeyboardEvent(keyboardEvent) {
    return keyboardEvent.key === 'Backspace' || keyboardEvent.key === 'Delete';
}
/**
 * Chips represent complex entities in small blocks, such as a contact.
 */ const Chip = /*#__PURE__*/ react.forwardRef(function Chip(inProps, ref) {
    const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
        props: inProps,
        name: 'MuiChip'
    });
    const { avatar: avatarProp, className, clickable: clickableProp, color = 'default', component: ComponentProp, deleteIcon: deleteIconProp, disabled = false, icon: iconProp, label, onClick, onDelete, onKeyDown, onKeyUp, size = 'medium', variant = 'filled', tabIndex, skipFocusWhenDisabled = false, // TODO v6: Rename to `focusableWhenDisabled`.
    slots = {}, slotProps = {}, ...other } = props;
    const chipRef = react.useRef(null);
    const handleRef = (0,useForkRef/* default */.A)(chipRef, ref);
    const handleDeleteIconClick = (event)=>{
        // Stop the event from bubbling up to the `Chip`
        event.stopPropagation();
        if (onDelete) {
            onDelete(event);
        }
    };
    const handleKeyDown = (event)=>{
        // Ignore events from children of `Chip`.
        if (event.currentTarget === event.target && isDeleteKeyboardEvent(event)) {
            // Will be handled in keyUp, otherwise some browsers
            // might init navigation
            event.preventDefault();
        }
        if (onKeyDown) {
            onKeyDown(event);
        }
    };
    const handleKeyUp = (event)=>{
        // Ignore events from children of `Chip`.
        if (event.currentTarget === event.target) {
            if (onDelete && isDeleteKeyboardEvent(event)) {
                onDelete(event);
            }
        }
        if (onKeyUp) {
            onKeyUp(event);
        }
    };
    const clickable = clickableProp !== false && onClick ? true : clickableProp;
    const component = clickable || onDelete ? ButtonBase/* default */.A : ComponentProp || 'div';
    const ownerState = {
        ...props,
        component,
        disabled,
        size,
        color,
        iconColor: /*#__PURE__*/ react.isValidElement(iconProp) ? iconProp.props.color || color : color,
        onDelete: !!onDelete,
        clickable,
        variant
    };
    const classes = useUtilityClasses(ownerState);
    const moreProps = component === ButtonBase/* default */.A ? {
        component: ComponentProp || 'div',
        focusVisibleClassName: classes.focusVisible,
        ...onDelete && {
            disableRipple: true
        }
    } : {};
    let deleteIcon = null;
    if (onDelete) {
        deleteIcon = deleteIconProp && /*#__PURE__*/ react.isValidElement(deleteIconProp) ? /*#__PURE__*/ react.cloneElement(deleteIconProp, {
            className: (0,clsx/* default */.A)(deleteIconProp.props.className, classes.deleteIcon),
            onClick: handleDeleteIconClick
        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Cancel, {
            className: classes.deleteIcon,
            onClick: handleDeleteIconClick
        });
    }
    let avatar = null;
    if (avatarProp && /*#__PURE__*/ react.isValidElement(avatarProp)) {
        avatar = /*#__PURE__*/ react.cloneElement(avatarProp, {
            className: (0,clsx/* default */.A)(classes.avatar, avatarProp.props.className)
        });
    }
    let icon = null;
    if (iconProp && /*#__PURE__*/ react.isValidElement(iconProp)) {
        icon = /*#__PURE__*/ react.cloneElement(iconProp, {
            className: (0,clsx/* default */.A)(classes.icon, iconProp.props.className)
        });
    }
    if (false) {}
    const externalForwardedProps = {
        slots,
        slotProps
    };
    const [RootSlot, rootProps] = (0,useSlot/* default */.A)('root', {
        elementType: ChipRoot,
        externalForwardedProps: {
            ...externalForwardedProps,
            ...other
        },
        ownerState,
        // The `component` prop is preserved because `Chip` relies on it for internal logic. If `shouldForwardComponentProp` were `false`, `useSlot` would remove the `component` prop, potentially breaking the component's behavior.
        shouldForwardComponentProp: true,
        ref: handleRef,
        className: (0,clsx/* default */.A)(classes.root, className),
        additionalProps: {
            disabled: clickable && disabled ? true : undefined,
            tabIndex: skipFocusWhenDisabled && disabled ? -1 : tabIndex,
            ...moreProps
        },
        getSlotProps: (handlers)=>({
                ...handlers,
                onClick: (event)=>{
                    var _handlers_onClick;
                    (_handlers_onClick = handlers.onClick) === null || _handlers_onClick === void 0 ? void 0 : _handlers_onClick.call(handlers, event);
                    onClick(event);
                },
                onKeyDown: (event)=>{
                    var _handlers_onKeyDown;
                    (_handlers_onKeyDown = handlers.onKeyDown) === null || _handlers_onKeyDown === void 0 ? void 0 : _handlers_onKeyDown.call(handlers, event);
                    handleKeyDown(event);
                },
                onKeyUp: (event)=>{
                    var _handlers_onKeyUp;
                    (_handlers_onKeyUp = handlers.onKeyUp) === null || _handlers_onKeyUp === void 0 ? void 0 : _handlers_onKeyUp.call(handlers, event);
                    handleKeyUp(event);
                }
            })
    });
    const [LabelSlot, labelProps] = (0,useSlot/* default */.A)('label', {
        elementType: ChipLabel,
        externalForwardedProps,
        ownerState,
        className: classes.label
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(RootSlot, {
        as: component,
        ...rootProps,
        children: [
            avatar || icon,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(LabelSlot, {
                ...labelProps,
                children: label
            }),
            deleteIcon
        ]
    });
});
 false ? 0 : void 0;
/* harmony default export */ const Chip_Chip = (Chip);


/***/ })

}]);