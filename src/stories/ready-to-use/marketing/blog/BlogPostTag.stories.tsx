import { ComponentMeta, ComponentStory } from "@storybook/react";
import BlogPostTag from "../../../../components/ready-to-use/marketing/sections/blog/BlogPostTag";

export default {
  title: "Ready-to-use/Marketing/Sections/Blog/BlogPostTag",
  component: BlogPostTag,
  argTypes: {
    className: {
      type: "string",
    },
    padding: {
      type: "boolean",
      defaultValue: false,
    },
    rounded: {
      type: "boolean",
      defaultValue: false,
    },
    bordered: {
      type: "boolean",
      defaultValue: false,
    },
    shadow: {
      type: "boolean",
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof BlogPostTag>;

const Template: ComponentStory<typeof BlogPostTag> = (args) => {
  return (
    <div className="inline-flex gap-2">
      <BlogPostTag {...args}>Dogecoin</BlogPostTag>
      <BlogPostTag {...args}>Cryptocurrency</BlogPostTag>
      <BlogPostTag {...args}>Doge</BlogPostTag>
      <BlogPostTag {...args}>Crypto</BlogPostTag>
      <BlogPostTag {...args}>Binance</BlogPostTag>
      <BlogPostTag {...args}>Dogearmy</BlogPostTag>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  className: "",
};

export const Custom = Template.bind({});
Custom.args = {
  className: "bg-indigo-50 text-indigo-600 text-xs",
  padding: true,
  rounded: true,
};
