import { MailOutlined } from "@ant-design/icons";
import clsx from "clsx";
import React from "react";
import FormInput, { FormInputProps } from "../FormInput";

export type NewsletterStackedProps = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * Newsletter form input
   */
  formInputProps?: FormInputProps;

  /**
   * Gap class
   *
   * @default `gap-1.5`
   */
  gapClass?: string;

  /**
   * Rounded
   * when the value is `true`, the tailwind class `rounded-lg` will be applied
   */
  rounded?: boolean | string;

  /**
   * Padding
   * when the value is `true`, the tailwind class `p-4` will be applied
   */
  padding?: boolean | string;

  /**
   * Centered items
   * @default false
   */
  centered?: boolean;

  /**
   * Bordered
   * when the value is `true`, the tailwind class `border` will be applied
   *
   * @default false
   */
  bordered?: boolean | string;

  /**
   * Shadow
   * when the value is `true`, the tailwind class `shadow-md` will be applied
   *
   * @default false
   */
  shadow?: boolean | string;

  /**
   * Icon
   *
   * @default `false`
   */
  icon?: boolean | React.ReactNode;

  /**
   * Component texts
   *
   * @default {}
   */
  texts?: {
    /**
     * Newsletter form pre-title
     */
    preTitle?: React.ReactNode;

    /**
     * Newsletter form title
     */
    title?: React.ReactNode;

    /**
     * Newsletter subscribe button text
     */
    button?: React.ReactNode;

    /**
     * Newsletter body text
     */
    body?: React.ReactNode;
  };
};

const NewsletterStacked = React.forwardRef<
  HTMLDivElement,
  NewsletterStackedProps
>((props, ref) => {
  // explode props
  const {
    formInputProps,
    gapClass,
    rounded,
    padding,
    centered,
    bordered,
    shadow,
    icon,
    texts,

    /**
     * Core props
     */
    className,
    ...restProps
  } = props;
  return (
    <div
      ref={ref}
      className={clsx([
        className,
        "flex flex-col overflow-hidden",
        gapClass,
        typeof bordered === "string" ? bordered : undefined,
        typeof shadow === "string" ? shadow : undefined,
        typeof padding === "string" ? padding : undefined,
        {
          "items-center": centered === true,
          "rounded-lg": rounded === true,
          border: bordered === true,
          "shadow-md": shadow === true,
          "p-4": padding === true,
        },
      ])}
      {...restProps}
    >
      {typeof icon === "boolean" ? (
        icon === true ? (
          <MailOutlined className="inline-flex justify-start text-4xl" />
        ) : (
          <></>
        )
      ) : (
        icon
      )}
      {texts?.preTitle &&
        (function () {
          switch (typeof texts.preTitle) {
            case "string":
              return <div className="text-sm uppercase">{texts.preTitle}</div>;

            default:
              return texts.preTitle;
          }
        })()}
      {texts?.title &&
        (function () {
          switch (typeof texts.title) {
            case "string":
              return <div className="font-semibold text-xl">{texts.title}</div>;

            default:
              return texts.title;
          }
        })()}
      {texts?.body &&
        (function () {
          switch (typeof texts.body) {
            case "string":
              return <div className="text-base">{texts.body}</div>;

            default:
              return texts.body;
          }
        })()}
      {(() => {
        // explode form input props
        const {
          layout: formInputLayout,
          className: formInputClassName,
          ...restFormInputProps
        } = formInputProps ?? {};
        return (
          <FormInput
            layout={formInputLayout ?? "vertical"}
            className={clsx([formInputClassName, "w-full"])}
            {...restFormInputProps}
          />
        );
      })()}
    </div>
  );
});

NewsletterStacked.defaultProps = {
  gapClass: "gap-1.5",
  padding: false,
  rounded: false,
  centered: false,
  shadow: false,
  bordered: false,
  icon: false,
};

export default NewsletterStacked;
