const Button = ({
  className = '',
  href,
  onClick,
  children,
  px = 'px-7',
  outline,
  color = "bg-main",
  hoverColor = "hover:bg-mainHover",
  borderColor = "border-main",
  textColor = 'text-white',
  textHoverColor = 'hover:text-black',
  icon,
  target,
}) => {

  const baseClasses = `${outline ? `border border-2 ${borderColor} ${hoverColor} ` : `${color}  ${hoverColor} ` } ${textColor} ${textHoverColor} relative inline-flex items-center justify-center h-11 rounded-[1rem]   transition-all duration-300 ease-in-out overflow-hidden ${px} ${className}`;
  const contentClasses = `relative z-20 flex items-center justify-center  hover:opacity-100`;

  const renderButton = () => (
    <button className={baseClasses} onClick={onClick}>
      <span className={contentClasses}>
        {icon && <span className="mr-2 flex items-center">{icon}</span>}
        {children}
      </span>
    </button>
  );

  const renderLink = () => (
    <a href={href} target={target} className={baseClasses} onClick={onClick}>
      <span className={contentClasses}>
        {icon && <span className="mr-2 flex items-center">{icon}</span>}
        {children}
      </span>
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
