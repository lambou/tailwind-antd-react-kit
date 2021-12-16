import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ManOutlined } from "@ant-design/icons";
import FeatureIcon from "../../../../components/ready-to-use/marketing/sections/features/FeatureIcon";

export default {
  title: "Ready-to-use/Marketing/Sections/Features/FeatureIcon",
  component: FeatureIcon,
  argTypes: {
    className: {
      type: "string",
    },
    size: {
      control: { type: "radio" },
      options: ["large", "medium", "small"],
      defaultValue: "medium",
    },
    rounded: {
      type: "boolean",
      defaultValue: true,
    },
    padding: {
      type: "boolean",
      defaultValue: true,
    },
    icon: {
      defaultValue: undefined,
    },
  },
} as ComponentMeta<typeof FeatureIcon>;

const Template: ComponentStory<typeof FeatureIcon> = (args) => {
  return (
    <div className="w-full">
      <FeatureIcon {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  className: "",
  icon: <ManOutlined />,
};

export const Custom = Template.bind({});
Custom.args = {
  className: "bg-indigo-500 text-white",
  icon: <ManOutlined />,
};
