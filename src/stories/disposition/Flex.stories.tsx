import { ComponentMeta, ComponentStory } from "@storybook/react";
import Flex from "../../components/disposition/Flex";

export default {
  title: "Disposition/Flex",
  component: Flex,
  argTypes: {
    inline: {
      defaultValue: false,
      control: { type: "boolean" },
    },
    direction: {
      defaultValue: "row",
      control: { type: "radio" },
      options: ["column", "column-reverse", "row", "row-reverse"],
    },
    wrap: {
      defaultValue: "wrap",
      control: { type: "radio" },
      options: ["nowrap", "wrap", "wrap-reverse"],
    },
    justify: {
      defaultValue: "flex-start",
      control: { type: "radio" },
      options: [
        "center",
        "end",
        "flex-end",
        "flex-start",
        "start",
        "space-around",
        "space-between",
        "space-evenly",
        "stretch",
      ],
    },
    items: {
      defaultValue: "stretch",
      control: { type: "radio" },
      options: [
        "center",
        "end",
        "flex-end",
        "flex-start",
        "self-end",
        "self-start",
        "start",
        "baseline",
        "normal",
        "stretch",
      ],
    },
    content: {
      defaultValue: "normal",
      control: { type: "radio" },
      options: [
        "center",
        "end",
        "flex-end",
        "flex-start",
        "start",
        "space-around",
        "space-between",
        "space-evenly",
        "stretch",
        "baseline",
        "normal",
      ],
    },
    gap: {
      defaultValue: "0.5rem",
    },
  },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => (
  <div>
    <Flex
      className="w-full p-4 bg-gray-100 rounded-md"
      style={{ minHeight: "280px" }}
      {...args}
    >
      <div
        style={{ minHeight: "50px", minWidth: "100px" }}
        className="p-4 bg-blue-600 text-white font-extrabold text-2xl rounded-md flex items-center justify-center"
      >
        1
      </div>
      <div
        style={{ minHeight: "75px", minWidth: "100px" }}
        className="p-4 bg-blue-600 text-white font-extrabold text-2xl rounded-md flex items-center justify-center"
      >
        2
      </div>
      <div
        style={{ minHeight: "100px", minWidth: "100px" }}
        className="p-4 bg-blue-600 text-white font-extrabold text-2xl rounded-md flex items-center justify-center"
      >
        3
      </div>
      <div
        style={{ minHeight: "50px", minWidth: "50px" }}
        className="p-4 bg-blue-600 text-white font-extrabold text-2xl rounded-md flex items-center justify-center"
      >
        4
      </div>
      <div
        style={{ minHeight: "50px", minWidth: "150px" }}
        className="p-4 bg-blue-600 text-white font-extrabold text-2xl rounded-md flex items-center justify-center"
      >
        5
      </div>
    </Flex>
  </div>
);

export const Example = Template.bind({});
Example.args = {
  inline: false,
  direction: "row",
  wrap: "wrap",
  justify: "flex-start",
  items: "stretch",
  content: "normal",
  gap: "0.5rem",
};
