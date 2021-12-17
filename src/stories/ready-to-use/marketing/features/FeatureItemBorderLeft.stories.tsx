import { CodeOutlined, CreditCardOutlined } from "@ant-design/icons";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import SectionTitle from "../../../../components/ready-to-use/marketing/sections/components/SectionTitle";
import FeatureIcon from "../../../../components/ready-to-use/marketing/sections/features/FeatureIcon";
import FeatureItemBorderLeft from "../../../../components/ready-to-use/marketing/sections/features/FeatureItemBorderLeft";

export default {
  title: "Ready-to-use/Marketing/Sections/Features/FeatureItemBorderLeft",
  component: FeatureItemBorderLeft,
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
    centered: {
      type: "boolean",
      defaultValue: false,
    },
    forceDefaultSizing: {
      type: "boolean",
      defaultValue: true,
    },
    gapClass: {
      type: "string",
      defaultValue: "gap-2",
    },
    borderColorClass: {
      type: "string",
      defaultValue: undefined,
    },
    paddingHorizontalClass: {
      type: "string",
      defaultValue: "px-4",
    },
    paddingVerticalClass: {
      type: "string",
      defaultValue: "py-5",
    },
    before: {
      defaultValue: undefined,
    },
    after: {
      defaultValue: undefined,
    },
  },
} as ComponentMeta<typeof FeatureItemBorderLeft>;

const Template: ComponentStory<typeof FeatureItemBorderLeft> = (args) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <SectionTitle
        preTitle={
          <div className="font-semibold tracking-wide uppercase text-indigo-500">
            Designed for developers
          </div>
        }
        title={
          <div className="leading-8 font-extrabold tracking-tight text-gray-900">
            The world’s most powerful and easy-to-use APIs
          </div>
        }
        subTitle={
          <div className="max-w-2xl text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
            excepturi nostrum eum est consequuntur mollitia provident iure illum
            asperiores architecto itaque illo ex distinctio.
          </div>
        }
        centered
      />
      <div className="w-full flex items-start justify-center gap-2">
        <FeatureItemBorderLeft {...args} />
        <FeatureItemBorderLeft {...args} />
        <FeatureItemBorderLeft {...args} />
      </div>
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
  borderColorClass: "border-indigo-500",
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
