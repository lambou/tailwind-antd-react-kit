import { MailOutlined } from "@ant-design/icons";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import NewsletterStackedBackground from "../../../../../components/ready-to-use/marketing/sections/newsletter/Stacked/NewsletterStackedBackground";

export default {
  title: "Ready-to-use/Marketing/Sections/Newsletter/Stacked/Background",
  component: NewsletterStackedBackground,
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
} as ComponentMeta<typeof NewsletterStackedBackground>;

const Template: ComponentStory<typeof NewsletterStackedBackground> = (args) => {
  //   const [formInstance] = useForm();
  return (
    <div className="inline-flex flex-row flex-nowrap">
      <NewsletterStackedBackground {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  className: "",
  overlayStyle: {
    backgroundColor: "#1890ff",
    opacity: 0.45,
  },
  formProps: {
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
    centered: true,
    icon: (
      <MailOutlined
        className="inline-flex justify-start text-4xl"
        style={{ color: "#1890ff" }}
      />
    ),
    texts: {
      preTitle: "Sign up to our newsletter",
      title: "Let's get in touch",
      body: "Get the latest news, updates from us",
    },
  },
};

export const FullColor = Template.bind({});
FullColor.args = {
  className: "text-white",
  style: {
    backgroundColor: "#1890ff",
  },
  formProps: {
    formInputProps: {
      className: "flex-auto",
      buttonProps: {
        className: "w-full",
        type: "default",
      },
      inputProps: {
        placeholder: "Enter your email address...",
      },
      errorMessageText: "The email address is required",
      errorSurrounded: true,
    },
    centered: true,
    icon: <MailOutlined className="inline-flex justify-start text-4xl" />,
    texts: {
      preTitle: (
        <span className="text-sm uppercase">Sign up to our newsletter</span>
      ),
      title: <span className="font-semibold text-2xl">Let's get in touch</span>,
      body: (
        <span className="text-base">Get the latest news, updates from us</span>
      ),
    },
  },
};

export const Overlay = Template.bind({});
Overlay.args = {
  className: "text-white",
  backgroundImageUrl: "https://picsum.photos/500/280",
  overlay: true,
  overlayStyle: {
    backgroundColor: "#1890ff",
    opacity: 0.45,
  },
  formProps: {
    formInputProps: {
      className: "flex-auto",
      buttonProps: {
        className: "w-full",
      },
      inputProps: {
        placeholder: "Enter your email address...",
      },
      errorMessageText: "The email address is required",
      errorSurrounded: true,
    },
    centered: true,
    icon: <MailOutlined className="inline-flex justify-start text-4xl" />,
    texts: {
      preTitle: (
        <span className="text-sm uppercase">Sign up to our newsletter</span>
      ),
      title: <span className="font-semibold text-2xl">Let's get in touch</span>,
      body: (
        <span className="text-base">Get the latest news, updates from us</span>
      ),
    },
  },
};
