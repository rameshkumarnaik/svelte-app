import { c as create_ssr_component, i as add_attribute, a as compute_rest_props, g as get_current_component, v as validate_component, m as missing_component, o as onDestroy, e as spread, f as escape_attribute_value, h as escape_object, l as compute_slots, j as escape } from "../../chunks/ssr.js";
import { d as dark, t as theme } from "../../chunks/stitches.config.js";
import { f as fns, d as createStyles, b as createEventForwarder, e as useActions } from "../../chunks/create-styles.js";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { observable = false } = $$props;
  let { component } = $$props;
  let { code } = $$props;
  if ($$props.observable === void 0 && $$bindings.observable && observable !== void 0) $$bindings.observable(observable);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0) $$bindings.component(component);
  if ($$props.code === void 0 && $$bindings.code && code !== void 0) $$bindings.code(code);
  return `${observable ? ` <!-- HTML_TAG_START -->${exception(component, code)}<!-- HTML_TAG_END -->` : ``}`;
});
const isBrowser = () => typeof window !== "undefined";
const browser = isBrowser();
const minifiedCss = ".modal-header{padding: 2px 16px;background-color: #339af0;color: white;}.modal-body{padding: 2px 16px;}.modal-footer{padding: 2px 16px;background-color: #339af0;color: white;}.modal-content{position: relative;background-color: #fefefe;margin: auto;padding: 0;border: 1px solid #888;width: 80%;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);animation-name: animateTop;animation-duration: 0.4s;}@keyframes animateTop {from {top: -300px; opacity: 0}to {top: 0; opacity: 1}}";
const style = browser ? document.createElement("style") : void 0;
if (browser) {
  const s = style;
  s.textContent = minifiedCss;
  s.id = "svelteui-inject";
}
function UserException(component, message, solution) {
  if (browser)
    document.head.appendChild(style);
  const html = `
    <div class="modal-content">
        <div class="modal-header">
            <h2>[${component} Component Error]:</h2>
            <h3>${message}</h3>
        </div>
        <div class="modal-body">
            <pre>
                ${solution ? solution : ""}
            </pre>
        </div>
        <div class="modal-footer">
            <h3>Fix the code to dismiss this error.</h3>
        </div>
    </div>        
    `;
  return html;
}
function exception(component, code) {
  const { message, solution } = code;
  if (solution) {
    return UserException(component, message, solution);
  }
  return UserException(component, message);
}
const vFunc = (color, gradient) => {
  const { themeColor, rgba } = fns;
  const variants = {
    /** Filled variant */
    filled: {
      [`${dark.selector} &`]: {
        backgroundColor: themeColor(color, 8)
      },
      border: "transparent",
      backgroundColor: themeColor(color, 6),
      color: "White",
      "&:hover": { backgroundColor: themeColor(color, 7) }
    },
    /** Light variant */
    light: {
      [`${dark.selector} &`]: {
        backgroundColor: rgba(themeColor(color, 8), 0.35),
        color: color === "dark" ? themeColor("dark", 0) : themeColor(color, 2),
        "&:hover": { backgroundColor: rgba(themeColor(color, 7), 0.45) }
      },
      border: "transparent",
      backgroundColor: themeColor(color, 0),
      color: color === "dark" ? themeColor("dark", 9) : themeColor(color, 6),
      "&:hover": { backgroundColor: themeColor(color, 1) }
    },
    /** Outline variant */
    outline: {
      [`${dark.selector} &`]: {
        border: `1px solid ${themeColor(color, 4)}`,
        color: `${themeColor(color, 4)}`,
        "&:hover": { backgroundColor: rgba(themeColor(color, 4), 0.05) }
      },
      border: `1px solid ${themeColor(color, 7)}`,
      backgroundColor: "transparent",
      color: themeColor(color, 7),
      "&:hover": {
        backgroundColor: rgba(themeColor(color, 0), 0.35)
      }
    },
    /** Subtle variant */
    subtle: {
      [`${dark.selector} &`]: {
        color: color === "dark" ? themeColor("dark", 0) : themeColor(color, 2),
        "&:hover": { backgroundColor: rgba(themeColor(color, 8), 0.35) }
      },
      border: "transparent",
      backgroundColor: "transparent",
      color: color === "dark" ? themeColor("dark", 9) : themeColor(color, 6),
      "&:hover": {
        backgroundColor: themeColor(color, 0)
      }
    },
    /** Default variant */
    default: {
      [`${dark.selector} &`]: {
        border: `1px solid ${themeColor("dark", 5)}`,
        backgroundColor: themeColor("dark", 5),
        color: "White",
        "&:hover": { backgroundColor: themeColor("dark", 4) }
      },
      border: `1px solid ${themeColor("gray", 4)}`,
      backgroundColor: "White",
      color: "Black",
      "&:hover": { backgroundColor: themeColor("gray", 0) }
    },
    /** White variant */
    white: {
      border: "transparent",
      backgroundColor: "White",
      color: themeColor(color, 7),
      "&:hover": { backgroundColor: "White" }
    },
    gradient: {}
  };
  if (gradient) {
    variants.gradient = {
      border: "transparent",
      background: `linear-gradient(${gradient.deg}deg, $${gradient.from}600 0%, $${gradient.to}600 100%)`,
      color: "White"
    };
  }
  return variants;
};
const sizes = {
  xs: {
    height: 30,
    padding: "0px 14px"
  },
  sm: {
    height: 36,
    padding: "0px 18px"
  },
  md: {
    height: 42,
    padding: "0px 22px"
  },
  lg: {
    height: 50,
    padding: "0px 26px"
  },
  xl: {
    height: 60,
    padding: "0px 32px"
  },
  "compact-xs": {
    height: 22,
    padding: "0 7px"
  },
  "compact-sm": {
    height: 26,
    padding: "0 8px"
  },
  "compact-md": {
    height: 30,
    padding: "0 10px"
  },
  "compact-lg": {
    height: 34,
    padding: "0 12px"
  },
  "compact-xl": {
    height: 40,
    padding: "0 14px"
  }
};
const useStyles = createStyles((theme2, { color, compact, fullSize, gradient, radius, size, variant }) => {
  return {
    root: {
      focusRing: "auto",
      cursor: "pointer",
      position: "relative",
      boxSizing: "border-box",
      textDecoration: "none",
      outline: "none",
      userSelect: "none",
      appearance: "none",
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: null,
      borderRadius: typeof radius === "number" ? radius : `$${radius}`,
      height: typeof size === "number" ? `${size}px` : sizes[compact ? `compact-${size}` : size].height,
      padding: typeof size === "number" ? `0px ${size}px` : sizes[compact ? `compact-${size}` : size].padding,
      fontFamily: theme2.fonts.standard.value ?? "sans-serif",
      fontWeight: "$semibold",
      fontSize: `$${size}`,
      lineHeight: 1,
      flexGrow: 0,
      width: fullSize ? "100%" : "fit-content",
      "&:hover": {
        backgroundColor: variant === "gradient" ? null : theme2.fn.themeColor(color, 7),
        backgroundSize: variant === "gradient" ? "200%" : null
      },
      "&:active": {
        transform: "translateY(1px)"
      },
      "&:disabled": {
        pointerEvents: "none",
        borderColor: "transparent",
        background: theme2.fn.themeColor("gray", 2),
        backgroundColor: theme2.fn.themeColor("gray", 2),
        color: theme2.fn.themeColor("gray", 5),
        cursor: "not-allowed",
        darkMode: {
          borderColor: "transparent",
          backgroundColor: theme2.fn.themeColor("dark", 4),
          color: theme2.fn.themeColor("dark", 6)
        }
      }
    },
    disabled: {
      pointerEvents: "none",
      borderColor: "transparent",
      background: theme2.fn.themeColor("gray", 2),
      backgroundColor: theme2.fn.themeColor("gray", 2),
      color: theme2.fn.themeColor("gray", 5),
      cursor: "not-allowed",
      darkMode: {
        backgroundColor: theme2.fn.themeColor("dark", 4),
        color: theme2.fn.themeColor("dark", 6)
      }
    },
    loading: {
      pointerEvents: "none",
      "&::before": {
        content: '""',
        position: "absolute",
        inset: -1,
        backgroundColor: "rgba(255, 255, 255, .5)",
        borderRadius: `$${radius}`,
        cursor: "not-allowed"
      },
      darkMode: {
        "&::before": {
          backgroundColor: theme2.fn.rgba(theme2.fn.themeColor("dark", 7), 0.5)
        }
      }
    },
    variants: {
      variation: vFunc(color, gradient),
      // Used to override the disable style when using anchor HTML element
      disabled: {
        true: {
          pointerEvents: "none",
          borderColor: "transparent",
          background: theme2.fn.themeColor("gray", 2),
          backgroundColor: theme2.fn.themeColor("gray", 2),
          color: theme2.fn.themeColor("gray", 5),
          cursor: "not-allowed",
          [`${dark.selector} &`]: {
            borderColor: "transparent",
            backgroundColor: theme2.fn.themeColor("dark", 4),
            color: theme2.fn.themeColor("dark", 6)
          }
        }
      }
    }
  };
});
const ButtonErrors = Object.freeze([
  {
    error: true,
    message: "If using the disabled prop, a loading cannot be set at the same time",
    solution: `
                If your component looks like this:
                
                &lt;Button disabled loading ...&gt; Button Text &lt;/Button&gt;
                         ^^^^^^^^ ^^^^^^^ - Try removing one of these
                `
  },
  {
    error: true,
    message: "If using the external prop, a href prop must be associated with it. If you have an href prop there must be content inside.",
    solution: `
                If your component looks like this:
                
                &lt;Button external ...&gt; Button Text &lt;/Button&gt;
                         ^^^^^^^^ - Try adding the href prop too
                `
  }
]);
const Circle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { use = [] } = $$props;
  let { size = 25 } = $$props;
  let { color = "blue" } = $$props;
  let { class: className = "" } = $$props;
  if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  return `<svg${add_attribute("width", `${size}px`, 0)}${add_attribute("height", `${size}px`, 0)} viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg"${add_attribute("stroke", color, 0)}${add_attribute("class", className, 0)}><g fill="none" fill-rule="evenodd"><g transform="translate(2.5 2.5)" stroke-width="5"><circle stroke-opacity=".5" cx="16" cy="16" r="16"></circle><path d="M32 16c0-9.94-8.06-16-16-16"><animateTransform attributeName="transform" type="rotate" from="0 16 16" to="360 16 16" dur="1s" repeatCount="indefinite"></animateTransform></path></g></g></svg>`;
});
const Bars = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { use = [] } = $$props;
  let { size = 25 } = $$props;
  let { color = "blue" } = $$props;
  let { class: className = "" } = $$props;
  if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  return `<svg viewBox="0 0 135 140" xmlns="http://www.w3.org/2000/svg"${add_attribute("fill", color, 0)}${add_attribute("width", `${size}px`, 0)}${add_attribute("class", className, 0)}><rect y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.5s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.5s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="30" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.25s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.25s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="60" width="15" height="140" rx="6"><animate attributeName="height" begin="0s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="90" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.25s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.25s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="120" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.5s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.5s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect></svg>`;
});
const Dots = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { use = [] } = $$props;
  let { size = 25 } = $$props;
  let { color = "blue" } = $$props;
  let { class: className = "" } = $$props;
  if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  return `<svg${add_attribute("width", `${size}px`, 0)}${add_attribute("height", `${Number(size) / 4}px`, 0)} viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg"${add_attribute("fill", color, 0)}${add_attribute("class", className, 0)}><circle cx="15" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="60" cy="15" r="9" fill-opacity="0.3"><animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="0.5" to="0.5" begin="0s" dur="0.8s" values=".5;1;.5" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="105" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle></svg>`;
});
const LOADER_SIZES = {
  xs: 18,
  sm: 22,
  md: 36,
  lg: 44,
  xl: 58
};
const getCorrectShade = (color, dark2 = false) => {
  return theme.colors[dark2 ? `${color}400` : `${color}600`].value;
};
const Loader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "element", "class", "size", "color", "variant"]);
  let { use = [], element = void 0, class: className = "", size = "md", color = "blue", variant = "circle" } = $$props;
  const forwardEvents = createEventForwarder(get_current_component());
  const LOADERS = { bars: Bars, circle: Circle, dots: Dots };
  const defaultLoader = variant in LOADERS ? variant : "circle";
  if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0) $$bindings.element(element);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0) $$bindings.variant(variant);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = ` ${validate_component(LOADERS[defaultLoader] || missing_component, "svelte:component").$$render(
      $$result,
      Object.assign(
        {},
        { use: [forwardEvents, [useActions, use]] },
        {
          color: color === "white" ? "white" : getCorrectShade(color)
        },
        { size: LOADER_SIZES[size] || size },
        { class: className },
        $$restProps,
        { this: element }
      ),
      {
        this: ($$value) => {
          element = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const css$1 = {
  code: ".ripple.svelte-3pkhve{display:block;position:absolute;top:0;left:0;right:0;bottom:0;overflow:hidden;border-radius:inherit;color:inherit;pointer-events:none;z-index:0;contain:strict}.ripple.svelte-3pkhve .animation{color:inherit;position:absolute;top:0;left:0;border-radius:50%;opacity:0;pointer-events:none;overflow:hidden;will-change:transform, opacity}.ripple.svelte-3pkhve .animation-enter{transition:none}.ripple.svelte-3pkhve .animation-in{transition:opacity 0.1s cubic-bezier(0.4, 0, 0.2, 1);transition:transform 0.25s cubic-bezier(0.4, 0, 0.2, 1),\n			opacity 0.1s cubic-bezier(0.4, 0, 0.2, 1)}.ripple.svelte-3pkhve .animation-out{transition:opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)}",
  map: "{\"version\":3,\"file\":\"Ripple.svelte\",\"sources\":[\"Ripple.svelte\"],\"sourcesContent\":[\"<script context=\\\"module\\\">\\n\\tfunction isTouchEvent(e) {\\n\\t\\treturn e.constructor.name === 'TouchEvent';\\n\\t}\\n\\tfunction transform(el, value) {\\n\\t\\tel.style['transform'] = value;\\n\\t\\tel.style['webkitTransform'] = value;\\n\\t}\\n\\tfunction opacity(el, value) {\\n\\t\\tel.style['opacity'] = value.toString();\\n\\t}\\n\\tconst calculate = (e, el) => {\\n\\t\\tconst offset = el.getBoundingClientRect();\\n\\t\\tconst target = isTouchEvent(e) ? e.touches[e.touches.length - 1] : e;\\n\\t\\tconst localX = target.clientX - offset.left;\\n\\t\\tconst localY = target.clientY - offset.top;\\n\\t\\tlet radius = 0;\\n\\t\\tlet scale = 0.3;\\n\\t\\t// Get ripple position\\n\\t\\tconst center = el.dataset.center;\\n\\t\\tconst circle = el.dataset.circle;\\n\\t\\tif (circle) {\\n\\t\\t\\tscale = 0.15;\\n\\t\\t\\tradius = el.clientWidth / 2;\\n\\t\\t\\tradius = center\\n\\t\\t\\t\\t? radius\\n\\t\\t\\t\\t: radius + Math.sqrt((localX - radius) ** 2 + (localY - radius) ** 2) / 4;\\n\\t\\t} else {\\n\\t\\t\\tradius = Math.sqrt(el.clientWidth ** 2 + el.clientHeight ** 2) / 2;\\n\\t\\t}\\n\\t\\tconst centerX = `${(el.clientWidth - radius * 2) / 2}px`;\\n\\t\\tconst centerY = `${(el.clientHeight - radius * 2) / 2}px`;\\n\\t\\tconst x = center ? centerX : `${localX - radius}px`;\\n\\t\\tconst y = center ? centerY : `${localY - radius}px`;\\n\\t\\treturn { radius, scale, x, y, centerX, centerY };\\n\\t};\\n\\tconst startRipple = function (eventType, event) {\\n\\t\\tconst hideEvents = ['touchcancel', 'mouseleave', 'dragstart'];\\n\\t\\tlet container = event.currentTarget || event.target;\\n\\t\\tif (container && !container.classList.contains('ripple')) {\\n\\t\\t\\tcontainer = container.querySelector('.ripple');\\n\\t\\t}\\n\\t\\tif (!container) {\\n\\t\\t\\treturn;\\n\\t\\t}\\n\\t\\tconst prev = container.dataset.event;\\n\\t\\tif (prev && prev !== eventType) {\\n\\t\\t\\treturn;\\n\\t\\t}\\n\\t\\tcontainer.dataset.event = eventType;\\n\\t\\t// Create the ripple\\n\\t\\tconst wave = document.createElement('span');\\n\\t\\tconst { radius, scale, x, y, centerX, centerY } = calculate(event, container);\\n\\t\\tconst color = container.dataset.color;\\n\\t\\tconst size = `${radius * 2}px`;\\n\\t\\twave.className = 'animation';\\n\\t\\twave.style.width = size;\\n\\t\\twave.style.height = size;\\n\\t\\twave.style.background = color;\\n\\t\\twave.classList.add('animation-enter');\\n\\t\\twave.classList.add('animation--visible');\\n\\t\\ttransform(wave, `translate(${x}, ${y}) scale3d(${scale},${scale},${scale})`);\\n\\t\\topacity(wave, 0);\\n\\t\\twave.dataset.activated = String(performance.now());\\n\\t\\tcontainer.appendChild(wave);\\n\\t\\tsetTimeout(() => {\\n\\t\\t\\twave.classList.remove('animation-enter');\\n\\t\\t\\twave.classList.add('animation-in');\\n\\t\\t\\ttransform(wave, `translate(${centerX}, ${centerY}) scale3d(1,1,1)`);\\n\\t\\t\\topacity(wave, 0.25);\\n\\t\\t}, 0);\\n\\t\\tconst releaseEvent = eventType === 'mousedown' ? 'mouseup' : 'touchend';\\n\\t\\tconst onRelease = function () {\\n\\t\\t\\tdocument.removeEventListener(releaseEvent, onRelease);\\n\\t\\t\\thideEvents.forEach((name) => {\\n\\t\\t\\t\\tdocument.removeEventListener(name, onRelease);\\n\\t\\t\\t});\\n\\t\\t\\tconst diff = performance.now() - Number(wave.dataset.activated);\\n\\t\\t\\tconst delay = Math.max(250 - diff, 0);\\n\\t\\t\\tsetTimeout(() => {\\n\\t\\t\\t\\twave.classList.remove('animation-in');\\n\\t\\t\\t\\twave.classList.add('animation-out');\\n\\t\\t\\t\\topacity(wave, 0);\\n\\t\\t\\t\\tsetTimeout(() => {\\n\\t\\t\\t\\t\\twave && container.removeChild(wave);\\n\\t\\t\\t\\t\\tif (container.children.length === 0) {\\n\\t\\t\\t\\t\\t\\tdelete container.dataset.event;\\n\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t}, 300);\\n\\t\\t\\t}, delay);\\n\\t\\t};\\n\\t\\tdocument.addEventListener(releaseEvent, onRelease);\\n\\t\\thideEvents.forEach((name) => {\\n\\t\\t\\tdocument.addEventListener(name, onRelease, { passive: true });\\n\\t\\t});\\n\\t};\\n\\tconst onMouseDown = function (e) {\\n\\t\\t// Trigger on left click only\\n\\t\\tif (e.button === 0) {\\n\\t\\t\\tstartRipple(e.type, e);\\n\\t\\t}\\n\\t};\\n\\tconst onTouchStart = function (e) {\\n\\t\\tif (e.changedTouches) {\\n\\t\\t\\tfor (let i = 0; i < e.changedTouches.length; ++i) {\\n\\t\\t\\t\\tstartRipple(e.type, e.changedTouches[i]);\\n\\t\\t\\t}\\n\\t\\t}\\n\\t};\\n<\/script>\\n\\n<script>\\n\\texport let center = false;\\n\\texport let circle = false;\\n\\texport let color = 'currentColor';\\n\\timport { tick, onMount, onDestroy } from 'svelte';\\n\\tlet el;\\n\\tlet trigEl;\\n\\tonMount(async () => {\\n\\t\\tawait tick();\\n\\t\\ttry {\\n\\t\\t\\tif (center) {\\n\\t\\t\\t\\tel.dataset.center = 'true';\\n\\t\\t\\t}\\n\\t\\t\\tif (circle) {\\n\\t\\t\\t\\tel.dataset.circle = 'true';\\n\\t\\t\\t}\\n\\t\\t\\tel.dataset.color = color;\\n\\t\\t\\ttrigEl = el.parentElement;\\n\\t\\t} catch (err) {} // eslint-disable-line\\n\\t\\tif (!trigEl) {\\n\\t\\t\\tconsole.error('Ripple: Trigger element not found.');\\n\\t\\t\\treturn;\\n\\t\\t}\\n\\t\\tlet style = window.getComputedStyle(trigEl);\\n\\t\\tif (style.position.length === 0 || style.position === 'static') {\\n\\t\\t\\ttrigEl.style.position = 'relative';\\n\\t\\t}\\n\\t\\ttrigEl.addEventListener('touchstart', onTouchStart, { passive: true });\\n\\t\\ttrigEl.addEventListener('mousedown', onMouseDown, { passive: true });\\n\\t});\\n\\tonDestroy(() => {\\n\\t\\tif (!trigEl) {\\n\\t\\t\\treturn;\\n\\t\\t}\\n\\t\\ttrigEl.removeEventListener('mousedown', onMouseDown);\\n\\t\\ttrigEl.removeEventListener('touchstart', onTouchStart);\\n\\t});\\n<\/script>\\n\\n<div class=\\\"ripple\\\" bind:this={el} />\\n\\n<style>\\n\\t.ripple {\\n\\t\\tdisplay: block;\\n\\t\\tposition: absolute;\\n\\t\\ttop: 0;\\n\\t\\tleft: 0;\\n\\t\\tright: 0;\\n\\t\\tbottom: 0;\\n\\t\\toverflow: hidden;\\n\\t\\tborder-radius: inherit;\\n\\t\\tcolor: inherit;\\n\\t\\tpointer-events: none;\\n\\t\\tz-index: 0;\\n\\t\\tcontain: strict;\\n\\t}\\n\\t.ripple :global(.animation) {\\n\\t\\tcolor: inherit;\\n\\t\\tposition: absolute;\\n\\t\\ttop: 0;\\n\\t\\tleft: 0;\\n\\t\\tborder-radius: 50%;\\n\\t\\topacity: 0;\\n\\t\\tpointer-events: none;\\n\\t\\toverflow: hidden;\\n\\t\\twill-change: transform, opacity;\\n\\t}\\n\\t.ripple :global(.animation-enter) {\\n\\t\\ttransition: none;\\n\\t}\\n\\t.ripple :global(.animation-in) {\\n\\t\\ttransition: opacity 0.1s cubic-bezier(0.4, 0, 0.2, 1);\\n\\t\\ttransition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1),\\n\\t\\t\\topacity 0.1s cubic-bezier(0.4, 0, 0.2, 1);\\n\\t}\\n\\t.ripple :global(.animation-out) {\\n\\t\\ttransition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);\\n\\t}\\n</style>\\n\"],\"names\":[],\"mappings\":\"AAyJC,qBAAQ,CACP,OAAO,CAAE,KAAK,CACd,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,CAAC,CACR,MAAM,CAAE,CAAC,CACT,QAAQ,CAAE,MAAM,CAChB,aAAa,CAAE,OAAO,CACtB,KAAK,CAAE,OAAO,CACd,cAAc,CAAE,IAAI,CACpB,OAAO,CAAE,CAAC,CACV,OAAO,CAAE,MACV,CACA,qBAAO,CAAS,UAAY,CAC3B,KAAK,CAAE,OAAO,CACd,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,aAAa,CAAE,GAAG,CAClB,OAAO,CAAE,CAAC,CACV,cAAc,CAAE,IAAI,CACpB,QAAQ,CAAE,MAAM,CAChB,WAAW,CAAE,SAAS,CAAC,CAAC,OACzB,CACA,qBAAO,CAAS,gBAAkB,CACjC,UAAU,CAAE,IACb,CACA,qBAAO,CAAS,aAAe,CAC9B,UAAU,CAAE,OAAO,CAAC,IAAI,CAAC,aAAa,GAAG,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC,CACrD,UAAU,CAAE,SAAS,CAAC,KAAK,CAAC,aAAa,GAAG,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC,CAAC;AAC3D,GAAG,OAAO,CAAC,IAAI,CAAC,aAAa,GAAG,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CAC1C,CACA,qBAAO,CAAS,cAAgB,CAC/B,UAAU,CAAE,OAAO,CAAC,IAAI,CAAC,aAAa,GAAG,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CACrD\"}"
};
const Ripple = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { center = false } = $$props;
  let { circle = false } = $$props;
  let { color = "currentColor" } = $$props;
  let el;
  onDestroy(() => {
    {
      return;
    }
  });
  if ($$props.center === void 0 && $$bindings.center && center !== void 0) $$bindings.center(center);
  if ($$props.circle === void 0 && $$bindings.circle && circle !== void 0) $$bindings.circle(circle);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  $$result.css.add(css$1);
  return `<div class="ripple svelte-3pkhve"${add_attribute("this", el, 0)}></div>`;
});
const css = {
  code: ".uppercase.svelte-5xpm5q{text-transform:uppercase}.left-section.svelte-5xpm5q{margin-right:10px;display:flex;align-items:center;justify-content:center}.right-section.svelte-5xpm5q{margin-left:10px;display:flex;align-items:center;justify-content:center}",
  map: `{"version":3,"file":"Button.svelte","sources":["Button.svelte"],"sourcesContent":["<script>import useStyles from './Button.styles';\\nimport { get_current_component } from 'svelte/internal';\\nimport { createEventForwarder, useActions } from '../../internal';\\nimport { ButtonErrors } from './Button.errors';\\nimport Error from '../../internal/errors/Error.svelte';\\nimport Loader from '../Loader/Loader.svelte';\\nimport Ripple from './Ripple.svelte';\\nexport let use = [], element = undefined, className = '', override = {}, variant = 'filled', color = 'blue', size = 'sm', radius = 'sm', gradient = { from: 'indigo', to: 'cyan', deg: 45 }, loaderPosition = 'left', loaderProps = {\\n    size: 'xs',\\n    color: 'white',\\n    variant: 'circle'\\n}, href = null, external = false, disabled = false, compact = false, loading = false, uppercase = false, fullSize = false, ripple = false;\\nexport { className as class };\\n/** An action that forwards inner dom node events from parent component */\\nconst forwardEvents = createEventForwarder(get_current_component());\\n// --------------Error Handling-------------------\\nlet observable = false;\\nlet err;\\nif (disabled && loading) {\\n    observable = true;\\n    err = ButtonErrors[0];\\n}\\nif ((external && typeof href !== 'string') || href?.length < 1) {\\n    observable = true;\\n    err = ButtonErrors[1];\\n}\\n$: if (observable)\\n    override = { display: 'none' };\\n// --------------Error Handling-------------------\\n$: ({ cx, classes, getStyles } = useStyles({\\n    color,\\n    compact,\\n    fullSize,\\n    gradient,\\n    radius,\\n    size,\\n    variant\\n}, { name: 'Button' }));\\n<\/script>\\n\\n<Error {observable} component=\\"Button\\" code={err} />\\n\\n<!--\\n@component\\nA user can perform an immediate action by pressing a button. It's frequently used to start an action, but it can also be used to link to other pages.\\n\\n@see https://svelteui.dev/core/button\\n@example\\n    \`\`\`tsx\\n    <Button>Click</Button> // standard button\\n    <Button variant='gradient' gradient={{from: 'blue', to: 'red', deg: 45}}>Click Me</Button> // gradient button\\n    \`\`\`\\n-->\\n\\n{#if href}\\n\\t<a\\n\\t\\t{href}\\n\\t\\tbind:this={element}\\n\\t\\tuse:useActions={use}\\n\\t\\tuse:forwardEvents\\n\\t\\tclass:compact\\n\\t\\tclass:uppercase\\n\\t\\tclass={cx(className, classes.root, getStyles({ css: override, variation: variant, disabled }), {\\n\\t\\t\\t[classes.disabled]: disabled,\\n\\t\\t\\t[classes.loading]: loading\\n\\t\\t})}\\n\\t\\trole=\\"button\\"\\n\\t\\trel=\\"noreferrer noopener\\"\\n\\t\\ttarget={external ? '_blank' : ''}\\n\\t\\t{...$$restProps}\\n\\t\\ttabindex=\\"0\\"\\n\\t>\\n\\t\\t{#if loading && loaderPosition === 'left'}\\n\\t\\t\\t<span class=\\"left-section\\">\\n\\t\\t\\t\\t<Loader variant={loaderProps.variant} size={loaderProps.size} color={loaderProps.color} />\\n\\t\\t\\t</span>\\n\\t\\t{:else if $$slots.leftIcon}\\n\\t\\t\\t<span class=\\"left-section\\">\\n\\t\\t\\t\\t<slot name=\\"leftIcon\\">X</slot>\\n\\t\\t\\t</span>\\n\\t\\t{/if}\\n\\t\\t<slot>Button</slot>\\n\\t\\t{#if ripple}\\n\\t\\t\\t<Ripple center={false} circle={false} />\\n\\t\\t{/if}\\n\\t\\t{#if loading && loaderPosition === 'right'}\\n\\t\\t\\t<span class=\\"right-section\\">\\n\\t\\t\\t\\t<Loader variant={loaderProps.variant} size={loaderProps.size} color={loaderProps.color} />\\n\\t\\t\\t</span>\\n\\t\\t{:else if $$slots.rightIcon}\\n\\t\\t\\t<span class=\\"right-section\\">\\n\\t\\t\\t\\t<slot name=\\"rightIcon\\">X</slot>\\n\\t\\t\\t</span>\\n\\t\\t{/if}\\n\\t</a>\\n{:else}\\n\\t<button\\n\\t\\tbind:this={element}\\n\\t\\tuse:useActions={use}\\n\\t\\tuse:forwardEvents\\n\\t\\tclass={cx(className, classes.root, getStyles({ css: override, variation: variant }), {\\n\\t\\t\\t[classes.disabled]: disabled,\\n\\t\\t\\t[classes.loading]: loading\\n\\t\\t})}\\n\\t\\tclass:compact\\n\\t\\tclass:uppercase\\n\\t\\t{disabled}\\n\\t\\t{...$$restProps}\\n\\t\\ttabindex=\\"0\\"\\n\\t>\\n\\t\\t{#if loading && loaderPosition === 'left'}\\n\\t\\t\\t<span class=\\"left-section\\">\\n\\t\\t\\t\\t<Loader variant={loaderProps.variant} size={loaderProps.size} color={loaderProps.color} />\\n\\t\\t\\t</span>\\n\\t\\t{:else if $$slots.leftIcon}\\n\\t\\t\\t<span class=\\"left-section\\">\\n\\t\\t\\t\\t<slot name=\\"leftIcon\\">X</slot>\\n\\t\\t\\t</span>\\n\\t\\t{/if}\\n\\t\\t<slot>Button</slot>\\n\\t\\t{#if ripple}\\n\\t\\t\\t<Ripple center={false} circle={false} />\\n\\t\\t{/if}\\n\\t\\t{#if loading && loaderPosition === 'right'}\\n\\t\\t\\t<span class=\\"right-section\\">\\n\\t\\t\\t\\t<Loader variant={loaderProps.variant} size={loaderProps.size} color={loaderProps.color} />\\n\\t\\t\\t</span>\\n\\t\\t{:else if $$slots.rightIcon}\\n\\t\\t\\t<span class=\\"right-section\\">\\n\\t\\t\\t\\t<slot name=\\"rightIcon\\">X</slot>\\n\\t\\t\\t</span>\\n\\t\\t{/if}\\n\\t</button>\\n{/if}\\n\\n<style>\\n\\t.uppercase {\\n\\t\\ttext-transform: uppercase;\\n\\t}\\n\\t.left-section {\\n\\t\\tmargin-right: 10px;\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: center;\\n\\t\\tjustify-content: center;\\n\\t}\\n\\t.right-section {\\n\\t\\tmargin-left: 10px;\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: center;\\n\\t\\tjustify-content: center;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAwIC,wBAAW,CACV,cAAc,CAAE,SACjB,CACA,2BAAc,CACb,YAAY,CAAE,IAAI,CAClB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAClB,CACA,4BAAe,CACd,WAAW,CAAE,IAAI,CACjB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAClB"}`
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cx;
  let classes;
  let getStyles;
  let $$restProps = compute_rest_props($$props, [
    "use",
    "element",
    "class",
    "override",
    "variant",
    "color",
    "size",
    "radius",
    "gradient",
    "loaderPosition",
    "loaderProps",
    "href",
    "external",
    "disabled",
    "compact",
    "loading",
    "uppercase",
    "fullSize",
    "ripple"
  ]);
  let $$slots = compute_slots(slots);
  let { use = [], element = void 0, class: className = "", override = {}, variant = "filled", color = "blue", size = "sm", radius = "sm", gradient = { from: "indigo", to: "cyan", deg: 45 }, loaderPosition = "left", loaderProps = {
    size: "xs",
    color: "white",
    variant: "circle"
  }, href = null, external = false, disabled = false, compact = false, loading = false, uppercase = false, fullSize = false, ripple = false } = $$props;
  createEventForwarder(get_current_component());
  let observable = false;
  let err;
  if (disabled && loading) {
    observable = true;
    err = ButtonErrors[0];
  }
  if (external && typeof href !== "string" || href?.length < 1) {
    observable = true;
    err = ButtonErrors[1];
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0) $$bindings.element(element);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  if ($$props.override === void 0 && $$bindings.override && override !== void 0) $$bindings.override(override);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0) $$bindings.variant(variant);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.radius === void 0 && $$bindings.radius && radius !== void 0) $$bindings.radius(radius);
  if ($$props.gradient === void 0 && $$bindings.gradient && gradient !== void 0) $$bindings.gradient(gradient);
  if ($$props.loaderPosition === void 0 && $$bindings.loaderPosition && loaderPosition !== void 0) $$bindings.loaderPosition(loaderPosition);
  if ($$props.loaderProps === void 0 && $$bindings.loaderProps && loaderProps !== void 0) $$bindings.loaderProps(loaderProps);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
  if ($$props.external === void 0 && $$bindings.external && external !== void 0) $$bindings.external(external);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  if ($$props.compact === void 0 && $$bindings.compact && compact !== void 0) $$bindings.compact(compact);
  if ($$props.loading === void 0 && $$bindings.loading && loading !== void 0) $$bindings.loading(loading);
  if ($$props.uppercase === void 0 && $$bindings.uppercase && uppercase !== void 0) $$bindings.uppercase(uppercase);
  if ($$props.fullSize === void 0 && $$bindings.fullSize && fullSize !== void 0) $$bindings.fullSize(fullSize);
  if ($$props.ripple === void 0 && $$bindings.ripple && ripple !== void 0) $$bindings.ripple(ripple);
  $$result.css.add(css);
  {
    if (observable) override = { display: "none" };
  }
  ({ cx, classes, getStyles } = useStyles(
    {
      color,
      compact,
      fullSize,
      gradient,
      radius,
      size,
      variant
    },
    { name: "Button" }
  ));
  return `${validate_component(Error, "Error").$$render(
    $$result,
    {
      observable,
      component: "Button",
      code: err
    },
    {},
    {}
  )}  ${href ? `<a${spread(
    [
      { href: escape_attribute_value(href) },
      {
        class: escape_attribute_value(cx(
          className,
          classes.root,
          getStyles({
            css: override,
            variation: variant,
            disabled
          }),
          {
            [classes.disabled]: disabled,
            [classes.loading]: loading
          }
        ))
      },
      { role: "button" },
      { rel: "noreferrer noopener" },
      {
        target: escape_attribute_value(external ? "_blank" : "")
      },
      escape_object($$restProps),
      { tabindex: "0" }
    ],
    {
      classes: (compact ? "compact" : "") + " " + (uppercase ? "uppercase" : "") + " svelte-5xpm5q"
    }
  )}${add_attribute("this", element, 0)}>${loading && loaderPosition === "left" ? `<span class="left-section svelte-5xpm5q">${validate_component(Loader, "Loader").$$render(
    $$result,
    {
      variant: loaderProps.variant,
      size: loaderProps.size,
      color: loaderProps.color
    },
    {},
    {}
  )}</span>` : `${$$slots.leftIcon ? `<span class="left-section svelte-5xpm5q">${slots.leftIcon ? slots.leftIcon({}) : `X`}</span>` : ``}`} ${slots.default ? slots.default({}) : `Button`} ${ripple ? `${validate_component(Ripple, "Ripple").$$render($$result, { center: false, circle: false }, {}, {})}` : ``} ${loading && loaderPosition === "right" ? `<span class="right-section svelte-5xpm5q">${validate_component(Loader, "Loader").$$render(
    $$result,
    {
      variant: loaderProps.variant,
      size: loaderProps.size,
      color: loaderProps.color
    },
    {},
    {}
  )}</span>` : `${$$slots.rightIcon ? `<span class="right-section svelte-5xpm5q">${slots.rightIcon ? slots.rightIcon({}) : `X`}</span>` : ``}`}</a>` : `<button${spread(
    [
      {
        class: escape_attribute_value(cx(className, classes.root, getStyles({ css: override, variation: variant }), {
          [classes.disabled]: disabled,
          [classes.loading]: loading
        }))
      },
      { disabled: disabled || null },
      escape_object($$restProps),
      { tabindex: "0" }
    ],
    {
      classes: (compact ? "compact" : "") + " " + (uppercase ? "uppercase" : "") + " svelte-5xpm5q"
    }
  )}${add_attribute("this", element, 0)}>${loading && loaderPosition === "left" ? `<span class="left-section svelte-5xpm5q">${validate_component(Loader, "Loader").$$render(
    $$result,
    {
      variant: loaderProps.variant,
      size: loaderProps.size,
      color: loaderProps.color
    },
    {},
    {}
  )}</span>` : `${$$slots.leftIcon ? `<span class="left-section svelte-5xpm5q">${slots.leftIcon ? slots.leftIcon({}) : `X`}</span>` : ``}`} ${slots.default ? slots.default({}) : `Button`} ${ripple ? `${validate_component(Ripple, "Ripple").$$render($$result, { center: false, circle: false }, {}, {})}` : ``} ${loading && loaderPosition === "right" ? `<span class="right-section svelte-5xpm5q">${validate_component(Loader, "Loader").$$render(
    $$result,
    {
      variant: loaderProps.variant,
      size: loaderProps.size,
      color: loaderProps.color
    },
    {},
    {}
  )}</span>` : `${$$slots.rightIcon ? `<span class="right-section svelte-5xpm5q">${slots.rightIcon ? slots.rightIcon({}) : `X`}</span>` : ``}`}</button>`}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1 data-svelte-h="svelte-yyjjjs">Welcome to SvelteKit</h1> ${validate_component(Button, "Button").$$render($$result, {}, {}, {
    default: () => {
      return `${escape("Click me")}`;
    }
  })}`;
});
export {
  Page as default
};
