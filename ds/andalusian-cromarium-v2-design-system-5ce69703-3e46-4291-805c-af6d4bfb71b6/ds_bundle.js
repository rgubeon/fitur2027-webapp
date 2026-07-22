/* @ds-bundle: {"format":4,"namespace":"AndalusianCromariumDesignSystem_5ce697","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"ColorDot","sourcePath":"components/core/ColorDot.jsx"},{"name":"GlassCard","sourcePath":"components/core/GlassCard.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"IconTile","sourcePath":"components/core/IconTile.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"ListRow","sourcePath":"components/core/ListRow.jsx"},{"name":"ProgressRing","sourcePath":"components/core/ProgressRing.jsx"},{"name":"SectionLabel","sourcePath":"components/core/SectionLabel.jsx"},{"name":"SpectrumTrack","sourcePath":"components/core/SpectrumTrack.jsx"},{"name":"StatusPill","sourcePath":"components/core/StatusPill.jsx"},{"name":"TabBar","sourcePath":"components/core/TabBar.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"781ced7b09c3","components/core/Badge.jsx":"2870f3ca233b","components/core/Button.jsx":"dbf0c3d78516","components/core/Chip.jsx":"e95b209b73c0","components/core/ColorDot.jsx":"d38dd70a45d7","components/core/GlassCard.jsx":"c6eb1ea9dceb","components/core/Icon.jsx":"e67e3848702c","components/core/IconButton.jsx":"f6d72ab72645","components/core/IconTile.jsx":"a3335a8db88b","components/core/Input.jsx":"9cd4f39a49ec","components/core/ListRow.jsx":"792ee32d411e","components/core/ProgressRing.jsx":"075f603b2313","components/core/SectionLabel.jsx":"2c67868dc48b","components/core/SpectrumTrack.jsx":"56eac9690cd0","components/core/StatusPill.jsx":"e98433dc62cb","components/core/TabBar.jsx":"b9959858b865","ui_kits/companion-app/AgendaScreen.jsx":"f819a4bcbe0e","ui_kits/companion-app/CromariumScreen.jsx":"e83694420077","ui_kits/companion-app/ExploraScreen.jsx":"c19ca9f6dc20","ui_kits/companion-app/HomeScreen.jsx":"e286a84bfc0b","ui_kits/companion-app/NetworkingScreen.jsx":"eae049132093","ui_kits/organizer-app/AccesosScreen.jsx":"f06a589b88ce","ui_kits/organizer-app/PanelScreen.jsx":"252085502f02","ui_kits/organizer-app/ZonaBarScreen.jsx":"a2aacff3896e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AndalusianCromariumDesignSystem_5ce697 = window.AndalusianCromariumDesignSystem_5ce697 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Andalusian Cromarium — Avatar
   Circular identity token. When no image is supplied it fills
   with the prism gradient and shows the initial in white —
   matching the directory / networking avatars. `size` in px. */

function Avatar({
  initial,
  src,
  size = 56,
  gradient = 'var(--gradient-prism)',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      borderRadius: 'var(--radius-tile)',
      background: src ? `center/cover no-repeat url(${src})` : gradient,
      color: 'var(--white)',
      fontFamily: 'var(--font-display)',
      fontSize: Math.round(size * 0.44),
      fontWeight: 'var(--fw-semibold)',
      boxShadow: 'var(--shadow-sm)',
      overflow: 'hidden',
      flexShrink: 0,
      ...style
    }
  }, rest), !src && (initial || '').slice(0, 1));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Andalusian Cromarium — Badge
   Small square-ish province / index tag. Two looks:
   • province code (AL, CA, CO, GR) — tinted glass, spectrum ink
   • index code (A-01, Stand B-04) — plain navy mono text
   `code` sets the label; `color` a spectrum var for the tinted
   province style. */

function Badge({
  children,
  color,
  variant = 'province',
  style,
  ...rest
}) {
  if (variant === 'index') {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--fs-caption)',
        fontWeight: 'var(--fw-semibold)',
        letterSpacing: 'var(--ls-caps)',
        color: 'var(--navy-500)',
        ...style
      }
    }, rest), children);
  }
  const c = color || 'var(--chroma-indigo)';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 34,
      height: 26,
      padding: '0 8px',
      borderRadius: 'var(--radius-xs)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: '0.02em',
      color: c,
      background: 'var(--glass-fill-strong)',
      border: '1px solid rgba(255,255,255,0.7)',
      boxShadow: 'var(--shadow-xs)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Andalusian Cromarium — Chip
   Filter / segmented pill. Default is frosted glass; the active
   chip fills with the soft prism wash (or a supplied spectrum
   color). Used in filter rows ("Todos · Cultura · Naturaleza"). */

