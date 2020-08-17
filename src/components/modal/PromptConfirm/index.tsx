import React from "react";
import { useForm } from "antd/lib/form/Form";
import confirm from "antd/lib/modal/confirm";
import { Store } from "antd/lib/form/interface";
import { Form } from "antd";
import { ModalFuncProps } from "antd/lib/modal";

export declare type PromptConfirmProps = {
  title: React.ReactNode;
  trigger: React.ReactNode;
  formContent: React.ReactNode;
  confirmProps?: ModalFuncProps;
  initialValues?: any;
  onSubmit?: (values: Store) => boolean | Promise<boolean>;
};

const PromptConfirm: React.FC<PromptConfirmProps> = React.forwardRef<
  HTMLDivElement,
  PromptConfirmProps
>((props, ref) => {
  const [form] = useForm();

  function showConfirm() {
    // explode confirm props
    const {
      title,
      centered,
      maskClosable,
      content,
      onOk,
      ...confirmPropsRest
    } = props.confirmProps ?? {};

    confirm({
      title: title ?? props.title,
      centered: centered ?? true,
      maskClosable: maskClosable ?? false,
      content: content ?? (
        <Form initialValues={props.initialValues} form={form}>
          {props.formContent}
        </Form>
      ),
      onOk: () => {
        return new Promise(async (resolve, reject) => {
          try {
            const values = await form.validateFields();

            // parent submit
            if (props.onSubmit) {
              // submit form data
              const r = await props.onSubmit(values);

              // parent process
              if (onOk) onOk();

              // end promise
              if (r) resolve(r);
              else reject();
            }

            // parent process
            if (onOk) onOk();

            // end promise
            resolve(true);
          } catch (error) {
            reject(error);
          }
        });
      },
      ...confirmPropsRest,
    });
  }
  return React.createElement(
    "div",
    {
      ref: ref,
      onClick: () => {
        showConfirm();
      },
    },
    props.trigger
  );
});

export default PromptConfirm;
