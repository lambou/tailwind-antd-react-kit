import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "antd";
import { HeroButton } from "../../../../../components";
import HeroCardImageLeft from "../../../../../components/ready-to-use/marketing/sections/hero/cards/HeroCardImageLeft";

export default {
  title: "Ready-to-use/Marketing/Sections/Hero/Cards/HeroCardImageLeft",
  component: HeroCardImageLeft,
  argTypes: {
    className: {
      type: "string",
    },
    padding: {
      type: "boolean",
      defaultValue: false,
    },
    image: {
      type: "string",
      defaultValue: undefined,
    },
    imageWidth: {
      type: "string",
      defaultValue: "620px",
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
} as ComponentMeta<typeof HeroCardImageLeft>;

const Template: ComponentStory<typeof HeroCardImageLeft> = (args) => {
  return (
    <div className="w-full">
      <HeroCardImageLeft {...args} />
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
  cardProps: {
    padding: true,
    textualBodyProps: {
      preTitle: "Free ready-to-use UI",
      title: "Design for everyone",
      body:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, officiis? Sapiente ut nostrum odio eos veniam. Accusamus deserunt est modi atque, aliquam quasi qui fugit, consequatur, laboriosam ad quisquam laudantium.",
    },
    footer: (
      <>
        <Button type="primary" size="large" className="rounded-md">
          Get started
        </Button>
        <Button type="default" size="large" className="rounded-md">
          Live demo
        </Button>
      </>
    ),
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
  middle: (
    <div className="relative self-stretch z-10">
      <svg
        className="hidden lg:block h-full absolute top-0 bottom-0 w-48 text-white transform -translate-x-1/2"
        fill="currentColor"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <polygon points="50,0 100,0 50,100 0,100"></polygon>
      </svg>
    </div>
  ),
  cardProps: {
    className: "z-20",
    padding: true,
    textualBodyProps: {
      preTitle: "Free ready-to-use UI",
      title: "Design for everyone",
      body:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, officiis? Sapiente ut nostrum odio eos veniam. Accusamus deserunt est modi atque, aliquam quasi qui fugit, consequatur, laboriosam ad quisquam laudantium.",
    },
    footer: (
      <>
        <Button type="primary" size="large" className="rounded-md">
          Get started
        </Button>
        <Button type="default" size="large" className="rounded-md">
          Live demo
        </Button>
      </>
    ),
  },
};

export const Custom = Template.bind({});
Custom.args = {
  className: "bg-white",
  image: "https://picsum.photos/500/280",
  imageOverlayStyle: {
    backgroundColor: "rgba(79, 70, 229)",
    opacity: 0.6,
  },
  cardProps: {
    padding: true,
    textualBodyProps: {
      preTitle: (
        <div className="text-base uppercase text-gray-600">
          Free ready-to-use UI
        </div>
      ),
      title: (
        <div className="text-3xl tracking-tight font-extrabold sm:text-4xl md:text-5xl">
          Design for <span className="text-indigo-500">everyone</span>
        </div>
      ),
      body: (
        <div className="text-base leading-relaxed text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
          officiis? Sapiente ut nostrum odio eos veniam. Accusamus deserunt est
          modi atque, aliquam quasi qui fugit, consequatur, laboriosam ad
          quisquam laudantium.
        </div>
      ),
    },
    footer: (
      <>
        <HeroButton>Get started</HeroButton>
        <HeroButton
          className={"shadow-md"}
          textColorsClass={{
            default: "text-indigo-500",
            hover: "hover:text-indigo-500",
          }}
          bgColorsClass={{
            default: "bg-white",
            hover: "hover:bg-gray-50",
          }}
        >
          Live demo
        </HeroButton>
      </>
    ),
  },
};

export const CustomInclined = Template.bind({});
CustomInclined.args = {
  className: "bg-white",
  image: "https://picsum.photos/500/280",
  imageOverlayStyle: {
    backgroundColor: "rgba(79, 70, 229)",
    opacity: 0.6,
  },
  middle: (
    <div className="relative self-stretch z-10">
      <svg
        className="hidden lg:block h-full absolute top-0 bottom-0 w-48 text-white transform -translate-x-1/2"
        fill="currentColor"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <polygon points="50,0 100,0 50,100 0,100"></polygon>
      </svg>
    </div>
  ),
  cardProps: {
    className: "z-20",
    padding: true,
    textualBodyProps: {
      preTitle: (
        <div className="text-base uppercase text-gray-600">
          Free ready-to-use UI
        </div>
      ),
      title: (
        <div className="text-3xl tracking-tight font-extrabold sm:text-4xl md:text-5xl">
          Design for <span className="text-indigo-500">everyone</span>
        </div>
      ),
      body: (
        <div className="text-base leading-relaxed text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, officiis? Sapiente ut nostrum odio eos veniam. Accusamus deserunt est modi atque, aliquam quasi qui fugit, consequatur, laboriosam ad quisquam laudantium.
        </div>
      ),
    },
    footer: (
      <>
        <HeroButton>Get started</HeroButton>
        <HeroButton
          className={"shadow-md"}
          textColorsClass={{
            default: "text-indigo-500",
            hover: "hover:text-indigo-500",
          }}
          bgColorsClass={{
            default: "bg-white",
            hover: "hover:bg-gray-50",
          }}
        >
          Live demo
        </HeroButton>
      </>
    ),
  },
};

export const Dark = Template.bind({});
Dark.args = {
  className: "bg-gray-800 text-white",
  image: "https://picsum.photos/500/280",
  imageOverlay: true,
  imageOverlayStyle: {
    backgroundColor: "rgba(79, 70, 229)",
    opacity: 0.6,
  },
  cardProps: {
    className: "text-white bg-gray-800",
    padding: true,
    textualBodyProps: {
      preTitle: (
        <div className="text-base uppercase text-gray-300">
          Free ready-to-use UI
        </div>
      ),
      title: (
        <div className="text-3xl tracking-tight font-extrabold sm:text-4xl md:text-5xl">
          Design for <span className="text-indigo-500">everyone</span>
        </div>
      ),
      body: (
        <div className="text-base leading-relaxed text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, officiis? Sapiente ut nostrum odio eos veniam. Accusamus deserunt est modi atque, aliquam quasi qui fugit, consequatur, laboriosam ad quisquam laudantium.
        </div>
      ),
    },
    footer: (
      <>
        <HeroButton>Get started</HeroButton>
        <HeroButton
          textColorsClass={{
            default: "text-indigo-500",
            hover: "hover:text-indigo-500",
          }}
          bgColorsClass={{
            default: "bg-white",
            hover: "hover:bg-gray-50",
          }}
        >
          Live demo
        </HeroButton>
      </>
    ),
  },
};

export const DarkInclined = Template.bind({});
DarkInclined.args = {
  className: "bg-gray-800 text-white",
  bordered: false,
  image: "https://picsum.photos/500/280",
  imageOverlay: true,
  imageOverlayStyle: {
    backgroundColor: "rgba(79, 70, 229)",
    opacity: 0.6,
  },
  middle: (
    <div className="relative self-stretch z-10">
      <svg
        className="hidden lg:block h-full absolute top-0 bottom-0 w-48 text-gray-800 transform -translate-x-1/2"
        fill="currentColor"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <polygon points="50,0 100,0 50,100 0,100"></polygon>
      </svg>
    </div>
  ),
  cardProps: {
    className: "text-white bg-gray-800 z-20",
    padding: true,
    textualBodyProps: {
      preTitle: (
        <div className="text-base uppercase text-gray-300">
          Free ready-to-use UI
        </div>
      ),
      title: (
        <div className="text-3xl tracking-tight font-extrabold sm:text-4xl md:text-5xl">
          Design for <span className="text-indigo-500">everyone</span>
        </div>
      ),
      body: (
        <div className="text-base leading-relaxed text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, officiis? Sapiente ut nostrum odio eos veniam. Accusamus deserunt est modi atque, aliquam quasi qui fugit, consequatur, laboriosam ad quisquam laudantium.
        </div>
      ),
    },
    footer: (
      <>
        <HeroButton>Get started</HeroButton>
        <HeroButton
          textColorsClass={{
            default: "text-indigo-500",
            hover: "hover:text-indigo-500",
          }}
          bgColorsClass={{
            default: "bg-white",
            hover: "hover:bg-gray-50",
          }}
        >
          Live demo
        </HeroButton>
      </>
    ),
  },
};
