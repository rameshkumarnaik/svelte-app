import { c as create_ssr_component, a as compute_rest_props, b as subscribe, d as beforeUpdate, g as get_current_component, s as setContext, e as spread, f as escape_attribute_value, h as escape_object, i as add_attribute, j as escape, v as validate_component, m as missing_component } from "../../chunks/ssr.js";
import { c as colorScheme, u as useSvelteUITheme, a as useSvelteUIThemeContext, b as createEventForwarder, k as key, d as createStyles, e as useActions } from "../../chunks/create-styles.js";
import { S as SvelteUIGlobalCSS, N as NormalizeCSS, d as dark, c as css } from "../../chunks/stitches.config.js";
const void_element_names = /^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/;
function is_void(name) {
  return void_element_names.test(name) || name.toLowerCase() === "!doctype";
}
const SvelteUIProvider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let overrides;
  let mergedTheme;
  let cx;
  let classes;
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "element",
    "theme",
    "styles",
    "defaultProps",
    "themeObserver",
    "withNormalizeCSS",
    "withGlobalStyles",
    "override",
    "inherit"
  ]);
  let $colorScheme, $$unsubscribe_colorScheme;
  $$unsubscribe_colorScheme = subscribe(colorScheme, (value) => $colorScheme = value);
  let { use = [], class: className = "", element = void 0, theme = useSvelteUITheme(), styles = {}, defaultProps = {}, themeObserver = "light", withNormalizeCSS = false, withGlobalStyles = false, override = {}, inherit = false } = $$props;
  beforeUpdate(() => {
    const htmlClassList = document.documentElement.classList;
    if ($colorScheme === "dark") htmlClassList.add(dark.className);
    if ($colorScheme === "light") htmlClassList.remove(dark.className);
  });
  const ctx = useSvelteUIThemeContext();
  const useStyles2 = createStyles(() => ({ root: {} }));
  createEventForwarder(get_current_component());
  const DEFAULT_THEME = useSvelteUITheme();
  let currentTheme = null;
  if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0) $$bindings.element(element);
  if ($$props.theme === void 0 && $$bindings.theme && theme !== void 0) $$bindings.theme(theme);
  if ($$props.styles === void 0 && $$bindings.styles && styles !== void 0) $$bindings.styles(styles);
  if ($$props.defaultProps === void 0 && $$bindings.defaultProps && defaultProps !== void 0) $$bindings.defaultProps(defaultProps);
  if ($$props.themeObserver === void 0 && $$bindings.themeObserver && themeObserver !== void 0) $$bindings.themeObserver(themeObserver);
  if ($$props.withNormalizeCSS === void 0 && $$bindings.withNormalizeCSS && withNormalizeCSS !== void 0) $$bindings.withNormalizeCSS(withNormalizeCSS);
  if ($$props.withGlobalStyles === void 0 && $$bindings.withGlobalStyles && withGlobalStyles !== void 0) $$bindings.withGlobalStyles(withGlobalStyles);
  if ($$props.override === void 0 && $$bindings.override && override !== void 0) $$bindings.override(override);
  if ($$props.inherit === void 0 && $$bindings.inherit && inherit !== void 0) $$bindings.inherit(inherit);
  overrides = {
    themeOverride: inherit ? { ...ctx.theme, ...theme } : theme,
    styles: inherit ? { ...ctx.styles, ...styles } : styles,
    defaultProps: inherit ? { ...ctx.styles, ...defaultProps } : defaultProps
  };
  mergedTheme = mergeTheme(DEFAULT_THEME, overrides.themeOverride);
  {
    {
      if (themeObserver !== null) {
        currentTheme = themeObserver === "light" ? mergedTheme : dark;
      }
    }
  }
  {
    if (withGlobalStyles) SvelteUIGlobalCSS();
  }
  {
    if (withNormalizeCSS) NormalizeCSS();
  }
  {
    setContext(key, {
      theme: overrides.themeOverride,
      styles: {},
      defaultProps: {}
    });
  }
  {
    colorScheme.set(themeObserver);
  }
  ({ cx, classes } = useStyles2(null, { override }));
  $$unsubscribe_colorScheme();
  return `<div${spread(
    [
      { id: "SVELTEUI_PROVIDER" },
      {
        class: escape_attribute_value(cx(className, classes.root, currentTheme))
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
function mergeTheme(currentTheme, themeOverride) {
  if (!themeOverride) {
    return currentTheme;
  }
  return Object.keys(currentTheme).reduce((acc, key2) => {
    acc[key2] = typeof themeOverride[key2] === "object" ? { ...currentTheme[key2], ...themeOverride[key2] } : typeof themeOverride[key2] === "number" ? themeOverride[key2] : themeOverride[key2] || currentTheme[key2];
    return acc;
  }, {});
}
const SYSTEM_PROPS = {
  mt: "marginTop",
  mb: "marginBottom",
  ml: "marginLeft",
  mr: "marginRight",
  pt: "paddingTop",
  pb: "paddingBottom",
  pl: "paddingLeft",
  pr: "paddingRight"
};
const NEGATIVE_VALUES = ["-xs", "-sm", "-md", "-lg", "-xl"];
function isValidSizeValue(margin) {
  return typeof margin === "string" || typeof margin === "number";
}
function getSizeValue(margin, theme) {
  if (NEGATIVE_VALUES.includes(margin)) {
    return theme.fn.size({ size: margin.replace("-", ""), sizes: theme.space }) * -1;
  }
  return theme.fn.size({ size: margin, sizes: theme.space });
}
function getSystemStyles(systemStyles, theme) {
  const styles = {};
  if (isValidSizeValue(systemStyles.p)) {
    const value = getSizeValue(systemStyles.p, theme);
    styles.padding = value;
  }
  if (isValidSizeValue(systemStyles.m)) {
    const value = getSizeValue(systemStyles.m, theme);
    styles.margin = value;
  }
  if (isValidSizeValue(systemStyles.py)) {
    const value = getSizeValue(systemStyles.py, theme);
    styles.paddingTop = value;
    styles.paddingBottom = value;
  }
  if (isValidSizeValue(systemStyles.px)) {
    const value = getSizeValue(systemStyles.px, theme);
    styles.paddingLeft = value;
    styles.paddingRight = value;
  }
  if (isValidSizeValue(systemStyles.my)) {
    const value = getSizeValue(systemStyles.my, theme);
    styles.marginTop = value;
    styles.marginBottom = value;
  }
  if (isValidSizeValue(systemStyles.mx)) {
    const value = getSizeValue(systemStyles.mx, theme);
    styles.marginLeft = value;
    styles.marginRight = value;
  }
  Object.keys(SYSTEM_PROPS).forEach((property) => {
    if (isValidSizeValue(systemStyles[property])) {
      styles[SYSTEM_PROPS[property]] = theme.fn.size({
        size: getSizeValue(systemStyles[property], theme),
        sizes: theme.space
      });
    }
  });
  return styles;
}
const Box = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let getCSSStyles;
  let BoxStyles;
  let systemStyles;
  let $$restProps = compute_rest_props($$props, [
    "use",
    "element",
    "class",
    "css",
    "root",
    "m",
    "my",
    "mx",
    "mt",
    "mb",
    "ml",
    "mr",
    "p",
    "py",
    "px",
    "pt",
    "pb",
    "pl",
    "pr"
  ]);
  let { use = [], element = void 0, class: className = "", css: css$1 = {}, root = void 0, m = void 0, my = void 0, mx = void 0, mt = void 0, mb = void 0, ml = void 0, mr = void 0, p = void 0, py = void 0, px = void 0, pt = void 0, pb = void 0, pl = void 0, pr = void 0 } = $$props;
  const forwardEvents = createEventForwarder(get_current_component());
  const castRoot = () => root;
  const theme = useSvelteUIThemeContext()?.theme || useSvelteUITheme();
  let isHTMLElement;
  let isComponent;
  if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0) $$bindings.element(element);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  if ($$props.css === void 0 && $$bindings.css && css$1 !== void 0) $$bindings.css(css$1);
  if ($$props.root === void 0 && $$bindings.root && root !== void 0) $$bindings.root(root);
  if ($$props.m === void 0 && $$bindings.m && m !== void 0) $$bindings.m(m);
  if ($$props.my === void 0 && $$bindings.my && my !== void 0) $$bindings.my(my);
  if ($$props.mx === void 0 && $$bindings.mx && mx !== void 0) $$bindings.mx(mx);
  if ($$props.mt === void 0 && $$bindings.mt && mt !== void 0) $$bindings.mt(mt);
  if ($$props.mb === void 0 && $$bindings.mb && mb !== void 0) $$bindings.mb(mb);
  if ($$props.ml === void 0 && $$bindings.ml && ml !== void 0) $$bindings.ml(ml);
  if ($$props.mr === void 0 && $$bindings.mr && mr !== void 0) $$bindings.mr(mr);
  if ($$props.p === void 0 && $$bindings.p && p !== void 0) $$bindings.p(p);
  if ($$props.py === void 0 && $$bindings.py && py !== void 0) $$bindings.py(py);
  if ($$props.px === void 0 && $$bindings.px && px !== void 0) $$bindings.px(px);
  if ($$props.pt === void 0 && $$bindings.pt && pt !== void 0) $$bindings.pt(pt);
  if ($$props.pb === void 0 && $$bindings.pb && pb !== void 0) $$bindings.pb(pb);
  if ($$props.pl === void 0 && $$bindings.pl && pl !== void 0) $$bindings.pl(pl);
  if ($$props.pr === void 0 && $$bindings.pr && pr !== void 0) $$bindings.pr(pr);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    getCSSStyles = typeof css$1 === "function" ? css$1 : () => css$1;
    {
      {
        isHTMLElement = root && typeof root === "string";
        isComponent = root && typeof root === "function";
      }
    }
    BoxStyles = css({});
    systemStyles = getSystemStyles(
      {
        m,
        my,
        mx,
        mt,
        mb,
        ml,
        mr,
        p,
        py,
        px,
        pt,
        pb,
        pl,
        pr
      },
      theme
    );
    $$rendered = ` ${isHTMLElement ? ` ${((tag) => {
      return tag ? `<${castRoot()}${spread(
        [
          {
            class: escape(className, true) + " " + escape(
              BoxStyles({
                css: { ...getCSSStyles(theme), ...systemStyles }
              }),
              true
            )
          },
          escape_object($$restProps)
        ],
        {}
      )}${add_attribute("this", element, 0)}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
    })(castRoot())}` : `${isComponent && typeof root !== "string" ? `${validate_component(root || missing_component, "svelte:component").$$render(
      $$result,
      Object.assign(
        {},
        { use: [forwardEvents, [useActions, use]] },
        {
          class: className + " " + BoxStyles({
            css: { ...getCSSStyles(theme), ...systemStyles }
          })
        },
        $$restProps,
        { this: element }
      ),
      {
        this: ($$value) => {
          element = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}` : `<div${spread(
      [
        {
          class: escape(className, true) + " " + escape(
            BoxStyles({
              css: { ...getCSSStyles(theme), ...systemStyles }
            }),
            true
          )
        },
        escape_object($$restProps)
      ],
      {}
    )}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}</div>`}`}`;
  } while (!$$settled);
  return $$rendered;
});
const headingTheme = {
  spacing: {
    xs: 10,
    sm: 12,
    md: 16,
    lg: 20,
    xl: 24
  },
  headings: {
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
    fontWeight: 700,
    sizes: {
      h1: { fontSize: 34, lineHeight: 1.3 },
      h2: { fontSize: 26, lineHeight: 1.35 },
      h3: { fontSize: 22, lineHeight: 1.4 },
      h4: { fontSize: 18, lineHeight: 1.45 },
      h5: { fontSize: 16, lineHeight: 1.5 },
      h6: { fontSize: 14, lineHeight: 1.5 }
    }
  }
};
const headings = Object.keys(headingTheme.headings.sizes).reduce((acc, h) => {
  acc[`& ${h}`] = {
    fontFamily: headingTheme.headings.fontFamily,
    fontWeight: headingTheme.headings.fontWeight,
    marginTop: headingTheme.spacing.xl * headingTheme.headings.sizes[h].lineHeight,
    marginBottom: headingTheme.spacing.sm,
    ...headingTheme.headings.sizes[h],
    "@media (max-width: 755px)": {
      fontSize: typeof headingTheme.headings.sizes[h].fontSize === "number" && headingTheme.headings.sizes[h].fontSize / 1.3
    }
  };
  return acc;
}, {});
const useStyles = createStyles((theme, { primaryColor, underline }) => {
  return {
    root: {
      [`${theme.dark} &`]: {
        color: theme.fn.themeColor("dark", 0),
        "& hr": {
          borderTop: `1px dashed ${theme.fn.themeColor("gray", 4)}`
        },
        "& a": {
          color: theme.fn.themeColor(primaryColor, 4)
        },
        "& pre": {
          backgroundColor: theme.fn.themeColor("dark", 8)
        },
        "& code": {
          color: theme.fn.themeColor("dark", 0),
          backgroundColor: theme.fn.themeColor("dark", 5),
          border: `1px solid ${theme.fn.themeColor("dark", 3)}`
        },
        "& caption": {
          color: theme.fn.themeColor("gray", 6)
        },
        "& th": {
          color: theme.fn.themeColor("dark", 0)
        },
        "& thead th": {
          borderBottom: `1px solid ${theme.fn.themeColor("dark", 4)}`
        },
        "& tfoot th": {
          borderTop: `1px solid ${theme.fn.themeColor("dark", 4)}`
        },
        "& td": {
          padding: "7px 10px",
          borderBottom: `1px solid ${theme.fn.themeColor("dark", 4)}`,
          fontSize: 14
        },
        "& blockquote": {
          color: theme.fn.themeColor("dark", 0),
          "& cite": {
            color: theme.fn.themeColor("dark", 2)
          }
        }
      },
      fontFamily: theme.fonts.standard.value ?? "sans-serif",
      color: "black",
      lineHeight: theme.lineHeights.md.value,
      fontSize: theme.fontSizes.md.value,
      "@media (max-width: 755px)": {
        fontSize: theme.fontSizes.sm.value
      },
      ...headings,
      "& img": {
        maxWidth: "100%",
        marginBottom: +theme.space.xs.value
      },
      "& p": {
        marginTop: 0,
        marginBottom: +theme.space.lg.value
      },
      "& hr": {
        marginTop: +theme.space.md.value,
        marginBottom: +theme.space.sm.value,
        borderBottom: 0,
        borderLeft: 0,
        borderRight: 0,
        borderTop: `1px dashed ${theme.fn.themeColor("gray", 4)}`
      },
      "& a": {
        focusRing: "auto",
        color: theme.fn.themeColor(primaryColor, 6),
        textDecoration: "none",
        "&:hover": {
          textDecoration: underline ? "underline" : "none"
        }
      },
      "& pre": {
        padding: +theme.space.xs.value,
        lineHeight: theme.lineHeights.md.value,
        margin: 0,
        marginTop: +theme.space.md.value,
        marginBottom: +theme.space.md.value,
        overflowX: "auto",
        fontFamily: theme.fonts.mono.value,
        fontSize: theme.fontSizes.sm,
        borderRadius: theme.radii.sm.value,
        backgroundColor: theme.fn.themeColor("gray", 0)
      },
      "& code": {
        lineHeight: theme.lineHeights.md.value,
        padding: `0px ${+theme.space.xs.value / 2}px`,
        borderRadius: theme.radii.sm.value,
        color: "black",
        backgroundColor: theme.fn.themeColor("dark", 0),
        fontFamily: theme.fonts.mono.value,
        border: `1px solid ${theme.fn.themeColor("gray", 3)}`,
        whiteSpace: "nowrap",
        fontSize: ".9rem",
        background: "#f4f5f7"
      },
      "& ul, & ol": {
        marginBottom: +theme.space.md.value,
        paddingLeft: +theme.space.lg.value * 2,
        "& li": {
          marginTop: +theme.space.xs.value
        }
      },
      "& table": {
        width: "100%",
        borderCollapse: "collapse",
        captionSide: "bottom",
        marginBottom: +theme.space.md.value,
        "& caption": {
          marginTop: +theme.space.xs.value,
          fontSize: theme.fontSizes.sm,
          color: theme.fn.themeColor("dark", 2)
        },
        "& th": {
          textAlign: "left",
          fontWeight: "bold",
          color: theme.fn.themeColor("gray", 7),
          fontSize: 14,
          padding: "7px 10px"
        },
        "& thead th": {
          borderBottom: `1px solid ${theme.fn.themeColor("gray", 3)}`
        },
        "& tfoot th": {
          borderTop: `1px solid ${theme.fn.themeColor("gray", 3)}`
        },
        "& td": {
          padding: "7px 10px",
          borderBottom: `1px solid ${theme.fn.themeColor("gray", 3)}`,
          fontSize: 14
        },
        "& tr:last-of-type td": {
          borderBottom: "none"
        }
      },
      "& blockquote": {
        fontSize: theme.fontSizes.lg.value,
        lineHeight: theme.lineHeights.md.value,
        margin: `${theme.space.md.value}px 0`,
        borderTopRightRadius: theme.radii.sm.value,
        borderBottomRightRadius: theme.radii.sm.value,
        padding: `${theme.space.md.value}px ${theme.space.lg.value}px`,
        color: "black",
        "& cite": {
          display: "block",
          fontSize: theme.fontSizes.sm,
          marginTop: +theme.space.xs.value,
          color: theme.fn.themeColor("gray", 6),
          overflow: "hidden",
          textOverflow: "ellipsis"
        }
      }
    }
  };
});
const TypographyProvider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cx;
  let classes;
  let getStyles;
  let $$restProps = compute_rest_props($$props, ["use", "element", "class", "override", "primaryColor", "underline"]);
  let { use = [], element = void 0, class: className = "", override = {}, primaryColor = "blue", underline = true } = $$props;
  if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0) $$bindings.element(element);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  if ($$props.override === void 0 && $$bindings.override && override !== void 0) $$bindings.override(override);
  if ($$props.primaryColor === void 0 && $$bindings.primaryColor && primaryColor !== void 0) $$bindings.primaryColor(primaryColor);
  if ($$props.underline === void 0 && $$bindings.underline && underline !== void 0) $$bindings.underline(underline);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    ({ cx, classes, getStyles } = useStyles({ primaryColor, underline }, { name: "TypographyProvider" }));
    $$rendered = `${validate_component(Box, "Box").$$render(
      $$result,
      Object.assign(
        {},
        {
          class: cx(className, classes.root, getStyles({ css: override }))
        },
        { use },
        $$restProps,
        { element }
      ),
      {
        element: ($$value) => {
          element = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(SvelteUIProvider, "SvelteUIProvider").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(TypographyProvider, "TypographyProvider").$$render($$result, {}, {}, {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      })}`;
    }
  })}`;
});
export {
  Layout as default
};
