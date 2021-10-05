import { ComponentMeta, ComponentStory } from "@storybook/react";
import Flex from "../../components/disposition/Flex";
import FlexItem from "../../components/disposition/FlexItem";

export default {
  title: "Disposition/FlexItem",
  component: FlexItem,
  argTypes: {
    order: {
      defaultValue: 0,
      control: { type: "number" },
    },
    grow: {
      defaultValue: 0,
      control: { type: "number" },
    },
    shrink: {
      defaultValue: 0,
      control: { type: "number" },
    },
    self: {
      defaultValue: "auto",
      control: { type: "radio" },
      options: [
        "center",
        "end",
        "flex-end",
        "flex-start",
        "self-end",
        "self-start",
        "start",
        "auto",
        "baseline",
        "normal",
        "stretch",
      ],
    },
    basis: {
      defaultValue: undefined,
      control: { type: "string" },
    },
  },
} as ComponentMeta<typeof FlexItem>;

const Template: ComponentStory<typeof FlexItem> = (args) => (
  <div>
    <Flex
      className="w-full p-4 bg-gray-100 rounded-md"
      style={{ minHeight: "280px" }}
      {...{
        inline: false,
        direction: "row",
        wrap: "wrap",
        justify: "flex-start",
        items: "stretch",
        content: "normal",
        gap: "0.5rem",
      }}
    >
      <div
        style={{ order: 0, minHeight: "50px", minWidth: "100px" }}
        className="p-4 bg-blue-600 text-white font-extrabold text-2xl rounded-md flex items-center justify-center flex-col"
      >
        <span>1</span>
        <span className="text-base font-thin">order 0</span>
      </div>
      <div
        style={{ order: 1, minHeight: "75px", minWidth: "100px" }}
        className="p-4 bg-blue-600 text-white font-extrabold text-2xl rounded-md flex items-center justify-center flex-col"
      >
        <span>2</span>
        <span className="text-base font-thin">order 1</span>
      </div>
      <div
        style={{ order: 2, minHeight: "100px", minWidth: "100px" }}
        className="p-4 bg-blue-600 text-white font-extrabold text-2xl rounded-md flex items-center justify-center flex-col"
      >
        <span>3</span>
        <span className="text-base font-thin">order 2</span>
      </div>
      <FlexItem
        style={{ minHeight: "50px", minWidth: "50px" }}
        {...args}
        className="p-4 bg-red-400 text-white font-extrabold text-2xl rounded-md flex items-center justify-center flex-col"
      >
        <span>Item</span>
        <span className="text-base font-thin">order {args.order}</span>
      </FlexItem>
      <div
        style={{ order: 4, minHeight: "50px", minWidth: "150px" }}
        className="p-4 bg-blue-600 text-white font-extrabold text-2xl rounded-md flex items-center justify-center flex-col"
      >
        <span>5</span>
        <span className="text-base font-thin">order 4</span>
      </div>
    </Flex>
  </div>
);

export const Example = Template.bind({});
Example.args = {
  order: 3,
  grow: 0,
  shrink: 1,
  self: "auto",
  basis: "auto",
};
