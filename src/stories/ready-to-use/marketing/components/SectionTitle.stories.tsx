import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CodeOutlined } from "@ant-design/icons";
import SectionTitle from "../../../../components/ready-to-use/marketing/sections/components/SectionTitle";
import FeatureIcon from "../../../../components/ready-to-use/marketing/sections/features/FeatureIcon";

export default {
  title: "Ready-to-use/Marketing/Sections/Componens/SectionTitle",
  component: SectionTitle,
  argTypes: {
    className: {
      type: "string",
    },
    size: {
      control: { type: "radio" },
      options: ["large", "medium", "small"],
      defaultValue: "large",
    },
    preTitle: {
      defaultValue: undefined,
    },
    title: {
      defaultValue: undefined,
    },
    centered: {
      type: "boolean",
      defaultValue: true,
    },
    forceDefaultSizing: {
      type: "boolean",
      defaultValue: true,
    },
    icon: {
      defaultValue: undefined,
    },
    gapClass: {
      type: "string",
      defaultValue: "gap-2",
    },
  },
} as ComponentMeta<typeof SectionTitle>;

const Template: ComponentStory<typeof SectionTitle> = (args) => {
  return (
    <div className="w-full">
      <SectionTitle {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  className: "",
  preTitle: "Designed for developers",
  title: "The world’s most powerful and easy-to-use APIs",
  subTitle:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum excepturi nostrum eum est consequuntur mollitia provident iure illum asperiores architecto itaque illo ex distinctio.",
};

export const Custom = Template.bind({});
Custom.args = {
  className: "",
  preTitle: (
    <div className="font-semibold tracking-wide uppercase text-indigo-500">
      Designed for developers
    </div>
  ),
  title: (
    <div className="leading-8 font-extrabold tracking-tight text-gray-900">
      The world’s most powerful and easy-to-use APIs
    </div>
  ),
  subTitle: (
    <div className="max-w-2xl text-gray-500">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum excepturi
      nostrum eum est consequuntur mollitia provident iure illum asperiores
      architecto itaque illo ex distinctio.
    </div>
  ),
};

export const CustomWithIcon = Template.bind({});
CustomWithIcon.args = {
  className: "",
  gapClass: "gap-4",
  icon: (
    <FeatureIcon
      className="bg-indigo-500 text-white"
      icon={<CodeOutlined />}
      size="medium"
      padding={true}
    />
  ),
  preTitle: (
    <div className="font-semibold tracking-wide uppercase text-indigo-500">
      Designed for developers
    </div>
  ),
  title: (
    <div className="leading-8 font-extrabold tracking-tight text-gray-900">
      The world’s most powerful and easy-to-use APIs
    </div>
  ),
  subTitle: (
    <div className="max-w-2xl text-gray-500">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum excepturi
      nostrum eum est consequuntur mollitia provident iure illum asperiores
      architecto itaque illo ex distinctio.
    </div>
  ),
};
