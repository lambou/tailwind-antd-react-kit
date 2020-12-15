import { Obj } from "@noreajs/common";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import { FlexSpace, FlexSpaceProps } from "../../disposition";

export declare type AvatarsProps = FlexSpaceProps & {
  containerClass?: string;
  avatarClass?: string;
  right?: string;
  suffix?: React.ReactNode;
  prefix?: React.ReactNode;
  itemStyle?: React.CSSProperties;
};

const Avatars: React.FC<AvatarsProps> = React.forwardRef<
  HTMLDivElement,
  AvatarsProps
>((props, ref) => {
  const {
    containerClass,
    avatarClass,
    right,
    itemStyle,
    suffix,
    prefix,
    ...propsRest
  } = props;

  // style explode
  const { marginRight, padding, ...itemStyleRest } = itemStyle ?? {};

  const modifyChild = (child: any, index: number, childrenLength: number) => {
    // explode child props
    const { style, className, ...childPropsRest } = child?.props ?? {};

    // explode direct style
    const { marginRight: directMarginRight, ...directStyleRest } = (style ??
      {}) as React.CSSProperties;

    return React.cloneElement(child, {
      className: clsx([
        "relative inline-flex items-center justify-center h-full",
        "transition duration-500 ease-in-out transform hover:z-10 hover:scale-125",
        avatarClass,
        className,
      ]),
      style: {
        marginRight:
          index !== childrenLength - 1
            ? right ?? "-10px"
            : directMarginRight ?? marginRight,
        ...Obj.merge(itemStyleRest, directStyleRest, "right"),
      },
      ...childPropsRest,
    });
  };

  const safeList = (list: any) => {
    if (!Array.isArray(list)) {
      list = [list];
    }

    const ar = list as any[];

    return ar.filter((item) => !!item);
  };

  return (
    <FlexSpace ref={ref} {...propsRest}>
      <React.Fragment>{prefix}</React.Fragment>
      <span className={clsx([containerClass])}>
        {React.Children.map(safeList(props.children), (child, index) =>
          modifyChild(child, index, safeList(props.children).length)
        )}
      </span>
      <React.Fragment>{suffix}</React.Fragment>
    </FlexSpace>
  );
});

Avatars.propTypes = {
  children: PropTypes.array.isRequired,
};

export default Avatars;
