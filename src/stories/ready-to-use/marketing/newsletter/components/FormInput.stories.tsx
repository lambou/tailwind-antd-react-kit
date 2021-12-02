import { ComponentMeta, ComponentStory } from "@storybook/react";
import FormInput from "../../../../../components/ready-to-use/marketing/sections/newsletter/FormInput";

export default {
  title: "Ready-to-use/Marketing/Sections/Newsletter/Components/FormInput",
  component: FormInput,
  argTypes: {
    centered: {
      type: "boolean",
      defaultValue: true,
    },
    gapClass: {
      defaultValue: "gap-2",
    },
    layout: {
      defaultValue: "horizontal",
      options: ["vertical", "horizontal"],
      control: { type: "radio" },
    },
    onSubmit: {},
    inputProps: {},
    buttonProps: {},
    buttonText: {
      defaultValue: "Subscribe",
    },
    errorMessageText: {
      type: "string",
      defaultValue: undefined,
    },
    invalidEmailMessageText: {
      type: "string",
      defaultValue: undefined,
    },
    errorSurrounded: {
      type: "boolean",
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof FormInput>;

const FormTemplate: ComponentStory<typeof FormInput> = (args) => {
  //   const [formInstance] = useForm();
  return (
    <div
      className="flex flex-row flex-nowrap flex-auto"
      style={{ width: "380px" }}
    >
      <FormInput {...args} />
    </div>
  );
};

export const DefaultFormInput = FormTemplate.bind({});
DefaultFormInput.args = {
  className: "flex-auto",
  inputProps: {
    placeholder: "Enter your email address...",
  },
  errorMessageText: "The email address is required",
};
