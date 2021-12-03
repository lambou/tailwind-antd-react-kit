import { MailOutlined } from "@ant-design/icons";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import NewsletterExtendedBackground from "../../../../../components/ready-to-use/marketing/sections/newsletter/Extended/NewsletterExtendedBackground";

export default {
  title: "Ready-to-use/Marketing/Sections/Newsletter/Extended/Background",
  component: NewsletterExtendedBackground,
  argTypes: {
    className: {
      type: "string",
    },
    gapClass: {
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
    shadow: {
      type: "boolean",
      defaultValue: true,
    },
    bordered: {
      type: "boolean",
      defaultValue: true,
    },
    backgroundImageUrl: {
      type: "string",
      defaultValue: undefined,
    },
    overlay: {
      type: "boolean",
      defaultValue: false,
    },
    overlayClass: {
      type: "string",
      defaultValue: undefined,
    },
    overlayStyle: {
      type: "object",
      defaultValue: undefined,
    },
    overflowHidden: {
      type: "boolean",
      default: true,
    },
  },
} as ComponentMeta<typeof NewsletterExtendedBackground>;

const Template: ComponentStory<typeof NewsletterExtendedBackground> = (
  args
) => {
  return (
    <div className="container mx-auto">
      <NewsletterExtendedBackground {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  className: "text-white",
  backgroundImageUrl: "https://picsum.photos/500/280",
  overlayStyle: {
    backgroundColor: "rgb(0 47 91)",
    opacity: 0.6,
  },
  formProps: {
    formInputProps: {
      className: "flex-auto",
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
    centered: true,
    texts: {
      title: "Let's get in touch",
      subTitle: (
        <div className="font-extrabold text-3xl" style={{ color: "#1890ff" }}>
          Sign up to our newsletter
        </div>
      ),
      body: "Get the latest news, updates from us",
      formHelpText:
        "We care about the protection of your data. Do not forget that.",
    },
  },
};

export const Overlay = Template.bind({});
Overlay.args = {
  className: "text-white",
  backgroundImageUrl: "https://picsum.photos/500/280",
  overlay: true,
  overlayStyle: {
    backgroundColor: "rgb(0 47 91)",
    opacity: 0.6,
  },
  formProps: {
    formInputProps: {
      className: "flex-auto",
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
    centered: true,
    texts: {
      title: "Let's get in touch",
      subTitle: (
        <div className="font-extrabold text-3xl" style={{ color: "#1890ff" }}>
          Sign up to our newsletter
        </div>
      ),
      body: (
        <span className="text-xl text-gray-200">
          Get the latest news, updates from us
        </span>
      ),
      formHelpText: (
        <span className="text-base text-gray-200">
          We care about the protection of your data. Do not forget that
        </span>
      ),
    },
  },
};

export const Centered = Template.bind({});
Centered.args = {
  className: "text-white",
  backgroundImageUrl: "https://picsum.photos/500/280",
  overlay: true,
  overlayStyle: {
    backgroundColor: "rgb(0 47 91)",
    opacity: 0.6,
  },
  formProps: {
    className: "text-center",
    formInputProps: {
      className: "flex-auto",
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
    layout: "vertical",
    centered: true,
    texts: {
      title: "Let's get in touch",
      subTitle: (
        <div className="font-extrabold text-3xl" style={{ color: "#1890ff" }}>
          Sign up to our newsletter
        </div>
      ),
      body: (
        <span className="text-xl text-gray-200">
          Get the latest news, updates from us
        </span>
      ),
      formHelpText: (
        <span className="text-base text-gray-200">
          We care about the protection of your data. Do not forget that
        </span>
      ),
    },
  },
};
