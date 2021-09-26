import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Avatar, Button } from "antd";
import { UserOutlined, PlusOutlined } from "@ant-design/icons";
import Avatars from "../../components/data-display/Avatars";

export default {
  title: "DATA DISPLAY/Avatars",
  component: Avatars,
  argTypes: {
    containerClass: {
      defaultValue: "",
      description: "Avatars's container class",
      type: { name: "string", required: false },
    },
    avatarClass: {
      defaultValue: "",
      description: "Avatars's item class",
      type: { name: "string", required: false },
    },
    stackDirection: {
      defaultValue: "left",
      options: ["left", "right"],
      description: "Item stack direction",
      control: { type: "radio" },
    },
    hoveredItemOnTop: {
      defaultValue: false,
      description: "Show entire item when hovered",
      control: { type: "boolean" },
    },
    right: {
      defaultValue: "-10px",
      type: { name: "string", required: false },
      description: "Space covered by the element on its predecessor",
    },
    suffix: {
      description: "Item suffix",
    },
    prefix: {
      description: "Item prefix",
    },
    itemStyle: {
      description: "Item style",
    },
    initialZIndex: {},
  },
} as ComponentMeta<typeof Avatars>;

const Template: ComponentStory<typeof Avatars> = (args) => (
  <div>
    <Avatars {...args}>
      <Avatar
        size="large"
        className="flex items-center justify-center"
        icon={<UserOutlined />}
        src="https://randomuser.me/api/portraits/men/35.jpg"
      />
      <Avatar
        size="large"
        className="flex items-center justify-center"
        icon={<UserOutlined />}
        src="https://randomuser.me/api/portraits/men/75.jpg"
      />
      <Avatar
        size="large"
        className="flex items-center justify-center"
        icon={<UserOutlined />}
        src="https://randomuser.me/api/portraits/men/80.jpg"
      />
      <Avatar
        size="large"
        className="flex items-center justify-center"
        icon={<UserOutlined />}
        src="https://randomuser.me/api/portraits/men/26.jpg"
      />
    </Avatars>
  </div>
);

export const UsersListCircle = Template.bind({});
UsersListCircle.args = {
  right: "-15px",
  avatarClass: "bg-white rounded-full",
  label: "Users list circle",
};

export const UsersListSquare = Template.bind({});
UsersListSquare.args = {
  right: "-15px",
  avatarClass: "bg-white rounded-md",
  label: "Users list square",
};

export const UsersListWithSuffix = Template.bind({});
UsersListWithSuffix.args = {
  right: "-15px",
  avatarClass: "bg-white rounded-md",
  label: "Users list with suffix",
  suffix: (
    <Button
      type="primary"
      className="inline-flex items-center justify-center rounded-full"
      icon={<PlusOutlined />}
    ></Button>
  ),
};
