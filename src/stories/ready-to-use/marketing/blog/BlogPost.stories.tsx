import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BlogPostAuthor } from "../../../../components";
import BlogPost from "../../../../components/ready-to-use/marketing/sections/blog/BlogPost";

export default {
  title: "Ready-to-use/Marketing/Sections/Blog/BlogPost",
  component: BlogPost,
  argTypes: {
    className: {
      type: "string",
    },
    size: {
      control: { type: "radio" },
      options: ["large", "medium", "small"],
      defaultValue: "large",
    },
    forceDefaultSizing: {
      type: "boolean",
      defaultValue: true,
    },
    title: {
      defaultValue: undefined,
    },
    description: {
      defaultValue: undefined,
    },
    footer: {
      defaultValue: undefined,
    },
    tags: {
      defaultValue: undefined,
    },
    tagProps: {
      defaultValue: {
        className: "bg-indigo-50 text-indigo-600 text-xs",
        padding: true,
        rounded: true,
      },
    },
    padding: {
      type: "boolean",
      defaultValue: false,
    },
    rounded: {
      type: "boolean",
      defaultValue: true,
    },
    shadow: {
      type: "boolean",
      defaultValue: true,
    },
    bordered: {
      type: "boolean",
      defaultValue: true,
    },
    image: {
      type: "string",
      defaultValue: undefined,
    },
    imageHeight: {
      type: "string",
      defaultValue: "180px",
    },
    imageOverlay: {
      type: "boolean",
      defaultValue: false,
    },
    contentClass: {
      type: "string",
    },
    overflowHidden: {
      type: "boolean",
      defaultValue: true,
    },
  },
} as ComponentMeta<typeof BlogPost>;

const Template: ComponentStory<typeof BlogPost> = (args) => {
  //   const [formInstance] = useForm();
  return (
    <div className="inline-flex flex-row flex-nowrap">
      <BlogPost {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  className: "bg-white max-w-sm",
  image: "https://picsum.photos/500/280",
  imageOverlayStyle: {
    backgroundColor: "#1890ff",
    opacity: 0.45,
  },
  contentClass: "p-4 gap-2",
  tags: ["Article", "Design", "UI", "Tailwind", "React", "Antd"],
  title: "How to design proprely",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis quo et sit, quia dicta nobis explicabo adipisci odio mollitia quas distinctio consequatur ipsa id ex dolorum tempore voluptatem iusto magni.",
  footer: (
    <BlogPostAuthor
      className=""
      profileImage="https://picsum.photos/500/280?grayscale"
      title={<div className="font-semibold text-gray-800">Arnold LAMBOU</div>}
      description={
        <div className="text-gray-400 font-light">Posted on March 27, 1995</div>
      }
    />
  ),
};

export const Custom = Template.bind({});
Custom.args = {
  className: "bg-white max-w-sm",
  image: "https://picsum.photos/500/280",
  imageOverlayStyle: {
    backgroundColor: "#1890ff",
    opacity: 0.45,
  },
  contentClass: "p-5 gap-2",
  tags: ["Article", "Design", "UI", "Tailwind", "React", "Antd"],
  title: (
    <div className="text-gray-800 font-bold">
      How to design proprely
    </div>
  ),
  description: (
    <div className="text-gray-500">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis quo et
      sit, quia dicta nobis explicabo adipisci odio mollitia quas distinctio
      consequatur ipsa id ex dolorum tempore voluptatem iusto magni.
    </div>
  ),
  footer: (
    <BlogPostAuthor
      className=""
      profileImage="https://picsum.photos/500/280?grayscale"
      title={<div className="font-semibold text-gray-800">Arnold LAMBOU</div>}
      description={
        <div className="text-gray-400 font-light">Posted on March 27, 1995</div>
      }
    />
  ),
};
