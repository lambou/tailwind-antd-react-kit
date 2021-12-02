import { Button, ButtonProps, Input, InputProps } from "antd";
import Form, { FormProps, useForm } from "antd/lib/form/Form";
import FormItem from "antd/lib/form/FormItem";
import clsx from "clsx";
import React, { useEffect, useState } from "react";

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
   * @default "gap-2"
   */
  gapClass?: string;

  /**
   * Form items layout
   * @default "horizontal"
   */
  layout?: "vertical" | "horizontal";

  /**
   * Callback after receiving a valid email
   *
   * @default undefined
   */
  onSubmit?: (email: string) => void;

  /**
   * Email input props
   *
   * @default undefined
   */
  inputProps?: InputProps;

  /**
   * Subscribe button props
   *
   * @default undefined
   */
  buttonProps?: ButtonProps;

  /**
   * Button text
   *
   * @default "Subscribe"
   */
  buttonText?: React.ReactNode;

  /**
   * Input name
   *
   * @default "email"
   */
  inputName?: string;

  /**
   * Error message to display when the input is empty.
   * By default it return what antd return
   * @default undefined
   */
  errorMessageText?: string;

  /**
   * Error message to display when the email is not valid
   * By default it return what antd return
   *
   * @default undefined
   */
  invalidEmailMessageText?: string;

  /**
   * Error surrounded. Make error message visible when the background is not white
   *
   * @default false
   */
  errorSurrounded?: boolean;
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
    invalidEmailMessageText,
    errorSurrounded,

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

  // error on email state
  const [errorOnEmail, setErrorOnEmail] = useState<boolean>(false);

  /**
   * Update error state
   */
  const updateErrorState = () => {
    if (inputName) {
      setErrorOnEmail(currentForm.getFieldError(inputName).length !== 0);
    }
  };

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
      onFieldsChange={() => {
        // update email error state
        updateErrorState();
      }}
      onFinishFailed={() => {
        // update email error state
        updateErrorState();
      }}
      onFinish={(values) => {
        // update email error state
        updateErrorState();
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
            "bg-white p-2 rounded-md":
              errorSurrounded === true && errorOnEmail === true,
          },
        ])}
        name={inputName}
        validateFirst
        rules={[
          { required: true, message: errorMessageText },
          { type: "email", message: invalidEmailMessageText },
        ]}
        hasFeedback
      >
        {(() => {
          // explode input props
          const { type, size, className, ...inputPropsRest } = inputProps ?? {};
          return (
            <Input
              className={clsx([className, "flex-auto"])}
              type={type ?? "email"}
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
  inputProps: undefined,
  buttonProps: undefined,
  errorMessageText: undefined,
  invalidEmailMessageText: undefined,
  errorSurrounded: false,
  onSubmit: undefined,
};

export default FormInput;
