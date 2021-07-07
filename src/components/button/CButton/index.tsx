import { Button } from "antd";
import { ButtonProps } from "antd/lib/button";
import clsx from "clsx";
import React from "react";

export declare type CButtonProps = ButtonProps & {};

const CButton = React.forwardRef<HTMLElement, CButtonProps>((props, ref) => {
  const { children, className, ...propsRest } = props;
  return (
    <Button ref={ref} className={clsx([className, "inline-flex items-center justify-center"])} {...propsRest}>
      {children}
    </Button>
  );
});

export default CButton;
