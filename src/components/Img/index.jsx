/* eslint-disable react/prop-types */
const Img = ({
  className,
  src = "defaultNoData.png",
  alt = "image",
  ...restProps
}) => {
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      {...restProps}
      loading={"lazy"}
    />
  );
};

export { Img };