function Chip({
  children,
  active = false,
  color,
  onClick,
  style,
  ...rest
}) {
  const activeBg = color ? color : 'var(--gradient-prism-soft)';
  const activeInk = color ? 'var(--white)' : 'var(--navy-900)';
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 'var(--chip-h)',
      padding: '0 18px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 'var(--fw-medium)',
      letterSpacing: 'var(--ls-tight)',
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap',
      cursor: 'pointer',
      color: active ? activeInk : 'var(--navy-700)',
      background: active ? activeBg : 'var(--glass-fill-strong)',
      border: active && !color ? '1px solid rgba(255,255,255,0.7)' : 'var(--glass-border)',
      backdropFilter: 'var(--glass-blur)',
      WebkitBackdropFilter: 'var(--glass-blur)',
      boxShadow: active ? 'var(--shadow-sm)' : 'none',
      transition: 'all var(--dur-base) var(--ease-out)',
      WebkitTapHighlightColor: 'transparent',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/GlassCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Andalusian Cromarium — GlassCard
   The defining surface: frosted translucent white on the
   iridescent canvas. `tone` optionally warms the fill with a
   soft spectrum wash. `elevation` sets the ambient shadow.
   Use `hero` for the larger 30px-radius feature panel. */

const shadows = {
  none: 'none',
  sm: 'var(--shadow-sm)',
  md: 'var(--shadow-md)',
  lg: 'var(--shadow-lg)'
};
const toneWash = {
  none: null,
  prism: 'var(--gradient-prism-soft)',
  cyan: 'var(--chroma-cyan-100)',
  violet: 'var(--chroma-violet-100)',
  fuchsia: 'var(--chroma-fuchsia-100)',
  gold: 'var(--chroma-gold-100)',
  success: 'var(--status-success-100)',
  blue: 'var(--gradient-wash-blue)',
  pink: 'var(--gradient-wash-pink)',
  green: 'var(--gradient-wash-green)',
  orange: 'var(--gradient-wash-orange)',
  yellow: 'var(--gradient-wash-yellow)'
};
function GlassCard({
  children,
  hero = false,
  tone = 'none',
  elevation = 'sm',
  padding,
  interactive = false,
  onClick,
  style,
  ...rest
}) {
  const wash = toneWash[tone];
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    style: {
      position: 'relative',
      borderRadius: hero ? 'var(--radius-xl)' : 'var(--radius-lg)',
      padding: padding != null ? padding : 'var(--pad-card)',
      background: wash ? `linear-gradient(var(--glass-fill), var(--glass-fill)), ${wash}` : 'var(--glass-fill)',
      border: 'var(--glass-border)',
      backdropFilter: 'var(--glass-blur)',
      WebkitBackdropFilter: 'var(--glass-blur)',
      boxShadow: `${shadows[elevation]}, var(--glass-inset)`,
      cursor: interactive || onClick ? 'pointer' : 'default',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      overflow: 'hidden',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { GlassCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/GlassCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
/* Andalusian Cromarium — Icon
   Renders a Lucide glyph (MIT). Geometry is read at render time
   from the Lucide UMD global (window.lucide), so nothing is
   hand-drawn — load lucide once per page (CDN) before mounting.
   Stroke defaults match the brand: 1.75px, rounded caps/joins. */

function toPascal(name) {
  return String(name).split(/[-_ ]+/).map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('');
}
function Icon({
  name,
  size = 22,
  color = 'currentColor',
  strokeWidth = 1.75,
  style,
  className,
  ...rest
}) {
  const L = typeof window !== 'undefined' ? window.lucide : null;
  const key = toPascal(name);
  const node = L ? (L.icons ? L.icons[key] : null) || L[key] : null;
  const children = Array.isArray(node) ? node.map(([tag, attrs], i) => React.createElement(tag, {
    ...attrs,
    key: i
  })) : null;
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className,
    style: {
      display: 'block',
      flexShrink: 0,
      ...style
    },
    'aria-hidden': true,
    ...rest
  }, children);
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Andalusian Cromarium — Button
   Pill button. Variants:
   • prism   — signature gradient CTA (primary emphasis, 1 per screen)
   • navy    — solid deep-navy (secondary primary / dark surfaces)
   • glass   — frosted translucent (default action on glass canvas)
   • ghost   — text + icon only
   Sizes sm / md / lg. Optional leading/trailing Lucide icon. */

const sizes = {
  sm: {
    height: 40,
    padding: '0 18px',
    font: 'var(--fs-body-sm)',
    icon: 16,
    gap: 8
  },
  md: {
    height: 'var(--control-h)',
    padding: '0 26px',
    font: 'var(--fs-body)',
    icon: 18,
    gap: 10
  },
  lg: {
    height: 58,
    padding: '0 32px',
    font: 'var(--fs-body-lg)',
    icon: 20,
    gap: 12
  }
};
function Button({
  children,
  variant = 'glass',
  size = 'md',
  icon,
  iconRight,
  disabled = false,
  fullWidth = false,
  onClick,
  style,
  ...rest
}) {
  const s = sizes[size] || sizes.md;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    height: s.height,
    padding: s.padding,
    width: fullWidth ? '100%' : undefined,
    fontFamily: 'var(--font-sans)',
    fontSize: s.font,
    fontWeight: 'var(--fw-semibold)',
    letterSpacing: 'var(--ls-caps)',
    borderRadius: 'var(--radius-pill)',
    border: '1px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    whiteSpace: 'nowrap',
    transition: 'transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out)',
    WebkitTapHighlightColor: 'transparent'
  };
  const variants = {
    prism: {
      background: 'var(--gradient-prism)',
      color: 'var(--white)',
      boxShadow: 'var(--glow-prism)'
    },
    navy: {
      background: 'var(--navy-900)',
      color: 'var(--white)',
      boxShadow: 'var(--shadow-sm)'
    },
    glass: {
      background: 'var(--glass-fill-strong)',
      color: 'var(--navy-900)',
      border: 'var(--glass-border)',
      backdropFilter: 'var(--glass-blur)',
      WebkitBackdropFilter: 'var(--glass-blur)',
      boxShadow: 'var(--shadow-sm)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--accent)',
      padding: `0 ${size === 'sm' ? 8 : 12}px`
    }
  };
  const onDown = e => {
    if (!disabled) e.currentTarget.style.transform = 'scale(var(--press-scale))';
  };
  const onUp = e => {
    e.currentTarget.style.transform = 'scale(1)';
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    onClick: onClick,
    onMouseDown: onDown,
    onMouseUp: onUp,
    onMouseLeave: onUp,
    onTouchStart: onDown,
    onTouchEnd: onUp,
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.icon
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s.icon
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/ColorDot.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Andalusian Cromarium — ColorDot
   A single spectrum circle: the atomic unit of the Cromarium
   system. States: filled (unlocked), checked (completed),
   locked (empty ring). Used in the "Colores desbloqueados" row
   and activation tiles. Optional caption label below. */

function ColorDot({
  color = 'var(--chroma-cyan)',
  state = 'filled',
  size = 40,
  label,
  style,
  ...rest
}) {
  const locked = state === 'locked';
  const checked = state === 'checked';
  const circle = /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: locked ? 'var(--white)' : color,
      border: locked ? '1.5px solid var(--navy-200)' : '1px solid rgba(255,255,255,0.55)',
      boxShadow: locked ? 'none' : `0 6px 16px -6px ${typeof color === 'string' && color.startsWith('#') ? color : 'rgba(14,26,77,0.35)'}`,
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  }, checked && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: Math.round(size * 0.5),
    color: "#fff",
    strokeWidth: 2.4
  }));
  if (!label) return React.cloneElement(circle, {
    style: {
      ...circle.props.style,
      ...style
    },
    ...rest
  });
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8,
      ...style
    }
  }, rest), circle, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 'var(--fw-medium)',
      color: locked ? 'var(--navy-300)' : 'var(--navy-700)'
    }
  }, label));
}
Object.assign(__ds_scope, { ColorDot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ColorDot.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Andalusian Cromarium — IconButton
   Circular icon control used in the top bar (bell, menu) and
   inline list actions (arrow). Frosted-glass or solid variants.
   Optional `dot` shows a live/notification pip. */

const sizes = {
  sm: 36,
  md: 44,
  lg: 52
};
function IconButton({
  icon,
  variant = 'glass',
  size = 'md',
  dot = false,
  dotColor = 'var(--status-live)',
  onClick,
  ariaLabel,
  style,
  ...rest
}) {
  const d = sizes[size] || sizes.md;
  const variants = {
    glass: {
      background: 'var(--glass-fill-strong)',
      color: 'var(--navy-900)',
      border: 'var(--glass-border)',
      backdropFilter: 'var(--glass-blur)',
      WebkitBackdropFilter: 'var(--glass-blur)',
      boxShadow: 'var(--shadow-xs)'
    },
    navy: {
      background: 'var(--navy-900)',
      color: 'var(--white)',
      border: '1px solid transparent'
    },
    prism: {
      background: 'var(--gradient-prism)',
      color: 'var(--white)',
      border: '1px solid transparent'
    },
    plain: {
      background: 'transparent',
      color: 'var(--navy-700)',
      border: '1px solid transparent'
    }
  };
  const onDown = e => e.currentTarget.style.transform = 'scale(var(--press-scale))';
  const onUp = e => e.currentTarget.style.transform = 'scale(1)';
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": ariaLabel || icon,
    onClick: onClick,
    onMouseDown: onDown,
    onMouseUp: onUp,
    onMouseLeave: onUp,
    style: {
      position: 'relative',
      width: d,
      height: d,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      transition: 'transform var(--dur-fast) var(--ease-out)',
      WebkitTapHighlightColor: 'transparent',
      ...variants[variant],
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: Math.round(d * 0.46)
  }), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: Math.round(d * 0.16),
      right: Math.round(d * 0.16),
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: dotColor,
      boxShadow: '0 0 0 2px var(--paper)'
    }
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/IconTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Andalusian Cromarium — IconTile
   Rounded-square tile holding a line icon, used for quick
   actions and press-room tools. Soft spectrum-tinted glass
   fill, navy icon. Sizes sm/md/lg. Optional label + chevron
   turn it into a full quick-access card via `as="card"`. */

const tints = {
  cyan: 'var(--chroma-cyan-100)',
  indigo: 'var(--chroma-indigo-100)',
  violet: 'var(--chroma-violet-100)',
  fuchsia: 'var(--chroma-fuchsia-100)',
  rose: 'var(--chroma-rose-100)',
  gold: 'var(--chroma-gold-100)',
  success: 'var(--status-success-100)',
  prism: 'var(--gradient-prism-soft)',
  neutral: 'var(--mist)'
};
function IconTile({
  icon,
  tint = 'prism',
  size = 'md',
  iconColor = 'var(--navy-900)',
  style,
  ...rest
}) {
  const d = size === 'sm' ? 40 : size === 'lg' ? 64 : 'var(--icon-tile)';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: d,
      height: d,
      borderRadius: 'var(--radius-tile)',
      background: tints[tint] || tint,
      border: '1px solid rgba(255,255,255,0.6)',
      boxShadow: 'var(--shadow-xs)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'lg' ? 26 : 22,
    color: iconColor
  }));
}
Object.assign(__ds_scope, { IconTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconTile.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Andalusian Cromarium — Input
   Pill search / text field on glass. Optional leading icon
   (search) and trailing element. Matches "Buscar empresa o
   institución". */

function Input({
  value,
  onChange,
  placeholder = '',
  icon,
  trailing,
  type = 'text',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--gap-inline)',
      height: 'var(--control-h)',
      padding: '0 20px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--glass-fill-strong)',
      border: 'var(--glass-border)',
      backdropFilter: 'var(--glass-blur)',
      WebkitBackdropFilter: 'var(--glass-blur)',
      boxShadow: 'var(--shadow-xs)',
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20,
    color: "var(--navy-400)"
  }), /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body)',
      fontWeight: 'var(--fw-regular)',
      color: 'var(--navy-900)'
    }
  }, rest)), trailing);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/ProgressRing.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Andalusian Cromarium — ProgressRing
   Circular progress with a prism-gradient stroke and a fraction
   (or percentage) label centered inside. Mirrors the "3/6"
   ring on the Cromarium screen. This is data-viz, so the arc
   SVG is intentional (not iconography). */

