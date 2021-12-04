import { ComponentMeta, ComponentStory } from "@storybook/react";
import NewsletterExtendedImageRight from "../../../../../components/ready-to-use/marketing/sections/newsletter/Extended/NewsletterExtendedImageRight";

export default {
  title: "Ready-to-use/Marketing/Sections/Newsletter/Extended/ImageRight",
  component: NewsletterExtendedImageRight,
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
    overflowHidden: {
      type: "boolean",
      defaultValue: true,
    },
  },
} as ComponentMeta<typeof NewsletterExtendedImageRight>;

const Template: ComponentStory<typeof NewsletterExtendedImageRight> = (
  args
) => {
  return (
    <div className="w-full">
      <NewsletterExtendedImageRight {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  className: "bg-white",
  image: "https://picsum.photos/500/280",
  imageOverlayStyle: {
    backgroundColor: "#1890ff",
    opacity: 0.6,
  },
  formProps: {
    className: "flex-wrap lg:flex-nowrap",
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

export const DefaultInclined = Template.bind({});
DefaultInclined.args = {
  className: "bg-white",
  image: "https://picsum.photos/500/280",
  imageOverlayStyle: {
    backgroundColor: "#1890ff",
    opacity: 0.6,
  },
  imageWidth: "320px",
  middle: (
    <div className="relative self-stretch z-10">
      <svg
        class="hidden lg:block h-full absolute top-0 bottom-0 w-48 text-white transform -translate-x-1/2"
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
    className: "flex-wrap lg:flex-nowrap",
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

export const Dark = Template.bind({});
Dark.args = {
  className: "bg-gray-800 text-white",
  bordered: false,
  image: "https://picsum.photos/500/280",
  imageOverlay: true,
  imageOverlayStyle: {
    backgroundColor: "#1890ff",
    opacity: 0.6,
  },
  formProps: {
    className: "flex-wrap lg:flex-nowrap",
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
  },
};

export const DarkInclined = Template.bind({});
DarkInclined.args = {
  className: "bg-gray-800 text-white",
  bordered: false,
  image: "https://picsum.photos/500/280",
  imageOverlay: true,
  imageOverlayStyle: {
    backgroundColor: "#1890ff",
    opacity: 0.6,
  },
  imageWidth: "320px",
  middle: (
    <div className="relative self-stretch z-10">
      <svg
        class="hidden lg:block h-full absolute top-0 bottom-0 w-48 text-gray-800 transform -translate-x-1/2"
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
    className: "flex-wrap lg:flex-nowrap z-20",
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
  },
};
