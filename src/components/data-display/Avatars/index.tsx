import { Obj } from "@noreajs/common";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

export type AvatarsProps = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * Avatars's container class
   */
  containerClass?: string;

  /**
   * Avatars's item class
   */
  avatarClass?: string;

  /**
   * Item stack direction
   *
   * @default "left"
   */
  stackDirection?: "left" | "right";

  /**
   * Show entire item when hovered
   * @default false
   */
  hoveredItemOnTop?: boolean;

  /**
   * Space covered by the element on its predecessor
   * @default "-10px"
   */
  right?: string;

  /**
   * Item suffix
   */
  suffix?: React.ReactNode;

  /**
   * Item prefix
   */
  prefix?: React.ReactNode;

  /**
   * Item style
   */
  itemStyle?: React.CSSProperties;

  /**
   * Initial z-index
   * @default 0
   */
  initialZIndex?: number;
};

const Avatars: React.FC<AvatarsProps> = React.forwardRef<
  HTMLDivElement,
  AvatarsProps
>((props, ref) => {
  const {
    containerClass,
    className,
    avatarClass,
    stackDirection,
    hoveredItemOnTop,
    right,
    itemStyle,
    suffix,
    prefix,
    initialZIndex,
    ...propsRest
  } = props;

  // style explode
  const { marginRight, padding, ...itemStyleRest } = itemStyle ?? {};

  const modifyChild = (
    child: any,
    index: number,
    childrenLength: number,
    arround: { childBefore?: any; childAfter?: any }
  ) => {
    // explode child props
    const { style, className, ...childPropsRest } = child?.props ?? {};

    // explode direct style
    const { marginRight: directMarginRight, ...directStyleRest } = (style ??
      {}) as React.CSSProperties;

    // current z-index
    const currentZIndex = `${
      stackDirection === "left"
        ? (initialZIndex ?? 0) + index
        : (initialZIndex ?? 0) + childrenLength - index
    }`;

    // current margin right
    let currentMarginRight = directMarginRight ?? marginRight;

    if (index !== childrenLength - 1) {
      currentMarginRight = right ?? "-10px";
    }

    return React.cloneElement(child, {
      className: clsx([
        "relative inline-flex items-center justify-center h-full",
        "transition duration-500 ease-in-out transform hover:scale-125",
        avatarClass,
        className,
      ]),
      onMouseEnter: (ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (hoveredItemOnTop === true) {
          ev.currentTarget.style.zIndex = `${childrenLength + 1}`;
        }

        ev.currentTarget.style.marginRight = "0px";
        ev.currentTarget.style.transitionDuration = "0.5s";
      },
      onMouseOut: (ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (hoveredItemOnTop === true) {
          ev.currentTarget.style.zIndex = currentZIndex;
        }

        ev.currentTarget.style.marginRight = `${currentMarginRight}`;
        ev.currentTarget.style.transitionDuration = "0.5s";
      },
      style: {
        zIndex: currentZIndex,
        marginRight: currentMarginRight,
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
    <div
      ref={ref}
      className={clsx([className, "flex flex-row items-center gap-2"])}
      {...propsRest}
    >
      <React.Fragment>{prefix}</React.Fragment>
      <span className={clsx([containerClass])}>
        {React.Children.map(safeList(props.children), (child, index) =>
          modifyChild(child, index, safeList(props.children).length, {
            childAfter: safeList(props.children).at(index + 1),
            childBefore: safeList(props.children).at(index - 1),
          })
        )}
      </span>
      <React.Fragment>{suffix}</React.Fragment>
    </div>
  );
});

Avatars.propTypes = {
  children: PropTypes.array.isRequired,
};

Avatars.defaultProps = {
  stackDirection: "left",
  hoveredItemOnTop: false,
  initialZIndex: 0,
};

export default Avatars;