let _gid = 0;
function ProgressRing({
  value = 3,
  max = 6,
  size = 118,
  stroke = 12,
  label,
  sublabel,
  style,
  ...rest
}) {
  const id = React.useMemo(() => `crom-ring-${++_gid}`, []);
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const pct = Math.max(0, Math.min(1, value / max));
  const dash = c * pct;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      width: size,
      height: size,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    style: {
      display: 'block',
      transform: 'rotate(-90deg)'
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: id,
    x1: "0%",
    y1: "0%",
    x2: "100%",
    y2: "100%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#C63AA0"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "38%",
    stopColor: "#E85EA0"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "68%",
    stopColor: "#F58AA0"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#F5A85C"
  }))), /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: "var(--mist)",
    strokeWidth: stroke
  }), /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: `url(#${id})`,
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeDasharray: `${dash} ${c}`,
    style: {
      transition: 'stroke-dasharray var(--dur-slow) var(--ease-out)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: Math.round(size * 0.3),
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--navy-900)',
      lineHeight: 1
    }
  }, label != null ? label : `${value}/${max}`), sublabel && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-caption)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--navy-400)',
      marginTop: 4
    }
  }, sublabel)));
}
Object.assign(__ds_scope, { ProgressRing });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ProgressRing.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionLabel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Andalusian Cromarium — SectionLabel
   The tracked all-caps eyebrow that introduces every section
   ("ACCESOS RÁPIDOS", "PARA TI HOY", "TU IMPACTO EN LA FERIA").
   Optional trailing action (e.g. "Ver todo →"). */

function SectionLabel({
  children,
  color = 'var(--navy-500)',
  trailing,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 'var(--space-4)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-label)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color
    }
  }, children), trailing && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--accent)'
    }
  }, trailing));
}
Object.assign(__ds_scope, { SectionLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionLabel.jsx", error: String((e && e.message) || e) }); }

// components/core/SpectrumTrack.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Andalusian Cromarium — SpectrumTrack
   The progress row of small dots: the first `filled` dots take
   consecutive spectrum colors, the rest are muted. Mirrors the
   "3/6 activaciones" indicator on the Home screen. */

const SPECTRUM = ['var(--chroma-cyan)', 'var(--chroma-indigo)', 'var(--chroma-fuchsia)', 'var(--chroma-rose)', 'var(--chroma-orange)', 'var(--chroma-gold)', 'var(--chroma-violet)', 'var(--chroma-red)'];
function SpectrumTrack({
  total = 6,
  filled = 3,
  dot = 26,
  gap = 10,
  colors = SPECTRUM,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap,
      ...style
    }
  }, rest), Array.from({
    length: total
  }).map((_, i) => {
    const on = i < filled;
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        width: dot,
        height: dot,
        borderRadius: '50%',
        background: on ? colors[i % colors.length] : 'var(--mist)',
        boxShadow: on ? '0 4px 10px -4px rgba(14,26,77,0.35)' : 'none',
        transition: 'background var(--dur-base) var(--ease-out)'
      }
    });
  }));
}
Object.assign(__ds_scope, { SpectrumTrack });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SpectrumTrack.jsx", error: String((e && e.message) || e) }); }

// components/core/StatusPill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Andalusian Cromarium — StatusPill
   Dot + tracked label used everywhere for state:
   Sincronizada / Hecha (success), Pendiente (warning),
   En directo (live), Reservada (reserved), Libre / Ocupada.
   Renders as an inline dot+text token (no container) by default;
   pass boxed for a tinted glass capsule. */

