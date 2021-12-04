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
    overflowHidden: {
      type: "boolean",
      defaultValue: true,
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
    texts: {
      title: "Sign up to our newsletter",
      body: "Get the latest news, updates from us",
    },
  },
};

export const DefaultInclined = Template.bind({});
DefaultInclined.args = {
  className: "bg-white",
  image: "https://picsum.photos/500/280",
  imageOverlayStyle: {
    backgroundColor: "#1890ff",
    opacity: 0.45,
  },
  // imageWidth: "200px",
  middle: (
    <div className="relative self-stretch z-0">
      <svg
        class="hidden lg:block h-full absolute top-0 bottom-0 w-32 text-white transform -translate-x-1/2"
        fill="currentColor"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <polygon points="50,0 100,0 50,100 0,100"></polygon>
      </svg>
    </div>
  ),
  formProps: {
    className: "z-10",
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

export const Dark = Template.bind({});
Dark.args = {
  className: "text-white bg-gray-800",
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
    texts: {
      title: "Sign up to our newsletter",
      body: (
        <span className="text-base text-gray-400">
          Get the latest news, updates from us
        </span>
      ),
    },
  },
};

export const DarkInclined = Template.bind({});
DarkInclined.args = {
  className: "bg-gray-800 text-white",
  image: "https://picsum.photos/500/280",
  imageOverlayStyle: {
    backgroundColor: "#1890ff",
    opacity: 0.45,
  },
  middle: (
    <div className="relative self-stretch z-0">
      <svg
        class="hidden lg:block h-full absolute top-0 bottom-0 w-32 text-gray-800 transform -translate-x-1/2"
        fill="currentColor"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <polygon points="50,0 100,0 50,100 0,100"></polygon>
      </svg>
    </div>
  ),
  formProps: {
    className: "z-10",
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
      body: (
        <span className="text-base text-gray-400">
          Get the latest news, updates from us
        </span>
      ),
    },
  },
};
