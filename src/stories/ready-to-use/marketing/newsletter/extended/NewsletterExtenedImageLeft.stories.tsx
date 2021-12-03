import { ComponentMeta, ComponentStory } from "@storybook/react";
import NewsletterExtendedImageLeft from "../../../../../components/ready-to-use/marketing/sections/newsletter/Extended/NewsletterExtendedImageLeft";

export default {
  title: "Ready-to-use/Marketing/Sections/Newsletter/Extended/ImageLeft",
  component: NewsletterExtendedImageLeft,
  argTypes: {
    className: {
      type: "string",
    },
    padding: {
      type: "boolean",
      defaultValue: false,
    },
    rounded: {
      type: "boolean",
      defaultValue: false,
    },
    shadow: {
      type: "boolean",
      defaultValue: false,
    },
    bordered: {
      type: "boolean",
      defaultValue: true,
    },
    image: {
      type: "string",
      defaultValue: undefined,
    },
    imageWidth: {
      type: "string",
      defaultValue: "280px",
    },
    imageOverlay: {
      type: "boolean",
      defaultValue: false,
    },
    gapClass: {
      type: "string",
    },
  },
} as ComponentMeta<typeof NewsletterExtendedImageLeft>;

const Template: ComponentStory<typeof NewsletterExtendedImageLeft> = (args) => {
  return (
    <div className="w-full">
      <NewsletterExtendedImageLeft {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  className: "bg-white",
  image: "https://picsum.photos/500/280",
  imageOverlayStyle: {
    backgroundColor: "#1890ff",
    opacity: 0.45,
  },
  formProps: {
    className: "flex-wrap flex-wrap lg:flex-nowrap",
    formInputProps: {
      className: "",
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
