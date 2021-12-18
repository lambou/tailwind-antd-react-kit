import { ComponentMeta, ComponentStory } from "@storybook/react";
import BlogPostAuthor from "../../../../components/ready-to-use/marketing/sections/blog/BlogPostAuthor";

export default {
  title: "Ready-to-use/Marketing/Sections/Blog/BlogPostAuthor",
  component: BlogPostAuthor,
  argTypes: {
    className: {
      type: "string",
    },
    layout: {
      control: { type: "radio" },
      options: ["vertical", "horizontal"],
      defaultValue: "vertical",
    },
    size: {
      control: { type: "radio" },
      options: ["large", "medium", "small"],
      defaultValue: "large",
    },
    profileImage: {
      defaultValue: undefined,
    },
    profileImageShape: {
      control: { type: "radio" },
      options: ["circle", "square"],
      defaultValue: "circle",
    },
    title: {
      defaultValue: undefined,
    },
    description: {
      defaultValue: undefined,
    },
    gapClass: {
      type: "string",
      defaultValue: "gap-2",
    },
  },
} as ComponentMeta<typeof BlogPostAuthor>;

const Template: ComponentStory<typeof BlogPostAuthor> = (args) => {
  return (
    <div className="inline-flex gap-2">
      <BlogPostAuthor {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  className: "",
  profileImage: "https://picsum.photos/500/280?grayscale",
  title: "Arnold LAMBOU",
  description: "Posted on March 27, 1995",
};

export const Custom = Template.bind({});
Custom.args = {
  className: "",
  profileImage: "https://picsum.photos/500/280?grayscale",
  title: <div className="font-semibold text-gray-800">Arnold LAMBOU</div>,
  description: <div className="text-gray-400 font-light">Posted on March 27, 1995</div>,
};
