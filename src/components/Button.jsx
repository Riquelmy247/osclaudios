export default function Button({
  href,
  children,
  variant = "gold",
  className = "",
  target,
  rel,
  ...props
}) {
  const classes = `btn btn-${variant} ${className}`.trim();
  const extraRel = target === "_blank" ? "noopener noreferrer" : rel;

  if (href) {
    return (
      <a href={href} className={classes} target={target} rel={extraRel} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
