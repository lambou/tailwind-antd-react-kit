import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "antd";
import { HeroButton } from "../../../../../components";
import HeroCardImageBottom from "../../../../../components/ready-to-use/marketing/sections/hero/cards/HeroCardImageBottom";

export default {
  title: "Ready-to-use/Marketing/Sections/Hero/Cards/HeroCardImageBottom",
  component: HeroCardImageBottom,
  argTypes: {
    className: {
      type: "string",
    },
    padding: {
      type: "boolean",
      defaultValue: true,
    },
    image: {
      type: "string",
      defaultValue: undefined,
    },
    imageWidth: {
      type: "string",
      defaultValue: "620px",
    },
    imageHeight: {
      type: "string",
      defaultValue: "380px",
    },
    imageContainerClass: {
      type: "string",
      defaultValue: "shadow-lg",
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
} as ComponentMeta<typeof HeroCardImageBottom>;

const Template: ComponentStory<typeof HeroCardImageBottom> = (args) => {
  return (
    <div className="w-full">
      <HeroCardImageBottom {...args} />
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
      title: "Design is not for everyone",
      body:
        "Sometimes you just have to accept that ready-made components are your best bet. Be shameless, it’s all about making money as fast as possible.",
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
          Design is not for <span className="text-indigo-500">everyone</span>
        </div>
      ),
      body: (
        <div className="text-base leading-relaxed text-gray-600">
          Sometimes you just have to accept that ready-made components are your
          best bet. Be shameless, it’s all about making money as fast as
          possible.
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
  className: "text-white",
  image: "https://picsum.photos/500/280",
  imageOverlayStyle: {
    backgroundColor: "rgba(79, 70, 229)",
    opacity: 0.6,
  },
  style: {
    backgroundImage: "linear-gradient(176deg, #3730a3 70%, #eef2ff calc(70% + 2px))"
  },
  cardProps: {
    className: "z-20",
    padding: true,
    textualBodyProps: {
      preTitle: (
        <div className="text-base uppercase">
          Free ready-to-use UI
        </div>
      ),
      title: (
        <div className="text-3xl tracking-tight font-extrabold sm:text-4xl md:text-5xl">
          Design is not for <span className="text-indigo-500">everyone</span>
        </div>
      ),
      body: (
        <div className="text-base leading-relaxed">
          Sometimes you just have to accept that ready-made components are your
          best bet. Be shameless, it’s all about making money as fast as
          possible.
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
    className: "text-white",
    padding: true,
    textualBodyProps: {
      preTitle: (
        <div className="text-base uppercase text-gray-300">
          Free ready-to-use UI
        </div>
      ),
      title: (
        <div className="text-3xl tracking-tight font-extrabold sm:text-4xl md:text-5xl">
          Design is not for <span className="text-indigo-500">everyone</span>
        </div>
      ),
      body: (
        <div className="text-base leading-relaxed text-gray-300">
          Sometimes you just have to accept that ready-made components are your
          best bet. Be shameless, it’s all about making money as fast as
          possible.
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
  className: "text-white",
  bordered: false,
  image: "https://picsum.photos/500/280",
  imageOverlay: true,
  imageOverlayStyle: {
    backgroundColor: "rgba(79, 70, 229)",
    opacity: 0.6,
  },
  style: {
    backgroundImage: "linear-gradient(176deg, #1f2937 70%, #f9fafb calc(70% + 2px))"
  },
  cardProps: {
    className: "text-white z-20",
    padding: true,
    textualBodyProps: {
      preTitle: (
        <div className="text-base uppercase text-gray-300">
          Free ready-to-use UI
        </div>
      ),
      title: (
        <div className="text-3xl tracking-tight font-extrabold sm:text-4xl md:text-5xl">
          Design is not for <span className="text-indigo-500">everyone</span>
        </div>
      ),
      body: (
        <div className="text-base leading-relaxed text-gray-300">
          Sometimes you just have to accept that ready-made components are your
          best bet. Be shameless, it’s all about making money as fast as
          possible.
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
