import { ComponentMeta, ComponentStory } from "@storybook/react";
import HeroCardTextualBody from "../../../../../components/ready-to-use/marketing/sections/hero/components/HeroCardTextualBody";

export default {
  title: "Ready-to-use/Marketing/Sections/Hero/Components/HeroCardTextualBody",
  component: HeroCardTextualBody,
  argTypes: {
    centered: {
      type: "boolean",
      defaultValue: true,
    },
    padding: {
      type: "boolean",
      defaultValue: false,
    },
    gapClass: {
      defaultValue: "gap-2",
    },
    preTitle: {
      defaultValue: undefined,
    },
    title: {
      defaultValue: undefined,
    },
    body: {
      defaultValue: undefined,
    },
  },
} as ComponentMeta<typeof HeroCardTextualBody>;

const Template: ComponentStory<typeof HeroCardTextualBody> = (args) => {
  //   const [formInstance] = useForm();
  return (
    <div className="flex flex-row flex-nowrap">
      <HeroCardTextualBody {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  className: "flex-auto",
  preTitle: "Don't say thank you",
  title: "Design is not for everyone",
  body:
    "Sometimes you just have to accept that ready-made components are your best bet. Be shameless, it’s all about making money as fast as possible.",
};

export const Custom = Template.bind({});
Custom.args = {
  className: "flex-auto",
  preTitle: (
    <div className="text-lg uppercase text-gray-600">Don't say thank you</div>
  ),
  title: (
    <div className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
      Design is not for <span style={{ color: "#1890ff" }}>everyone</span>
    </div>
  ),
  body: (
    <div className="text-lg leading-relaxed text-gray-600">
      Sometimes you just have to accept that ready-made components are your best
      bet. Be shameless, it’s all about making money as fast as possible.
    </div>
  ),
};