const tones = {
  success: {
    color: 'var(--status-success)',
    bg: 'var(--status-success-100)'
  },
  warning: {
    color: 'var(--status-warning)',
    bg: 'var(--status-warning-100)'
  },
  live: {
    color: 'var(--status-live)',
    bg: 'var(--chroma-rose-100)'
  },
  reserved: {
    color: 'var(--status-reserved)',
    bg: 'var(--chroma-violet-100)'
  },
  info: {
    color: 'var(--status-info)',
    bg: 'var(--chroma-indigo-100)'
  },
  free: {
    color: 'var(--status-success)',
    bg: 'var(--status-success-100)'
  },
  busy: {
    color: 'var(--status-live)',
    bg: 'var(--chroma-rose-100)'
  },
  neutral: {
    color: 'var(--navy-400)',
    bg: 'var(--mist)'
  }
};
function StatusPill({
  children,
  tone = 'neutral',
  boxed = false,
  caps = false,
  pulse = false,
  style,
  ...rest
}) {
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 'var(--fw-medium)',
      letterSpacing: caps ? 'var(--ls-label)' : 'var(--ls-tight)',
      textTransform: caps ? 'uppercase' : 'none',
      color: t.color,
      padding: boxed ? '5px 12px' : 0,
      borderRadius: boxed ? 'var(--radius-pill)' : 0,
      background: boxed ? t.bg : 'transparent',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: t.color,
      flexShrink: 0,
      boxShadow: pulse ? `0 0 0 0 ${t.color}` : 'none',
      animation: pulse ? 'crom-pulse 1.8s var(--ease-out) infinite' : 'none'
    }
  }), children);
}
Object.assign(__ds_scope, { StatusPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatusPill.jsx", error: String((e && e.message) || e) }); }

// components/core/ListRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Andalusian Cromarium — ListRow
   The agenda / schedule row inside a glass card:
   [ time block ] │ dot + tracked eyebrow + serif-ish title + meta
   with an optional trailing icon action or status.
   Compose these inside a GlassCard (they carry their own inner
   divider when stacked). */

function ListRow({
  time,
  day,
  eyebrow,
  eyebrowColor = 'var(--chroma-violet)',
  title,
  meta,
  status,
  // { tone, label } → StatusPill
  trailingIcon = 'arrow-right',
  onTrailing,
  divider = false,
  onClick,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--gap-inline)',
      padding: '16px 4px',
      borderTop: divider ? '1px solid var(--line)' : 'none',
      cursor: onClick ? 'pointer' : 'default',
      ...style
    }
  }, rest), time && /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 58,
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body-lg)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--navy-900)',
      lineHeight: 1.1
    }
  }, time), day && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--navy-400)'
    }
  }, day)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      flex: 1,
      paddingLeft: time ? 16 : 0,
      borderLeft: time ? '1px solid var(--line)' : 'none'
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7,
      marginBottom: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: eyebrowColor
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-caption)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: eyebrowColor
    }
  }, eyebrow)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--navy-900)',
      letterSpacing: 'var(--ls-tight)'
    }
  }, title), (meta || status) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 4,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--navy-400)'
    }
  }, meta && /*#__PURE__*/React.createElement("span", null, meta), meta && status && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--navy-300)'
    }
  }, "\xB7"), status && /*#__PURE__*/React.createElement(__ds_scope.StatusPill, {
    tone: status.tone
  }, status.label))), trailingIcon && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: e => {
      e.stopPropagation();
      onTrailing && onTrailing(e);
    },
    "aria-label": "action",
    style: {
      width: 44,
      height: 44,
      borderRadius: '50%',
      flexShrink: 0,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--glass-fill-strong)',
      border: 'var(--glass-border)',
      boxShadow: 'var(--shadow-xs)',
      color: 'var(--navy-900)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: trailingIcon,
    size: 18
  })));
}
Object.assign(__ds_scope, { ListRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ListRow.jsx", error: String((e && e.message) || e) }); }

// components/core/TabBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Andalusian Cromarium — TabBar
   Fixed bottom navigation on frosted glass. 5 items, each an
   icon + label. The active item lifts to a spectrum color; the
   center "Cromarium" item uses the four-point sparkle glyph.
   `items`: [{ id, icon, label, activeColor? }]. */

function TabBar({
  items = [],
  active,
  onSelect,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      height: 'var(--nav-height)',
      padding: '0 8px calc(env(safe-area-inset-bottom, 0px) + 4px)',
      background: 'rgba(255,255,255,0.72)',
      borderTop: '1px solid rgba(255,255,255,0.8)',
      backdropFilter: 'blur(28px) saturate(1.4)',
      WebkitBackdropFilter: 'blur(28px) saturate(1.4)',
      boxShadow: '0 -8px 24px rgba(14,26,77,0.05)',
      ...style
    }
  }, rest), items.map(it => {
    const on = it.id === active;
    const col = it.activeColor || 'var(--accent)';
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      type: "button",
      onClick: () => onSelect && onSelect(it.id),
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 5,
        padding: '8px 0',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        color: on ? col : 'var(--navy-400)',
        WebkitTapHighlightColor: 'transparent'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 23,
      color: on ? col : 'var(--navy-400)',
      strokeWidth: on ? 2.1 : 1.75
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--fs-caption)',
        fontWeight: on ? 'var(--fw-semibold)' : 'var(--fw-regular)',
        letterSpacing: 'var(--ls-tight)'
      }
    }, it.label));
  }));
}
Object.assign(__ds_scope, { TabBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TabBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/companion-app/AgendaScreen.jsx
try { (() => {
/* Andalusian Cromarium — Companion App · Agenda */
(function () {
  const C = window.AndalusianCromariumDesignSystem_5ce697;
  const {
    GlassCard,
    IconButton,
    ListRow,
    Icon
  } = C;
  const items = [{
    time: '09:30',
    eyebrow: 'Evento',
    color: 'var(--chroma-indigo)',
    tone: 'blue',
    title: 'Apertura oficial del Pabellón',
    meta: 'Escenario principal',
    status: {
      tone: 'success',
      label: 'Confirmado'
    }
  }, {
    time: '10:00',
    eyebrow: 'Networking',
    color: 'var(--chroma-fuchsia)',
    tone: 'pink',
    title: 'Reunión · Lucía Ferrer',
    meta: 'Mesas networking',
    status: {
      tone: 'warning',
      label: 'Pendiente'
    }
  }, {
    time: '11:30',
    eyebrow: 'Showcooking',
    color: 'var(--chroma-orange)',
    tone: 'orange',
    title: 'Showcooking · Atún de almadraba',
    meta: 'Cocina central',
    status: {
      tone: 'reserved',
      label: 'Reservado'
    }
  }, {
    time: '12:00',
    eyebrow: 'Taller',
    color: 'var(--chroma-cyan)',
    tone: 'green',
    title: 'Taller · Mosaico nazarí para peques',
    meta: 'Taller B',
    status: {
      tone: 'reserved',
      label: 'Reservado'
    }
  }];
  function Dropdown({
    label,
    value
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        height: 44,
        padding: '0 16px',
        borderRadius: 'var(--radius-pill)',
        background: 'var(--glass-fill-strong)',
        border: 'var(--glass-border)',
        boxShadow: 'var(--shadow-xs)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: 'var(--navy-400)'
      }
    }, label, " \xB7"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: 600,
        color: 'var(--navy-900)'
      }
    }, value), /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-down",
      size: 16,
      color: "var(--navy-700)"
    }));
  }
  function AgendaScreen() {
    const [tab, setTab] = React.useState('Tu Agenda');
    const tabs = ['Tu Agenda', 'Recomendado', 'Descubre'];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        paddingBottom: 24
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '8px 0 16px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 34,
        fontWeight: 600,
        color: 'var(--navy-900)'
      }
    }, "Agenda"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "bell"
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: "menu"
    }))), /*#__PURE__*/React.createElement(GlassCard, {
      padding: "6px",
      elevation: "sm",
      style: {
        marginBottom: 22,
        borderRadius: 'var(--radius-pill)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex'
      }
    }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
      key: t,
      onClick: () => setTab(t),
      style: {
        flex: 1,
        height: 40,
        border: 'none',
        cursor: 'pointer',
        background: 'transparent',
        fontFamily: 'var(--font-sans)',
        fontSize: 14,
        fontWeight: tab === t ? 600 : 400,
        color: tab === t ? 'var(--navy-900)' : 'var(--navy-400)',
        borderBottom: tab === t ? '2px solid var(--navy-900)' : '2px solid transparent'
      }
    }, t)))), /*#__PURE__*/React.createElement(GlassCard, {
      hero: true,
      tone: "prism",
      elevation: "md",
      style: {
        marginBottom: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        right: -30,
        top: -14,
        width: 165,
        height: 165,
        backgroundImage: 'url(../../assets/imagery/crystal-a-hero-hd.png)',
        backgroundSize: 'cover',
        WebkitMaskImage: 'radial-gradient(60% 60% at 55% 45%, #000 52%, transparent 80%)',
        maskImage: 'radial-gradient(60% 60% at 55% 45%, #000 52%, transparent 80%)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 220
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: 'var(--status-live)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: 'var(--status-live)'
      }
    }, "En directo ahora")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 26,
        fontWeight: 500,
        lineHeight: 1.1,
        color: 'var(--navy-900)'
      }
    }, "Showcase provincias: degustaci\xF3n")), /*#__PURE__*/React.createElement(IconButton, {
      icon: "arrow-right"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement(Dropdown, {
      label: "D\xEDa",
      value: "Todos"
    }), /*#__PURE__*/React.createElement(Dropdown, {
      label: "Tipo",
      value: "Todos"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, items.map((it, i) => /*#__PURE__*/React.createElement(GlassCard, {
      key: i,
      tone: it.tone,
      padding: "4px 18px"
    }, /*#__PURE__*/React.createElement(ListRow, {
      time: it.time,
      day: "Mi\xE9",
      eyebrow: it.eyebrow,
      eyebrowColor: it.color,
      title: it.title,
      meta: it.meta,
      status: it.status,
      trailingIcon: "calendar"
    })))));
  }
  window.AgendaScreen = AgendaScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/companion-app/AgendaScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/companion-app/CromariumScreen.jsx
try { (() => {
/* Andalusian Cromarium — Companion App · Cromarium (color unlock) */
(function () {
  const C = window.AndalusianCromariumDesignSystem_5ce697;
  const {
    GlassCard,
    IconButton,
    Button,
    SectionLabel,
    ProgressRing,
    ColorDot,
    Icon
  } = C;
  const unlocked = [{
    c: 'var(--chroma-cyan)',
    label: 'Cian',
    done: true
  }, {
    c: 'var(--chroma-indigo)',
    label: 'Índigo',
    done: true
  }, {
    c: 'var(--chroma-fuchsia)',
    label: 'Fucsia',
    done: true
  }, {
    c: null,
    label: 'Rojo',
    done: false
  }, {
    c: null,
    label: 'Naranja',
    done: false
  }, {
    c: null,
    label: 'Oro',
    done: false
  }];
  const activations = [{
    name: 'Tierra roja',
    color: 'var(--chroma-rose)',
    done: false
  }, {
    name: 'Sol de poniente',
    color: '#DD8A6E',
    done: false
  }, {
    name: 'Oro andaluz',
    color: 'var(--chroma-gold)',
    done: false
  }, {
    name: 'Mar de luz',
    color: 'var(--chroma-cyan)',
    done: true
  }, {
    name: 'Sur profundo',
    color: 'var(--chroma-indigo)',
    done: true
  }, {
    name: 'Atardecer',
    color: 'var(--chroma-fuchsia)',
    done: true
  }];
  function ActTile({
    a
  }) {
    return /*#__PURE__*/React.createElement(GlassCard, {
      elevation: "sm",
      padding: "14px"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        width: 60,
        height: 60,
        borderRadius: 16,
        background: a.color,
        marginBottom: 12,
        boxShadow: '0 8px 18px -8px rgba(14,26,77,.4)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, a.done && /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 30,
      color: "#fff",
      strokeWidth: 2.4
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 15,
        fontWeight: 600,
        color: 'var(--navy-900)',
        minHeight: 40,
        lineHeight: 1.2
      }
    }, a.name), a.done ? /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 600,
        color: 'var(--status-success)',
        marginTop: 8
      }
    }, "Hecha") : /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        fontSize: 13,
        color: 'var(--navy-400)',
        marginTop: 8
      }
    }, "Ver ", /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 14,
      color: "var(--navy-400)"
    })));
  }
  function CromariumScreen() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        paddingBottom: 24
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '8px 0 20px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 30,
        fontWeight: 600,
        color: 'var(--navy-900)'
      }
    }, "Cromarium"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "bell"
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: "menu"
    }))), /*#__PURE__*/React.createElement(GlassCard, {
      hero: true,
      elevation: "md",
      style: {
        marginBottom: 22,
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        right: -30,
        top: -10,
        width: 170,
        height: 170,
        backgroundImage: 'url(../../assets/imagery/crystal-a-star-hd.png)',
        backgroundSize: 'cover',
        WebkitMaskImage: 'radial-gradient(65% 65% at 50% 45%, #000 55%, transparent 80%)',
        maskImage: 'radial-gradient(65% 65% at 50% 45%, #000 55%, transparent 80%)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 20,
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement(ProgressRing, {
      value: 3,
      max: 6,
      size: 104,
      stroke: 11
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: 'var(--navy-500)',
        marginBottom: 6
      }
    }, "Tu progreso"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 26,
        fontWeight: 500,
        color: 'var(--navy-900)',
        lineHeight: 1.1,
        marginBottom: 14
      }
    }, "Siguiente:", /*#__PURE__*/React.createElement("br", null), "Tierra roja"), /*#__PURE__*/React.createElement(Button, {
      variant: "navy",
      size: "sm",
      iconRight: "arrow-right"
    }, "Continuar")))), /*#__PURE__*/React.createElement(GlassCard, {
      elevation: "sm",
      style: {
        marginBottom: 26
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: 'var(--navy-500)',
        marginBottom: 18
      }
    }, "Colores desbloqueados"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between'
      }
    }, unlocked.map((u, i) => /*#__PURE__*/React.createElement(ColorDot, {
      key: i,
      color: u.c || 'var(--chroma-cyan)',
      state: u.done ? 'checked' : 'locked',
      label: u.label,
      size: 44
    })))), /*#__PURE__*/React.createElement(SectionLabel, null, "Activaciones"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: 12
      }
    }, activations.map((a, i) => /*#__PURE__*/React.createElement(ActTile, {
      key: i,
      a: a
    }))));
  }
  window.CromariumScreen = CromariumScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/companion-app/CromariumScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/companion-app/ExploraScreen.jsx
