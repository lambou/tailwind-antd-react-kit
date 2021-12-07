import { ComponentMeta, ComponentStory } from "@storybook/react";
import HeroButton from "../../../../../components/ready-to-use/marketing/sections/hero/components/HeroButton";

export default {
  title: "Ready-to-use/Marketing/Sections/Hero/Components/HeroButton",
  component: HeroButton,
  argTypes: {
    textColorsClass: {
      defaultValue: undefined,
    },
    bgColorsClass: {
      defaultValue: undefined,
    },
    gapClass: {
      type: "string",
      defaultValue: undefined,
    },
    ignoreDefaultClass: {
      type: "boolean",
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof HeroButton>;

const Template: ComponentStory<typeof HeroButton> = (args) => {
  //   const [formInstance] = useForm();
  return (
    <div className="flex flex-row flex-nowrap">
      <HeroButton {...args}>Get started</HeroButton>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  className: "",
};

export const Light = Template.bind({});
Light.args = {
  className: "shadow-md",
  style: { color: "#1890ff" },
  bgColorsClass: {
    default: "bg-white",
    hover: "hover:bg-gray-50",
  },
};
