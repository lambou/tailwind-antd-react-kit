import { MailOutlined } from "@ant-design/icons";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import NewsletterStackedImageTop from "../../../../../components/ready-to-use/marketing/sections/newsletter/Stacked/NewsletterStackedImageTop";

export default {
  title: "Ready-to-use/Marketing/Sections/Newsletter/Stacked/ImageTop",
  component: NewsletterStackedImageTop,
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
    imageHeight: {
      type: "string",
      defaultValue: "100px",
    },
    imageOverlay: {
      type: "boolean",
      defaultValue: false,
    },
    gapClass: {
      type: "string",
    },
  },
} as ComponentMeta<typeof NewsletterStackedImageTop>;

const Template: ComponentStory<typeof NewsletterStackedImageTop> = (args) => {
  //   const [formInstance] = useForm();
  return (
    <div className="inline-flex flex-row flex-nowrap">
      <NewsletterStackedImageTop {...args} />
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
