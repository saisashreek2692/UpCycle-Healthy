/* eslint-disable react/prop-types */
const sizes = {
  xs: "text-xs font-normal",
  lg: "text-lg font-normal",
  s: "text-sm font-normal",
  "2xl": "text-2xl font-normal md:text-[22px]",
  xl: "text-xl font-normal",
  md: "text-base font-medium",
};

const Text = ({ children, className = "", as, size = "xs", ...restProps }) => {
  const Component = as || "p";
  return (
    <Component
      className={`text-black-900 font-quicksand ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
