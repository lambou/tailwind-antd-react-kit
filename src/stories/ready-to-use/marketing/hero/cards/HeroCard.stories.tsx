import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "antd";
import HeroCard from "../../../../../components/ready-to-use/marketing/sections/hero/cards/HeroCard";
import HeroButton from "../../../../../components/ready-to-use/marketing/sections/hero/components/HeroButton";

export default {
  title: "Ready-to-use/Marketing/Sections/Hero/Cards/HeroCard",
  component: HeroCard,
  argTypes: {
    gapClass: {
      type: "string",
      defaultValue: "gap-5",
    },
    padding: {
      type: "boolean",
      defaultValue: false,
    },
    centered: {
      type: "boolean",
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof HeroCard>;

const Template: ComponentStory<typeof HeroCard> = (args) => {
  //   const [formInstance] = useForm();
  return (
    <div className="container mx-auto">
      <HeroCard {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
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
};

export const Custom = Template.bind({});
Custom.args = {
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
        modi atque, aliquam quasi qui fugit, consequatur, laboriosam ad quisquam
        laudantium.
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
};

export const Dark = Template.bind({});
Dark.args = {
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
};