try { (() => {
/* Andalusian Cromarium — Companion App · Explora (provinces) */
(function () {
  const C = window.AndalusianCromariumDesignSystem_5ce697;
  const {
    GlassCard,
    IconButton,
    Chip,
    Badge,
    Icon
  } = C;
  const provinces = [{
    code: 'AL',
    idx: 'A-01',
    name: 'Almería',
    color: 'var(--chroma-orange)',
    tag: 'Luz & desierto',
    cat: 'Naturaleza',
    bg: 'var(--gradient-wash-orange)'
  }, {
    code: 'CA',
    idx: 'A-02',
    name: 'Cádiz',
    color: 'var(--chroma-cyan)',
    tag: 'Atlántico & brisa',
    cat: 'Experiencias',
    bg: 'var(--gradient-wash-blue)'
  }, {
    code: 'CO',
    idx: 'B-01',
    name: 'Córdoba',
    color: 'var(--chroma-red)',
    tag: 'Califal & patios',
    cat: 'Cultura',
    bg: 'var(--gradient-wash-yellow)'
  }, {
    code: 'GR',
    idx: 'B-02',
    name: 'Granada',
    color: 'var(--chroma-violet)',
    tag: 'Patrimonio & cultura',
    cat: 'Cultura',
    bg: 'var(--gradient-wash-pink)'
  }];
  function ProvinceCard({
    p
  }) {
    return /*#__PURE__*/React.createElement(GlassCard, {
      elevation: "sm",
      padding: 0,
      interactive: true
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        height: 110,
        background: p.bg
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 12,
        left: 12
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      color: p.color
    }, p.code)), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 14,
        right: 14
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      variant: "index"
    }, p.idx))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '14px 16px 16px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 24,
        fontWeight: 600,
        color: 'var(--navy-900)'
      }
    }, p.name), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 40,
        height: 40,
        borderRadius: '50%',
        background: 'var(--glass-fill-strong)',
        border: 'var(--glass-border)',
        boxShadow: 'var(--shadow-xs)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 17,
      color: "var(--navy-900)"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 7,
        margin: '6px 0 8px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: p.color
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: 600,
        color: p.color
      }
    }, p.tag)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--navy-400)'
      }
    }, p.cat)));
  }
  function ExploraScreen() {
    const [filter, setFilter] = React.useState('Todos');
    const filters = ['Todos', 'Cultura', 'Naturaleza', 'Gastronomía'];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        paddingBottom: 24
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '8px 0 18px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 30,
        fontWeight: 600,
        color: 'var(--navy-900)'
      }
    }, "Explora Andaluc\xEDa"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "bell",
      dot: true
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: "menu"
    }))), /*#__PURE__*/React.createElement(GlassCard, {
      hero: true,
      elevation: "md",
      style: {
        marginBottom: 22
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        right: -34,
        top: -6,
        width: 175,
        height: 200,
        backgroundImage: 'url(../../assets/imagery/crystal-a-closeup-hd.png)',
        backgroundSize: 'cover',
        WebkitMaskImage: 'radial-gradient(60% 60% at 55% 40%, #000 52%, transparent 78%)',
        maskImage: 'radial-gradient(60% 60% at 55% 40%, #000 52%, transparent 78%)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        maxWidth: 250
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: 'var(--chroma-indigo)',
        marginBottom: 10
      }
    }, "8 provincias \xB7 8 colores"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 32,
        fontWeight: 500,
        lineHeight: 1.06,
        color: 'var(--navy-900)',
        marginBottom: 12
      }
    }, "Descubre Andaluc\xEDa, color a color"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--navy-400)',
        lineHeight: 1.5
      }
    }, "Cada provincia es un universo crom\xE1tico dentro de Cromarium. Entra en su ficha para agenda, actividades y recursos."))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        overflowX: 'auto',
        marginBottom: 20,
        paddingBottom: 4
      }
    }, filters.map(f => /*#__PURE__*/React.createElement(Chip, {
      key: f,
      active: filter === f,
      onClick: () => setFilter(f)
    }, f))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 14
      }
    }, provinces.map(p => /*#__PURE__*/React.createElement(ProvinceCard, {
      key: p.code,
      p: p
    }))));
  }
  window.ExploraScreen = ExploraScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/companion-app/ExploraScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/companion-app/HomeScreen.jsx
