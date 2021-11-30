import { Button, ButtonProps, FormInstance, Input, InputProps } from "antd";
import Form, { useForm, FormProps } from "antd/lib/form/Form";
import FormItem from "antd/lib/form/FormItem";
import clsx from "clsx";
import React from "react";

export type FormInputProps = Omit<FormProps, "layout"> & {
  key?: React.Key | null;

  /**
   * When the layou is vertival, whether of not you want everything to be centered
   *
   * @default true
   */
  centered?: boolean;

  /**
   * Gap class
   *
   * @default `gap-2`
   */
  gapClass?: string;

  layout?: "vertical" | "horizontal";
  onSubmit?: (email: string) => void;
  inputProps?: InputProps;
  buttonProps?: ButtonProps;

  /**
   * Button text
   *
   * @default `Subscribe`
   */
  buttonText?: React.ReactNode;

  /**
   * Input name
   *
   * @default `email`
   */
  inputName?: string;
  errorMessageText?: string;
};

const FormInput = React.forwardRef<any, FormInputProps>((props, ref) => {
  // explode props
  const {
    centered,
    layout,
    gapClass,
    inputProps,
    buttonProps,
    buttonText,
    errorMessageText,

    /**
     * Native props
     */
    key,
    form,
    onFinish,
    inputName,
    className,
    onSubmit,
    children,
    ...restProps
  } = props;

  // form
  const [subscribeForm] = useForm();

  // initiate the current form
  const currentForm = form ?? subscribeForm;
  return (
    <Form
      key={key}
      ref={ref}
      className={clsx([
        className,
        "flex",
        gapClass,
        {
          "flex-col items-center": layout === "vertical",
          "flex-row items-start": layout === "horizontal",
          "justify-center": centered,
          "justify-start": !centered,
        },
      ])}
      form={currentForm}
      onFinish={(values) => {
        // call given onfinish
        onFinish?.(values);
        // call the submit method
        if (onSubmit && inputName) {
          onSubmit(values[inputName]);
        }
      }}
      {...restProps}
    >
      <FormItem
        className={clsx([
          "flex-auto flex-grow mb-0",
          {
            "w-full": layout === "vertical",
          },
        ])}
        name={inputName}
        rules={[{ required: true, message: errorMessageText }]}
        hasFeedback
      >
        {(() => {
          // explode input props
          const { type, size, className, ...inputPropsRest } = inputProps ?? {};
          return (
            <Input
              className={clsx([className, "flex-auto"])}
              type={type ?? "text"}
              size={size ?? "large"}
              {...inputPropsRest}
            />
          );
        })()}
      </FormItem>
      {(() => {
        // explode button props
        const { type, size, onClick: buttonOnclick, ...restButtonProps } =
          buttonProps ?? {};
        return (
          <Button
            type={type ?? "primary"}
            size={size ?? "large"}
            onClick={(e) => {
              // submit the given form
              currentForm.submit();
              // button onclick
              if (buttonOnclick) {
                buttonOnclick(e);
              }
            }}
            {...restButtonProps}
          >
            {buttonText}
          </Button>
        );
      })()}
    </Form>
  );
});

FormInput.defaultProps = {
  buttonText: "Subscribe",
  inputName: "email",
  gapClass: "gap-2",
  layout: "horizontal",
  centered: true,
};

export default FormInput;
