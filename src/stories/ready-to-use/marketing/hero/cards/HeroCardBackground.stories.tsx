import { ComponentMeta, ComponentStory } from "@storybook/react";
import HeroCardBackground from "../../../../../components/ready-to-use/marketing/sections/hero/cards/HeroCardBackground";
import HeroButton from "../../../../../components/ready-to-use/marketing/sections/hero/components/HeroButton";
import { Button } from "antd";

export default {
  title: "Ready-to-use/Marketing/Sections/Hero/Cards/HeroCardBackground",
  component: HeroCardBackground,
  argTypes: {
    gapClass: {
      type: "string",
      defaultValue: "gap-5",
    },
    padding: {
      type: "boolean",
      defaultValue: false,
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
      defaultValue: undefined,
    },
    overflowHidden: {
      type: "boolean",
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof HeroCardBackground>;

const Template: ComponentStory<typeof HeroCardBackground> = (args) => {
  //   const [formInstance] = useForm();
  return (
    <div className="container mx-auto">
      <HeroCardBackground {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  gapClass: "gap-5",
  backgroundImageUrl: "https://picsum.photos/500/280?grayscale",
  overlay: true,
  overlayClass: "bg-white bg-opacity-70",
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
  gapClass: "gap-5",
  backgroundImageUrl: "https://picsum.photos/500/280?grayscale",
  overlay: true,
  overlayClass: "bg-white bg-opacity-70",
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
