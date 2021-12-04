import { ComponentMeta, ComponentStory } from "@storybook/react";
import NewsletterStacked from "../../../../../components/ready-to-use/marketing/sections/newsletter/Stacked/NewsletterStacked";

export default {
  title: "Ready-to-use/Marketing/Sections/Newsletter/Stacked/Default",
  component: NewsletterStacked,
  argTypes: {
    className: {
      type: "string",
    },
    padding: {
      type: "boolean",
      defaultValue: true,
    },
    rounded: {
      type: "boolean",
      defaultValue: true,
    },
    centered: {
      type: "boolean",
      defaultValue: false,
    },
    icon: {
      type: "boolean",
      defaultValue: false,
    },
    shadow: {
      type: "boolean",
      defaultValue: true,
    },
    bordered: {
      type: "boolean",
      defaultValue: true,
    },
    gapClass: {
      defaultValue: "gap-2",
    },
    texts: {},
    overflowHidden: {
      type: "boolean",
      defaultValue: true,
    },
  },
} as ComponentMeta<typeof NewsletterStacked>;

const Template: ComponentStory<typeof NewsletterStacked> = (args) => {
  //   const [formInstance] = useForm();
  return (
    <div className="inline-flex flex-row flex-nowrap">
      <NewsletterStacked {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  className: "bg-white",
  formInputProps: {
    className: "flex-auto",
    buttonProps: {
      className: "w-full",
    },
    inputProps: {
      placeholder: "Enter your email address...",
    },
    errorMessageText: "The email address is required",
  },
  texts: {
    title: "Sign up to our newsletter",
    body: "Get the latest news, updates from us",
  },
};