try { (() => {
/* Andalusian Cromarium — Companion App · Home (Inicio)
   Recreation of the attendee home screen. Reads DS components
   from the global namespace; attaches itself to window. */
(function () {
  const C = window.AndalusianCromariumDesignSystem_5ce697;
  const {
    GlassCard,
    IconButton,
    Button,
    SectionLabel,
    SpectrumTrack,
    IconTile,
    ListRow
  } = C;
  function HomeScreen() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        paddingBottom: 24
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '8px 0 20px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 28,
        fontWeight: 600,
        color: 'var(--navy-900)'
      }
    }, "Hola, Javier"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "bell",
      dot: true
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: "menu"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        minHeight: 250,
        marginBottom: 24
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        right: -24,
        top: -6,
        width: 250,
        height: 250,
        backgroundImage: 'url(../../assets/imagery/crystal-a-hero-hd.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'left center',
        WebkitMaskImage: 'radial-gradient(70% 70% at 60% 40%, #000 55%, transparent 78%)',
        maskImage: 'radial-gradient(70% 70% at 60% 40%, #000 55%, transparent 78%)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: 'var(--chroma-indigo)',
        marginBottom: 12
      }
    }, "Cromarium"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 44,
        fontWeight: 500,
        lineHeight: 1.02,
        letterSpacing: '-0.01em',
        color: 'var(--navy-900)',
        maxWidth: 260
      }
    }, "Vive el color de Andaluc\xEDa"), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 22
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "glass",
      iconRight: "arrow-right"
    }, "Continuar")))), /*#__PURE__*/React.createElement(GlassCard, {
      elevation: "sm",
      style: {
        marginBottom: 24
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: 'var(--navy-500)',
        marginBottom: 8
      }
    }, "Progreso"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 40,
        fontWeight: 600,
        color: 'var(--navy-900)',
        lineHeight: 1
      }
    }, "3/6"), /*#__PURE__*/React.createElement(SpectrumTrack, {
      total: 6,
      filled: 3
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--navy-400)',
        marginTop: 8
      }
    }, "Activaciones completadas")), /*#__PURE__*/React.createElement(IconButton, {
      icon: "arrow-right"
    }))), /*#__PURE__*/React.createElement(SectionLabel, null, "Accesos r\xE1pidos"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 14,
        marginBottom: 28
      }
    }, /*#__PURE__*/React.createElement(GlassCard, {
      tone: "blue",
      elevation: "sm",
      padding: "16px"
    }, /*#__PURE__*/React.createElement(IconTile, {
      icon: "star",
      tint: "cyan",
      style: {
        marginBottom: 12
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 15,
        fontWeight: 600,
        color: 'var(--navy-900)'
      }
    }, "Talleres")), /*#__PURE__*/React.createElement(GlassCard, {
      tone: "pink",
      elevation: "sm",
      padding: "16px"
    }, /*#__PURE__*/React.createElement(IconTile, {
      icon: "lock",
      tint: "fuchsia",
      style: {
        marginBottom: 12
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 15,
        fontWeight: 600,
        color: 'var(--navy-900)'
      }
    }, "Showcooking"))), /*#__PURE__*/React.createElement(SectionLabel, null, "Para ti hoy"), /*#__PURE__*/React.createElement(GlassCard, {
      tone: "green",
      padding: "4px 18px",
      style: {
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement(ListRow, {
      time: "09:30",
      day: "Mi\xE9",
      eyebrow: "Evento",
      title: "Apertura oficial del Pabell\xF3n",
      meta: "Escenario principal"
    })), /*#__PURE__*/React.createElement(GlassCard, {
      tone: "orange",
      padding: "4px 18px"
    }, /*#__PURE__*/React.createElement(ListRow, {
      time: "13:00",
      day: "Mi\xE9",
      eyebrow: "Evento",
      eyebrowColor: "var(--chroma-fuchsia)",
      title: "Showcase provincias: degustaci\xF3n",
      meta: "Zona Provincias"
    })));
  }
  window.HomeScreen = HomeScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/companion-app/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/companion-app/NetworkingScreen.jsx
