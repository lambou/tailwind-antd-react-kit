import {
    CodeOutlined,
    CreditCardOutlined
} from "@ant-design/icons";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import FeatureIcon from "../../../../components/ready-to-use/marketing/sections/features/FeatureIcon";
import FeatureItemIconLeft from "../../../../components/ready-to-use/marketing/sections/features/FeatureItemIconLeft";

export default {
  title: "Ready-to-use/Marketing/Sections/Features/FeatureItemIconLeft",
  component: FeatureItemIconLeft,
  argTypes: {
    className: {
      type: "string",
    },
    size: {
      control: { type: "radio" },
      options: ["large", "medium", "small"],
      defaultValue: "large",
    },
    title: {
      defaultValue: undefined,
    },
    description: {
      defaultValue: undefined,
    },
    forceDefaultSizing: {
      type: "boolean",
      defaultValue: true,
    },
    horizontalGapClass: {
      type: "string",
      defaultValue: "gap-3",
    },
    verticalGapClass: {
      type: "string",
      defaultValue: "gap-1",
    },
  },
} as ComponentMeta<typeof FeatureItemIconLeft>;

const Template: ComponentStory<typeof FeatureItemIconLeft> = (args) => {
  return (
    <div className="w-full">
      <FeatureItemIconLeft {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  className: "",
  icon: (
    <FeatureIcon
      className="bg-indigo-500 text-white"
      icon={<CreditCardOutlined />}
      size="medium"
      padding={true}
    />
  ),
  title: "Always know what you pay",
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque voluptates pariatur cupiditate voluptatem dolores nihil. Tenetur, ipsa nam. Ex commodi porro laudantium. Libero, magni amet! Praesentium earum repudiandae dolorum commodi?",
};

export const Custom = Template.bind({});
Custom.args = {
  className: "",
  icon: (
    <FeatureIcon
      className="bg-indigo-500 text-white"
      icon={<CodeOutlined />}
      size="medium"
      padding={true}
    />
  ),
  title: (
    <span className="leading-6 font-medium text-gray-900">
      Start your integration
    </span>
  ),
  description: (
    <div className="text-gray-500 max-w-sm">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque voluptates
      pariatur cupiditate voluptatem dolores nihil. Tenetur, ipsa nam. Ex
      commodi porro laudantium. Libero, magni amet! Praesentium earum
      repudiandae dolorum commodi?
    </div>
  ),
};
