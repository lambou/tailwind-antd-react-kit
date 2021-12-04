import { ComponentMeta, ComponentStory } from "@storybook/react";
import NewsletterExtended from "../../../../../components/ready-to-use/marketing/sections/newsletter/Extended/NewsletterExtended";

export default {
  title: "Ready-to-use/Marketing/Sections/Newsletter/Extended/Default",
  component: NewsletterExtended,
  argTypes: {
    className: {
      type: "string",
    },
    layout: {
      defaultValue: "horizontal",
      options: ["vertical", "horizontal"],
      control: { type: "radio" },
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
      defaultValue: "gap-5",
    },
    texts: {},
    overflowHidden: {
      type: "boolean",
      defaultValue: true,
    },
  },
} as ComponentMeta<typeof NewsletterExtended>;

const Template: ComponentStory<typeof NewsletterExtended> = (args) => {
  return (
    <div className="container mx-auto">
      <NewsletterExtended {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  className: "bg-white w-full flex-wrap",
  formInputProps: {
    buttonProps: {
      className: "rounded-md",
      size: "large",
    },
    inputProps: {
      className: "rounded-md",
      size: "large",
      placeholder: "Enter your email",
    },
    errorMessageText: "The email address is required",
  },
  texts: {
    title: "Let's stay in touch",
    subTitle: (
      <div className="font-extrabold text-3xl" style={{ color: "#1890ff" }}>
        Sign up to our newsletter
      </div>
    ),
    body: (
      <span className="text-xl text-gray-500">
        Get the latest news, updates from us
      </span>
    ),
    formHelpText: (
      <span className="text-base text-gray-500">
        We care about the protection of your data. Do not forget that.
      </span>
    ),
  },
};

export const Centered = Template.bind({});
Centered.args = {
  className: "bg-white w-full flex-wrap text-center",
  gapClass: "gap-6",
  centered: true,
  layout: "vertical",
  formInputProps: {
    buttonProps: {
      className: "rounded-md",
      size: "large",
    },
    inputProps: {
      className: "rounded-md",
      size: "large",
      placeholder: "Enter your email",
    },
    errorMessageText: "The email address is required",
  },
  texts: {
    title: "Let's stay in touch",
    subTitle: (
      <div className="font-extrabold text-3xl" style={{ color: "#1890ff" }}>
        Sign up to our newsletter
      </div>
    ),
    body: (
      <span className="text-xl text-gray-500">
        Get the latest news, updates from us
      </span>
    ),
  },
};

export const Dark = Template.bind({});
Dark.args = {
  className: "w-full flex-wrap text-white bg-gray-800",
  bordered: false,
  formInputProps: {
    buttonProps: {
      className: "rounded-md",
      size: "large",
    },
    inputProps: {
      className: "rounded-md",
      size: "large",
      placeholder: "Enter your email",
    },
    errorMessageText: "The email address is required",
  },
  texts: {
    title: "Let's stay in touch",
    subTitle: (
      <div className="font-extrabold text-3xl" style={{ color: "#1890ff" }}>
        Sign up to our newsletter
      </div>
    ),
    body: (
      <span className="text-xl text-gray-400">
        Get the latest news, updates from us
      </span>
    ),
    formHelpText: (
      <span className="text-base text-gray-400">
        We care about the protection of your data. Do not forget that.
      </span>
    ),
  },
};