try { (() => {
/* Andalusian Cromarium — Companion App · Networking */
(function () {
  const C = window.AndalusianCromariumDesignSystem_5ce697;
  const {
    GlassCard,
    IconButton,
    Button,
    SectionLabel,
    Avatar,
    Icon
  } = C;
  function NetworkingScreen() {
    const [tab, setTab] = React.useState('Tu Networking');
    return /*#__PURE__*/React.createElement("div", {
      style: {
        paddingBottom: 24
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '8px 0 16px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 30,
        fontWeight: 600,
        color: 'var(--navy-900)'
      }
    }, "Networking"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "bell"
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: "menu"
    }))), /*#__PURE__*/React.createElement(GlassCard, {
      padding: "10px 6px",
      elevation: "sm",
      style: {
        marginBottom: 22
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex'
      }
    }, ['Tu Networking', 'Descubre'].map(t => /*#__PURE__*/React.createElement("button", {
      key: t,
      onClick: () => setTab(t),
      style: {
        flex: 1,
        height: 34,
        border: 'none',
        cursor: 'pointer',
        background: 'transparent',
        fontFamily: 'var(--font-sans)',
        fontSize: 15,
        fontWeight: tab === t ? 600 : 400,
        color: tab === t ? 'var(--navy-900)' : 'var(--navy-400)',
        borderBottom: tab === t ? '2px solid transparent' : '2px solid transparent',
        borderImage: tab === t ? 'var(--gradient-prism) 1' : 'none',
        borderImageSlice: tab === t ? 1 : undefined
      }
    }, t)))), /*#__PURE__*/React.createElement(GlassCard, {
      hero: true,
      tone: "blue",
      elevation: "md",
      style: {
        marginBottom: 24
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        right: -34,
        top: 0,
        width: 185,
        height: 210,
        backgroundImage: 'url(../../assets/imagery/crystal-a-closeup-hd.png)',
        backgroundSize: 'cover',
        WebkitMaskImage: 'radial-gradient(58% 58% at 55% 45%, #000 52%, transparent 80%)',
        maskImage: 'radial-gradient(58% 58% at 55% 45%, #000 52%, transparent 80%)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        maxWidth: 240
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: 'var(--navy-500)',
        marginBottom: 10
      }
    }, "Ya hemos conectado"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 46,
        fontWeight: 500,
        lineHeight: 1,
        color: 'var(--navy-900)',
        marginBottom: 12
      }
    }, "1.240 minutos"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: 'var(--navy-400)',
        lineHeight: 1.5
      }
    }, "entre empresas en el pabell\xF3n. S\xFAmate a la conversaci\xF3n."))), /*#__PURE__*/React.createElement(SectionLabel, null, "Pr\xF3ximas reuniones, charlas y mesas"), /*#__PURE__*/React.createElement(GlassCard, {
      tone: "pink",
      elevation: "sm",
      style: {
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      initial: "L",
      gradient: "linear-gradient(150deg,#F06BD0,#F0913C)"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 21,
        fontWeight: 600,
        color: 'var(--navy-900)'
      }
    }, "Luc\xEDa Ferrer"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--navy-400)'
      }
    }, "Directora \xB7 GreenAndalus"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 600,
        color: 'var(--chroma-violet)',
        marginTop: 2
      }
    }, "Mi\xE9 16:00\u201318:00")), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: 600,
        color: 'var(--chroma-violet)'
      }
    }, "Reuni\xF3n"))), /*#__PURE__*/React.createElement("div", {
      style: {
        borderRadius: 'var(--radius-lg)',
        border: '1.5px dashed var(--navy-200)',
        padding: 22,
        marginBottom: 26,
        background: 'rgba(255,255,255,0.4)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 16,
        alignItems: 'flex-start',
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 52,
        height: 52,
        borderRadius: '50%',
        flexShrink: 0,
        background: 'var(--glass-fill-strong)',
        border: 'var(--glass-border)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "calendar-plus",
      size: 22,
      color: "var(--navy-500)"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 22,
        fontWeight: 600,
        color: 'var(--navy-900)',
        marginBottom: 4
      }
    }, "Tienes un tramo libre"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: 'var(--navy-400)',
        lineHeight: 1.5
      }
    }, "Mi\xE9 16:00\u201318:00. \xBFQuieres solicitar reuniones con empresas afines a tus intereses?"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "prism",
      fullWidth: true
    }, "Solicitar reuni\xF3n"))), /*#__PURE__*/React.createElement(SectionLabel, {
      trailing: "Ver todo \u2192"
    }, "Recomendado para ti"));
  }
  window.NetworkingScreen = NetworkingScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/companion-app/NetworkingScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/organizer-app/AccesosScreen.jsx
try { (() => {
/* Andalusian Cromarium — Organizer App · Accesos (Roles y permisos) */
(function () {
  const C = window.AndalusianCromariumDesignSystem_5ce697;
  const {
    GlassCard,
    IconButton,
    Icon
  } = C;
  const roles = [{
    name: 'Dirección · Turismo de Andalucía',
    meta: '5 funcionalidades · 1 miembro',
    color: 'var(--chroma-indigo)'
  }, {
    name: 'Destinos',
    meta: '5 funcionalidades · 2 miembros',
    color: 'var(--chroma-rose)'
  }, {
    name: 'Business Area',
    meta: '7 funcionalidades · 1 miembro',
    color: 'var(--chroma-cyan)'
  }, {
    name: 'Bar Profesional',
    meta: '5 funcionalidades · 1 miembro',
    color: 'var(--chroma-orange)'
  }, {
    name: 'Salas de Presentación',
    meta: '4 funcionalidades · 1 miembro',
    color: 'var(--chroma-violet)'
  }, {
    name: 'Comunicación / Prensa',
    meta: '4 funcionalidades · 2 miembros',
    color: 'var(--chroma-fuchsia)'
  }];
  function AccesosScreen() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        paddingBottom: 24
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '8px 0 18px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 28,
        fontWeight: 600,
        color: 'var(--navy-900)'
      }
    }, "Roles y permisos"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "bell"
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: "menu"
    }))), /*#__PURE__*/React.createElement(GlassCard, {
      hero: true,
      tone: "blue",
      elevation: "md",
      style: {
        marginBottom: 24
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        right: -30,
        top: 6,
        width: 160,
        height: 170,
        backgroundImage: 'url(../../assets/imagery/crystal-a-closeup-hd.png)',
        backgroundSize: 'cover',
        WebkitMaskImage: 'radial-gradient(58% 58% at 55% 45%, #000 52%, transparent 80%)',
        maskImage: 'radial-gradient(58% 58% at 55% 45%, #000 52%, transparent 80%)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        maxWidth: 250
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: 'var(--navy-500)',
        marginBottom: 10
      }
    }, "Perfil organizaci\xF3n"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 32,
        fontWeight: 500,
        lineHeight: 1.06,
        color: 'var(--navy-900)',
        marginBottom: 12
      }
    }, "Roles y permisos"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--navy-400)',
        lineHeight: 1.5
      }
    }, "Ocho capas de acceso: cada miembro del equipo ve solo las herramientas de su responsabilidad."))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: 'var(--navy-500)'
      }
    }, "Roles del proyecto"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: 'var(--navy-400)'
      }
    }, "8 roles")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, roles.map((r, i) => /*#__PURE__*/React.createElement(GlassCard, {
      key: i,
      elevation: "sm",
      padding: "14px 16px",
      interactive: true
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 44,
        height: 44,
        borderRadius: 'var(--radius-tile)',
        background: 'var(--glass-fill-strong)',
        border: '1px solid rgba(255,255,255,.7)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 14,
        height: 14,
        borderRadius: '50%',
        background: r.color
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 15,
        fontWeight: 600,
        color: 'var(--navy-900)'
      }
    }, r.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--navy-400)',
        marginTop: 2
      }
    }, r.meta)), /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 19,
      color: "var(--navy-400)"
    }))))));
  }
  window.AccesosScreen = AccesosScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/organizer-app/AccesosScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/organizer-app/PanelScreen.jsx
