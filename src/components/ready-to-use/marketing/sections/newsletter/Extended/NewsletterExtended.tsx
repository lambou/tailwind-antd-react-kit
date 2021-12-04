import { MailOutlined } from "@ant-design/icons";
import clsx from "clsx";
import React from "react";
import { Flex } from "../../../../..";
import FormInput, { FormInputProps } from "../FormInput";

export type NewsletterExtendedProps = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * Newsletter form input
   */
  formInputProps?: FormInputProps;

  /**
   * Gap class
   *
   * @default `gap-5`
   */
  gapClass?: string;

  /**
   * Form items layout
   * @default "horizontal"
   */
  layout?: "vertical" | "horizontal";

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
   * Hide overflow
   * 
   * @default `true`
   */
  overflowHidden?:boolean;

  /**
   * Component texts
   *
   * @default {}
   */
  texts?: {
    /**
     * Newsletter form pre-title
     * 
     * tailwind class: `font-extrabold text-3xl`
     */
    subTitle?: React.ReactNode;

    /**
     * Newsletter form title
     * 
     * tailwind class: `font-extrabold text-3xl`
     */
    title?: React.ReactNode;

    /**
     * Newsletter subscribe button text
     */
    button?: React.ReactNode;

    /**
     * Newsletter body text
     * 
     * tailwind class: `text-xl`
     */
    body?: React.ReactNode;

    /**
     * Form help text
     * 
     * tailwind class: `text-base`
     */
    formHelpText?: React.ReactNode;
  };
};

const NewsletterExtended = React.forwardRef<
  HTMLDivElement,
  NewsletterExtendedProps
>((props, ref) => {
  // explode props
  const {
    formInputProps,
    gapClass,
    layout,
    rounded,
    padding,
    centered,
    bordered,
    shadow,
    icon,
    overflowHidden,
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
        "flex justify-between",
        gapClass,
        typeof bordered === "string" ? bordered : undefined,
        typeof shadow === "string" ? shadow : undefined,
        typeof padding === "string" ? padding : undefined,
        {
          "overflow-hidden": overflowHidden === true,
          "flex-row": layout === "horizontal",
          "flex-col": layout === "vertical",
          "items-center": centered === true,
          "rounded-lg": rounded === true,
          border: bordered === true,
          "shadow-md": shadow === true,
          "px-5 py-8 md:px-10 md:py-12": padding === true,
        },
      ])}
      {...restProps}
    >
      <Flex direction="column" gap={"0.66rem"}>
        {typeof icon === "boolean" ? (
          icon === true ? (
            <MailOutlined className="inline-flex justify-start text-4xl" />
          ) : (
            <></>
          )
        ) : (
          icon
        )}
        <Flex direction="column" className="leading-none tracking-tighter">
          {texts?.title &&
            (function () {
              switch (typeof texts.title) {
                case "string":
                  return (
                    <div className="font-extrabold text-3xl">{texts.title}</div>
                  );

                default:
                  return texts.title;
              }
            })()}
          {texts?.subTitle &&
            (function () {
              switch (typeof texts.subTitle) {
                case "string":
                  return (
                    <div className="font-extrabold text-3xl">
                      {texts.subTitle}
                    </div>
                  );

                default:
                  return texts.subTitle;
              }
            })()}
        </Flex>
        {texts?.body &&
          (function () {
            switch (typeof texts.body) {
              case "string":
                return <div className="text-xl">{texts.body}</div>;

              default:
                return texts.body;
            }
          })()}
      </Flex>
      <Flex direction="column" gap="0.5rem" className="max-w-sm xl:max-w-md">
        {(() => {
          // explode form input props
          const {
            layout: formInputLayout,
            className: formInputClassName,
            ...restFormInputProps
          } = formInputProps ?? {};
          return (
            <FormInput
              layout={formInputLayout ?? "horizontal"}
              className={clsx([formInputClassName, ""])}
              {...restFormInputProps}
            />
          );
        })()}
        {texts?.formHelpText &&
          (function () {
            switch (typeof texts.formHelpText) {
              case "string":
                return <div className="text-base">{texts.formHelpText}</div>;

              default:
                return texts.formHelpText;
            }
          })()}
      </Flex>
    </div>
  );
});

NewsletterExtended.defaultProps = {
  gapClass: "gap-5",
  layout: "horizontal",
  padding: true,
  rounded: false,
  centered: false,
  shadow: false,
  bordered: false,
  icon: false,
  overflowHidden: true,
};

export default NewsletterExtended;
