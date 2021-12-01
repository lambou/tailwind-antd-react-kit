import { ComponentMeta, ComponentStory } from "@storybook/react";
import NewsletterStackedImageLeft from "../../../../../components/ready-to-use/marketing/sections/newsletter/Stacked/NewsletterStackedImageLeft";

export default {
  title: "Ready-to-use/Marketing/Sections/Newsletter/Stacked/ImageLeft",
  component: NewsletterStackedImageLeft,
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
    image: {
      type: "string",
      defaultValue: undefined,
    },
    imageWidth: {
      type: "string",
      defaultValue: "150px",
    },
    imageOverlay: {
      type: "boolean",
      defaultValue: false,
    },
    gapClass: {
      type: "string",
    },
  },
} as ComponentMeta<typeof NewsletterStackedImageLeft>;

const Template: ComponentStory<typeof NewsletterStackedImageLeft> = (args) => {
  //   const [formInstance] = useForm();
  return (
    <div className="inline-flex flex-row flex-nowrap">
      <NewsletterStackedImageLeft {...args} />
    </div>
  );
};

export const DefaultNewsletterStackedImageLeft = Template.bind({});
DefaultNewsletterStackedImageLeft.args = {
  className: "bg-white",
  image: "https://picsum.photos/500/280",
  imageOverlayStyle: {
    backgroundColor: "#1890ff",
    opacity: 0.45
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
    texts: {
      title: "Sign up to our newsletter",
      body: "Get the latest news, updates from us",
    },
  },
};