try { (() => {
/* Andalusian Cromarium — Organizer App · Panel (Sostenibilidad dashboard) */
(function () {
  const C = window.AndalusianCromariumDesignSystem_5ce697;
  const {
    GlassCard,
    IconButton,
    IconTile,
    Icon
  } = C;
  const impact = [{
    icon: 'smartphone',
    tint: 'success',
    title: 'Acreditación 100% digital',
    sub: 'Sin tarjeta impresa ni funda de plástico',
    done: true
  }, {
    icon: 'file-text',
    tint: 'cyan',
    title: '7 documentos en digital',
    sub: 'Dosieres y folletos descargados, no impresos',
    done: false
  }, {
    icon: 'qr-code',
    tint: 'violet',
    title: '3 reservas con QR',
    sub: 'Talleres, showcookings y reuniones sin ticket físico',
    done: false
  }];
  function PanelScreen() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        paddingBottom: 24
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '8px 0 18px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 28,
        fontWeight: 600,
        color: 'var(--navy-900)'
      }
    }, "Sostenibilidad"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "bell",
      dot: true
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: "menu"
    }))), /*#__PURE__*/React.createElement(GlassCard, {
      hero: true,
      tone: "green",
      elevation: "md",
      style: {
        marginBottom: 26
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        right: -30,
        top: 6,
        width: 165,
        height: 175,
        backgroundImage: 'url(../../assets/imagery/crystal-a-hero-hd.png)',
        backgroundSize: 'cover',
        WebkitMaskImage: 'radial-gradient(58% 58% at 55% 45%, #000 52%, transparent 80%)',
        maskImage: 'radial-gradient(58% 58% at 55% 45%, #000 52%, transparent 80%)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        maxWidth: 240
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "leaf",
      size: 16,
      color: "var(--status-success)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: 'var(--status-success)'
      }
    }, "Pabell\xF3n responsable")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 30,
        fontWeight: 500,
        lineHeight: 1.08,
        color: 'var(--navy-900)',
        marginBottom: 12
      }
    }, "Un pabell\xF3n que deja huella, no residuos"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--navy-400)',
        lineHeight: 1.5
      }
    }, "Todo lo que haces en la app \u2014acreditaci\xF3n, reservas, documentos\u2014 evita papel e impresiones."))), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: 'var(--navy-500)',
        marginBottom: 14
      }
    }, "Tu impacto en la feria"), /*#__PURE__*/React.createElement(GlassCard, {
      elevation: "sm",
      padding: "6px 18px",
      style: {
        marginBottom: 20
      }
    }, impact.map((it, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        padding: '16px 0',
        borderTop: i ? '1px solid var(--line)' : 'none'
      }
    }, /*#__PURE__*/React.createElement(IconTile, {
      icon: it.icon,
      tint: it.tint
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 15,
        fontWeight: 600,
        color: 'var(--navy-900)'
      }
    }, it.title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--navy-400)',
        marginTop: 2
      }
    }, it.sub)), it.done ? /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 22,
      color: "var(--status-success)",
      strokeWidth: 2.2
    }) : /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-right",
      size: 20,
      color: "var(--navy-300)"
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '16px 18px',
        borderRadius: 'var(--radius-md)',
        background: 'var(--status-success-100)',
        marginBottom: 26
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "leaf",
      size: 20,
      color: "var(--status-success)"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 600,
        color: 'var(--status-success)',
        lineHeight: 1.4
      }
    }, "Impacto estimado: 114 g de papel y 262 g de CO\u2082 evitados")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: 'var(--navy-500)'
      }
    }, "El pabell\xF3n en cifras \xB7 estimado"));
  }
  window.PanelScreen = PanelScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/organizer-app/PanelScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/organizer-app/ZonaBarScreen.jsx
try { (() => {
/* Andalusian Cromarium — Organizer App · Zona bar (gastronomía / mesas) */
(function () {
  const C = window.AndalusianCromariumDesignSystem_5ce697;
  const {
    GlassCard,
    IconButton,
    StatusPill,
    Icon
  } = C;
  const mesas = [{
    n: 1,
    pax: 4,
    tone: 'free',
    label: 'Libre'
  }, {
    n: 2,
    pax: 2,
    tone: 'busy',
    label: 'Ocupada'
  }, {
    n: 3,
    pax: 6,
    tone: 'free',
    label: 'Libre'
  }, {
    n: 4,
    pax: 4,
    tone: 'reserved',
    label: 'Reservada'
  }, {
    n: 5,
    pax: 2,
    tone: 'free',
    label: 'Libre'
  }, {
    n: 6,
    pax: 8,
    tone: 'busy',
    label: 'Ocupada'
  }];
  function ZonaBarScreen() {
    const [slot, setSlot] = React.useState('12:00');
    const slots = ['12:00', '13:00', '14:00', '15:00'];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        paddingBottom: 24
      }
    }, /*#__PURE__*/React.createElement(GlassCard, {
      elevation: "sm",
      padding: "16px 18px",
      style: {
        margin: '8px 0 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 24,
        fontWeight: 600,
        color: 'var(--navy-900)'
      }
    }, "Zona bar \xB7 gastronom\xEDa"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "bell",
      size: "sm",
      dot: true
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: "menu",
      size: "sm"
    }))), /*#__PURE__*/React.createElement(GlassCard, {
      elevation: "sm",
      style: {
        marginBottom: 22
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 14,
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 24,
        height: 24,
        borderRadius: 6,
        border: '2px solid var(--chroma-orange)',
        flexShrink: 0,
        marginTop: 2
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 16,
        fontWeight: 500,
        color: 'var(--navy-900)',
        lineHeight: 1.45
      }
    }, "2 tablets en la entrada de la zona bar \xB7 reserva por d\xEDa y franja"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        marginBottom: 24
      }
    }, slots.map(s => {
      const on = s === slot;
      return /*#__PURE__*/React.createElement("button", {
        key: s,
        onClick: () => setSlot(s),
        style: {
          flex: 1,
          height: 52,
          borderRadius: 'var(--radius-md)',
          cursor: 'pointer',
          fontFamily: 'var(--font-sans)',
          fontSize: 17,
          fontWeight: 600,
          color: on ? 'var(--white)' : 'var(--navy-900)',
          background: on ? 'var(--navy-900)' : 'var(--glass-fill-strong)',
          border: on ? '1px solid transparent' : 'var(--glass-border)',
          boxShadow: on ? 'var(--shadow-sm)' : 'none'
        }
      }, s);
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: 'var(--navy-500)',
        marginBottom: 14
      }
    }, "Mesas \xB7 Franja ", slot), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 14
      }
    }, mesas.map(m => /*#__PURE__*/React.createElement(GlassCard, {
      key: m.n,
      elevation: "sm",
      padding: "16px 18px",
      interactive: true
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 22,
        fontWeight: 600,
        color: 'var(--navy-900)'
      }
    }, "Mesa ", m.n), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: 'var(--navy-400)'
      }
    }, m.pax, " pax")), /*#__PURE__*/React.createElement(StatusPill, {
      tone: m.tone
    }, m.label)))));
  }
  window.ZonaBarScreen = ZonaBarScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/organizer-app/ZonaBarScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.ColorDot = __ds_scope.ColorDot;

__ds_ns.GlassCard = __ds_scope.GlassCard;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.IconTile = __ds_scope.IconTile;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.ListRow = __ds_scope.ListRow;

__ds_ns.ProgressRing = __ds_scope.ProgressRing;

__ds_ns.SectionLabel = __ds_scope.SectionLabel;

__ds_ns.SpectrumTrack = __ds_scope.SpectrumTrack;

__ds_ns.StatusPill = __ds_scope.StatusPill;

__ds_ns.TabBar = __ds_scope.TabBar;

})();
